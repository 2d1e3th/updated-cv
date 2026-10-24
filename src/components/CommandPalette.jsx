import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, Search, CornerDownLeft, Command } from "lucide-react";
import { socials } from "../data/profile";
import Dialog from "./Dialog";

const commands = [
  { label: "Home", url: "/", type: "PAGE" },
  { label: "About", url: "/about", type: "PAGE" },
  { label: "Education", url: "/about#education", type: "SECTION" },
  { label: "Skills", url: "/about#skills", type: "SECTION" },
  { label: "Projects", url: "/works", type: "PAGE" },
  { label: "Certificates & Milestones", url: "/certificates", type: "PAGE" },
  { label: "Experience", url: "/about#experience", type: "SECTION" },
  { label: "Contact", url: "/contact", type: "PAGE" },
  ...socials
    .filter((s) => s.label !== "Email")
    .map((s) => ({ label: `Open ${s.label}`, url: s.url, type: "EXTERNAL" })),
  {
    label: "View CV",
    url: "/documents/May-Antonette-Alterado-CV.pdf",
    type: "DOCUMENT",
  },
];
export default function CommandPalette({ open, onClose }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const input = useRef(null);
  const options = useMemo(
    () =>
      commands.filter((command) =>
        command.label.toLowerCase().includes(query.toLowerCase().trim()),
      ),
    [query],
  );
  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      requestAnimationFrame(() => input.current?.focus());
    }
  }, [open]);
  useEffect(() => {
    document
      .getElementById(`command-option-${active}`)
      ?.scrollIntoView({ block: "nearest", behavior: "instant" });
  }, [active]);
  function select(command) {
    if (!command) return;
    onClose();
    if (command.url.startsWith("/") && !command.url.startsWith("/documents/")) {
      history.pushState({}, "", command.url);
      dispatchEvent(new PopStateEvent("popstate"));
    } else window.location.assign(command.url);
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      title="Portfolio command palette"
      className="command-dialog"
    >
      <div className="command-heading">
        <Command size={18} strokeWidth={1.3} aria-hidden="true" />
        <p className="eyebrow">WHERE WOULD YOU LIKE TO GO?</p>
      </div>
      <label className="sr-only" htmlFor="command-search">
        Search pages and links
      </label>
      <div className="command-search">
        <Search size={19} strokeWidth={1.3} aria-hidden="true" />
        <input
          ref={input}
          id="command-search"
          autoComplete="off"
          value={query}
          placeholder="Search the portfolio…"
          role="combobox"
          aria-expanded={true}
          aria-controls="command-options"
          aria-autocomplete="list"
          aria-activedescendant={
            options.length ? `command-option-${active}` : undefined
          }
          onChange={(event) => {
            setQuery(event.target.value);
            setActive(0);
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowDown") {
              event.preventDefault();
              setActive((index) =>
                options.length ? (index + 1) % options.length : 0,
              );
            }
            if (event.key === "ArrowUp") {
              event.preventDefault();
              setActive((index) =>
                options.length
                  ? (index - 1 + options.length) % options.length
                  : 0,
              );
            }
            if (event.key === "Enter") {
              event.preventDefault();
              select(options[active]);
            }
          }}
        />
      </div>
      <ul
        id="command-options"
        role="listbox"
        aria-label="Available destinations"
      >
        {options.map((command, index) => (
          <li
            key={command.label}
            id={`command-option-${index}`}
            role="option"
            aria-selected={index === active}
            onMouseMove={() => setActive(index)}
            onClick={() => select(command)}
          >
            <span>{command.label}</span>
            <span>
              {command.type}
              <ArrowUpRight size={14} aria-hidden="true" />
            </span>
          </li>
        ))}
      </ul>
      {!options.length && (
        <p className="command-empty">
          No matching page. Try “projects” or “CV”.
        </p>
      )}
      <div className="command-footer">
        <span>↑ ↓ to navigate</span>
        <span>
          <CornerDownLeft size={12} aria-hidden="true" />
          to open
        </span>
        <span>Esc to close</span>
      </div>
    </Dialog>
  );
}
