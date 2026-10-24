import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { ArrowUpRight, Menu, X, Command, Flower2 } from "lucide-react";
import { chapters } from "../data/profile";
import { useChapter } from "../hooks/useChapter";
import { SocialLinks } from "./Shared";

export default function Layout({ children, onCommand }) {
  const active = useChapter();
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const header = useRef(null);
  const toggle = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    const update = () => setScrolled(scrollY > 24);
    const close = (event) => {
      if (
        event.type === "keydown" &&
        event.key === "Escape" &&
        toggle.current?.getAttribute("aria-expanded") === "true"
      ) {
        setMenu(false);
        toggle.current?.focus();
      } else if (
        event.type === "pointerdown" &&
        !header.current?.contains(event.target)
      )
        setMenu(false);
    };
    const resize = () => {
      if (innerWidth > 1000) setMenu(false);
    };
    update();
    addEventListener("scroll", update, { passive: true });
    addEventListener("resize", resize);
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", close);
    return () => {
      removeEventListener("scroll", update);
      removeEventListener("resize", resize);
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", close);
    };
  }, []);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <motion.div
        className="reading-progress"
        style={{ scaleX: scrollYProgress }}
        aria-hidden="true"
      />
      <header
        ref={header}
        className={`site-header ${scrolled ? "scrolled" : ""}`}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget))
            setMenu(false);
        }}
      >
        <a className="brand" href="/#profile" onClick={() => setMenu(false)}>
          ANTONETTE<span>.</span>
        </a>
        <nav
          className={`header-nav ${menu ? "open" : ""}`}
          id="header-navigation"
          aria-label="Main navigation"
        >
          {chapters.slice(1, 7).map((chapter, index) => (
            <a
              key={chapter.id}
              href={`#${chapter.id}`}
              aria-current={active === index + 1 ? "location" : undefined}
              onClick={() => setMenu(false)}
            >
              {chapter.label}
            </a>
          ))}
          <a
            className="mobile-contact"
            href="#contact"
            onClick={() => setMenu(false)}
          >
            Contact
          </a>
        </nav>
        <div className="header-actions">
          <button
            className="command-trigger"
            onClick={onCommand}
            aria-label="Open command palette"
          >
            <Command size={14} aria-hidden="true" />
            <span>K</span>
          </button>
          <a className="button button-small" href="/documents/May-Antonette-Alterado-CV.pdf">
            View CV <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <button
            ref={toggle}
            className="menu-toggle"
            aria-controls="header-navigation"
            aria-expanded={menu}
            aria-label={menu ? "Close navigation" : "Open navigation"}
            onClick={() => {
              const opening = !menu;
              setMenu(opening);
              if (opening) {
                requestAnimationFrame(() => {
                  header.current?.querySelector("nav a")?.focus();
                });
              }
            }}
          >
            {menu ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>
      <aside className="field-rail" aria-label="Field notes chapters">
        <p>FIELD NOTES</p>
        <ol>
          {chapters.map((chapter, index) => (
            <li key={chapter.id} className={index <= active ? "visited" : ""}>
              <a
                href={`#${chapter.id}`}
                aria-current={index === active ? "location" : undefined}
              >
                <span className="rail-number">{chapter.number}</span>
                <span className="rail-node">
                  {index === active ? (
                    <Flower2 size={17} strokeWidth={1.4} />
                  ) : (
                    <i />
                  )}
                </span>
                <span className="rail-label">{chapter.label}</span>
              </a>
            </li>
          ))}
        </ol>
        <span className="rail-bottom">A WORK IN GROWTH</span>
      </aside>
      <div className="chapter-mobile" aria-label="Current chapter">
        <span>FIELD NOTES</span>
        <span>
          {chapters[active].number} / {chapters[active].label}
        </span>
      </div>
      <div className="growth-path" aria-hidden="true">
        <motion.div style={{ scaleY: reduce ? 1 : scrollYProgress }} />
        {[2, 3, 4, 5, 6].map((n) => (
          <i key={n} style={{ top: `${(n - 1) * 16}%` }} />
        ))}
      </div>
      <main id="main">{children}</main>
      <footer className="page-footer page-width">
        <div className="footer-main">
          <a className="brand" href="#profile">
            ANTONETTE<span>.</span>
          </a>
          <p>Learning. Organizing. Creating.</p>
          <SocialLinks />
        </div>
        <div className="footer-meta">
          <span>© {new Date().getFullYear()} May Antonette A. Alterado</span>
          <span>THE DIGITAL FIELDBOOK / ALWAYS GROWING</span>
          <a href="#profile">Back to the beginning ↑</a>
        </div>
      </footer>
    </>
  );
}

export function EntryNote() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(!reduce);
  useEffect(() => {
    if (reduce) {
      setVisible(false);
      return;
    }
    const timer = setTimeout(() => setVisible(false), 800);
    return () => clearTimeout(timer);
  }, [reduce]);
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          aria-hidden="true"
          className="entry-note"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <p className="eyebrow">FIELD NOTE 001</p>
          <p>MAY ANTONETTE A. ALTERADO</p>
          <span>Opening the fieldbook</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
