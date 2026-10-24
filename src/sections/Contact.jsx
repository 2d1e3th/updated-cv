import { useRef, useState } from "react";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { profile } from "../data/profile";
import { Reveal, SocialLinks } from "../components/Shared";

const fields = [
  {
    name: "name",
    label: "Name",
    type: "text",
    autoComplete: "name",
    maxLength: 100,
    helper: "Who should I thank for reaching out?",
    placeholder: "Your name",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    autoComplete: "email",
    maxLength: 254,
    helper: "Where can I reply?",
    placeholder: "you@example.com",
  },
  {
    name: "subject",
    label: "Subject",
    type: "text",
    maxLength: 180,
    helper: "A little context for your note.",
    placeholder: "What’s on your mind?",
  },
  {
    name: "message",
    label: "Message",
    maxLength: 3000,
    helper: "What would you like to build or discuss?",
    placeholder: "Let’s start a conversation…",
  },
];
export default function Contact() {
  const [status, setStatus] = useState(
    "This form opens an email draft. Review it in your email app before sending.",
  );
  const [errors, setErrors] = useState({});
  const [focused, setFocused] = useState(null);
  const formRef = useRef(null);
  function submit(event) {
    event.preventDefault();
    const form = formRef.current;
    const data = {};
    const nextErrors = {};
    fields.forEach(({ name, label }) => {
      const field = form.elements.namedItem(name);
      const value = field.value.trim();
      field.value = value;
      data[name] = value;
      if (!value)
        nextErrors[name] = `Please enter your ${label.toLowerCase()}.`;
      else if (!field.validity.valid)
        nextErrors[name] =
          name === "email"
            ? "Please enter a valid email address."
            : `Please check your ${label.toLowerCase()}.`;
    });
    setErrors(nextErrors);
    const first = Object.keys(nextErrors)[0];
    if (first) {
      setStatus(
        "Please check the highlighted fields before preparing your draft.",
      );
      form.elements.namedItem(first).focus();
      return;
    }
    const body = `From: ${data.name}\nReply to: ${data.email}\n\n${data.message}`;
    setStatus(
      "Your email application should open with a prepared draft. Review it before sending. If nothing opens, use the email link beside this form.",
    );
    try {
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(body)}`;
    } catch {
      setStatus(
        `Your email application could not be opened. Please email ${profile.email} directly.`,
      );
    }
  }
  return (
    <section
      id="contact"
      data-chapter="7"
      className="page-width section-space contact-section"
      aria-labelledby="contact-title"
    >
      <Reveal className="contact-grid">
        <div>
          <p className="eyebrow">CONTACT INFORMATION</p>
          <h2 id="contact-title">
            Leave a <em>note.</em>
          </h2>
          <p className="contact-intro">
            I’m open to internships, collaborative projects, learning
            opportunities, and entry-level roles where I can continue developing
            my skills and contribute meaningful work.
          </p>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            <Mail size={18} strokeWidth={1.3} aria-hidden="true" />
            <span>{profile.email}</span>
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <p className="contact-location">
            <MapPin size={14} aria-hidden="true" />
            {profile.location}
          </p>
          <SocialLinks includeEmail={false} />
          <p className="contact-signoff">
            Every good collaboration starts
            <br />
            with a simple hello.
          </p>
        </div>
        <form ref={formRef} onSubmit={submit} noValidate>
          <p className="form-heading">A NEW CONVERSATION / YOUR NOTE</p>
          <div className="contact-fields">
            {fields.map((field) => {
              const Tag = field.name === "message" ? "textarea" : "input";
              return (
                <div
                  className={`form-field field-${field.name}`}
                  key={field.name}
                >
                  <label htmlFor={`contact-${field.name}`}>
                    {field.label} <span aria-hidden="true">*</span>
                  </label>
                  <Tag
                    id={`contact-${field.name}`}
                    name={field.name}
                    type={field.type}
                    autoComplete={field.autoComplete}
                    maxLength={field.maxLength}
                    placeholder={field.placeholder}
                    required
                    rows={field.name === "message" ? 5 : undefined}
                    aria-invalid={!!errors[field.name]}
                    aria-describedby={`${field.name}-hint ${errors[field.name] ? `${field.name}-error` : ""}`}
                    onFocus={() => setFocused(field.name)}
                    onBlur={() => setFocused(null)}
                    onInput={() => {
                      setErrors((previous) => ({
                        ...previous,
                        [field.name]: undefined,
                      }));
                    }}
                  />
                  <p
                    className={`field-hint ${focused === field.name ? "hint-visible" : ""}`}
                    id={`${field.name}-hint`}
                  >
                    {field.helper}
                  </p>
                  {errors[field.name] && (
                    <p className="field-error" id={`${field.name}-error`}>
                      {errors[field.name]}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
          <button className="button" type="submit">
            Prepare email draft <ArrowUpRight size={16} aria-hidden="true" />
          </button>
          <p className="form-status" role="status" aria-live="polite">
            {status}
          </p>
          <p className="form-privacy">
            Required fields are marked *. No messages are stored by this
            website.
          </p>
        </form>
      </Reveal>
    </section>
  );
}
