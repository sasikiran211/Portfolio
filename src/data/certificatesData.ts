export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  category: 'Data & SQL' | 'Python & AI' | 'Programming & Web';
  completionDate?: string;
  skills: string[];
  credentialId?: string;
  verificationUrl?: string;
  summary: string;
  badgeText: string;
}

export const certificatesData: Certificate[] = [
  {
    id: "sql-case-study-infosys",
    title: "SQL Case Study – SQL Workshop",
    issuer: "Infosys Springboard",
    category: "Data & SQL",
    completionDate: "Verified Credential",
    skills: ["SQL", "Relational Database Queries", "Data Aggregation", "Subqueries", "JOIN Operations"],
    credentialId: "Infosys Springboard",
    verificationUrl: "",
    summary:
      "Hands-on workshop focused on real-world case studies requiring complex SQL queries, multi-table joins, analytical groupings, and data extraction patterns.",
    badgeText: "Enterprise Workshop"
  },
  {
    id: "learning-python-linkedin",
    title: "Learning Python",
    issuer: "LinkedIn Learning",
    category: "Python & AI",
    completionDate: "Verified Credential",
    skills: ["Python Fundamentals", "Control Flow", "Functions & Modules", "Data Structures", "Error Handling"],
    credentialId: "LinkedIn Learning",
    verificationUrl: "https://www.linkedin.com/in/SasikiranKakumani",
    summary:
      "Comprehensive grounding in core Python syntax, object-oriented concepts, functional paradigms, standard libraries, and clean coding conventions.",
    badgeText: "Language Certification"
  },
  {
    id: "python-libraries-data-science-linkedin",
    title: "Python Libraries for Data Science",
    issuer: "LinkedIn Learning",
    category: "Python & AI",
    completionDate: "Verified Credential",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Exploratory Data Analysis"],
    credentialId: "LinkedIn Learning",
    verificationUrl: "https://www.linkedin.com/in/SasikiranKakumani",
    summary:
      "Practical mastery of industry-standard Python libraries for loading, inspecting, transforming, and visualizing large numerical and tabular datasets.",
    badgeText: "Data Science Specialization"
  },
  {
    id: "foundations-prompt-engineering-aws",
    title: "Foundations of Prompt Engineering",
    issuer: "AWS Training & Certification",
    category: "Python & AI",
    completionDate: "Verified Credential",
    skills: ["Prompt Engineering", "Large Language Models", "Context In-Context Learning", "Generative AI Guardrails"],
    credentialId: "AWS Training",
    verificationUrl: "",
    summary:
      "Architectural fundamentals of Generative AI, prompt framing, few-shot prompting techniques, chain-of-thought patterns, and model behavior steering.",
    badgeText: "Cloud & AI Training"
  },
  {
    id: "genai-powered-data-analytics-tata-forage",
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "Tata / Forage",
    category: "Data & SQL",
    completionDate: "Verified Credential",
    skills: ["Data Analytics", "Generative AI in Analytics", "Executive Reporting", "Insight Extraction", "Visual Storytelling"],
    credentialId: "Tata / Forage Simulation",
    verificationUrl: "",
    summary:
      "Practical job simulation analyzing complex corporate data workflows, synthesizing trends using AI assistance, and preparing executive-facing analytical presentations.",
    badgeText: "Job Simulation"
  },
  {
    id: "full-stack-web-development-ai-internshala",
    title: "Full Stack Web Development with AI",
    issuer: "Internshala Trainings",
    category: "Programming & Web",
    completionDate: "8-Week Comprehensive Training",
    skills: ["Full Stack Engineering", "Frontend & Backend Systems", "Database Integration", "AI Integration", "API Architecture"],
    credentialId: "Internshala Trainings",
    verificationUrl: "",
    summary:
      "Intensive eight-week program covering end-to-end web engineering, frontend UI architectures, backend API services, relational databases, and AI tooling integration.",
    badgeText: "8-Week Program"
  },
  {
    id: "hackerrank-java-programming",
    title: "Java (Basic / Programming) Certification",
    issuer: "HackerRank",
    category: "Programming & Web",
    completionDate: "Verified Credential",
    skills: ["Java", "OOP Design", "Collections Framework", "Exception Handling", "Memory Model"],
    credentialId: "HackerRank Verified",
    verificationUrl: "https://www.hackerrank.com/profile/Sasikiran_24",
    summary:
      "Standardized skills assessment validating proficiency in Java programming constructs, object-oriented inheritance, interfaces, and problem-solving.",
    badgeText: "Verified Assessment"
  },
  {
    id: "sql-foundations-practical-problem-solving",
    title: "SQL: From Foundations to Practical Problem Solving",
    issuer: "Professional SQL Course",
    category: "Data & SQL",
    completionDate: "Verified Credential",
    skills: ["SQL Schema Design", "Complex Joins", "Aggregations & Grouping", "Window Functions Basics", "Query Optimization"],
    credentialId: "Verified Credential",
    verificationUrl: "",
    summary:
      "In-depth course on database querying from core relational algebra to real-world query drafting and structured data analysis.",
    badgeText: "Query Mastery"
  },
  {
    id: "hackerrank-python-certification",
    title: "Python (Basic / Programming) Certification",
    issuer: "HackerRank",
    category: "Python & AI",
    completionDate: "Verified Credential",
    skills: ["Python 3", "Data Structures", "String Processing", "Algorithmic Logic", "Functional Tools"],
    credentialId: "HackerRank Verified",
    verificationUrl: "https://www.hackerrank.com/profile/Sasikiran_24",
    summary:
      "Standardized skills assessment testing fundamental Python mastery, data structure manipulations, and algorithmic problem-solving accuracy.",
    badgeText: "Verified Assessment"
  }
];
