import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Sprout } from "lucide-react";
import { socials } from "../data/profile";

export function Reveal({ children, className = "", delay = 0 }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: reduce ? 0 : 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}
export function SectionHeading({ number, eyebrow, title, children }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span>{number} /</span> {eyebrow}
        </p>
        <h2>{title}</h2>
      </div>
      {children && <div className="section-aside">{children}</div>}
    </div>
  );
}
export function SocialLinks({ includeEmail = true }) {
  const icons = { GitHub: Github, LinkedIn: Linkedin, Email: Mail };
  const visibleSocials = socials.filter(
    ({ label }) => includeEmail || label !== "Email",
  );
  return (
    <div className="social-links">
      {visibleSocials.map(({ label, url }) => {
        const Icon = icons[label] || ArrowUpRight;
        return (
          <a key={label} href={url}>
            <Icon size={15} aria-hidden="true" />
            {label}
          </a>
        );
      })}
    </div>
  );
}
export function Bloom({ className = "" }) {
  return <Sprout className={className} strokeWidth={1} aria-hidden="true" />;
}
export function Tags({ items }) {
  return (
    <ul className="tags">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
