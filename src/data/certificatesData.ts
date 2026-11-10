export interface Certificate {
  id: string;
  code: string;
  title: string;
  issuer: string;
  category: 'Data Analytics' | 'Python' | 'SQL' | 'AI and Generative AI' | 'Software Development' | 'Programming Certifications';
  completionDate: string;
  skills: string[];
  credentialId?: string;
  verificationUrl?: string;
  summary: string;
  badgeText: string;
}

export const certificatesData: Certificate[] = [
  {
    id: "sql-case-study-infosys",
    code: "CERT // SQL-01",
    title: "SQL Case Study – SQL Workshop",
    issuer: "Infosys Springboard",
    category: "SQL",
    completionDate: "Verified Credential",
    skills: ["SQL", "Relational Queries", "Multi-Table Joins", "Aggregations", "Subqueries"],
    credentialId: "Infosys Springboard",
    verificationUrl: "",
    summary:
      "Enterprise SQL case study program requiring complex query construction, relational algebra, grouping operations, and analytical data extraction.",
    badgeText: "Enterprise Workshop"
  },
  {
    id: "learning-python-linkedin",
    code: "CERT // PY-01",
    title: "Learning Python",
    issuer: "LinkedIn Learning",
    category: "Python",
    completionDate: "Verified Credential",
    skills: ["Python Core", "Control Flow", "Data Structures", "Functions", "OOP Basics"],
    credentialId: "LinkedIn Learning",
    verificationUrl: "https://www.linkedin.com/in/SasikiranKakumani",
    summary:
      "Foundational certification validating Python programming fundamentals, error handling, modular code structures, and standard library mastery.",
    badgeText: "Verified Curriculum"
  },
  {
    id: "python-libraries-data-science-linkedin",
    code: "CERT // DS-01",
    title: "Python Libraries for Data Science",
    issuer: "LinkedIn Learning",
    category: "Data Analytics",
    completionDate: "Verified Credential",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Exploratory Analysis"],
    credentialId: "LinkedIn Learning",
    verificationUrl: "https://www.linkedin.com/in/SasikiranKakumani",
    summary:
      "Technical curriculum in numerical computing, DataFrame vectorization, statistical distributions, and visual analytics using Python's scientific ecosystem.",
    badgeText: "Specialization"
  },
  {
    id: "foundations-prompt-engineering-aws",
    code: "CERT // AI-01",
    title: "Foundations of Prompt Engineering",
    issuer: "AWS Training & Certification",
    category: "AI and Generative AI",
    completionDate: "Verified Credential",
    skills: ["Prompt Engineering", "Large Language Models", "In-Context Learning", "AI Guardrails"],
    credentialId: "AWS Training",
    verificationUrl: "",
    summary:
      "AWS training validating prompt framing techniques, chain-of-thought orchestration, model latency tuning, and generative AI system integration.",
    badgeText: "Cloud AI"
  },
  {
    id: "genai-powered-data-analytics-tata-forage",
    code: "CERT // AI-02",
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "Tata / Forage",
    category: "AI and Generative AI",
    completionDate: "Verified Credential",
    skills: ["Data Analytics", "Generative AI in Analytics", "Executive Telemetry", "Trend Synthesis"],
    credentialId: "Tata / Forage Simulation",
    verificationUrl: "",
    summary:
      "Industry simulation analyzing enterprise data patterns, evaluating business metrics with AI tools, and presenting executive findings.",
    badgeText: "Job Simulation"
  },
  {
    id: "full-stack-web-development-ai-internshala",
    code: "CERT // DEV-01",
    title: "Full Stack Web Development with AI",
    issuer: "Internshala Trainings",
    category: "Software Development",
    completionDate: "8-Week Comprehensive Training",
    skills: ["Full Stack Engineering", "Frontend & Backend", "Relational Databases", "AI Tooling", "REST APIs"],
    credentialId: "Internshala Trainings",
    verificationUrl: "",
    summary:
      "Eight-week comprehensive development program building full-stack web applications, database integrations, responsive interfaces, and AI tool integrations.",
    badgeText: "8-Week Intensive"
  },
  {
    id: "hackerrank-java-programming",
    code: "CERT // PROG-01",
    title: "Java (Basic / Programming) Certification",
    issuer: "HackerRank",
    category: "Programming Certifications",
    completionDate: "Verified Credential",
    skills: ["Java", "OOP Architecture", "Collections Framework", "Exception Handling"],
    credentialId: "HackerRank Verified",
    verificationUrl: "https://www.hackerrank.com/profile/Sasikiran_24",
    summary:
      "Skill assessment validating core Java language competency, algorithmic thinking, inheritance hierarchy, and object-oriented architecture.",
    badgeText: "Verified Assessment"
  },
  {
    id: "sql-foundations-practical-problem-solving",
    code: "CERT // SQL-02",
    title: "SQL: From Foundations to Practical Problem Solving",
    issuer: "Professional SQL Course",
    category: "SQL",
    completionDate: "Verified Credential",
    skills: ["Schema Design", "Complex Joins", "Window Functions", "Query Performance", "Aggregations"],
    credentialId: "Course Certificate",
    verificationUrl: "",
    summary:
      "Rigorous database querying course covering relational normalization, schema indexing, multi-table aggregations, and query optimization.",
    badgeText: "Query Mastery"
  },
  {
    id: "hackerrank-python-certification",
    code: "CERT // PROG-02",
    title: "Python (Basic / Programming) Certification",
    issuer: "HackerRank",
    category: "Programming Certifications",
    completionDate: "Verified Credential",
    skills: ["Python 3", "Data Structures", "String Processing", "Algorithms", "Comprehensions"],
    credentialId: "HackerRank Verified",
    verificationUrl: "https://www.hackerrank.com/profile/Sasikiran_24",
    summary:
      "Standardized skill assessment validating Pythonic problem solving, algorithmic manipulations, and functional programming capabilities.",
    badgeText: "Verified Assessment"
  }
];
