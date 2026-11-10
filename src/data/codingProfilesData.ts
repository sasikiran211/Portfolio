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
  username: string;
  role: string;
  profileUrl: string;
  highlights: string[];
  badges: string[];
  accentColor: string;
}

export const takeUForwardData: TakeUForwardStats = {
  snapshotNote: "Verified Profile Milestone Snapshot (Preserved from profile records)",
  currentStreak: 40,
  highestStreak: 51,
  problemsSolved: 166,
  activeDays: 189,
  contributions: 1905,
  globalRank: 577,
  coinsEarned: "~1.02K",
  dsaProgress: [
    { category: "Basic DSA", solved: 57, total: 292, percentage: Math.round((57 / 292) * 100) },
    { category: "Core DSA", solved: 94, total: 850, percentage: Math.round((94 / 850) * 100) },
    { category: "Overall DSA Track", solved: 166, total: 1468, percentage: Math.round((166 / 1468) * 100) },
  ],
  languages: ["C++", "C", "Java", "JavaScript", "Python"],
  profileUrl: "https://takeuforward.org/profile"
};

export const codingProfilesData: CodingProfile[] = [
  {
    platform: "Take U Forward",
    username: "Sasikiran Kakumani",
    role: "DSA & Problem-Solving Track",
    profileUrl: "https://takeuforward.org/profile",
    highlights: [
      "166 problems solved across Basic & Core tracks",
      "51 days highest streak (40 days current streak)",
      "Global Rank #577 with 1,905 contributions"
    ],
    badges: ["Top 600 Global Rank", "51-Day Streak", "Multi-Language"],
    accentColor: "#2C365A"
  },
  {
    platform: "CodeChef",
    username: "sasikiran_24",
    role: "Competitive Programming",
    profileUrl: "https://www.codechef.com/users/sasikiran_24",
    highlights: [
      "Active participant in algorithmic contests and practice problems",
      "Focusing on mathematics, array logic, and computational complexity",
      "Direct link to public performance record"
    ],
    badges: ["Active Member", "Contest Participant"],
    accentColor: "#5B4638"
  },
  {
    platform: "HackerRank",
    username: "Sasikiran_24",
    role: "Skills Assessments & Challenges",
    profileUrl: "https://www.hackerrank.com/profile/Sasikiran_24",
    highlights: [
      "Verified Java (Basic) Skills Certification",
      "Verified Python (Basic) Skills Certification",
      "Consistent problem solving in core data structures"
    ],
    badges: ["Java Certified", "Python Certified"],
    accentColor: "#00EA64"
  },
  {
    platform: "LeetCode",
    username: "Sasikiran_24",
    role: "Algorithm Practice",
    profileUrl: "https://leetcode.com/u/Sasikiran_24/",
    highlights: [
      "Targeted practice in Arrays, Two Pointers, Strings, and Sorting",
      "Translating Take U Forward structured roadmap to LeetCode submissions",
      "Continuous algorithmic improvement"
    ],
    badges: ["Problem Solver", "Algorithm Track"],
    accentColor: "#FFA116"
  },
  {
    platform: "GeeksforGeeks",
    username: "SasikianKakumani",
    role: "DSA Practice & CS Core",
    profileUrl: "https://www.geeksforgeeks.org/user/SasikianKakumani/",
    highlights: [
      "CS fundamental challenges in DBMS, OOP, and data structures",
      "Practice questions supporting university and technical readiness",
      "Public profile verification link"
    ],
    badges: ["Practice Track", "CS Concepts"],
    accentColor: "#2F8D46"
  },
  {
    platform: "GitHub",
    username: "sasikiran211",
    role: "Code Repositories & Projects",
    profileUrl: "https://github.com/sasikiran211",
    highlights: [
      "Public repositories for course work, code samples, and implementations",
      "Projects: SweetFlow and Written a Queue data structures",
      "Version control discipline and collaborative workflows"
    ],
    badges: ["Open Source", "Version Control"],
    accentColor: "#24292E"
  }
];
