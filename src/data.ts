export interface Project {
  id: string;
  title: string;
  platform?: string;
  description: string;
  responsibilities: string[];
  tech: string[];
  features?: string[];
  challenges?: string[];
  category: 'clinical' | 'enterprise' | 'utilities';
  demoUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description?: string;
  projects?: Project[];
  highlights?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  score: string;
  achievements?: string[];
}

export interface Certification {
  name: string;
  duration: string;
  date: string;
  institution?: string;
  progress?: number;
}

export const PERSONAL_INFO = {
  name: "Neeraj Yadav",
  fullName: "Neeraj Rajendra Prasad Yadav",
  title: "Full Stack Software Developer",
  subTitle: "Specializing in .NET Core, C#, SQL Server & Modern Full-Stack web solutions.",
  tagline: "Building scalable, high-performance, and regulatory-compliant enterprise systems with .NET and Modern Web Technologies.",
  email: "neerajyadav1621@gmail.com",
  phone: "9619599659",
  address: "Thane, Maharashtra, India",
  linkedIn: "https://www.linkedin.com/in/neeraj-yadav-4b5026237",
  github: "https://github.com/neerajyadav1621", // Suggested format
  summary: "Experienced Full Stack .NET Developer with 3.6+ years of hands-on experience in designing, developing, and maintaining enterprise-grade web and desktop applications. Strong proficiency in .NET technologies and SQL Server, with deep exposure to clinical research systems (CTMS, LIMS, Specimen Tracking) and Helpdesk/Ticketing systems. Reputable track record acting in Senior capabilities to guide architecture design, implement secure system integrations, and deploy regulatory-compliant workflows within agile development environments.",
  strengths: [
    { title: "Clinical domain knowledge", description: "In-depth understanding of CTMS, LIMS, and Specimen Tracking with regulatory compliance (audit trails, electronic records processing)." },
    { title: "Senior Full-Stack .NET Expertise", description: "Proficient in ASP.NET Core MVC, Web Forms, ADO.NET, C# backends, and high-performance SQL databases." },
    { title: "Database Optimization & Design", description: "Design and deep scaling of SQL tables, stored procedures, views, and index optimizations for complex datasets." },
    { title: "Agile Leadership & Workflows", description: "Active collaboration in client discussions (URS specification), automated notification pipelines, testing phases (UAT), and full production releases." }
  ],
  profileImagePlaceholderStyle: {
    suggestedStyle: "Professional headshot, soft neutral grey or dark background, professional attire, crisp direct lighting, high-contrast framing in a rounded-square or circular frame with glassmorphism border accent.",
    positionStyle: "Hero section right column, prominent but balanced, floating dynamic card with soft shadow overlay."
  },
  suggestedColors: {
    primary: "Clinical Teal / Corporate Indigo",
    base: "Light Slate & Warm Ice for Light Mode; Slate Gray & Deep Ocean Void for Dark Mode."
  }
};

export const SKILL_CATEGORIES = [
  {
    name: "Back-End Development",
    skills: [
      { name: "C#", level: 95 },
      { name: "ASP.NET Core MVC", level: 90 },
      { name: "ASP.NET Web Forms", level: 85 },
      { name: "Web API / RESTful APIs", level: 90 },
      { name: "WCF Services", level: 75 }
    ]
  },
  {
    name: "Front-End Development",
    skills: [
      { name: "HTML5 & CSS3", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "jQuery", level: 85 },
      { name: "AJAX", level: 90 },
      { name: "AngularJS / Angular", level: 50 },
      { name: "Bootstrap / Tailwind CSS", level: 85 }
    ]
  },
  {
    name: "Databases & Data Access",
    skills: [
      { name: "SQL Server", level: 92 },
      { name: "ADO.NET", level: 92 },
      { name: "Database Design / Sp & Views", level: 90 }
    ]
  },
  {
    name: "Tools, Systems & DevOps",
    skills: [
      { name: "Visual Studio & SSMS", level: 95 },
      { name: "Git & Version Control", level: 90 },
      { name: "Azure DevOps / CI/CD", level: 75 },
      { name: "TFS / SVN", level: 82 },
      { name: "IIS Server", level: 90 },
      { name: "Windows Operating Systems", level: 80 }
    ]
  }
];

