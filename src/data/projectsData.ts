export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: 'Data & Analytics' | 'Systems & Algorithms' | 'AI & Web';
  status: 'In Active Development' | 'Completed Prototype' | 'Planned / Architecture Stage';
  overview: string;
  problemStatement: string;
  solution: string;
  features: string[];
  techStack: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  accentNote?: string;
}

export const projectsData: Project[] = [
  {
    id: "sweetflow",
    title: "SweetFlow",
    subtitle: "Workflow & Inventory Streamlining Application",
    tagline: "Structured order management and process tracking for commercial workflows.",
    category: "AI & Web",
    status: "In Active Development",
    overview:
      "SweetFlow is designed as a streamlined workflow and order coordination management system. Developed to explore end-to-end data pipelines, database consistency, and intuitive user operations for small-scale retail or confectionery supply management.",
    problemStatement:
      "Small food/confectionery businesses often encounter order tracking bottlenecks, manual stock discrepancies, and delayed fulfillment when using fragmented paper or basic spreadsheet entries.",
    solution:
      "A centralized application integrating structured data models, immediate state updates, inventory tracking, and clean analytical views that keep order lifecycles transparent from intake to dispatch.",
    features: [
      "Order intake and status progression tracking",
      "Dynamic catalog and inventory level monitoring",
      "Structured relational data schema for orders and customers",
      "Visual analytical summaries of order volume and demand patterns",
      "Responsive, clean UI designed for fast operational input"
    ],
    techStack: [
      "Python / Web Framework",
      "SQL / Relational DBMS",
      "Data Analytics & Reporting",
      "Tailwind CSS / UI Components"
    ],
    githubUrl: "https://github.com/sasikiran211",
    liveDemoUrl: "",
    accentNote: "Repository structure and deployment link configurable in src/data/projectsData.ts"
  },
  {
    id: "written-a-queue",
    title: "Written a Queue",
    subtitle: "Custom Queue Data Structure & Algorithmic Implementation",
    tagline: "Low-level data structure design and queue mechanics in C / Java.",
    category: "Systems & Algorithms",
    status: "Completed Prototype",
    overview:
      "A hands-on implementation and exploration of fundamental queue mechanics, memory management, and abstract data types (ADT) developed to cement algorithmic fundamentals, time complexity benchmarks, and safe pointer/reference handling.",
    problemStatement:
      "Relying solely on high-level library abstractions can obscure the underlying memory allocations, boundary edge-cases, dynamic resizing mechanics, and cache locality inherent to queue operations.",
    solution:
      "Authored custom implementations of FIFO queues, circular buffers, and priority queue variations from scratch, accompanied by automated boundary test cases and complexity profiling.",
    features: [
      "Custom enqueue, dequeue, peek, and status validation primitives",
      "Circular buffer implementation to maximize array memory reuse without shifting elements",
      "Dynamic capacity reallocation and amortized O(1) performance validation",
      "Comprehensive edge-case test suites (underflow, overflow, null-check protection)",
      "Clear documentation of space-time trade-offs across linked vs. contiguous layouts"
    ],
    techStack: [
      "C Programming",
      "Java",
      "Data Structures & Algorithms",
      "Memory Management",
      "Unit Testing"
    ],
    githubUrl: "https://github.com/sasikiran211",
    liveDemoUrl: "",
    accentNote: "Core algorithmic implementation repository link configurable in src/data/projectsData.ts"
  }
];
