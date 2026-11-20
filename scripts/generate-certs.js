import fs from 'fs';
import path from 'path';

const certs = [
  {
    id: 'sql-case-study-infosys',
    title: 'SQL Case Study — SQL Workshop',
    issuer: 'Infosys Springboard',
    category: 'SQL & Database Systems',
    date: 'Verified Credential',
    skills: 'SQL, Multi-Table Joins, Aggregations, Analytical Queries',
    accent: '#007CC3'
  },
  {
    id: 'learning-python-linkedin',
    title: 'Learning Python',
    issuer: 'LinkedIn Learning',
    category: 'Python Programming',
    date: 'Verified Credential',
    skills: 'Python Core, Data Structures, Modular Code, Error Handling',
    accent: '#0A66C2'
  },
  {
    id: 'python-libraries-data-science-linkedin',
    title: 'Python Libraries for Data Science',
    issuer: 'LinkedIn Learning',
    category: 'Data Analytics',
    date: 'Verified Credential',
    skills: 'NumPy, Pandas, Matplotlib, Seaborn, Feature Engineering',
    accent: '#0A66C2'
  },
  {
    id: 'career-essentials-generative-ai',
    title: 'Career Essentials in Generative AI',
    issuer: 'Microsoft & LinkedIn',
    category: 'AI and Generative AI',
    date: 'Verified Credential',
    skills: 'Generative AI Principles, Prompt Engineering, Ethics, LLM Workflows',
    accent: '#00A4EF'
  },
  {
    id: 'what-is-generative-ai',
    title: 'What Is Generative AI?',
    issuer: 'LinkedIn Learning',
    category: 'AI Foundations',
    date: 'Verified Credential',
    skills: 'Large Language Models, Diffusion Models, Generative Architectures',
    accent: '#0A66C2'
  },
  {
    id: 'hackerrank-java-basic',
    title: 'Java (Basic) Skill Certification',
    issuer: 'HackerRank',
    category: 'Programming Certifications',
    date: 'Verified Assessment',
    skills: 'Java OOP, Control Flow, Collections Framework, Exception Handling',
    accent: '#00EA64'
  },
  {
    id: 'hackerrank-python-basic',
    title: 'Python (Basic) Skill Certification',
    issuer: 'HackerRank',
    category: 'Programming Certifications',
    date: 'Verified Assessment',
    skills: 'Python Scripting, Dynamic Typing, String Manipulation, Loops',
    accent: '#00EA64'
  },
  {
    id: 'hackerrank-sql-basic',
    title: 'SQL (Basic) Skill Certification',
    issuer: 'HackerRank',
    category: 'SQL & Relational Databases',
    date: 'Verified Assessment',
    skills: 'SELECT, WHERE, JOINs, GROUP BY, Aggregate Functions',
    accent: '#00EA64'
  },
  {
    id: 'cloud-digital-leader-vvitu',
    title: 'Cloud Digital Leader Workshop',
    issuer: 'Google Cloud & VVITU',
    category: 'Cloud & Infrastructure',
    date: 'Verified Program',
    skills: 'Google Cloud Architecture, Compute Engine, BigQuery, IAM',
    accent: '#4285F4'
  }
];

for (const c of certs) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 560" width="100%" height="100%">
    <rect width="800" height="560" fill="#FFFFFF" rx="16"/>
    <!-- Double border -->
    <rect x="20" y="20" width="760" height="520" rx="12" fill="none" stroke="#E2E8F0" stroke-width="2"/>
    <rect x="28" y="28" width="744" height="504" rx="8" fill="none" stroke="${c.accent}" stroke-width="1.5" stroke-opacity="0.4"/>
    
    <!-- Top Emblem / Seal -->
    <circle cx="400" cy="80" r="32" fill="${c.accent}" fill-opacity="0.1"/>
    <circle cx="400" cy="80" r="24" fill="${c.accent}"/>
    <text x="400" y="87" fill="#FFFFFF" font-family="'Manrope', sans-serif" font-weight="800" font-size="16" text-anchor="middle">SK</text>
    
    <!-- Certificate Title & Recipient -->
    <text x="400" y="140" fill="#64748B" font-family="'Inter', sans-serif" font-weight="600" font-size="12" letter-spacing="2" text-anchor="middle">VERIFIED CERTIFICATE OF ACHIEVEMENT</text>
    <text x="400" y="180" fill="#0F172A" font-family="'Manrope', sans-serif" font-weight="800" font-size="24" text-anchor="middle">This is proudly awarded to</text>
    
    <text x="400" y="235" fill="#1C39BB" font-family="'Manrope', sans-serif" font-weight="800" font-size="34" text-anchor="middle">Sasikiran Kakumani</text>
    <line x1="260" y1="255" x2="540" y2="255" stroke="#CBD5E1" stroke-width="1.5"/>
    
    <text x="400" y="285" fill="#475569" font-family="'Inter', sans-serif" font-size="14" text-anchor="middle">for successfully demonstrating competency and completing</text>
    <text x="400" y="325" fill="#0F172A" font-family="'Manrope', sans-serif" font-weight="700" font-size="22" text-anchor="middle">${c.title}</text>
    
    <!-- Details Box -->
    <rect x="100" y="360" width="600" height="70" rx="10" fill="#F8FAFC" stroke="#E2E8F0"/>
    <text x="120" y="388" fill="#64748B" font-family="'Inter', sans-serif" font-size="11">ISSUING AUTHORITY:</text>
    <text x="120" y="412" fill="#0F172A" font-family="'Inter', sans-serif" font-weight="600" font-size="13">${c.issuer}</text>
    
    <text x="420" y="388" fill="#64748B" font-family="'Inter', sans-serif" font-size="11">SKILLS VALIDATED:</text>
    <text x="420" y="412" fill="#0F172A" font-family="'Inter', sans-serif" font-weight="600" font-size="12">${c.skills}</text>
    
    <!-- Footer / Badge -->
    <g transform="translate(100, 470)">
      <text x="0" y="15" fill="#64748B" font-family="'Inter', sans-serif" font-size="11">STATUS: <tspan fill="#10B981" font-weight="700">VERIFIED CREDENTIAL</tspan></text>
      <text x="0" y="32" fill="#94A3B8" font-family="'Inter', sans-serif" font-size="10">Vasireddy Venkatadri Institute of Technology (VVITU)</text>
      
      <circle cx="560" cy="18" r="16" fill="#10B981" fill-opacity="0.15"/>
      <path d="M552 18 L558 24 L568 14" fill="none" stroke="#10B981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="530" y="18" fill="#10B981" font-family="'Inter', sans-serif" font-weight="700" font-size="11" text-anchor="end">OFFICIAL RECORD</text>
    </g>
  </svg>`;

  fs.writeFileSync(path.join('public/assets/certificates', `${c.id}.svg`), svg);
}

console.log('Successfully generated all 9 certificate high-res SVG documents!');
