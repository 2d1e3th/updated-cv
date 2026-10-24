import { useEffect } from "react";
import { ArrowLeft, Printer } from "lucide-react";
import { profile, toolkit, socials } from "../data/profile";
import { projects } from "../data/projects";
import { achievements } from "../data/achievements";
import { experience } from "../data/experience";

export default function CV() {
  useEffect(() => {
    document.title = `${profile.name} — Curriculum Vitae`;
  }, []);
  return (
    <div className="cv-page">
      <div className="cv-controls">
        <a href="/">
          <ArrowLeft size={15} aria-hidden="true" />
          Back to Fieldbook
        </a>
        <button className="button" onClick={() => window.print()}>
          <Printer size={16} aria-hidden="true" />
          Print / Save as PDF
        </button>
        <a className="text-link" href="/documents/May-Antonette-Alterado-CV.pdf" download="May-Antonette-Alterado-CV.pdf">
          Download original CV (PDF)
        </a>
      </div>
      <main className="cv-document">
        <header>
          <h1>{profile.name}</h1>
          <p>Information Technology Undergraduate</p>
          <p>
            {profile.location} ·{" "}
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
          <p className="cv-socials">
            {socials
              .filter((s) => s.label !== "Email")
              .map((s) => (
                <a href={s.url} key={s.label}>
                  {s.url.replace("https://www.", "").replace("https://", "")}
                </a>
              ))}
          </p>
        </header>
        <section>
          <h2>Profile</h2>
          <p>{profile.introduction}</p>
        </section>
        <section>
          <h2>Career Objective</h2>
          <p>{profile.objective}</p>
        </section>
        <section>
          <h2>Education</h2>
          <h3>{profile.program}</h3>
          <p>
            {profile.institution} · {profile.level}
          </p>
          <p>
            Senior High School: school, strand, and years to be added once
            confirmed.
          </p>
        </section>
        <section>
          <h2>Skills</h2>
          {toolkit.map((group) => (
            <p key={group.name}>
              <strong>{group.name}:</strong> {group.skills.join(" · ")}
            </p>
          ))}
          <p>
            Technical skills reflect foundational learning and ongoing
            development.
          </p>
        </section>
        <section>
          <h2>Projects</h2>
          {projects.map((project) => (
            <div className="cv-entry" key={project.id}>
              <h3>
                {project.name} — {project.status}
              </h3>
              <p>{project.description}</p>
              <p>{project.contribution}</p>
              <p>
                <a href={project.github}>
                  {project.github.replace("https://", "")}
                </a>
              </p>
            </div>
          ))}
        </section>
        <section>
          <h2>Achievements &amp; Certifications</h2>
          {achievements.length ? (
            achievements.map((item) => (
              <p key={item.id}>
                <strong>{item.title}</strong> · {item.issuer} · {item.year}
              </p>
            ))
          ) : (
            <p>
              Verified certificates, seminars, training, and academic milestones
              will be added as available.
            </p>
          )}
        </section>
        <section>
          <h2>Experience &amp; Involvement</h2>
          {experience.length ? (
            experience.map((item) => (
              <p key={item.id}>
                <strong>
                  {item.role} / {item.activity}
                </strong>{" "}
                · {item.organization} · {item.year}
                <br />
                {item.description}
              </p>
            ))
          ) : (
            <p>
              Currently building experience through learning and collaboration.
              Verified academic and community involvement will be added as
              available.
            </p>
          )}
        </section>
        <section>
          <h2>Contact</h2>
          <p>
            <a href={`mailto:${profile.email}`}>{profile.email}</a> ·{" "}
            {profile.location}
          </p>
        </section>
      </main>
    </div>
  );
}
