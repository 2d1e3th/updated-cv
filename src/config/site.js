// Vite exposes VITE_* values in the browser bundle. Never put secrets here.
export const githubUsername =
  import.meta.env.VITE_GITHUB_USERNAME?.trim() || "2d1e3th";

export const githubRepositoriesUrl =
  `https://api.github.com/users/${encodeURIComponent(githubUsername)}/repos?per_page=100`;
