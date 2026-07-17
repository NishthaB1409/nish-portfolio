import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { contact } from "./data/content";
import { Education } from "./sections/Education";
import { Experience } from "./sections/Experience";
import { Expertise } from "./sections/Expertise";
import { Hero } from "./sections/Hero";
import { Navbar } from "./sections/Navbar";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Thinking } from "./sections/Thinking";
import { useLanguage } from "./context/LanguageContext";

export default function App() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <div className="fixed inset-0 -z-10 noise" />
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />
      <div className="orb orb-3" aria-hidden="true" />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Expertise />
        <Thinking />
        <Contact />
      </main>

      <footer className="border-t border-line px-6 py-12 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-sm text-muted">
          <div className="flex items-center gap-4">
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-chip/60 text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-chip hover:text-primary"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 19.5c-4 1.2-4-2-5.5-2.5M15 21v-3.3c0-.9.3-1.5.8-2 2.7-.3 5.7-1.4 5.7-6A4.6 4.6 0 0 0 20.2 6c.1-.4.6-2-.2-3.5 0 0-1.3-.4-4 1.5a13.7 13.7 0 0 0-7.2 0C6.1 2.1 4.8 2.5 4.8 2.5 4 4 4.5 5.6 4.6 6a4.6 4.6 0 0 0-1.3 3.7c0 4.6 3 5.7 5.7 6 .5.5.8 1.1.8 2V21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-chip/60 text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-chip hover:text-primary"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.2.8 24 1.77 24h20.45c.98 0 1.78-.8 1.78-1.75V1.75C24 .78 23.2 0 22.22 0z" />
              </svg>
            </a>
            <a
              href={`mailto:${contact.email}`}
              aria-label="Email"
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-chip/60 text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-chip hover:text-primary"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 6.5h16v11H4v-11Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                <path d="m5 8 7 5 7-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <p>
            © {new Date().getFullYear()} Nishtha Bhagyawant. {t.footer.rights}
          </p>

          <div className="flex items-center gap-4">
            <a className="transition hover:text-primary" href="#">{t.footer.privacy}</a>
            <span className="h-4 w-px bg-line" aria-hidden="true" />
            <a className="transition hover:text-primary" href="#">{t.footer.terms}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
