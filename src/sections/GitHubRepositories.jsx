import { ArrowUpRight, Github, GitBranch } from "lucide-react";
import useRepositories from "../hooks/useRepositories";
import { Reveal } from "../components/Shared";

export default function GitHubRepositories() {
  const { repositories, status } = useRepositories();
  const date = (value) => {
    const d = new Date(value);
    return Number.isNaN(d.getTime())
      ? "Date unavailable"
      : new Intl.DateTimeFormat("en", {
          year: "numeric",
          month: "short",
          day: "numeric",
          timeZone: "UTC",
        }).format(d);
  };
  return (
    <section
      className="github-section page-width section-space"
      aria-labelledby="github-title"
    >
      <Reveal>
        <div className="github-heading">
          <div>
            <p className="eyebrow">
              <Github size={15} aria-hidden="true" />
              AN OPEN NOTEBOOK
            </p>
            <h2 id="github-title">
              From My <em>GitHub.</em>
            </h2>
          </div>
          <a className="text-link" href="https://github.com/2d1e3th">
            View Full GitHub Profile{" "}
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
        <p className="github-status" role="status">
          {status === "live"
            ? "Public repository metadata / live from GitHub"
            : status === "loading"
              ? "Checking GitHub · showing saved public repository details"
              : "GitHub is unavailable · showing verified saved repository details"}
        </p>
        <div className="repo-list">
          {repositories.map((repo, index) => (
            <a className="repo-row" href={repo.html_url} key={repo.name}>
              <span className="repo-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{repo.name}</h3>
                <p>
                  {repo.description || "No description provided on GitHub."}
                </p>
              </div>
              <div className="repo-meta">
                {repo.language && (
                  <span>
                    <GitBranch size={12} aria-hidden="true" />
                    {repo.language}
                  </span>
                )}
                <span>Updated {date(repo.updated_at)}</span>
              </div>
              <ArrowUpRight size={20} strokeWidth={1.3} aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="repo-note">
          Repository metadata is shown as published. It does not imply a
          verified role, completion status, or project outcome. Forks are
          excluded.
        </p>
      </Reveal>
    </section>
  );
}
