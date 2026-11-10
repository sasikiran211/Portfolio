export interface TakeUForwardStats {
  snapshotNote: string;
  currentStreak: number;
  highestStreak: number;
  problemsSolved: number;
  activeDays: number;
  contributions: number;
  globalRank: number;
  coinsEarned: string;
  dsaProgress: {
    category: string;
    solved: number;
    total: number;
    percentage: number;
  }[];
  languages: string[];
  profileUrl: string;
}

export interface CodingProfile {
  platform: string;
  handle: string;
  role: string;
  profileUrl: string;
  highlights: string[];
  badges: string[];
  accentColor: string;
  systemCode: string;
}

export const takeUForwardData: TakeUForwardStats = {
  snapshotNote: "VERIFIED PROFILE SNAPSHOT // ARCHIVED TELEMETRY",
  currentStreak: 40,
  highestStreak: 51,
  problemsSolved: 166,
  activeDays: 189,
  contributions: 1905,
  globalRank: 577,
  coinsEarned: "~1.02K",
  dsaProgress: [
    { category: "Basic DSA Track", solved: 57, total: 292, percentage: Math.round((57 / 292) * 100) },
    { category: "Core DSA Track", solved: 94, total: 850, percentage: Math.round((94 / 850) * 100) },
    { category: "Comprehensive Roadmap", solved: 166, total: 1468, percentage: Math.round((166 / 1468) * 100) },
  ],
  languages: ["C++", "C", "Java", "JavaScript", "Python"],
  profileUrl: "https://takeuforward.org/profile"
};

export const codingProfilesData: CodingProfile[] = [
  {
    platform: "Take U Forward",
    handle: "Sasikiran Kakumani",
    role: "Core DSA & Problem Solving",
    profileUrl: "https://takeuforward.org/profile",
    highlights: [
      "166 problems solved across Basic & Core roadmaps",
      "51 days peak streak with 40 days active current streak",
      "Global Rank #577 with 1,905 verified contributions"
    ],
    badges: ["RANK #577", "51-DAY PEAK", "MULTI-LANG"],
    accentColor: "#CCFF00",
    systemCode: "TUF // TELEMETRY"
  },
  {
    platform: "CodeChef",
    handle: "sasikiran_24",
    role: "Competitive Algorithmic Contests",
    profileUrl: "https://www.codechef.com/users/sasikiran_24",
    highlights: [
      "Verified member participating in timed algorithm challenges",
      "Focusing on mathematics, array logic, and computational complexity",
      "Public performance record and rating progression"
    ],
    badges: ["VERIFIED MEMBER", "CONTEST PARTICIPANT"],
    accentColor: "#CCFF00",
    systemCode: "CHEF // CONTESTS"
  },
  {
    platform: "HackerRank",
    handle: "Sasikiran_24",
    role: "Standardized Skill Assessments",
    profileUrl: "https://www.hackerrank.com/profile/Sasikiran_24",
    highlights: [
      "Verified Java (Basic) Programming Certification",
      "Verified Python (Basic) Programming Certification",
      "Consistent problem-solving challenges in core data structures"
    ],
    badges: ["JAVA CERTIFIED", "PYTHON CERTIFIED"],
    accentColor: "#10B981",
    systemCode: "HRANK // ASSESS"
  },
  {
    platform: "LeetCode",
    handle: "Sasikiran_24",
    role: "Algorithm & Pattern Mastery",
    profileUrl: "https://leetcode.com/u/Sasikiran_24/",
    highlights: [
      "Two-pointer techniques, sliding windows, and array partitions",
      "Systematic conversion of DSA fundamentals into clean implementations",
      "Active algorithmic practice"
    ],
    badges: ["LEETCODE ALGO", "PATTERN PRACTICE"],
    accentColor: "#FFA116",
    systemCode: "LEET // ALGO"
  },
  {
    platform: "GeeksforGeeks",
    handle: "SasikianKakumani",
    role: "CS Core & Theory Practice",
    profileUrl: "https://www.geeksforgeeks.org/user/SasikianKakumani/",
    highlights: [
      "Targeted problem sets reinforcing university CS core subjects",
      "DBMS queries, OOP inheritance, and data structure implementations",
      "Public profile track"
    ],
    badges: ["CS CONCEPTS", "PRACTICE TRACK"],
    accentColor: "#10B981",
    systemCode: "GFG // SYSTEMS"
  },
  {
    platform: "GitHub",
    handle: "sasikiran211",
    role: "Code Repositories & Open Source",
    profileUrl: "https://github.com/sasikiran211",
    highlights: [
      "Project repositories for Civic Flow, RetainIQ, and Nexora AI Dashboard",
      "Data structure algorithm implementations and university codebases",
      "Version control discipline and modular architecture"
    ],
    badges: ["OPEN SOURCE", "REPOSITORIES"],
    accentColor: "#EBEBEB",
    systemCode: "GIT // ENGINE"
  }
];
