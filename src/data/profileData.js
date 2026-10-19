/**
 * ============================================================================
 * CENTRAL PROFILE DATA STORE
 * Professional Developer Portfolio | Soham Umesh Chavan
 * 
 * NOTE:
 * - Genuine personal and academic details from Soham Umesh Chavan.
 * - No invented marks, grades, graduation years, internships, or certifications.
 * - Skills categorized strictly without arbitrary proficiency percentages.
 * - Clearly distinguishes implemented project features from planned AI work.
 * ============================================================================
 */

export const profileData = {
  personal: {
    name: "Soham Umesh Chavan",
    title: "Computer Engineering Student",
    headline: "Computer Engineering Student | Aspiring Software Developer",
    goal: "Software development internships and placement opportunities.",
    location: "[Placeholder: Location, India]",
    bio: "Computer Engineering undergraduate at VJTI with a focus on software development, backend systems, and web technologies. Building practical software projects and seeking software engineering internships and placement opportunities.",
    avatarPlaceholder: {
      initials: "SC",
      altText: "Avatar placeholder for Soham Umesh Chavan"
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
      url: "[Placeholder: https://linkedin.com/in/your-username]",
      isPlaceholder: true,
      hint: "LinkedIn profile placeholder"
    },
    {
      id: "email",
      label: "Email",
      value: "[Placeholder: your.email@example.com]",
      isPlaceholder: true,
      hint: "Email address placeholder"
    }
  ],

  education: {
    degree: "B.Tech in Computer Engineering",
    institution: "VJTI (Veermata Jijabai Technological Institute)",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Operating Systems",
      "Operations Research / Optimization Techniques"
    ]
  },

  skills: {
    categories: [
      {
        id: "languages",
        title: "Languages",
        description: "Core programming and query languages used in coursework and projects.",
        items: ["Python", "JavaScript", "SQL", "C", "C++"]
      },
      {
        id: "backend",
        title: "Backend Development",
        description: "Server-side runtimes, frameworks, and utility libraries.",
        items: ["Node.js", "Express.js", "JWT Authentication", "Multer", "bcrypt", "dotenv", "CORS"]
      },
      {
        id: "databases",
        title: "Databases",
        description: "Relational and document-oriented database systems.",
        items: ["SQLite", "MongoDB"]
      },
      {
        id: "ml",
        title: "Machine Learning & Data",
        description: "Libraries and frameworks for machine learning, data processing, and analysis.",
        items: ["PyTorch", "Scikit-learn", "NumPy", "Pandas"]
      },
      {
        id: "frontend",
        title: "Frontend Development",
        description: "User interface technologies and component-driven web frameworks.",
        items: ["React", "HTML", "CSS"]
      }
    ]
  },

  projects: [
    {
      id: "opportunity-hub",
      title: "OpportunityHub",
      category: "Full-Stack Web Development",
      summary: "A hackathon and contest aggregator designed to help students discover, filter, and track technical competitions in one unified platform.",
      techStack: ["MongoDB", "Express.js", "React", "Node.js"],
      featuresImplemented: [
        "Aggregation of hackathons and technical competitions",
        "Categorized contest listings with relevant deadlines and links",
        "MERN-based full stack application architecture"
      ],
      plannedFeatures: [
        "Planned AI integration for intelligent contest recommendation and filtering"
      ],
      repoUrl: "https://github.com/Soham318/OpportunityHub",
      isCollaborative: false,
      status: "Active Project"
    },
    {
      id: "ot-project",
      title: "Transportation-Routing Optimization Project",
      category: "Operations Research & Routing",
      summary: "A collaborative academic operations research project focused on transportation routing, network flow, and logistics optimization algorithms.",
      techStack: ["Python", "Operations Research", "Algorithms"],
      collaborationNotice: "Collaborative project (Group 10 with Yash-SD99).",
      contributionStatus: "[Placeholder: Soham's specific contribution details to be confirmed]",
      repoUrl: "https://github.com/Yash-SD99/OTprojectGRP10",
      isCollaborative: true,
      status: "Collaborative Academic Project"
    },
    {
      id: "portfolio-project",
      title: "Interactive Personal Professional Profile",
      category: "Frontend Architecture",
      summary: "An ongoing personal developer portfolio built with React and custom CSS design tokens (Midnight Aurora), focusing on clean component architecture and keyboard accessibility.",
      techStack: ["React", "Vite", "Vanilla CSS", "CSS Custom Properties"],
      note: "Ongoing project. Usability evaluation and accessibility validation in progress.",
      repoUrl: "https://github.com/Soham318",
      isCollaborative: false,
      status: "Ongoing Project"
    }
  ],

  experience: [
    {
      id: "exp-1",
      role: "Collaborator — Transportation Routing Project",
      organization: "VJTI Coursework (Operations Research)",
      type: "Academic & Collaborative Experience",
      responsibilities: [
        "Collaborated with project team members on transportation routing algorithms and operations research problem formulation.",
        "[Placeholder: Specific module / algorithmic contribution to be confirmed]."
      ]
    }
  ],

  resume: {
    isAvailable: false,
    statusText: "Resume document is currently unavailable pending verification of academic credentials and updated project entries.",
    summaryHighlights: [
      "B.Tech in Computer Engineering undergraduate at VJTI.",
      "Experience with backend development (Node.js, Express.js, MongoDB, SQLite) and programming languages (C++, Python, JavaScript).",
      "Actively expanding skills in frontend development (React) and machine learning (PyTorch, Scikit-learn)."
    ]
  },

  contact: {
    email: "[Placeholder: your.email@example.com]",
    github: "https://github.com/Soham318",
    linkedin: "[Placeholder: https://linkedin.com/in/your-username]",
    location: "[Placeholder: Location, India]",
    availability: "Seeking Software Development Internships & Placement Opportunities"
  }
};
