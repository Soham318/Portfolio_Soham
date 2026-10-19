/**
 * ============================================================================
 * CENTRAL PROFILE DATA STORE
 * Professional Developer Portfolio | Soham Umesh Chavan
 * 
 * NOTE:
 * - Genuine personal, academic, and milestone details for Soham Umesh Chavan.
 * - Primary professional profiles: LinkedIn and GitHub.
 * - LeetCode and GFG achievements displayed as text without external links.
 * - VJTI B.Tech with Minor in Cybersecurity.
 * - Clearly distinguishes implemented features from planned concepts.
 * ============================================================================
 */

export const profileData = {
  personal: {
    name: "Soham Umesh Chavan",
    title: "Computer Engineering Student",
    headline: "Computer Engineering Student | Aspiring Software Developer",
    college: "Veermata Jijabai Technological Institute (VJTI)",
    degree: "B.Tech in Computer Engineering",
    minor: "Cybersecurity",
    goal: "Software development internships and placement opportunities.",
    location: "Mumbai, India",
    bio: "Computer Engineering undergraduate at Veermata Jijabai Technological Institute (VJTI), Mumbai, pursuing a Minor in Cybersecurity. Passionate about software development, backend systems, full-stack web architectures, and algorithms. Actively seeking software development internships and placement opportunities.",
    editorialQuote: "I enjoy turning conceptual logic into working products while continuously strengthening my core engineering foundations.",
    avatarPlaceholder: {
      initials: "SC",
      altText: "Avatar badge for Soham Umesh Chavan"
    }
  },

  socialLinks: [
    {
      id: "github",
      label: "GitHub",
      url: "https://github.com/Soham318",
      isPlaceholder: false,
      hint: "Visit GitHub profile"
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/soham-chavan-1a8339348/",
      isPlaceholder: false,
      hint: "Connect on LinkedIn"
    },
    {
      id: "email",
      label: "Email",
      value: "csoham8042@gmail.com",
      url: "mailto:csoham8042@gmail.com",
      isPlaceholder: false,
      hint: "Send direct email"
    }
  ],

  education: {
    current: {
      institution: "Veermata Jijabai Technological Institute (VJTI)",
      shortName: "VJTI Mumbai",
      degree: "B.Tech in Computer Engineering",
      minor: "Cybersecurity",
      status: "Undergraduate Program",
      location: "Mumbai, Maharashtra",
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Operating Systems",
        "Network Security & Cybersecurity Fundamentals",
        "Operations Research / Optimization Techniques"
      ]
    },
    history: [
      {
        id: "vjti-btech",
        institution: "Veermata Jijabai Technological Institute (VJTI)",
        level: "Undergraduate Degree",
        qualification: "B.Tech in Computer Engineering (Minor in Cybersecurity)",
        scoreLabel: "Current Program",
        score: "In Progress",
        location: "Mumbai, Maharashtra",
        highlight: "Premier engineering institute in Maharashtra. Core computer engineering curriculum with cybersecurity minor."
      },
      {
        id: "hsc-class12",
        institution: "S.B.G. High School and Junior College",
        level: "Class 12 (Higher Secondary)",
        qualification: "Higher Secondary Certificate (HSC)",
        scoreLabel: "Board Score",
        score: "86.83%",
        location: "Kavathe Mahankal",
        highlight: "Rigorous coursework in Mathematics, Physics, and preparatory engineering sciences."
      },
      {
        id: "ssc-class10",
        institution: "S.M. High School",
        level: "Class 10 (Secondary)",
        qualification: "Secondary School Certificate (SSC)",
        scoreLabel: "Board Score",
        score: "96.20%",
        location: "Kavathe Mahankal",
        highlight: "Excellence across mathematics, natural sciences, and foundational school curriculum."
      }
    ],
    entranceExams: [
      {
        id: "mht-cet",
        exam: "MHT-CET (Engineering)",
        percentile: "99.80 %ile",
        rank: "State Rank 450",
        detail: "Top 0.20 percentile statewide in Maharashtra State Common Entrance Test."
      },
      {
        id: "jee-main",
        exam: "JEE Main",
        percentile: "98.50 %ile",
        rank: "Top 1.5% Nationwide",
        detail: "National-level engineering entrance examination for premier institutes across India."
      }
    ]
  },

  achievements: [
    {
      id: "dsa-solving",
      title: "Algorithmic Problem Solving",
      metric: "350+ Solved",
      subtitle: "LeetCode & GeeksforGeeks",
      description: "Solved 350+ data structures and algorithmic problems spanning dynamic programming, graph traversal, trees, arrays, and system complexity optimization.",
      tag: "Competitive Programming",
      links: [] // Explicitly text-only as requested
    },
    {
      id: "agastya-mentorship",
      title: "Agastya Mentorship Program",
      metric: "Mentee Participant",
      subtitle: "Associated with JPMorgan",
      description: "Selected and participated in the Agastya Foundation mentorship program associated with the JPMorgan Chase CSR initiative, focusing on technical problem solving and professional engineering orientation.",
      tag: "Mentorship & Growth",
      links: []
    },
    {
      id: "mht-cet-rank",
      title: "MHT-CET State Merit",
      metric: "Rank 450",
      subtitle: "99.80 Percentile",
      description: "Earned admission to VJTI Computer Engineering through top 0.20% merit rank statewide among over 200,000 engineering candidates.",
      tag: "Academic Excellence",
      links: []
    }
  ],

  // Combined Academic Journey & Learning Milestones for the animated timeline
  timelineMilestones: [
    {
      id: "milestone-1",
      category: "Academic Foundation",
      stage: "Secondary School",
      title: "Class 10 (Secondary School Certificate)",
      institution: "S.M. High School, Kavathe Mahankal",
      score: "96.20%",
      badge: "Class 10",
      description: "Built strong mathematical and analytical foundations, scoring 96.20% in secondary board examinations."
    },
    {
      id: "milestone-2",
      category: "Higher Secondary",
      stage: "Higher Secondary",
      title: "Class 12 (Higher Secondary Certificate)",
      institution: "S.B.G. High School and Junior College, Kavathe Mahankal",
      score: "86.83%",
      badge: "Class 12",
      description: "Completed higher secondary coursework with focus on Advanced Mathematics, Physics, and analytical sciences."
    },
    {
      id: "milestone-3",
      category: "Competitive Milestones",
      stage: "Entrance Examinations",
      title: "MHT-CET Rank 450 & JEE Main",
      institution: "State & National Engineering Entrances",
      score: "CET: 99.80 %ile (Rank 450) • JEE: 98.50 %ile",
      badge: "Rank 450",
      description: "Secured 99.80 percentile (State Rank 450) in MHT-CET and 98.50 percentile in JEE Main, qualifying for VJTI Computer Engineering."
    },
    {
      id: "milestone-4",
      category: "Undergraduate Degree",
      stage: "Undergraduate Engineering",
      title: "B.Tech in Computer Engineering (Minor in Cybersecurity)",
      institution: "Veermata Jijabai Technological Institute (VJTI), Mumbai",
      score: "Current Undergraduate",
      badge: "VJTI Mumbai",
      description: "Admitted to VJTI's premier Computer Engineering department; enrolled in core CS disciplines and pursuing an Academic Minor in Cybersecurity."
    },
    {
      id: "milestone-5",
      category: "Learning Milestone",
      stage: "Frontend Architecture",
      title: "Web Development & React Engineering",
      institution: "Component Design & Reactive Frameworks",
      score: "Component Architecture",
      badge: "React & Modern JS",
      description: "Mastered responsive HTML5, modern CSS custom properties, JavaScript ES6+, and React component architecture with hooks, state management, and WCAG accessibility standards."
    },
    {
      id: "milestone-6",
      category: "Learning Milestone",
      stage: "Backend & Systems",
      title: "Node.js, Express.js & REST APIs",
      institution: "Server-Side Engineering",
      score: "API & Middleware",
      badge: "Node.js & Express",
      description: "Engineered scalable REST APIs, JWT authentication layers, Multer file processing, and asynchronous server-side middleware pipelines."
    },
    {
      id: "milestone-7",
      category: "Learning Milestone",
      stage: "Data Tier & Persistence",
      title: "Backend Development & Databases",
      institution: "Document & Relational Persistence",
      score: "MongoDB & SQLite",
      badge: "Databases & Schemas",
      description: "Architected normalized relational schemas and document models with SQLite and MongoDB, focusing on indexing, query efficiency, and data integrity."
    },
    {
      id: "milestone-8",
      category: "Project & Software Systems",
      stage: "Active Engineering",
      title: "Software Projects & Competitive Problem Solving",
      institution: "OpportunityHub • Logistics Routing • 350+ DSA",
      score: "350+ DSA Solved",
      badge: "Active Projects",
      description: "Shipped OpportunityHub hackathon aggregator, co-developed operations research routing optimization in Python, and solved 350+ DSA problems across LeetCode and GeeksforGeeks."
    }
  ],

  skills: {
    categories: [
      {
        id: "languages",
        title: "Languages",
        description: "Core programming and query languages used in coursework, algorithms, and projects.",
        items: ["C", "C++", "Python", "JavaScript", "SQL"]
      },
      {
        id: "frontend",
        title: "Frontend",
        description: "User interface technologies and component-driven web frameworks.",
        items: ["HTML", "CSS", "React"]
      },
      {
        id: "backend",
        title: "Backend & APIs",
        description: "Server-side runtimes, micro-frameworks, and API security layers.",
        items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "JWT Authentication", "Multer"]
      },
      {
        id: "databases",
        title: "Databases",
        description: "Relational and document-oriented database systems.",
        items: ["MongoDB", "SQLite"]
      },
      {
        id: "ml",
        title: "AI & Machine Learning",
        description: "Libraries and frameworks for machine learning, data processing, and analysis.",
        items: ["PyTorch", "scikit-learn", "NumPy", "Pandas"]
      },
      {
        id: "tools",
        title: "Developer Tools & Environment",
        description: "Essential development environments, version control, and cloud platforms.",
        items: ["VS Code", "Git", "GitHub", "Vite", "Linux", "Vercel", "Jupyter Notebook", "Google Colab"]
      }
    ]
  },

  projects: [
    {
      id: "opportunity-hub",
      title: "OpportunityHub",
      category: "Full-Stack Web Development",
      categoryKey: "fullstack",
      summary: "A hackathon and contest aggregator designed to help students discover, filter, and track technical competitions in one unified platform.",
      techStack: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT Authentication", "Git", "GitHub"],
      featuresImplemented: [
        "Aggregation of hackathons and technical competitions across domains",
        "Categorized contest listings with relevant deadlines and direct links",
        "MERN-based full stack application architecture with REST API endpoints"
      ],
      plannedFeatures: [
        "Planned AI integration for intelligent contest recommendation and skill matching"
      ],
      repoUrl: "https://github.com/Soham318/OpportunityHub",
      isCollaborative: false,
      status: "Active Project",
      statusType: "implemented",
      visualBadge: "MERN Stack",
      browserUrl: "opportunity-hub.vercel.app",
      metrics: [
        { label: "Architecture", value: "MERN Stack" },
        { label: "Data Pipeline", value: "REST APIs" },
        { label: "Security", value: "JWT Auth" }
      ],
      caseStudy: {
        problem: "Engineering students frequently miss valuable hackathons, coding contests, and research challenges because announcements are scattered across social media and disparate portals.",
        solution: "OpportunityHub consolidates contest discovery into a structured, searchable catalog. Students can view upcoming events, track registration deadlines, filter by domain (AI, Web3, Algorithms), and save milestones.",
        architecture: "Client-server architecture using React single-page application frontend communicating via asynchronous fetch to an Express/Node.js REST API with MongoDB persistent document storage.",
        implementation: "Constructed modular React views, reusable filtering chips, date-sorting algorithms for approaching deadlines, and secured data schemas in MongoDB.",
        challenges: "Managing real-time status transitions between 'Open', 'Closing Soon', and 'Completed', alongside responsive multi-criteria filtering.",
        testing: "Unit tested API responses, verified cross-browser responsive layouts, and validated form input sanitization.",
        futureImprovements: "Automated event scrapers, personalized push alerts for deadlines, and AI-assisted team formation recommendations."
      }
    },
    {
      id: "ot-project",
      title: "Transportation-Routing Optimization",
      category: "Operations Research & Routing",
      categoryKey: "algorithms",
      summary: "A collaborative academic operations research project focused on transportation routing, network flow, and logistics optimization algorithms.",
      techStack: ["Python", "NumPy", "Git", "GitHub"],
      collaborationNotice: "Collaborative project (Group 10 with Yash-SD99).",
      featuresImplemented: [
        "Operations research mathematical problem formulation for freight distribution",
        "Network graph modeling of transportation hubs and delivery nodes",
        "Implementation and benchmarking of shortest path algorithms (Dijkstra, simplex model)"
      ],
      plannedFeatures: [
        "Dynamic real-time traffic weighting and multi-commodity flow simulation"
      ],
      repoUrl: "https://github.com/Yash-SD99/OTprojectGRP10",
      isCollaborative: true,
      status: "Collaborative Academic Project",
      statusType: "implemented",
      visualBadge: "Python OR",
      browserUrl: "routing-model.vjti.internal",
      metrics: [
        { label: "Algorithm", value: "Network Flow" },
        { label: "Language", value: "Python 3" },
        { label: "Context", value: "VJTI Coursework" }
      ],
      caseStudy: {
        problem: "Logistics and shipping networks incur substantial fuel and delay costs when routes are planned without mathematical optimization across constrained transfer nodes.",
        solution: "Formulated an operations research linear programming and graph traversal model to compute minimal cost-distance distribution paths between multi-source warehouses and destination hubs.",
        architecture: "Python algorithmic pipeline leveraging NumPy matrices for adjacency matrices, cost vectors, and network graph constraints.",
        implementation: "Built Dijkstra shortest path solver and linear programming objective functions; evaluated optimality across synthetic node networks.",
        challenges: "Balancing computational latency with combinatorial path growth as node count scales in dense delivery graphs.",
        testing: "Benchmarked algorithmic execution against standard graph test instances and verified boundary conditions (e.g. disconnected subgraphs).",
        futureImprovements: "Integration with real-world OpenStreetMap GIS coordinate data and dynamic fleet capacity allocation."
      }
    },
    {
      id: "portfolio-project",
      title: "Interactive Personal Portfolio",
      category: "Frontend Architecture",
      categoryKey: "frontend",
      summary: "Personal developer portfolio built with React and custom CSS design tokens (Midnight Aurora), focusing on clean component architecture, editorial typography, and WCAG accessibility.",
      techStack: ["React", "Vite", "HTML", "CSS", "JavaScript", "Git", "GitHub", "Vercel"],
      featuresImplemented: [
        "Multi-theme design system with persistent CSS custom properties (4 selectable themes)",
        "WCAG 2.1 accessible navigation, keyboard skip links, and reduced-motion compliance",
        "Interactive project filtering, search, and accessible case study modal dialogs",
        "Responsive editorial typography and custom smooth desktop cursor"
      ],
      plannedFeatures: [
        "Direct verified contact delivery endpoint and automated lighthouse CI auditing"
      ],
      repoUrl: "https://github.com/Soham318",
      isCollaborative: false,
      status: "Active Project",
      statusType: "implemented",
      visualBadge: "React + Vite",
      browserUrl: "sohamchavan.dev",
      metrics: [
        { label: "Themes", value: "4 Switchable" },
        { label: "Accessibility", value: "WCAG 2.1" },
        { label: "Speed", value: "Vite Bundled" }
      ],
      caseStudy: {
        problem: "Many student portfolios rely on bloated templates with heavy dependencies, inaccessible animations, and unclear distinctions between real code and claims.",
        solution: "A bespoke, zero-bloat portfolio engineered using React 19, Vite, and modular Vanilla CSS tokens. Built with editorial clarity, honest status labeling, and recruiter-focused ergonomics.",
        architecture: "Component-based architecture organized into design tokens, atomic UI primitives, modular section components, and custom hooks (`useScrollSpy`, `useScrollProgress`, `useTheme`).",
        implementation: "Created keyboard-accessible modal dialogs, tab-filtered skill matrix, responsive browser mockup showcases, smooth cursor interactions, and neon contact styling.",
        challenges: "Guaranteeing WCAG AAA contrast compliance across all dark and light themes while maintaining vibrant aesthetics.",
        testing: "Tested on Chrome, Firefox, and Edge across desktop, tablet, and mobile; verified keyboard tab-index flows, focus-visible indicators, and screen-reader headings hierarchy.",
        futureImprovements: "Integration of interactive algorithm visualizer widgets and automated CI bundle size tracking."
      }
    },
    {
      id: "youtube-thumbnail",
      title: "YouTube Thumbnail Generator",
      category: "Frontend Tools & Canvas",
      categoryKey: "concepts",
      summary: "A browser-based creative tool concept designed to help content creators rapidly assemble high-CTR video thumbnails with typography overlays and layout templates.",
      techStack: ["React", "JavaScript", "HTML", "CSS", "Vite", "Git", "GitHub"],
      featuresImplemented: [],
      plannedFeatures: [
        "Thumbnail templates and responsive 16:9 canvas layouts",
        "Text overlays with customizable typography, outlines, and drop shadows",
        "Image upload, subject positioning, and cutout placement",
        "Client-side high-resolution PNG/JPG canvas preview and export",
        "Optional AI-assisted thumbnail suggestions and CTR contrast analysis"
      ],
      repoUrl: null,
      isCollaborative: false,
      status: "Planned Project Concept",
      statusType: "planned",
      visualBadge: "Planned Architecture",
      browserUrl: "thumbnail-studio.concept",
      metrics: [
        { label: "Status", value: "In Design" },
        { label: "Canvas Ratio", value: "16:9 Standard" },
        { label: "Rendering", value: "HTML5 Canvas" }
      ],
      caseStudy: {
        problem: "Content creators lose hours struggling with complex desktop design software or paying subscriptions just to produce clean, high-contrast YouTube thumbnails with bold text overlays.",
        solution: "A streamlined web-based thumbnail design studio with curated layout presets, instant text styling, and one-click export formatted to YouTube's exact dimensions (1280x720).",
        architecture: "Client-side HTML5 Canvas / Fabric.js engine driven by React state management; planned serverless endpoint for AI thumbnail enhancement suggestions.",
        implementation: "Project is in architectural design and UI specification phase. No live deployment exists yet; concept cards illustrate the planned user experience.",
        challenges: "Client-side high-resolution rasterization, font rendering synchronization across devices, and performance during multi-layer dragging.",
        testing: "Planned testing includes export dimension accuracy, cross-browser canvas export fidelity, and memory leak prevention during intensive image manipulation.",
        futureImprovements: "Generative AI layout suggestions, A/B testing CTR simulation, and direct YouTube Data API upload integration."
      }
    },
    {
      id: "restaurant-system",
      title: "Restaurant Management System",
      category: "Full-Stack Enterprise Systems",
      categoryKey: "concepts",
      summary: "A unified restaurant operational platform concept connecting interactive table seating grids, kitchen order tickets (KOT), inventory deduction, and billing summaries.",
      techStack: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT Authentication", "Multer"],
      featuresImplemented: [],
      plannedFeatures: [
        "Dynamic digital menu management with category and pricing controls",
        "Interactive floor table layout and real-time reservation scheduling",
        "Order management pipeline with real-time Kitchen Order Ticket (KOT) dispatch",
        "Inventory tracking with automatic ingredient deduction per order",
        "Automated customer billing, tax calculation, and order summaries",
        "Role-based access control for Administrators, Waitstaff, and Kitchen staff"
      ],
      repoUrl: null,
      isCollaborative: false,
      status: "Planned Project Concept",
      statusType: "planned",
      visualBadge: "Planned Architecture",
      browserUrl: "bistroflow-pos.concept",
      metrics: [
        { label: "Status", value: "In Design" },
        { label: "Target Roles", value: "Admin / KOT / Waiter" },
        { label: "Data Architecture", value: "MongoDB Schemas" }
      ],
      caseStudy: {
        problem: "Small to medium restaurants face operational delays, order discrepancies, and inventory leakages because table orders, kitchen prep, and final checkout run on disconnected paper tickets.",
        solution: "A unified multi-role management application linking real-time table occupancy maps, instant digital kitchen tickets, live inventory deduction, and consolidated customer billing.",
        architecture: "Role-based micro-dashboards (Waitstaff, Kitchen, Cashier, Admin) with RESTful API endpoints, JWT token authentication, and centralized MongoDB order schemas.",
        implementation: "Project is in architectural planning and data modeling phase. System requirements, entity relationships, and UI wireframes are defined.",
        challenges: "Preventing race conditions during concurrent table bookings and maintaining low-latency state synchronization between kitchen and floor staff.",
        testing: "Planned testing includes concurrent table reservation conflict validation, JWT role barrier verification, and tax billing calculation unit tests.",
        futureImprovements: "Customer QR self-ordering, digital UPI payments integration, and predictive ingredient demand forecasting."
      }
    },
    {
      id: "resume-builder",
      title: "AI Resume Builder",
      category: "AI & Full-Stack Applications",
      categoryKey: "concepts",
      summary: "An intelligent resume creation platform concept featuring structured step-by-step forms, real-time formatted previews, ATS-friendly templates, and PDF export.",
      techStack: ["React", "Python", "FastAPI", "PyTorch", "scikit-learn", "SQLite", "Git"],
      featuresImplemented: [],
      plannedFeatures: [
        "Structured step-by-step form editor for education, experience, and projects",
        "Live formatted resume preview with instant theme and font switching",
        "Clean, ATS-optimized layout templates adhering to industry hiring standards",
        "Direct export to high-resolution vector PDF",
        "Optional AI-assisted bullet-point improvement and job-description keyword tailoring"
      ],
      repoUrl: null,
      isCollaborative: false,
      status: "Planned Project Concept",
      statusType: "planned",
      visualBadge: "Planned Architecture",
      browserUrl: "resumate-ai.concept",
      metrics: [
        { label: "Status", value: "In Design" },
        { label: "Preview Engine", value: "Live Split-View" },
        { label: "Export Target", value: "Vector PDF" }
      ],
      caseStudy: {
        problem: "Students and young professionals struggle to format their achievements in compliance with automated Applicant Tracking Systems (ATS), often getting rejected due to poor parsing.",
        solution: "An accessible web application offering structured data capture, real-time live preview, ATS-score feedback, and natural language bullet-point suggestions tailored to job descriptions.",
        architecture: "React split-pane frontend communicating with a FastAPI Python microservice running NLP sentence embeddings for bullet point enhancement and headless PDF generation.",
        implementation: "Project is in architectural concept phase. Data schema for JSON resume standards and preliminary ATS parsing benchmarks are established.",
        challenges: "Enforcing single-page pagination constraints across dynamic content and generating clean, accessible PDF DOM trees.",
        testing: "Planned testing includes parsing validation across standard ATS extractors, cross-browser print CSS rendering, and text enhancement latency tests.",
        futureImprovements: "One-click LinkedIn profile import, job posting keyword match scores, and interview prep question generator based on resume bullets."
      }
    }
  ],

  contact: {
    email: "csoham8042@gmail.com",
    github: "https://github.com/Soham318",
    linkedin: "https://www.linkedin.com/in/soham-chavan-1a8339348/",
    location: "Mumbai, India",
    availability: "Seeking Software Development Internships & Placement Opportunities"
  }
};
