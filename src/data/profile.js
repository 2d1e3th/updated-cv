export const profile = {
  name: "May Antonette A. Alterado",
  email: "alteradomayantonette@gmail.com",
  program: "Bachelor of Science in Information Technology",
  institution: "Davao del Norte State College",
  level: "4th Year / Undergraduate",
  location: "Philippines",
  objective:
    "To develop my skills as an Information Technology professional by gaining practical experience in digital systems, documentation, data management, web technologies, and collaborative problem-solving while contributing reliable and organized work.",
  introduction:
    "I’m a Bachelor of Science in Information Technology undergraduate with interests in organized digital workflows, documentation, research, data management, and technology-assisted productivity.",
};

export const socials = [
  { label: "GitHub", url: "https://github.com/2d1e3th" },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/may-antonette-alterado-06b625434",
  },
  { label: "Email", url: `mailto:${profile.email}` },
  { label: "Facebook", url: "" },
  { label: "Instagram", url: "" },
].filter((social) => social.url);

export const chapters = [
  ["profile", "Profile"],
  ["about", "About"],
  ["education", "Education"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["achievements", "Achievements"],
  ["experience", "Experience"],
  ["contact", "Contact"],
].map(([id, label], index) => ({
  id,
  label,
  number: String(index + 1).padStart(2, "0"),
}));

export const qualities = [
  "Detail-Oriented",
  "Organized",
  "Responsible",
  "Adaptable",
  "Fast Learner",
  "Collaborative",
  "Resourceful",
];
export const interests = [
  "Information Technology",
  "Digital Productivity",
  "Documentation",
  "Data Management",
  "Web Technologies",
  "Information Systems",
];
export const toolkit = [
  {
    name: "Organization",
    note: "A clear place for every detail.",
    icon: "structure",
    skills: [
      "Project & Deadline Tracking",
      "File Organization",
      "Task Coordination",
      "Attention to Detail",
    ],
  },
  {
    name: "Documentation",
    note: "Information that is useful and easy to follow.",
    icon: "document",
    skills: [
      "Documentation & Reporting",
      "Research",
      "Written Communication",
      "Information Organization",
    ],
  },
  {
    name: "Digital Tools",
    note: "Practical tools, used with intention.",
    icon: "tools",
    skills: [
      "Microsoft Office",
      "Google Workspace",
      "Spreadsheet Management",
      "AI-Assisted Workflows",
    ],
  },
  {
    name: "Information Technology",
    note: "Foundations I’m continuing to develop.",
    icon: "technology",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Git & GitHub",
      "Basic Database Concepts",
      "Web Development Fundamentals",
    ],
  },
];
export const rhythm = [
  ["Organize", "Turn scattered information into clear, manageable structure."],
  ["Understand", "Review requirements carefully before beginning."],
  ["Create", "Use digital tools to produce organized and useful outputs."],
  ["Refine", "Review details, correct issues, and continuously improve."],
];
