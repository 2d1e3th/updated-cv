import { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import {
  ArrowUpRight,
  Menu,
  X,
  Command,
  Sun,
  Moon,
  ArrowRight,
  FileText,
} from "lucide-react";
import { profile } from "../data/profile";

const navigation = [
  ["/", "Home"],
  ["/about", "About"],
  ["/works", "Works"],
  ["/certificates", "Certificates"],
];
export default function Layout({ children, onCommand, path }) {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("antonette-theme") || "dark";
    } catch {
      return "dark";
    }
  });
  const header = useRef(null),
    toggle = useRef(null);
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("antonette-theme", theme);
    } catch {
      /* Storage is optional. */
    }
  }, [theme]);
  useEffect(() => {
    setMenu(false);
  }, [path]);
  useEffect(() => {
    const update = () => setScrolled(scrollY > 15);
    const close = (event) => {
      if (
        event.type === "keydown" &&
        event.key === "Escape" &&
        toggle.current?.getAttribute("aria-expanded") === "true"
      ) {
        setMenu(false);
        toggle.current.focus();
      }
      if (
        event.type === "pointerdown" &&
        !header.current?.contains(event.target)
      )
        setMenu(false);
    };
    const resize = () => {
      if (innerWidth > 800) setMenu(false);
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
        <a href="/" className="brand" aria-label="Antonette home">
          <span className="brand-monogram" aria-hidden="true">@</span>
          <span className="brand-wordmark">
            antonette<span>.</span>
          </span>
        </a>
        <nav
          id="header-navigation"
          aria-label="Main navigation"
          className={`header-nav ${menu ? "open" : ""}`}
        >
          {navigation.map(([url, label]) => (
            <a
              key={url}
              href={url}
              aria-current={path === url ? "page" : undefined}
              onClick={() => setMenu(false)}
            >
              {label}
              {path === url && (
                <motion.span
                  layoutId="active-nav"
                  className="active-nav-dot"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </a>
          ))}
          <a
            className="mobile-contact"
            href="/contact"
            aria-current={path === "/contact" ? "page" : undefined}
            onClick={() => setMenu(false)}
          >
            Contact
          </a>
        </nav>
        <div className="header-actions">
          <button
            className="command-trigger icon-button"
            onClick={onCommand}
            aria-label="Open command palette"
          >
            <Command size={15} />
            <span>K</span>
          </button>
          <a
            className="button button-small cv-spotlight"
            href="/cv"
          >
            <FileText size={15} aria-hidden="true" /> View CV
          </a>
          <button
            className="icon-button theme-toggle"
            onClick={() =>
              setTheme((previous) => (previous === "dark" ? "light" : "dark"))
            }
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            ref={toggle}
            className="menu-toggle icon-button"
            aria-label={menu ? "Close navigation" : "Open navigation"}
            aria-controls="header-navigation"
            aria-expanded={menu}
            onClick={() => {
              setMenu(!menu);
              if (!menu)
                requestAnimationFrame(() =>
                  header.current?.querySelector("nav a")?.focus(),
                );
            }}
          >
            {menu ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>
      <main id="main">{children}</main>
      <footer className="page-footer page-width">
        <div className="footer-main">
          <div>
            <a className="footer-name" href="/">
              May Antonette A. Alterado<span>.</span>
            </a>
            <p>
              Organizing ideas. Exploring technology.
              <br />
              Building what comes next.
            </p>
          </div>
          {path !== "/contact" && <a href="/contact" className="footer-contact">
            Contact{" "}
            <ArrowUpRight size={22} strokeWidth={1.5} aria-hidden="true" />
          </a>}
        </div>
        <div className="footer-meta">
          <span>© {new Date().getFullYear()} May Antonette A. Alterado</span>
          <span>Based in {profile.location}</span>
          <a href="/cv">
            View CV <ArrowRight size={13} aria-hidden="true" />
          </a>
        </div>
      </footer>
    </>
  );
}