export const OTHER_SKILLS = [
  "Clinical Research Systems (CTMS)",
  "LIMS (Lab Info Management)",
  "Specimen Tracking Workflow",
  "Role-Based Access Control (RBAC)",
  "Audit Trails & Validation",
  "URS Analysis & Translation",
  "User Feedback & Ratings Engine",
  "Compliance Multi-schedules",
  "SMTP Automated Alerts",
  "Spatial Data Pre-processing"
];

export const PROJECTS: Project[] = [
  {
    id: "ctms",
    title: "Clinical Trial Management System (CTMS)",
    platform: "Wide-Angle-Insights – Version 2.0 & 2.1",
    description: "Wide-Angle-Insights is a source-agnostic data science platform built to maximize operational efficiency and compliance in pharma and clinical research trials. The core focuses on enhanced clinical data management, high-performance analytics, and regulatory-compliant document handling.",
    features: [
      "eSource Integration: Supports electronic capture of clinical observations and findings matching FDA 21 CFR Part 11 requirements.",
      "Regulatory Audit Trails: Complete traceability and audit readiness for electronic trials data.",
      "Role-Based Access Control: Granular secure access definitions matching clinical job profiles."
    ],
    challenges: [
      "Integrating disparate source-agnostic data formats into a unified analytics schema.",
      "Ensuring strict compliance logs with high-frequency database writes without sacrificing system latency."
    ],
    responsibilities: [
      "Developed and enhanced CTMS and eSource modules using ASP.NET Web Forms, C#, and SQL Server.",
      "Implemented end-to-end electronic source data capture workflows with validation checks, audit trails, and role-based access controls.",
      "Designed and optimized SQL Server database objects, including tables, views, and stored procedures, to support high-volume clinical trial data.",
      "Collaborated with QA, product owners, and clinical operations teams in agile development cycles."
    ],
    tech: ["C#", "ASP.NET Web Forms", "SQL Server", "ADO.NET", "XML/JSON", "IIS"],
    category: "clinical"
  },
  {
    id: "lims",
    title: "Laboratory Information Management System (LIMS)",
    platform: "LIMS Enterprise Platform - Version 1.0 (Ongoing)",
    description: "An enterprise system designed to automate laboratory workflows, track patient specimen lifecycles from collection to testing, and manage test results within pharma and clinical research environments. It ensures complete data integrity and regulatory compliance.",
    features: [
      "RESTful API ecosystem supporting lab equipment integration and automatic data ingestion.",
      "Dynamic sample tracking dashboard with interactive visual guides.",
      "Compliance audit logs tracking every state change of a critical sample."
    ],
    challenges: [
      "Translating highly complex User Requirement Specifications (URS) into structured system architecture with modular service layers.",
      "Designing complex database relations capable of high query throughput for continuous specimen updates."
    ],
    responsibilities: [
      "Participated in URS (User Requirement Specification) discussions with clients to define workflows, compliance requirements, and functional specifications.",
      "Designed system architecture, application workflows, and database models based on URS for Version 1.0.",
      "Developed application modules using ASP.NET Core MVC and implemented RESTful APIs for seamless integration.",
      "Created and optimized SQL Server database objects, including tables, queries, and stored procedures for efficient data management.",
      "Collaborated with QA and stakeholders during development, testing, and UAT phases."
    ],
    tech: ["ASP.NET Core MVC", "C#", "SQL Server", "RESTful API", "ADO.NET"],
    category: "clinical"
  },
  {
    id: "specimen-tracking",
    title: "Specimen Tracking System",
    description: "Enables secure, real-time tracking of clinical specimens and patient samples from collection, labeling, transportation, storage, through analysis. Designed to minimize laboratory errors and ensure full traceability.",
    features: [
      "Proper bar-coding and status labeling validation workflows.",
      "Full audit trail for regulatory validation in healthcare setups."
    ],
    challenges: [
      "Ensuring sub-second search speeds on historical specimen archives spanning hundreds of thousands of ledger records.",
      "Developing strict error checking logic to prevent specimen misidentification."
    ],
    responsibilities: [
      "Designed, developed, and enhanced application modules using ASP.NET Web Forms, C#, and SQL Server in pharma & clinical research environments.",
      "Implemented role-based workflows, validation logic, and audit trails to support regulatory compliance and traceability.",
      "Developed and optimized SQL Server database objects, including tables, views, and stored procedures, to ensure performance and data integrity."
    ],
    tech: ["C#", "ASP.NET Web Forms", "SQL Server", "ADO.NET", "Bootstrap"],
    category: "clinical"
  },
  {
    id: "helpdesk",
    title: "Helpdesk & Ticketing System",
    description: "A centralized ticketing platform letting users report enterprise, technical, or support issues. Tracks tickets, assigns workloads to respective support personnel, and streamlines internal communication.",
    features: [
      "Automated ticketing routing based on active load and issue criticalities.",
      "Comprehensive resolution logging, response time analytics, and history tracking."
    ],
    challenges: [
      "Designing a clean UI that non-technical staff can navigate easily while preserving advanced categorization fields for technical teams."
    ],
    responsibilities: [
      "Participated in URS discussions with clients & stakeholders to understand business workflows, service-level compliance needs, and system expectations.",
      "Provided live production support, monitoring applications, resolving incidents, and delivering timely fixes to ensure system stability."
    ],
    tech: ["C#", "ASP.NET Web Forms", "SQL Server", "ADO.NET", "Aesthetic CSS", "SMTP Alerts"],
    category: "enterprise"
  },
  {
    id: "cdesk",
    title: "C+DESK (Compliance Management System)",
    description: "Developed a complete compliance management application module from scratch. It supports complex daily, weekly, monthly, and yearly compliance scheduling to ensure zero operational breaches.",
    features: [
      "Fully customized interactive compliance calendar tracking.",
      "Automated SMTP-based email alert dispatcher triggered ahead of regulatory deadlines.",
      "Live task state tracking with comments ledger and audit flags."
    ],
    challenges: [
      "Implementing the recurrent calendar scheduler math to accurately handle leap years, holidays, and variable compliance schedules.",
      "Managing robust email queue delivery systems to prevent SMTP server blocking while sending bulk task notifications."
    ],
    responsibilities: [
      "Developed a complete Compliance Management module from scratch, supporting daily, weekly, monthly, and yearly compliance schedules.",
      "Implemented automated task tracking with status management (Active/Expired) and comment functionality.",
      "Designed and integrated email notifications and alerts for task assignment and compliance deadlines using SMTP protocols."
    ],
    tech: ["C#", "ASP.NET Core", "SQL Server", "ADO.NET", "SMTP Services", "Bootstrap"],
    category: "enterprise"
  },
  {
    id: "lawyers2lawyers",
    title: "Lawyers2Lawyers Portal",
    description: "An online platform enabling networking and consultation services for legal professionals. It incorporates client rating panels and complex subscription tier management.",
    features: [
      "Star-based feedback and rating module verifying feedback integrity.",
      "Pre-expiration alert daemon notifying premium users of subscription schedules.",
      "SMTP services driving responsive billing summaries and congratulations dispatches."
    ],
    challenges: [
      "Securing the community rating system against spam and rating manipulation.",
      "Coordinating alerts asynchronously to sync precisely with timezone-dependent expirations."
    ],
    responsibilities: [
      "Developed a Customer Feedback and Rating module with star-based ratings.",
      "Implemented subscription and premium membership alert notifications, including pre-expiry reminders, expiry alerts, and congratulatory emails."
    ],
    tech: ["ASP.NET", "C#", "SQL Server", "ADO.NET", "SMTP Protocols", "CSS3 / AJAX"],
    category: "utilities"
  }
];

