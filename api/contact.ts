import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

// Simple in-memory rate limiting and duplicate prevention for serverless execution
interface RateLimitEntry {
  count: number;
  firstRequestTime: number;
  lastMessageHash?: string;
  lastSubmissionTime?: number;
}

const rateLimitMap = new Map<string, RateLimitEntry>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;
const DUPLICATE_WINDOW_MS = 90 * 1000; // 90 seconds

function getClientIp(req: VercelRequest): string {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string') {
    return forwarded.split(',')[0].trim();
  }
  if (Array.isArray(forwarded) && forwarded.length > 0) {
    return forwarded[0].trim();
  }
  return req.socket?.remoteAddress || 'unknown-ip';
}

function sanitizeText(input: string): string {
  return input
    .replace(/[<>]/g, '') // remove brackets
    .trim();
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 100;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed. Use POST.'
    });
  }

  try {
    const clientIp = getClientIp(req);
    const now = Date.now();

    // 1. Rate Limiting Check
    const rateData = rateLimitMap.get(clientIp);
    if (rateData) {
      if (now - rateData.firstRequestTime < RATE_LIMIT_WINDOW_MS) {
        if (rateData.count >= MAX_REQUESTS_PER_WINDOW) {
          return res.status(429).json({
            success: false,
            error: 'Too many requests. Please wait a few minutes before submitting another inquiry.'
          });
        }
        rateData.count += 1;
      } else {
        rateLimitMap.set(clientIp, { count: 1, firstRequestTime: now });
      }
    } else {
      rateLimitMap.set(clientIp, { count: 1, firstRequestTime: now });
    }

    const body = req.body || {};
    const { name, email, subject, message, honeypot } = body;

    // 2. Spam Honeypot Protection
    if (honeypot && String(honeypot).trim() !== '') {
      // Silently discard spam bots with 200 OK so bots don't adapt
      return res.status(200).json({
        success: true,
        message: 'Your inquiry has been received.'
      });
    }

    // 3. Server-side Validation
    if (!name || typeof name !== 'string' || name.trim().length < 2 || name.trim().length > 100) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid full name (2–100 characters).'
      });
    }

    if (!email || typeof email !== 'string' || !isValidEmail(email.trim())) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address.'
      });
    }

    if (!subject || typeof subject !== 'string' || subject.trim().length < 2 || subject.trim().length > 150) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid subject line (2–150 characters).'
      });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10 || message.trim().length > 3000) {
      return res.status(400).json({
        success: false,
        error: 'Message must be between 10 and 3,000 characters.'
      });
    }

    const cleanName = sanitizeText(name);
    const cleanEmail = email.trim().toLowerCase();
    const cleanSubject = sanitizeText(subject);
    const cleanMessage = sanitizeText(message);

    // 4. Duplicate Submission Prevention
    const currentEntry = rateLimitMap.get(clientIp);
    const messageFingerprint = `${cleanEmail}:${cleanSubject}:${cleanMessage.slice(0, 50)}`;

    if (
      currentEntry &&
      currentEntry.lastMessageHash === messageFingerprint &&
      currentEntry.lastSubmissionTime &&
      now - currentEntry.lastSubmissionTime < DUPLICATE_WINDOW_MS
    ) {
      return res.status(429).json({
        success: false,
        error: 'Duplicate message detected. Please wait before submitting the exact same message again.'
      });
    }

    if (currentEntry) {
      currentEntry.lastMessageHash = messageFingerprint;
      currentEntry.lastSubmissionTime = now;
    }

    // 5. Email Service Configuration (Resend)
    const apiKey = process.env.RESEND_API_KEY || process.env.EMAIL_API_KEY;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || 'sasikirankakumani@gmail.com';
    const senderEmail = process.env.CONTACT_SENDER_EMAIL || 'Portfolio Contact <onboarding@resend.dev>';

    if (!apiKey) {
      // Configuration fallback mode: tells frontend that credentials are not configured in environment
      return res.status(200).json({
        success: false,
        fallback: true,
        message: 'Email service configuration missing (RESEND_API_KEY not configured). Please reach out via direct email.'
      });
    }

    const resend = new Resend(apiKey);

    // 6. Send Email Notification to Recipient
    const notificationHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #ffffff; color: #111827;">
        <div style="border-bottom: 2px solid #1C39BB; padding-bottom: 12px; margin-bottom: 20px;">
          <h2 style="margin: 0; color: #1C39BB; font-size: 20px;">New Portfolio Contact Inquiry</h2>
          <p style="margin: 4px 0 0 0; color: #6b7280; font-size: 13px;">Received via sasikirankakumani portfolio website</p>
        </div>

        <div style="background-color: #f9fafb; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
          <table style="width: 100%; font-size: 14px; border-collapse: collapse;">
            <tr>
              <td style="padding: 6px 0; color: #6b7280; width: 100px;"><strong>From:</strong></td>
              <td style="padding: 6px 0; color: #111827;">${cleanName}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #6b7280;"><strong>Email:</strong></td>
              <td style="padding: 6px 0;"><a href="mailto:${cleanEmail}" style="color: #1C39BB; text-decoration: underline;">${cleanEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #6b7280;"><strong>Subject:</strong></td>
              <td style="padding: 6px 0; color: #111827;">${cleanSubject}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #6b7280;"><strong>Date:</strong></td>
              <td style="padding: 6px 0; color: #6b7280; font-size: 12px;">${new Date().toUTCString()}</td>
            </tr>
          </table>
        </div>

        <div style="margin-bottom: 24px;">
          <h3 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #6b7280; margin-bottom: 8px;">Message Content</h3>
          <div style="background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; font-size: 14px; line-height: 1.6; color: #1f2937; white-space: pre-wrap;">
${cleanMessage}
          </div>
        </div>

        <div style="border-top: 1px solid #e5e7eb; padding-top: 16px; font-size: 12px; color: #9ca3af; text-align: center;">
          <p style="margin: 0;">Hit Reply directly to respond to ${cleanName} (&lt;${cleanEmail}&gt;)</p>
        </div>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: senderEmail,
      to: receiverEmail,
      replyTo: cleanEmail,
      subject: `[Portfolio Inquiry] ${cleanSubject} - ${cleanName}`,
      html: notificationHtml,
      text: `New Portfolio Inquiry\n\nFrom: ${cleanName} (${cleanEmail})\nSubject: ${cleanSubject}\nDate: ${new Date().toISOString()}\n\nMessage:\n${cleanMessage}`
    });

    if (error) {
      console.error('[Resend Error]', error);
      return res.status(502).json({
        success: false,
        error: error.message || 'Failed to deliver message via email provider.',
        fallback: true
      });
    }

    // 7. Optional Sender Acknowledgment Email (best effort, non-blocking)
    try {
      await resend.emails.send({
        from: senderEmail,
        to: cleanEmail,
        subject: `Message Received: ${cleanSubject} — Sasikiran Kakumani`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #ffffff; color: #111827;">
            <h3 style="color: #1C39BB; margin-top: 0;">Hello ${cleanName},</h3>
            <p style="font-size: 14px; line-height: 1.6; color: #374151;">
              Thank you for reaching out through my portfolio website. I have received your message regarding <strong>"${cleanSubject}"</strong> and will review it promptly.
            </p>
            <div style="margin: 20px 0; padding: 12px; background-color: #f9fafb; border-left: 3px solid #1C39BB; border-radius: 4px; font-size: 13px; color: #4b5563;">
              <em>"${cleanMessage.length > 140 ? cleanMessage.slice(0, 140) + '...' : cleanMessage}"</em>
            </div>
            <p style="font-size: 14px; line-height: 1.6; color: #374151;">
              Best regards,<br />
              <strong>Sasikiran Kakumani</strong><br />
              <span style="font-size: 12px; color: #6b7280;">B.Tech CSE (AI & ML) &bull; VVITU</span>
            </p>
          </div>
        `,
        text: `Hello ${cleanName},\n\nThank you for reaching out through my portfolio. I have received your message regarding "${cleanSubject}" and will get back to you promptly.\n\nBest regards,\nSasikiran Kakumani\nB.Tech CSE (AI & ML) - VVITU`
      });
    } catch (ackError) {
      // Don't fail the primary request if only sender ack fails
      console.warn('[Acknowledgment Notice]', ackError);
    }

    return res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully! I will respond promptly.',
      id: data?.id
    });
  } catch (err: unknown) {
    console.error('[API Internal Error]', err);
    const errorMessage = err instanceof Error ? err.message : 'Internal server error';
    return res.status(500).json({
      success: false,
      error: errorMessage,
      fallback: true
    });
  }
}
