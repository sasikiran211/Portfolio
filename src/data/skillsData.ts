export interface SkillItem {
  name: string;
  tag: string;
  status?: 'Primary' | 'Core' | 'Active Study' | 'Planned';
}

export interface SkillCategory {
  id: string;
  categoryCode: string;
  title: string;
  description: string;
  badge: string;
  skills: SkillItem[];
}

export const skillsData: SkillCategory[] = [
  {
    id: "data-analytics",
    categoryCode: "MODULE // 01",
    title: "Data Analytics & Python Ecosystem",
    description: "Core professional direction — end-to-end data manipulation, analytical querying, feature modeling, and visualization.",
    badge: "PRIMARY DIRECTION",
    skills: [
      { name: "SQL", tag: "RELATIONAL_QUERY", status: "Primary" },
      { name: "Excel", tag: "SPREADSHEET_MODELING", status: "Primary" },
      { name: "Power BI", tag: "BUSINESS_INTELLIGENCE", status: "Primary" },
      { name: "DAX", tag: "MEASURES_CALCULATIONS", status: "Primary" },
      { name: "Power Query", tag: "ETL_TRANSFORMATION", status: "Primary" },
      { name: "Pandas", tag: "DATAFRAME_OPS", status: "Primary" },
      { name: "NumPy", tag: "VECTORIZED_NUMERICS", status: "Primary" },
      { name: "Matplotlib", tag: "DATA_VISUALIZATION", status: "Core" },
      { name: "Seaborn", tag: "STATISTICAL_PLOTS", status: "Core" }
    ]
  },
  {
    id: "programming",
    categoryCode: "MODULE // 02",
    title: "Programming Languages",
    description: "Multi-paradigm programming foundation applied across algorithm construction and scalable backends.",
    badge: "FOUNDATION",
    skills: [
      { name: "Python", tag: "PY_INTERPRETER", status: "Primary" },
      { name: "Java", tag: "JVM_SYSTEMS", status: "Core" },
      { name: "C", tag: "NATIVE_MEMORY", status: "Core" }
    ]
  },
  {
    id: "computer-science",
    categoryCode: "MODULE // 03",
    title: "Computer Science & Systems",
    description: "Theoretical grounding covering database relational models, algorithms, and active systems study.",
    badge: "CS CORE",
    skills: [
      { name: "DBMS", tag: "DATABASE_INTERNALS", status: "Core" },
      { name: "Object-Oriented Programming", tag: "OOP_PATTERNS", status: "Core" },
      { name: "Data Structures & Algorithms", tag: "DSA_OPTIMIZATION", status: "Core" },
      { name: "Operating Systems", tag: "SYS_KERNEL_LEARNING", status: "Active Study" },
      { name: "Computer Networks", tag: "NET_STACK_PLANNED", status: "Planned" }
    ]
  },
  {
    id: "ai-technology",
    categoryCode: "MODULE // 04",
    title: "AI & Modern Technology",
    description: "Applied artificial intelligence paradigms, foundational predictive learning, and modern generative toolchains.",
    badge: "SECONDARY DIRECTION",
    skills: [
      { name: "AI Fundamentals", tag: "SEARCH_HEURISTICS", status: "Core" },
      { name: "Machine Learning Fundamentals", tag: "SUPERVISED_MODELS", status: "Core" },
      { name: "Generative AI", tag: "LLM_LATENT_SPACE", status: "Core" },
      { name: "Prompt Engineering", tag: "CONTEXT_STEERING", status: "Core" }
    ]
  }
];
