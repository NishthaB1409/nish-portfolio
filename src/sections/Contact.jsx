import { Button } from "../components/Button";
import { contact } from "../data/content";
import { useLanguage } from "../context/LanguageContext";

function ContactIcon({ type }) {
  const className = "h-5 w-5 text-primary";
  const icons = {
    mail: (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 6.5h16v11H4v-11Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="m5 8 7 5 7-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    github: (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 19.5c-4 1.2-4-2-5.5-2.5M15 21v-3.3c0-.9.3-1.5.8-2 2.7-.3 5.7-1.4 5.7-6A4.6 4.6 0 0 0 20.2 6c.1-.4.6-2-.2-3.5 0 0-1.3-.4-4 1.5a13.7 13.7 0 0 0-7.2 0C6.1 2.1 4.8 2.5 4.8 2.5 4 4 4.5 5.6 4.6 6a4.6 4.6 0 0 0-1.3 3.7c0 4.6 3 5.7 5.7 6 .5.5.8 1.1.8 2V21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    linkedin: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.2.8 24 1.77 24h20.45c.98 0 1.78-.8 1.78-1.75V1.75C24 .78 23.2 0 22.22 0z" />
      </svg>
    ),
    location: (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 21s6-5.4 6-11a6 6 0 1 0-12 0c0 5.6 6 11 6 11Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M12 12.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z" stroke="currentColor" strokeWidth="2" />
      </svg>
    )
  };

  return icons[type];
}

function ContactLink({ href, icon, children }) {
  const content = (
    <>
      <ContactIcon type={icon} />
      <span>{children}</span>
    </>
  );

  if (!href) {
    return <span className="inline-flex items-center gap-3">{content}</span>;
  }

  return (
    <a
      className="inline-flex items-center gap-3 transition hover:text-primary"
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {content}
    </a>
  );
}

export function Contact() {
  const { t } = useLanguage();
  const inputClass =
    "min-h-12 rounded-xl border border-line bg-inset/60 px-4 text-ink outline-none transition focus:border-primary";

  return (
    <section id="contact" className="px-6 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/15 via-secondary/10 to-panel p-8 shadow-glow sm:p-12">
          <h2 className="text-4xl font-black leading-tight tracking-normal text-ink sm:text-5xl">
            {t.contact.heading}
          </h2>
          <p className="mt-5 text-lg leading-8 text-body">{t.contact.copy}</p>
          <p className="mt-8 text-2xl font-bold text-ink">{t.contact.tagline}</p>

          <div className="mt-8 grid gap-4 text-sm font-semibold text-body">
            <ContactLink href={`mailto:${contact.email}`} icon="mail">{contact.email}</ContactLink>
            <ContactLink href={contact.github} icon="github">GitHub</ContactLink>
            <ContactLink href={contact.linkedin} icon="linkedin">LinkedIn</ContactLink>
            <ContactLink icon="location">{t.contact.location}</ContactLink>
          </div>
        </div>

        <form
          action={contact.formspree}
          method="POST"
          className="rounded-2xl border border-line bg-panel/80 p-6 shadow-soft sm:p-8"
        >
          <h3 className="text-2xl font-bold text-ink">{t.contact.formTitle}</h3>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-body">
              {t.contact.firstName}
              <input className={inputClass} type="text" name="firstName" required />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-body">
              {t.contact.lastName}
              <input className={inputClass} type="text" name="lastName" required />
            </label>
          </div>

          <label className="mt-4 grid gap-2 text-sm font-semibold text-body">
            {t.contact.emailLabel}
            <input className={inputClass} type="email" name="email" required />
          </label>

          <label className="mt-4 grid gap-2 text-sm font-semibold text-body">
            {t.contact.message}
            <textarea
              className="min-h-40 rounded-xl border border-line bg-inset/60 px-4 py-3 text-ink outline-none transition focus:border-primary"
              name="message"
              required
            />
          </label>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={`mailto:${contact.email}`}>{t.contact.emailDirect}</Button>
            <button
              type="submit"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-onprimary transition duration-300 hover:-translate-y-0.5 hover:bg-primary-strong button-glow"
            >
              {t.contact.send}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
