import { lazy, Suspense, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Layout from "./components/Layout";
import CommandPalette from "./components/CommandPalette";
import { About, Education } from "./sections/Profile";
import {
  Profile,
  Foundations,
  Capabilities,
  ConnectCTA,
} from "./sections/Home";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import GitHubRepositories from "./sections/GitHubRepositories";
import { Achievements, Experience, WorkingRhythm } from "./sections/Milestones";
import Contact from "./sections/Contact";
import { useNavigation } from "./hooks/useNavigation";
const CV = lazy(() => import("./sections/CV"));
const titles = {
  "/": "Home",
  "/about": "About",
  "/works": "Works",
  "/certificates": "Certificates",
  "/contact": "Contact",
};
function PageIntro({ eyebrow, title, copy }) {
  return (
    <div className="page-width page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{copy}</p>
    </div>
  );
}
export default function App() {
  const path = useNavigation();
  const reduce = useReducedMotion();
  const [commandOpen, setCommandOpen] = useState(false);
  useEffect(() => {
    if (titles[path])
      document.title = `${titles[path]} — May Antonette Alterado | IT Portfolio`;
  }, [path]);
  useEffect(() => {
    const shortcut = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (document.querySelector("dialog[open]:not(.command-dialog)")) return;
        setCommandOpen((previous) => !previous);
      }
    };
    document.addEventListener("keydown", shortcut);
    return () => document.removeEventListener("keydown", shortcut);
  }, []);
  if (["/cv", "/cv.html"].includes(path))
    return (
      <Suspense fallback={<p className="page-loading">Opening CV…</p>}>
        <CV />
      </Suspense>
    );
  let content;
  if (path === "/")
    content = (
      <>
        <Profile />
        <Foundations />
        <Capabilities />
        <Projects featured />
        <ConnectCTA />
      </>
    );
  else if (path === "/about")
    content = (
      <>
        <PageIntro
          eyebrow="A LITTLE ABOUT ME"
          title={
            <>
              A thoughtful approach.
              <br />
              <span className="gradient-text">Always growing.</span>
            </>
          }
          copy="Get to know the person, the purpose, and the learning behind the work."
        />
        <About />
        <Education />
        <Skills />
        <Experience />
        <WorkingRhythm />
        <ConnectCTA />
      </>
    );
  else if (path === "/works")
    content = (
      <>
        <PageIntro
          eyebrow="MY GROWING COLLECTION"
          title={
            <>
              Selected <span className="gradient-text">work.</span>
            </>
          }
          copy="A closer look at my portfolio and public repositories. Real work, with room to develop."
        />
        <Projects />
        <GitHubRepositories />
        <ConnectCTA />
      </>
    );
  else if (path === "/certificates")
    content = (
      <>
        <PageIntro
          eyebrow="LEARNING, DOCUMENTED"
          title={
            <>
              Milestones{" "}
              <span className="gradient-text">&amp; credentials.</span>
            </>
          }
          copy="A growing record of verified certificates, seminars, training, and academic milestones."
        />
        <Achievements />
        <ConnectCTA />
      </>
    );
  else if (path === "/contact")
    content = (
      <>
        <PageIntro
          eyebrow="START A CONVERSATION"
          title={
            <>
              Let’s build{" "}
              <span className="gradient-text">what comes next.</span>
            </>
          }
          copy="An opportunity, a collaboration, or a simple hello. I’d love to hear from you."
        />
        <Contact />
      </>
    );
  else
    content = (
      <>
        <PageIntro
          eyebrow="PAGE NOT FOUND"
          title="Let’s get you back on track."
          copy="This page isn’t in the portfolio."
        />
        <div className="page-width">
          <a className="button" href="/">
            Back to Home
          </a>
        </div>
      </>
    );
  return (
    <>
      <Layout path={path} onCommand={() => setCommandOpen(true)}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            data-route={path}
            key={path}
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.18 }}
          >
            {content}
          </motion.div>
        </AnimatePresence>
      </Layout>
      <CommandPalette
        open={commandOpen}
        onClose={() => setCommandOpen(false)}
      />
    </>
  );
}
