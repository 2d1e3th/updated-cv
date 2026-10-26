// Add verified entries only: { id, category, title, issuer, year, description, url }.
export const achievements = [
  {
    id: "ai-capstone-seminar",
    category: "Seminars",
    title: "Artificial Intelligence for Innovation of Capstone Project",
    issuer: "Davao del Norte State College · Institute of Computing",
    year: "September 28–29, 2026",
    description: "Completed the two-day BSIT 413 Series Training, part of the Advanced Seminar Series for BSIT fourth-year students, held through Microsoft Teams and at the DNSC Gymnasium.",
    image: "/assets/certificates/ai-capstone.webp",
    documents: [{ label: "View certificate", url: "/documents/certificates/ai-capstone-completion.png" }],
  },
  {
    id: "cisco-srwe",
    category: "Certificates",
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy · Davao del Norte State College",
    year: "December 4, 2025",
    description: "Completed the course covering VLANs, inter-VLAN routing, STP, EtherChannel, wireless LANs, switch security, and IPv4/IPv6 static routing.",
    image: "/assets/certificates/cisco-srwe.webp",
    documents: [
      { label: "View course certificate", url: "/documents/certificates/cisco-srwe-course.pdf" },
      { label: "View student credential", url: "/documents/certificates/cisco-srwe-credential.pdf" },
    ],
  },
];
export const achievementCategories = [
  "Certificates",
  "Seminars",
  "Trainings",
  "Academic Activities",
  "Workshops",
  "Awards",
  "Organizations",
];
