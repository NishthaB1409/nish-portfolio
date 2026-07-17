import { useState } from "react";
import { Logo } from "../components/Logo";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-chip/60 text-ink transition hover:border-primary/40 hover:text-primary"
    >
      {isDark ? (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="2" />
          <path
            d="M12 2.8v2.4M12 18.8v2.4M21.2 12h-2.4M5.2 12H2.8M18.5 5.5l-1.7 1.7M7.2 16.8l-1.7 1.7M18.5 18.5l-1.7-1.7M7.2 7.2 5.5 5.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M20.3 14.6A8.3 8.3 0 0 1 9.4 3.7a8.3 8.3 0 1 0 10.9 10.9Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}

function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  const optionClass = (value) =>
    `rounded-full px-3 py-1.5 text-xs font-black uppercase tracking-wide transition ${
      lang === value ? "bg-primary text-onprimary" : "text-muted hover:text-primary"
    }`;

  return (
    <div className="flex items-center rounded-full border border-line bg-chip/60 p-1" role="group" aria-label="Language">
      <button type="button" className={optionClass("en")} onClick={() => setLang("en")} aria-pressed={lang === "en"}>
        EN
      </button>
      <button type="button" className={optionClass("de")} onClick={() => setLang("de")} aria-pressed={lang === "de"}>
        DE
      </button>
    </div>
  );
}

export function Navbar() {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-canvas/95 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-6 py-4 lg:px-8">
        <Logo />

        <div className="hidden items-center gap-6 xl:flex">
          {t.nav.links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-semibold text-muted transition hover:text-primary">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5 sm:gap-3">
          <LanguageToggle />
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Menu"
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-chip/60 text-ink transition hover:border-primary/40 hover:text-primary xl:hidden"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {menuOpen ? (
                <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-line bg-canvas/95 px-6 py-4 backdrop-blur-xl xl:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            {t.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-semibold text-body transition hover:bg-chip/60 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
