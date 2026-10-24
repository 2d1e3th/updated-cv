import { useEffect, useState } from "react";
import { repositoryFallback, repositoryPriority } from "../data/repositories";
import { githubUsername, githubRepositoriesUrl } from "../config/site";

export function selectRepositories(data) {
  if (!Array.isArray(data)) throw new Error("Invalid GitHub response");
  const excluded = new Set([githubUsername, "for-dhal", "confession-webpage"]);
  const rank = (name) => {
    const i = repositoryPriority.indexOf(name);
    return i < 0 ? 99 : i;
  };
  const repositories = data.filter(
    (repo) =>
      !repo.fork &&
      !repo.archived &&
      !excluded.has(repo.name) &&
      typeof repo.name === "string" &&
      (repo.html_url || "").startsWith(`https://github.com/${githubUsername}/`),
  );
  return repositories
    .sort(
      (a, b) =>
        rank(a.name) - rank(b.name) ||
        new Date(b.updated_at) - new Date(a.updated_at),
    )
    .slice(0, 6);
}
export default function useRepositories() {
  const [state, setState] = useState({
    repositories: repositoryFallback,
    status: "loading",
  });
  useEffect(() => {
    const controller = new AbortController();
    let mounted = true;
    const timer = setTimeout(() => controller.abort(), 8000);
    async function load() {
      try {
        const response = await fetch(
          githubRepositoriesUrl,
          {
            signal: controller.signal,
            headers: { Accept: "application/vnd.github+json" },
          },
        );
        if (!response.ok) throw new Error("GitHub unavailable");
        const repositories = selectRepositories(await response.json());
        if (!repositories.length) throw new Error("No repositories available");
        if (mounted) setState({ repositories, status: "live" });
      } catch {
        if (mounted)
          setState({ repositories: repositoryFallback, status: "fallback" });
      } finally {
        clearTimeout(timer);
      }
    }
    load();
    return () => {
      mounted = false;
      clearTimeout(timer);
      controller.abort();
    };
  }, []);
  return state;
}
