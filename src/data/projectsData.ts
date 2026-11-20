export interface ProjectImage {
  src: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  projectNumber: string;
  title: string;
  subtitle: string;
  category: string;
  categoryTag: string;
  badge: string;
  tagline: string;
  status: 'Completed Hackathon Prototype' | 'Production Ready' | 'Active Development' | 'Architecture & Beta';
  overview: string;
  problemStatement: string;
  solution: string;
  features: string[];
  capabilities?: string[];
  techStack: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  metrics?: { label: string; value: string }[];
  accentNote?: string;
  thumbnail: string;
  galleryImages: ProjectImage[];
  architectureSummary?: string;
  dataFlowSteps?: string[];
}

export const projectsData: Project[] = [
  {
    id: "civic-flow",
    projectNumber: "PROJECT // 01",
    title: "Civic Flow",
    subtitle: "Civic Issue Reporting & Municipal Response Orchestration",
    category: "Hackathon Project",
    categoryTag: "Smart City Infrastructure",
    badge: "Hackathon Featured",
    tagline: "Bridging citizen incident reporting with real-time municipal routing and automated status transparency.",
    status: "Completed Hackathon Prototype",
    overview:
      "Civic Flow is an engineered public infrastructure management system conceived and prototyped during a competitive hackathon. It streamlines citizen-to-government grievance lifecycles through localized GPS issue tagging, category routing, and automated status pipeline tracking.",
    problemStatement:
      "Municipal grievance tracking frequently suffers from bureaucratic opacity, duplicate complaints without geospatial deduplication, and lack of citizen visibility into resolution timelines.",
    solution:
      "Engineered a full-stack, data-driven municipal workflow that aggregates citizen incident submissions, verifies categorical severity, routes tickets to corresponding administrative departments, and surfaces public progress analytics.",
    thumbnail: "/assets/projects/civicflow/civicflow-dispatch-dashboard.svg",
    galleryImages: [
      {
        src: "/assets/projects/civicflow/civicflow-dispatch-dashboard.svg",
        title: "Municipal Dispatch Operations Center",
        description: "Administrative control board displaying active incidents across sanitation, roads, and electrical grids with urgent priority queues."
      },
      {
        src: "/assets/projects/civicflow/civicflow-citizen-mobile-flow.svg",
        title: "Citizen Incident Reporting Flow",
        description: "Mobile-optimized submission sequence enabling GPS verification, photo evidence upload, and automated receipt generation."
      },
      {
        src: "/assets/projects/civicflow/civicflow-system-architecture.svg",
        title: "Full-Stack System Architecture & Data Flow",
        description: "End-to-end data pipeline from client React UI, Flask REST API gateway, PostgreSQL spatial persistence, and department dispatch logic."
      },
      {
        src: "/assets/projects/civicflow/civicflow-status-pipeline.svg",
        title: "4-Stage Resolution Pipeline",
        description: "Audit trail transitioning tickets through Submitted, Verified, In Progress, and Resolved with citizen SMS/email notification webhooks."
      },
      {
        src: "/assets/projects/civicflow/civicflow-analytics-heatmap.svg",
        title: "Geospatial Distress Cluster Heatmap",
        description: "Spatial clustering identifying municipal failure hotzones to assist proactive public works budgeting."
      }
    ],
    architectureSummary:
      "Client UI communicates via JWT-authenticated REST APIs to a Python Flask backend. Geospatial incidents are stored in PostgreSQL with PostGIS coordinates, and dispatched through an event-driven router to municipal department queues.",
    dataFlowSteps: [
      "Citizen captures localized GPS incident with categorized distress metadata.",
      "Spatial deduplication engine checks existing active tickets within a 50-meter radius.",
      "Verified incident routed to responsible municipal department queue (Sanitation, Roads, Electrical).",
      "Field engineers update resolution milestones, updating real-time citizen tracking ledger."
    ],
    features: [
      "Geospatial Issue Logging: Incident pinning with verification coordinates and photo attachments",
      "Automated Departmental Dispatch: Rule-based routing to sanitation, roads, and electrical divisions",
      "Real-Time Resolution Pipeline: Citizen notification updates across intake, inspection, and resolution stages",
      "Administrative BI Dashboard: Municipal heatmap displaying cluster zones of infrastructure distress",
      "Public Transparency Ledger: Open ticket tracking preventing grievance drops and duplicate overhead"
    ],
    techStack: [
      "Python / Flask",
      "SQL / PostgreSQL",
      "Leaflet & Geospatial Maps",
      "Tailwind CSS / UI",
      "RESTful API Architecture"
    ],
    metrics: [
      { label: "Pipeline Stages", value: "4-Stage Tracking" },
      { label: "Dispatch Routing", value: "Rule-Based Auto" },
      { label: "Hackathon Track", value: "Smart Civic Tech" }
    ],
    githubUrl: "https://github.com/sasikiran211",
    liveDemoUrl: "",
    accentNote: "Hackathon submission codebase and repository links are configurable in src/data/projectsData.ts"
  },
  {
    id: "retainiq",
    projectNumber: "PROJECT // 02",
    title: "RetainIQ",
    subtitle: "Customer Retention & Revenue Intelligence Platform",
    category: "Customer Retention and Revenue Intelligence",
    categoryTag: "Predictive Analytics & BI",
    badge: "Revenue Intelligence",
    tagline: "Customer churn-risk detection, cohort tracking, and RFM behavioral segmentation for subscription economies.",
    status: "Active Development",
    overview:
      "RetainIQ is an analytical customer intelligence system architected to diagnose churn dynamics before revenue leakage occurs. It processes transactional histories to calculate customer lifetime value (CLV), identify behavioral inflection points, and recommend targeted retention workflows.",
    problemStatement:
      "SaaS and digital retail platforms lose substantial revenue because churn risk is evaluated reactively after customer cancellation rather than detected through preliminary usage anomalies.",
    solution:
      "Built a unified cohort and RFM (Recency, Frequency, Monetary) analytics engine that stratifies users into risk tiers, computes churn probabilities, and outputs actionable commercial retention recommendations.",
    thumbnail: "/assets/projects/retainiq/retainiq-executive-dashboard.svg",
    galleryImages: [
      {
        src: "/assets/projects/retainiq/retainiq-executive-dashboard.svg",
        title: "Executive Retention & Revenue Dashboard",
        description: "C-suite operational dashboard tracking monthly churn rates, risk tier distributions, and projected revenue at risk."
      },
      {
        src: "/assets/projects/retainiq/retainiq-customer-segmentation.svg",
        title: "RFM Behavioral Customer Segmentation",
        description: "2D behavioral cluster plot stratifying user cohorts into Champions, Loyal, Potential, and At-Risk tiers based on transactional velocity."
      },
      {
        src: "/assets/projects/retainiq/retainiq-churn-drivers.svg",
        title: "Key Churn Risk Factor Attribution",
        description: "Machine learning feature importance ranking contract stability, ticket turnaround time, and usage decay as primary churn catalysts."
      },
      {
        src: "/assets/projects/retainiq/retainiq-cohort-heatmap.svg",
        title: "Longitudinal Cohort Retention Matrix",
        description: "Monthly customer vintage survival curves monitoring Month 0 through Month 5 retention drop-offs."
      },
      {
        src: "/assets/projects/retainiq/retainiq-intervention-workflow.svg",
        title: "Automated Retention Playbook Workflow",
        description: "Event-triggered mitigation pipelines orchestrating VIP incentives, CSM outreach, and automated feedback loops."
      }
    ],
    architectureSummary:
      "Historical subscription transactions are transformed using Python (Pandas/NumPy) and SQL into behavioral RFM scores. Risk probabilities are modeled using logistic classifiers and surfaced through executive Power BI / React telemetry.",
    dataFlowSteps: [
      "Transactional and event stream ingestion from subscription database.",
      "RFM feature computation: Days since last activity, 90-day order frequency, cumulative ARR.",
      "Risk classification tiering (Low, Moderate, High, Critical) with anomaly flags.",
      "Actionable retention playbooks automatically delivered to commercial account managers."
    ],
    features: [
      "Customer Churn-Risk Detection: Early warning indicators derived from activity decay and engagement drops",
      "RFM Behavioral Segmentation: Automated classification into Champions, Loyal Customers, and At-Risk Tiers",
      "Cohort Retention Matrices: Triangular cohort retention heatmaps tracking longitudinal user persistence",
      "Revenue Intelligence Engine: Expected revenue impact projections associated with targeted churn reduction",
      "Automated Retention Recommendations: Prescriptive mitigation playbooks mapped to individual customer segments"
    ],
    capabilities: [
      "Customer churn-risk detection",
      "Customer segmentation",
      "Cohort analysis",
      "RFM analysis",
      "Retention recommendations",
      "Revenue intelligence"
    ],
    techStack: [
      "Python / Pandas",
      "Scikit-Learn (Modeling)",
      "SQL Data Modeling",
      "Power BI / DAX Dashboards",
      "NumPy & Seaborn"
    ],
    metrics: [
      { label: "Segmentation", value: "RFM Tiering" },
      { label: "Analysis Model", value: "Cohort Matrix" },
      { label: "Core Metric", value: "Churn Prevention" }
    ],
    githubUrl: "https://github.com/sasikiran211",
    liveDemoUrl: "",
    accentNote: "Case study capabilities and predictive analytics schemas configurable in src/data/projectsData.ts"
  },
  {
    id: "nexora-ai-dashboard",
    projectNumber: "PROJECT // 03",
    title: "Nexora AI Dashboard",
    subtitle: "AI Data Analytics & Intelligent Business Intelligence Suite",
    category: "AI Data Analytics Dashboard",
    categoryTag: "Enterprise AI & BI",
    badge: "AI-Powered Analytics",
    tagline: "Executive BI reporting fused with generative AI-assisted natural language data interrogation and trend synthesis.",
    status: "Architecture & Beta",
    overview:
      "Nexora AI Dashboard is an intelligent analytics interface bridging modern relational data pipelines with generative AI comprehension. It enables stakeholders to interrogate complex business datasets using plain language and render interactive telemetry in real time.",
    problemStatement:
      "Non-technical business decision-makers face steep friction when drafting SQL queries or navigating multi-layered BI dashboards to extract ad-hoc business answers quickly.",
    solution:
      "Engineered an interactive analytics cockpit combining dynamic multidimensional charting with an LLM-assisted query layer that translates natural inquiries into verified SQL aggregations and executive takeaways.",
    thumbnail: "/assets/projects/nexora/nexora-command-center.svg",
    galleryImages: [
      {
        src: "/assets/projects/nexora/nexora-command-center.svg",
        title: "Unified Executive Command Center",
        description: "Real-time KPI telemetry monitoring ARR, conversion rates, and active operational capacity with visual trend indicators."
      },
      {
        src: "/assets/projects/nexora/nexora-natural-language-query.svg",
        title: "Natural Language SQL Interrogation Engine",
        description: "Conversational prompt interface compiling English business questions into syntactically validated SQL expressions and chart plots."
      },
      {
        src: "/assets/projects/nexora/nexora-data-workspace.svg",
        title: "Enterprise Multi-Source Data Workspace",
        description: "Connector catalog facilitating seamless extraction across PostgreSQL, Snowflake, BigQuery, and enterprise CSV uploads."
      },
      {
        src: "/assets/projects/nexora/nexora-ai-insights.svg",
        title: "Machine Learning Anomaly Feed",
        description: "Continuous anomaly scanner surfacing margin drift, customer acquisition cost spikes, and regional underperformance alerts."
      },
      {
        src: "/assets/projects/nexora/nexora-export-reporting.svg",
        title: "Automated Executive Reporting & Delivery",
        description: "Scheduled delivery system formatting visual PDF dossiers and interactive digests for board stakeholders."
      }
    ],
    architectureSummary:
      "FastAPI orchestrates queries between enterprise relational stores and LLM prompt-grounding layers. Validated SQL runs in sandboxed read-only replicas, streaming sanitized JSON responses to a React/TypeScript interface.",
    dataFlowSteps: [
      "User issues natural language question (e.g. 'Show me top 5 customer segments by Q3 revenue').",
      "AI reasoning engine matches database schema catalog and generates parameterized SQL.",
      "Read-only query executed with sub-second execution limits against database replica.",
      "Interactive data visualizations and auto-generated textual takeaways rendered simultaneously."
    ],
    features: [
      "Interactive Analytics Cockpit: Filterable multi-metric KPI cards, time-series projections, and categorical drill-downs",
      "AI-Assisted Insights Layer: Automated plain-text summaries explaining data spikes, anomalies, and outliers",
      "Natural Language Querying: Translation of user questions into verified SQL operations and graphical outputs",
      "Business Intelligence Dashboards: Real-time telemetry tracking margin, customer acquisition cost, and volume",
      "Export & Executive Briefings: Automated generation of analytical summaries ready for team presentation"
    ],
    capabilities: [
      "Data analysis",
      "Interactive analytics",
      "Business intelligence",
      "AI-assisted insights",
      "Data visualisation",
      "Dashboard experience"
    ],
    techStack: [
      "Python / FastAPI",
      "SQL & Analytical Views",
      "React & TypeScript UI",
      "Tailwind CSS / Glassmorphism",
      "Prompt Engineering / GenAI APIs"
    ],
    metrics: [
      { label: "Query Engine", value: "NL-to-SQL AI" },
      { label: "Visualization", value: "Interactive BI" },
      { label: "Insight Gen", value: "Real-time AI" }
    ],
    githubUrl: "https://github.com/sasikiran211",
    liveDemoUrl: "",
    accentNote: "AI dashboard telemetry architecture and endpoints configurable in src/data/projectsData.ts"
  }
];
