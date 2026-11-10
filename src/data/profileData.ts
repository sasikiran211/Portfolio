export interface EducationItem {
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
    focusAreas: {
      title: string;
      description: string;
      icon: string;
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
  availability: "Open to Data & AI Internships",
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
      "Currently pursuing B.Tech in Computer Science & Engineering (AI & ML) at Vasireddy Venkatadri Institute of Technology (VVITU), in my second year. My primary technical focus is Data Analytics and Data Science — transforming raw information into actionable business insights through SQL queries, exploratory data analysis, and dashboard visualization.",
      "Alongside analytical data pipelines, I explore Artificial Intelligence, Machine Learning fundamentals, and Generative AI to understand how intelligent systems solve complex computational challenges.",
      "My problem-solving foundation is built on daily algorithmic practice across platforms like Take U Forward, LeetCode, CodeChef, and HackerRank. I believe in honest mastery: writing clean, well-tested code, understanding fundamental data structures, and building reliable projects that deliver genuine value."
    ],
    focusAreas: [
      {
        title: "Data Analytics & BI (Primary)",
        description: "Transforming datasets into decision-ready insights using SQL querying, Power BI dashboards, DAX metrics, and exploratory data analysis.",
        icon: "BarChart3"
      },
      {
        title: "Data Science & Python",
        description: "Statistical computing, data wrangling, and modeling with Pandas, NumPy, Matplotlib, and Seaborn for structured data workflows.",
        icon: "LineChart"
      },
      {
        title: "AI & Machine Learning (Secondary)",
        description: "Foundational supervised learning algorithms, prompt engineering, and modern AI-assisted engineering practices.",
        icon: "Cpu"
      },
      {
        title: "CS & Algorithm Fundamentals",
        description: "Rigorous daily practice in Data Structures, Object-Oriented Programming, and database management systems.",
        icon: "Code2"
      }
    ]
  },
  education: [
    {
      institution: "Vasireddy Venkatadri Institute of Technology (VVITU)",
      degree: "B.Tech in Computer Science and Engineering",
      stream: "Artificial Intelligence & Machine Learning",
      grade: "7.5 CGPA",
      gradeType: "CGPA",
      duration: "2023 – 2027 (Ongoing)",
      status: "Second Year, First Semester",
      location: "Guntur, Andhra Pradesh, India",
      highlights: [
        "Core coursework in Data Structures, OOP (Java), DBMS (SQL), Discrete Mathematics",
        "Active technical contributor and competitive problem solver",
        "Exploring applied machine learning and analytical pipelines"
      ]
    },
    {
      institution: "Sri Gowthami Junior College",
      degree: "Intermediate Education",
      stream: "MPC (Mathematics, Physics, Chemistry)",
      grade: "97.7%",
      gradeType: "Percentage",
      duration: "2021 – 2023",
      status: "Completed",
      location: "Andhra Pradesh, India",
      highlights: [
        "Strong foundation in analytical mathematics, calculus, and logical reasoning",
        "High academic standing with 97.7% overall score"
      ]
    },
    {
      institution: "Sri Gowthami E-techno School",
      degree: "Secondary School Certificate (SSC)",
      stream: "General Secondary Education",
      grade: "90.33%",
      gradeType: "Percentage",
      duration: "Completed 2021",
      status: "Completed",
      location: "Andhra Pradesh, India",
      highlights: [
        "Excellence in mathematics and scientific fundamentals",
        "Consistent academic performance across all subjects"
      ]
    }
  ]
};
