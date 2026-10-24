import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  FileText,
  GitBranch,
  LayoutGrid,
  Database,
  Table2,
  Search,
  Network,
  Layers,
  ArrowRight,
  GraduationCap,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { profile, toolkit } from "../data/profile";
import { Reveal, SocialLinks } from "../components/Shared";

const foundation = [
  [Code2, "HTML & CSS"],
  [Code2, "JavaScript"],
  [GitBranch, "Git & GitHub"],
  [FileText, "Documentation"],
  [Table2, "Spreadsheets"],
  [Database, "Database basics"],
  [Search, "Research"],
  [Layers, "Digital workflows"],
];
const icons = [LayoutGrid, FileText, Table2, Network];
export function Profile() {
  const reduce = useReducedMotion();
  return (
    <section
      className="hero page-width"
      id="profile"
      aria-labelledby="profile-title"
    >
      <div className="hero-grid">
        <motion.div
          className="hero-copy"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <p className="availability">
            <span />
            Open to internships &amp; collaboration
          </p>
          <h1 id="profile-title">
            Hi, I’m
            <br />
            <span className="gradient-text">Antonette.</span>
          </h1>
          <p className="hero-role">
            An Information Technology student
            <br />
            <span>with an organized approach to digital work.</span>
          </p>
          <p className="hero-intro">{profile.introduction}</p>
          <div className="hero-actions">
            <a href="/contact" className="button">
              Let’s connect <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a
              href="/documents/May-Antonette-Alterado-CV.pdf"
              className="download-link"
              download="May-Antonette-Alterado-CV.pdf"
            >
              Download CV <ArrowDown size={15} aria-hidden="true" />
            </a>
          </div>
          <SocialLinks />
        </motion.div>
        <motion.div
          className="portrait-stage"
          initial={reduce ? false : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="portrait-halo" aria-hidden="true" />
          <figure className="hero-portrait">
            <img
              src="/assets/profile.webp"
              srcSet="/assets/profile-small.webp 360w, /assets/profile.webp 720w"
              sizes="(max-width:700px) 280px, 420px"
              width="720"
              height="926"
              fetchPriority="high"
              alt="May Antonette A. Alterado in a black blazer and light blouse"
            />
            <figcaption>
              <span>May Antonette A. Alterado</span>
              <small>BSIT / Davao del Norte State College</small>
            </figcaption>
          </figure>
          <span className="portrait-badge">
            <GraduationCap size={18} aria-hidden="true" />
          </span>
          <div className="portrait-note">
            <span className="small-dot" />
            4th Year / Undergraduate
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export function Foundations() {
  return (
    <section className="foundation-section page-width">
      <Reveal>
        <div className="center-heading">
          <p className="eyebrow">MY WORKING FOUNDATION</p>
          <h2>
            Practical skills. <em>Purposeful tools.</em>
          </h2>
          <p>
            The things I’m learning and using to bring structure to digital
            work.
          </p>
        </div>
        <div className="foundation-list">
          {foundation.map(([Icon, label]) => (
            <a href="/about#skills" key={label}>
              <Icon size={19} strokeWidth={1.4} aria-hidden="true" />
              {label}
            </a>
          ))}
        </div>
        <p className="foundation-note">
          Foundational knowledge. Continuous learning. No arbitrary skill
          ratings.
        </p>
      </Reveal>
    </section>
  );
}
export function Capabilities() {
  return (
    <section className="page-width section-space capabilities-section">
      <Reveal>
        <div className="center-heading">
          <p className="eyebrow">BEYOND THE TOOLS</p>
          <h2>
            A little structure.
            <br />
            <em>A lot of possibility.</em>
          </h2>
          <p>How my strengths translate into thoughtful, useful work.</p>
        </div>
        <div className="capabilities-grid">
          {toolkit.map((group, index) => {
            const Icon = icons[index];
            return (
              <a
                href="/about#skills"
                key={group.name}
                className={`capability-card capability-${index}`}
              >
                <span className="capability-icon">
                  <Icon size={24} strokeWidth={1.4} aria-hidden="true" />
                </span>
                <span className="card-index">0{index + 1}</span>
                <h3>{group.name}</h3>
                <p>
                  {group.note} {group.skills.slice(0, 2).join(" and ")} are part
                  of my growing toolkit.
                </p>
                <ArrowUpRight
                  className="capability-arrow"
                  size={19}
                  aria-hidden="true"
                />
              </a>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
export function ConnectCTA() {
  return (
    <section className="page-width connect-banner">
      <Reveal>
        <p className="eyebrow">GROWING, ONE OPPORTUNITY AT A TIME</p>
        <h2>
          Have something <em>in mind?</em>
        </h2>
        <p>
          I’m open to internships, collaborative projects, and opportunities to
          learn.
        </p>
        <a href="/contact" className="button">
          Let’s talk <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </Reveal>
    </section>
  );
}
