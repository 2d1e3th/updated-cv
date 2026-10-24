import { useEffect, useState } from "react";

const routes = new Set([
  "/",
  "/about",
  "/works",
  "/certificates",
  "/contact",
  "/cv",
  "/cv.html",
]);
const legacy = {
  profile: "/",
  about: "/about",
  education: "/about#education",
  skills: "/about#skills",
  projects: "/works",
  achievements: "/certificates",
  experience: "/about#experience",
  contact: "/contact",
};
export function useNavigation() {
  const [path, setPath] = useState(
    () => location.pathname.replace(/\/$/, "") || "/",
  );
  useEffect(() => {
    function update() {
      const next = location.pathname.replace(/\/$/, "") || "/";
      setPath(next);
      let attempts = 0;
      function settle() {
        const ready =
          document.querySelector(`[data-route="${next}"]`) ||
          (next.startsWith("/cv") && document.querySelector(".cv-document"));
        if (!ready && attempts++ < 60) {
          requestAnimationFrame(settle);
          return;
        }
        const target =
          location.hash && document.getElementById(location.hash.slice(1));
        if (target) target.scrollIntoView({ behavior: "instant" });
        else scrollTo({ top: 0, behavior: "instant" });
        const heading = document.querySelector("main h1");
        if (heading) {
          heading.tabIndex = -1;
          heading.focus({ preventScroll: true });
        }
      }
      requestAnimationFrame(settle);
    }
    function click(event) {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.ctrlKey ||
        event.metaKey ||
        event.altKey ||
        event.shiftKey
      )
        return;
      const link = event.target.closest("a[href]");
      if (!link || link.hasAttribute("download") || link.target === "_blank")
        return;
      let url = new URL(link.href, location.href);
      if (url.origin !== location.origin) return;
      const requested = url.pathname.replace(/\/$/, "") || "/";
      if (requested === "/" && legacy[url.hash.slice(1)])
        url = new URL(legacy[url.hash.slice(1)], location.origin);
      if (!routes.has(url.pathname)) return;
      if (url.pathname === location.pathname && url.hash === location.hash)
        return;
      event.preventDefault();
      history.pushState({}, "", url.pathname + url.hash);
      dispatchEvent(new PopStateEvent("popstate"));
    }
    document.addEventListener("click", click);
    addEventListener("popstate", update);
    // Existing shared bookmarks continue to land at the matching page.
    if (location.pathname === "/" && legacy[location.hash.slice(1)]) {
      history.replaceState({}, "", legacy[location.hash.slice(1)]);
      update();
    }
    return () => {
      document.removeEventListener("click", click);
      removeEventListener("popstate", update);
    };
  }, []);
  return path;
}
