import { lazy, Suspense, useEffect, useState } from "react";
import Layout, { EntryNote } from "./components/Layout";
import CommandPalette from "./components/CommandPalette";
import { Profile, About, Education } from "./sections/Profile";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import GitHubRepositories from "./sections/GitHubRepositories";
import { Achievements, Experience, WorkingRhythm } from "./sections/Milestones";
import Contact from "./sections/Contact";
const CV = lazy(() => import("./sections/CV"));

function Fieldbook() {
  const [commandOpen, setCommandOpen] = useState(false);
  useEffect(() => {
    const shortcut = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        // Keep a project dialog modal until it is closed.
        if (document.querySelector("dialog[open]:not(.command-dialog)")) return;
        setCommandOpen((previous) => !previous);
      }
    };
    document.addEventListener("keydown", shortcut);
    return () => document.removeEventListener("keydown", shortcut);
  }, []);
  return (
    <>
      <EntryNote />
      <Layout onCommand={() => setCommandOpen(true)}>
        <Profile />
        <About />
        <Education />
        <Skills />
        <Projects />
        <GitHubRepositories />
        <Achievements />
        <Experience />
        <WorkingRhythm />
        <Contact />
      </Layout>
      <CommandPalette
        open={commandOpen}
        onClose={() => setCommandOpen(false)}
      />
    </>
  );
}
export default function App() {
  if (["/cv", "/cv/", "/cv.html"].includes(window.location.pathname))
    return (
      <Suspense fallback={<p className="p-8">Opening CV…</p>}>
        <CV />
      </Suspense>
    );
  return <Fieldbook />;
}
