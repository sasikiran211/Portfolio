export interface EducationItem {
  year: string;
  institution: string;
  degree: string;
  stream?: string;
  grade: string;
  gradeType: 'CGPA' | 'Percentage';
  duration: string;
  status: string;
  location: string;
  highlights: string[];
}

export interface ProfileInfo {
  name: string;
  degree: string;
  specialization: string;
  institution: string;
  stage: string;
  location: string;
  tagline: string;
  heroHeadline: string;
  heroSubtitle: string;
  availability: string;
  socialLinks: {
    linkedin: string;
    github: string;
    codechef: string;
    hackerrank: string;
    leetcode: string;
    geeksforgeeks: string;
    takeuforward: string;
  };
  contactEmail: string;
  about: {
    lead: string;
    paragraphs: string[];
    bentoCards: {
      id: string;
      title: string;
      subtitle: string;
      description: string;
      tag: string;
      highlight?: boolean;
    }[];
  };
  education: EducationItem[];
}

export const profileData: ProfileInfo = {
  name: "Sasikiran Kakumani",
  degree: "B.Tech in Computer Science and Engineering",
  specialization: "Artificial Intelligence & Machine Learning",
  institution: "Vasireddy Venkatadri Institute of Technology (VVITU)",
  stage: "Second Year, First Semester",
  location: "India",
  tagline: "Building with Data. Exploring AI.",
  heroHeadline: "Building with Data.\nExploring AI.",
  heroSubtitle:
    "B.Tech CSE–AIML undergraduate interested in Data Analytics, Data Science and Artificial Intelligence. Developing practical skills through programming, analytical problem-solving, computer science fundamentals and hands-on projects.",
  availability: "SYSTEM READY // OPEN TO DATA & AI INTERNSHIPS",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/SasikiranKakumani",
    github: "https://github.com/sasikiran211",
    codechef: "https://www.codechef.com/users/sasikiran_24",
    hackerrank: "https://www.hackerrank.com/profile/Sasikiran_24",
    leetcode: "https://leetcode.com/u/Sasikiran_24/",
    geeksforgeeks: "https://www.geeksforgeeks.org/user/SasikianKakumani/",
    takeuforward: "https://takeuforward.org/profile",
  },
  contactEmail: "sasikirankakumani@gmail.com",
  about: {
    lead: "An engineering undergraduate with a grounded, analytical approach to technology — prioritizing structured thinking, clean data handling, and continuous programming discipline.",
    paragraphs: [
      "Currently pursuing B.Tech in Computer Science & Engineering (AI & ML) at Vasireddy Venkatadri Institute of Technology (VVITU). My primary technical focus is Data Analytics and Data Science — transforming raw information into actionable business insights through SQL queries, exploratory data analysis, and dashboard visualization.",
      "Alongside analytical data pipelines, I explore Artificial Intelligence, Machine Learning fundamentals, and Generative AI to understand how intelligent systems solve complex computational challenges.",
      "My problem-solving foundation is built on daily algorithmic practice across platforms like Take U Forward, LeetCode, CodeChef, and HackerRank. I believe in honest mastery: writing clean, well-tested code, understanding fundamental data structures, and building reliable projects that deliver genuine value."
    ],
    bentoCards: [
      {
        id: "primary-focus",
        title: "Data Analytics & BI Engine",
        subtitle: "Primary Technical Focus",
        description: "Transforming ambiguous relational tables into executive-grade insight models using SQL, Power BI, DAX measures, and statistical EDA.",
        tag: "CORE_PILLAR",
        highlight: true
      },
      {
        id: "secondary-ai",
        title: "AI & Machine Learning",
        subtitle: "Secondary Frontier",
        description: "Predictive model foundations, feature engineering, and generative AI prompt engineering for autonomous workflows.",
        tag: "AI_ML_LAB"
      },
      {
        id: "dsa-rigor",
        title: "Algorithmic Rigor",
        subtitle: "166+ Verified DSA Solutions",
        description: "Disciplined problem-solving track across Take U Forward, CodeChef, and HackerRank with multi-language execution in C++, C, Java, and Python.",
        tag: "DSA_ENGINE"
      },
      {
        id: "cs-foundations",
        title: "Systems & Architecture",
        subtitle: "Theoretical Grounding",
        description: "Deepening knowledge across DBMS architectures, OOP design patterns, and active study of Operating System internals.",
        tag: "SYS_CORE"
      }
    ]
  },
  education: [
    {
      year: "2025–2029",
      institution: "Vasireddy Venkatadri Institute of Technology (VVITU)",
      degree: "B.Tech in Computer Science and Engineering",
      stream: "Artificial Intelligence & Machine Learning",
      grade: "7.5 CGPA",
      gradeType: "CGPA",
      duration: "2025 – 2029",
      status: "Second Year, First Semester",
      location: "Guntur, Andhra Pradesh, India",
      highlights: [
        "Specialized coursework in Data Structures, OOP (Java), DBMS (SQL), and Applied AI",
        "Active competitive programmer with 51-day peak streak on Take U Forward",
        "Prototyping data-intensive systems and machine learning workflows"
      ]
    },
    {
      year: "2023–2025",
      institution: "Sri Gowthami Junior College",
      degree: "Intermediate Education",
      stream: "MPC (Mathematics, Physics, Chemistry)",
      grade: "97.7%",
      gradeType: "Percentage",
      duration: "2023 – 2025",
      status: "Completed",
      location: "Andhra Pradesh, India",
      highlights: [
        "Mathematical rigor, calculus, probability, and analytical problem solving",
        "High academic score: 97.7% overall standing"
      ]
    },
    {
      year: "2022",
      institution: "Sri Gowthami E-techno School",
      degree: "Secondary School Certificate (SSC)",
      stream: "General Secondary Education",
      grade: "90.33%",
      gradeType: "Percentage",
      duration: "Completed 2022",
      status: "Completed",
      location: "Andhra Pradesh, India",
      highlights: [
        "Foundation in mathematics, sciences, and computational logic",
        "Consistent academic excellence with 90.33% score"
      ]
    }
  ]
};
