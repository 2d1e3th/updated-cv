import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  FolderOpen,
  Github,
  ExternalLink,
  FileText,
} from "lucide-react";
import { projects } from "../data/projects";
import Dialog from "../components/Dialog";
import { Reveal, SectionHeading, Tags } from "../components/Shared";

export default function Projects() {
  const [selected, setSelected] = useState(null);
  return (
    <section
      id="projects"
      data-chapter="4"
      className="projects-section"
      aria-label="Projects"
    >
      <div className="page-width section-space">
        <Reveal>
          <SectionHeading
            number="05"
            eyebrow="THOUGHTS TAKING SHAPE"
            title={
              <>
                Work in Progress
                <br />
                <em>&amp; Selected Projects.</em>
              </>
            }
          >
            <p>
              Case files from a growing practice.
              <br />
              Real work, with room to develop.
            </p>
          </SectionHeading>
          {projects.map((project, index) => (
            <motion.article layout className="case-file" key={project.id}>
              <div className="case-file-image">
                {project.screenshot ? (
                  <img
                    src={project.screenshot}
                    alt={project.screenshotAlt}
                    width="1000"
                    height="700"
                    loading="lazy"
                  />
                ) : (
                  <p className="screenshot-pending">Screenshot to be added</p>
                )}
                <div className="case-index">
                  <FolderOpen size={15} strokeWidth={1.3} aria-hidden="true" />
                  CASE FILE / {String(index + 1).padStart(2, "0")}
                </div>
              </div>
              <div className="case-file-copy">
                <p className="eyebrow">{project.category}</p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <span className="status-label">
                  <span className="small-dot" />
                  {project.status}
                </span>
                <Tags items={project.technologies.slice(0, 3)} />
                <button
                  className="case-open"
                  onClick={() => setSelected(project)}
                >
                  Open Case File{" "}
                  <ArrowUpRight
                    size={20}
                    strokeWidth={1.3}
                    aria-hidden="true"
                  />
                </button>
              </div>
            </motion.article>
          ))}
          <div className="future-case">
            <FileText size={24} strokeWidth={1} aria-hidden="true" />
            <div>
              <h3>The next chapter is being prepared.</h3>
              <p>
                Further academic and collaborative case studies will be added
                once the project details and my contributions are verified.
              </p>
            </div>
            <span>OPEN ENDED / ALWAYS GROWING</span>
          </div>
        </Reveal>
      </div>
      <Dialog
        open={!!selected}
        onClose={() => setSelected(null)}
        title={selected ? `${selected.name} case file` : "Project case file"}
        className="case-dialog"
      >
        {selected && (
          <>
            <p className="eyebrow">CASE FILE / {selected.category}</p>
            <h2>{selected.name}</h2>
            <span className="status-label">{selected.status}</span>
            {selected.screenshot ? (
              <img
                className="case-detail-image"
                src={selected.screenshot}
                alt={selected.screenshotAlt}
                width="1000"
                height="700"
                loading="lazy"
              />
            ) : (
              <p className="screenshot-pending">
                Screenshots will be added when available.
              </p>
            )}
            <div className="case-detail-grid">
              {[
                ["Overview", selected.overview],
                ["Problem", selected.problem],
                ["My Contribution", selected.contribution],
              ].map(([label, text]) => (
                <div key={label}>
                  <h3>{label}</h3>
                  <p>{text}</p>
                </div>
              ))}
              <div>
                <h3>Tools Used</h3>
                <Tags items={selected.technologies} />
              </div>
            </div>
            <div className="case-links">
              <a className="button" href={selected.github}>
                <Github size={16} aria-hidden="true" />
                GitHub <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              {selected.demo ? (
                <a className="text-link" href={selected.demo}>
                  <ExternalLink size={15} />
                  Live Demo
                </a>
              ) : (
                <p>Live demo / Add after deployment</p>
              )}
            </div>
          </>
        )}
      </Dialog>
    </section>
  );
}
