import { useId, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ChevronDown,
  FileText,
  Network,
  Monitor,
  Database,
  Sprout,
} from "lucide-react";
import { toolkit } from "../data/profile";
import { Reveal, SectionHeading } from "../components/Shared";

const icons = [Network, FileText, Monitor, Database];
export default function Skills() {
  const [active, setActive] = useState(0);
  const id = useId();
  const reduce = useReducedMotion();
  return (
    <section
      id="skills"
      data-chapter="3"
      className="page-width section-space"
      aria-label="Skills"
    >
      <Reveal>
        <SectionHeading
          number="04"
          eyebrow="A CONNECTED WAY OF WORKING"
          title={
            <>
              My Working <em>Toolkit.</em>
            </>
          }
        >
          <p>
            Explore a cluster.
            <br />
            The details make the difference.
          </p>
        </SectionHeading>
        <div className={`knowledge-map active-${active}`}>
          <svg
            className="map-connectors"
            viewBox="0 0 1000 500"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            {[
              "M500 250C400 250 400 120 270 120",
              "M500 250C600 250 600 120 730 120",
              "M500 250C400 250 400 380 270 380",
              "M500 250C600 250 600 380 730 380",
            ].map((d, i) => (
              <path
                key={d}
                d={d}
                stroke={active === i ? "#654b68" : "#cfc6cd"}
                strokeWidth={active === i ? 1.6 : 1}
              />
            ))}
          </svg>
          <motion.div
            className="map-center"
            animate={{ scale: reduce ? 1 : active === null ? 1 : 1.035 }}
            transition={{ duration: 0.3 }}
          >
            <Sprout size={25} strokeWidth={1.1} aria-hidden="true" />
            <span>ANTONETTE</span>
            <small>ALWAYS LEARNING</small>
          </motion.div>
          {toolkit.map((cluster, index) => {
            const Icon = icons[index];
            const expanded = active === index;
            const panelId = `${id}-${index}`;
            return (
              <article
                key={cluster.name}
                className={`skill-cluster cluster-${index} ${expanded ? "selected" : ""}`}
                onMouseEnter={() => {
                  if (matchMedia("(hover:hover) and (min-width:701px)").matches)
                    setActive(index);
                }}
              >
                <h3>
                  <button
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    id={`${panelId}-button`}
                    onClick={() => setActive(expanded ? null : index)}
                    onFocus={() => {
                      if (innerWidth > 700) setActive(index);
                    }}
                  >
                    <span className="cluster-icon">
                      <Icon size={19} strokeWidth={1.3} aria-hidden="true" />
                    </span>
                    <span>
                      <small>CLUSTER / 0{index + 1}</small>
                      {cluster.name}
                    </span>
                    <ChevronDown
                      size={16}
                      className={expanded ? "expanded-chevron" : ""}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={`${panelId}-button`}
                  hidden={!expanded}
                >
                  <p>{cluster.note}</p>
                  <ul>
                    {cluster.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
        <p className="map-footnote">
          <span className="small-dot" />
          Foundations and practical skills. Always developing, never measured in
          percentages.
        </p>
      </Reveal>
    </section>
  );
}
