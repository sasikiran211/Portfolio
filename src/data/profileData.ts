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
    techFocus: string[];
    closing: string;
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
    "B.Tech CSE–AIML undergraduate at VVITU focused on Data Analytics, Data Science, and Machine Learning. Developing practical capabilities through programming, analytical problem-solving, computer science fundamentals, and hands-on projects.",
  availability: "Available for Technical Internships",
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
    lead: "Computer Science (AI & ML) undergraduate focused on building strong foundations in Data Structures & Algorithms, Problem Solving, and Computer Science fundamentals.",
    paragraphs: [
      "I'm Sasikiran, currently pursuing my B.Tech in Computer Science and Engineering (AI & ML) at Vasireddy Venkatadri Institute of Technology (VVITU). My core professional direction is centered on Data Analytics, Data Science, and Machine Learning systems.",
      "Currently, I'm strengthening my DSA skills through structured problem solving while expanding my knowledge in Full-Stack Development, Data Analytics, SQL, Python, Power BI, Statistics, and AI/ML.",
      "My goal is to develop strong software engineering and analytical thinking skills by combining consistent DSA practice with real-world projects and practical applications. I'm focused on learning systematically, understanding concepts deeply, and continuously improving my problem-solving ability."
    ],
    techFocus: [
      "Data Structures & Algorithms",
      "C++ / Java / Python",
      "Full-Stack Web Development",
      "SQL & Database Systems",
      "Data Analytics & Visualization",
      "Power BI & Excel",
      "Statistics & Machine Learning",
      "Artificial Intelligence",
      "Computer Science Fundamentals"
    ],
    closing: "Currently learning. Consistently solving. Building for the future."
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
        "Core coursework in Data Structures, Object-Oriented Programming (Java), DBMS (SQL), Discrete Mathematics",
        "Active competitive programmer with 51-day peak streak and 166 problems solved on Take U Forward",
        "Prototyping data analytics workflows, SQL pipelines, and machine learning models"
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
        "Strong foundation in analytical mathematics, calculus, probability, and logical reasoning",
        "High academic achievement with a 97.7% overall score"
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
        "Strong foundation in mathematics, physics, and computational logic",
        "Consistent academic performance with a 90.33% score"
      ]
    }
  ]
};
