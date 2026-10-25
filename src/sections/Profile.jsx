import { BookOpen } from "lucide-react";
import { profile, qualities, interests } from "../data/profile";
import { previousEducation } from "../data/education";
import { Reveal, Tags, SectionHeading } from "../components/Shared";
import PersonalPhotos from "../components/PersonalPhotos";

export function About() {
  const notes = [
    ["Full Name", profile.name],
    ["Program", profile.program],
    ["Status", profile.level],
    ["Institution", profile.institution],
    ["Location", profile.location],
    ["Email", <a href={`mailto:${profile.email}`}>{profile.email}</a>],
  ];
  return (
    <section
      className="page-width section-space"
      id="about"
      data-chapter="1"
      aria-labelledby="about-title"
    >
      <Reveal className="about-grid">
        <div className="about-heading">
          <p className="eyebrow">02 / THE PERSON BEHIND THE PAGES</p>
          <h2 id="about-title">
            Behind
            <br />
            <em>the work.</em>
          </h2>
          <p className="signature">May Antonette A. Alterado</p>
        </div>
        <div className="about-body">
          <p className="lead">
            A thoughtful approach.
            <br />A place for every detail.
            <br />
            Always room to grow.
          </p>
          <p>
            I’m a Bachelor of Science in Information Technology undergraduate
            who enjoys bringing structure to information, projects, and digital
            work.
          </p>
          <p>
            My strengths include documentation, research, data organization,
            spreadsheet-based tasks, project coordination, and using digital and
            AI-assisted tools to improve productivity.
          </p>
          <p>
            I value accuracy, organization, clear communication, collaboration,
            and continuous learning. I’m interested in opportunities where
            technology and practical problem-solving come together.
          </p>
          <aside className="objective">
            <h3>Career objective</h3>
            <p>{profile.objective}</p>
          </aside>
          <Tags items={qualities} />
        </div>
      </Reveal>
      <Reveal className="quick-notes">
        <h3>
          <BookOpen size={18} strokeWidth={1.3} aria-hidden="true" />
          Quick Notes
        </h3>
        <dl className="quick-grid">
          {notes.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        <div className="quick-interests">
          <p>CAREER INTERESTS</p>
          <Tags items={interests} />
        </div>
      </Reveal>
      <PersonalPhotos />
    </section>
  );
}
export function Education() {
  return (
    <section
      className="canvas-band"
      id="education"
      data-chapter="2"
      aria-label="Education"
    >
      <div className="page-width section-space">
        <Reveal>
          <SectionHeading
            number="03"
            eyebrow="BUILDING THE FOUNDATION"
            title={
              <>
                Learning today.
                <br />
                <em>Growing for tomorrow.</em>
              </>
            }
          >
            <p>
              Education /<br />
              Notes from my academic path.
            </p>
          </SectionHeading>
          <div className="academic-timeline">
            <article className="academic-entry">
              <div>
                <span className="status-label">
                  <span className="h-1.5 w-1.5 rounded-full bg-aubergine" />
                  {profile.educationYears}
                </span>
                <p>Current academic path</p>
              </div>
              <div>
                <h3>{profile.program}</h3>
                <p className="institution">{profile.institution}</p>
                <p>
                  Developing knowledge in information systems, digital tools,
                  data handling, documentation, and web development
                  fundamentals.
                </p>
              </div>
            </article>
            {previousEducation.map((entry) => (
              <article className="academic-entry" key={entry.id}>
                <div>
                  <span className="status-label">{entry.years}</span>
                </div>
                <div>
                  <h3>{entry.level}</h3>
                  <p className="institution">{entry.institution}</p>
                  {entry.track && <p>Track: {entry.track}</p>}
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