export const EXPERIENCE_HISTORY: Experience[] = [
  {
    id: "opus",
    role: "Full Stack Developer",
    company: "Opus Analytics Pvt. Ltd.",
    location: "Thane, Maharashtra",
    period: "April 2023 - Present (3.6+ years total)",
    description: "Spearheading development of enterprise-grade clinical research software modules. Entrusted with acting-senior leadership to manage client-facing requirements mapping, design complex server routing schemas, and steer multi-tier clinical trial tracking platforms.",
    highlights: [
      "Steered end-to-end data compliance architectures conforming to strict 21 CFR Part 11 requirements including tamper-proof audit trails and RBAC lists.",
      "Optimized complex SQL Server query processing, indexing, and stored procedures, achieving a 25% throughput improvement on key sample logs.",
      "Collaborated as acting tech-lead with QA, product owners, and clinical operation managers in fast-paced Agile sprint planning phases."
    ]
  },
  {
    id: "chamunda",
    role: "Software Developer",
    company: "Chamunda Tech-Net Services Pvt. Ltd.",
    location: "Mumbai, Maharashtra",
    period: "Oct 2022 – Mar 2023",
    description: "Built key enterprise-tier modules from the ground up, including secure compliance ledger schedules and modular client-lawyer portals.",
    highlights: [
      "Designed and coded a compliance scheduler from scratch covering a complete calendar year with zero missing triggers.",
      "Integrated secure SMTP notification triggers to boost customer engagement and renewal indicators."
    ]
  },
  {
    id: "here2",
    role: "Spatial Data Specialist I",
    company: "Here Technologies (via Thinkparms Infotech)",
    location: "Mumbai, Maharashtra",
    period: "July 2021 – March 2022",
    description: "Pre-processed primary mapping resources by doing meticulous refinement, data merging, and formatting standard pipelines."
  },
  {
    id: "here1",
    role: "Spatial Data Specialist I",
    company: "Here Technologies (via S2 Infotech)",
    location: "Mumbai, Maharashtra",
    period: "Aug 2019 - May 2020",
    description: "Performed heavy source input checks and vector conversions to feed the company's navigation engine data layers."
  }
];

