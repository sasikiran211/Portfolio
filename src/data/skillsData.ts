export type SkillLevel = 'Proficient' | 'Practising' | 'Familiar' | 'Currently Learning' | 'Planned';

export interface SkillItem {
  name: string;
  level: SkillLevel;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  badge: string;
  skills: SkillItem[];
}

export const skillsData: SkillCategory[] = [
  {
    id: "data-analytics",
    title: "Data Analytics & Business Intelligence",
    description: "Core professional focus — translating raw data into clear business metrics, visualizations, and automated dashboards.",
    badge: "Primary Focus",
    skills: [
      { name: "SQL", level: "Proficient", highlight: true },
      { name: "Excel", level: "Proficient", highlight: true },
      { name: "Power BI", level: "Practising", highlight: true },
      { name: "DAX", level: "Practising" },
      { name: "Power Query", level: "Practising" },
      { name: "Data Cleaning", level: "Proficient" },
      { name: "Exploratory Data Analysis", level: "Proficient", highlight: true },
      { name: "Data Visualization", level: "Proficient" }
    ]
  },
  {
    id: "python-ecosystem",
    title: "Python Data Science Ecosystem",
    description: "Libraries and computational tools for statistical analysis, numerical operations, and informative visual storytelling.",
    badge: "Core Stack",
    skills: [
      { name: "Pandas", level: "Proficient", highlight: true },
      { name: "NumPy", level: "Proficient", highlight: true },
      { name: "Matplotlib", level: "Practising" },
      { name: "Seaborn", level: "Practising" }
    ]
  },
  {
    id: "programming",
    title: "Programming Languages",
    description: "Multi-language programming foundation applied across algorithm challenges, systems, and application logic.",
    badge: "Foundation",
    skills: [
      { name: "Python", level: "Proficient", highlight: true },
      { name: "Java", level: "Practising", highlight: true },
      { name: "C", level: "Practising" }
    ]
  },
  {
    id: "computer-science",
    title: "Computer Science Fundamentals",
    description: "Theoretical and algorithmic grounding supporting software engineering, systems comprehension, and database architecture.",
    badge: "Core Theory",
    skills: [
      { name: "DBMS", level: "Proficient", highlight: true },
      { name: "Data Structures & Algorithms", level: "Practising", highlight: true },
      { name: "Object-Oriented Programming (OOP)", level: "Proficient" },
      { name: "Operating Systems", level: "Currently Learning" },
      { name: "Computer Networks", level: "Planned" }
    ]
  },
  {
    id: "ai-technology",
    title: "AI & Modern Technology",
    description: "Understanding artificial intelligence paradigms, foundational predictive models, and modern prompt engineering techniques.",
    badge: "Secondary Focus",
    skills: [
      { name: "AI Fundamentals", level: "Practising" },
      { name: "Machine Learning Fundamentals", level: "Practising", highlight: true },
      { name: "Generative AI", level: "Familiar" },
      { name: "Prompt Engineering", level: "Practising" },
      { name: "AI-Assisted Development", level: "Proficient" }
    ]
  }
];

export const levelColors: Record<SkillLevel, { bg: string; text: string; border: string }> = {
  Proficient: {
    bg: "bg-ocean/10",
    text: "text-ocean font-semibold",
    border: "border-ocean/30"
  },
  Practising: {
    bg: "bg-beige/40",
    text: "text-ocean",
    border: "border-beige"
  },
  Familiar: {
    bg: "bg-cream-dark/60",
    text: "text-ocean/90",
    border: "border-beige/50"
  },
  "Currently Learning": {
    bg: "bg-amber-100/70",
    text: "text-amber-900",
    border: "border-amber-300"
  },
  Planned: {
    bg: "bg-gray-100",
    text: "text-gray-600",
    border: "border-gray-200"
  }
};
