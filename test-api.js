import handler from './api/contact.js';

function createMockRes() {
  const res = {
    statusCode: 200,
    headers: {},
    body: null,
    setHeader(name, value) {
      this.headers[name] = value;
    },
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(data) {
      this.body = data;
      return this;
    },
    end() {
      return this;
    }
  };
  return res;
}

async function runTests() {
  console.log('--- STARTING CONTACT API UNIT & VALIDATION TESTS ---');
  let passed = 0;
  let failed = 0;

  // Test 1: GET request rejected
  {
    const req = { method: 'GET', headers: {}, socket: { remoteAddress: '127.0.0.1' } };
    const res = createMockRes();
    await handler(req, res);
    if (res.statusCode === 405 && res.body?.success === false) {
      console.log('✓ Test 1 Passed: GET method rejected with 405');
      passed++;
    } else {
      console.error('✗ Test 1 Failed:', res.statusCode, res.body);
      failed++;
    }
  }

  // Test 2: Invalid / missing name
  {
    const req = {
      method: 'POST',
      headers: {},
      socket: { remoteAddress: '127.0.0.2' },
      body: { name: '', email: 'test@example.com', subject: 'Inquiry', message: 'Hello this is a valid message length' }
    };
    const res = createMockRes();
    await handler(req, res);
    if (res.statusCode === 400 && res.body?.error?.includes('name')) {
      console.log('✓ Test 2 Passed: Missing name caught with 400');
      passed++;
    } else {
      console.error('✗ Test 2 Failed:', res.statusCode, res.body);
      failed++;
    }
  }

  // Test 3: Invalid email format
  {
    const req = {
      method: 'POST',
      headers: {},
      socket: { remoteAddress: '127.0.0.3' },
      body: { name: 'Recruiter', email: 'notanemail', subject: 'Inquiry', message: 'Hello this is a valid message length' }
    };
    const res = createMockRes();
    await handler(req, res);
    if (res.statusCode === 400 && res.body?.error?.includes('email')) {
      console.log('✓ Test 3 Passed: Invalid email rejected with 400');
      passed++;
    } else {
      console.error('✗ Test 3 Failed:', res.statusCode, res.body);
      failed++;
    }
  }

  // Test 4: Honeypot bot protection
  {
    const req = {
      method: 'POST',
      headers: {},
      socket: { remoteAddress: '127.0.0.4' },
      body: {
        name: 'Spam Bot',
        email: 'spammer@bot.com',
        subject: 'Spam title',
        message: 'Spam message long enough',
        honeypot: 'filled_by_bot'
      }
    };
    const res = createMockRes();
    await handler(req, res);
    if (res.statusCode === 200 && res.body?.success === true) {
      console.log('✓ Test 4 Passed: Honeypot caught bot and returned silent 200');
      passed++;
    } else {
      console.error('✗ Test 4 Failed:', res.statusCode, res.body);
      failed++;
    }
  }

  // Test 5: Missing environment key gracefully reports fallback without crashing
  {
    const req = {
      method: 'POST',
      headers: {},
      socket: { remoteAddress: '127.0.0.5' },
      body: {
        name: 'Genuine Recruiter',
        email: 'recruiter@techcorp.com',
        subject: 'Data Analyst Internship Inquiry',
        message: 'Hello Sasikiran, we reviewed your Take U Forward and GitHub profiles and would love to chat!'
      }
    };
    const res = createMockRes();
    await handler(req, res);
    if (res.statusCode === 200 && res.body?.fallback === true) {
      console.log('✓ Test 5 Passed: Graceful fallback reported when RESEND_API_KEY is not yet populated');
      passed++;
    } else {
      console.error('✗ Test 5 Failed:', res.statusCode, res.body);
      failed++;
    }
  }

  // Test 6: Rate Limiting
  {
    let rateLimited = false;
    const ip = '127.0.0.99';
    for (let i = 0; i < 7; i++) {
      const req = {
        method: 'POST',
        headers: {},
        socket: { remoteAddress: ip },
        body: {
          name: `User ${i}`,
          email: `user${i}@example.com`,
          subject: `Subject ${i}`,
          message: `This is a unique message body for test iteration ${i} with sufficient length.`
        }
      };
      const res = createMockRes();
      await handler(req, res);
      if (res.statusCode === 429) {
        rateLimited = true;
        break;
      }
    }
    if (rateLimited) {
      console.log('✓ Test 6 Passed: Rate limiter triggered 429 Too Many Requests after threshold');
      passed++;
    } else {
      console.error('✗ Test 6 Failed: Rate limit not triggered');
      failed++;
    }
  }

  console.log(`\nTEST SUMMARY: ${passed} Passed, ${failed} Failed`);
  if (failed > 0) process.exit(1);
}

runTests();
