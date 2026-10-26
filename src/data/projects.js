// Only verified case studies belong here. Null fields are displayed honestly.
// Add projects using this shape; screenshots live in public/assets/.
export const projects = [
  {
    id: "smartalyze",
    name: "SMARTALYZE",
    category: "TEAM CAPSTONE / DATA ANALYSIS",
    description: "An AI-assisted platform in development that aims to help non-technical users clean, analyze, and visualize data through guided tools and clear explanations.",
    overview: "Our capstone project is designed to turn structured datasets into understandable charts, summaries, and AI-assisted explanations. Planned inputs include CSV, Excel, JSON, and images containing tables.",
    problem: "Preparing and interpreting raw data can be time-consuming and difficult for people with limited programming experience. SMARTALYZE aims to simplify this workflow while keeping users in control of suggested data corrections.",
    contribution: "Member of the capstone project team at Davao del Norte State College.",
    technologies: ["Data preparation", "Data visualization", "AI-assisted analysis"],
    toolsLabel: "Project focus",
    status: "In development",
    github: null,
    demo: null,
    screenshot: "/assets/smartalyze-cover.webp",
    screenshotAlt: "SMARTALYZE project cover: an AI-assisted data visualization and analysis platform",
    coverNote: "Project cover · System in development",
  },
  {
    id: "digital-fieldbook",
    name: "Personal CV Portfolio",
    category: "PERSONAL PORTFOLIO / WEB",
    description:
      "An interactive CV and portfolio bringing together my profile, working toolkit, and growing collection of work.",
    overview:
      "A redesign of my existing personal CV repository into an interactive portfolio, prepared for academic presentation and professional opportunities.",
    problem:
      "Bring scattered profile, skills, and academic information into one clear, accessible place that can grow with me.",
    contribution:
      "Personal profile and CV content, organization of the portfolio’s information, and the direction of this ongoing website redesign. The implementation was developed with AI assistance.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React",
    ],
    status: "In development",
    github: "https://github.com/2d1e3th/updated-cv",
    demo: null,
    screenshot: "/assets/fieldbook-preview.webp",
    screenshotAlt:
      "Desktop preview of Antonette’s portfolio with a personal introduction and portrait",
  },
];