export const EDUCATION_HISTORY: Education[] = [
  {
    degree: "Bachelor of Information Technology",
    institution: "Mulund College of Commerce (Mumbai University)",
    period: "2016 - 2019",
    score: "CGPI: 6.77 / 10",
    achievements: [
      "Gained deep foundational knowledge in Systems Programming, DBMS, Client-Server architecture, and Web Programming.",
      "Completed visual projects utilizing object-oriented theories."
    ]
  },
  {
    degree: "Higher Secondary Certificate (H.S.C - Science)",
    institution: "Gyanodaya Vidya Mandir",
    period: "2014 - 2016",
    score: "Percentage: 56.79%",
    achievements: ["Specialized in Mathematics, Computer Studies, and Physics."]
  },
  {
    degree: "Secondary School Certificate (S.S.C)",
    institution: "Aadarsh Saraswati High School",
    period: "2013 - 2014",
    score: "Percentage: 76.80%"
  }
];

export const EXTRA_ACTIVITIES: Certification[] = [
  {
    name: "Certification in Artificial Intelligence and Machine Learning",
    duration: "Advanced algorithm design, deep neural networks, model training, predictive analytics, and spatial computing integration.",
    institution: "Vishlesan i-Hub, IIT Patna (Indian Institute of Technology, Patna)",
    date: "Ongoing Course",
    progress: 46
  },
  {
    name: "Certificate Course of Hybrid Mobile App Development (5-Days Intensive)",
    duration: "Fast-Paced Hybrid Development Methodologies",
    date: "May 2017"
  },
  {
    name: "Certificate Course of Attitude and Behavioural Change (4-Days Intensive)",
    duration: "Professional Mindset & Interpersonal Communication Habits",
    date: "May 2018"
  }
];

export interface Hobby {
  name: string;
  description: string;
}

export const HOBBIES: Hobby[] = [
  {
    name: "Learning New Tools & Tech Stacks",
    description: "Continuously researching and adopting emerging developer utilities, platforms, and frameworks to stay at the cutting edge of modern software engineering."
  },
  {
    name: "AI Toolkits & Integrated Agent Flows",
    description: "Exploring advanced AI tools, orchestration pipelines, prompt engineering logic, and microservice flow patterns to automate technical workflows."
  },
  {
    name: "Analyzing System Working Logic & Execution Flows",
    description: "Deconstructing core platform architectures, execution pipelines, and underlying program flows to understand the granular step-by-step logic of complex applications."
  }
];
