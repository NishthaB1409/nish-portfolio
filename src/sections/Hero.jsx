import { useEffect, useRef, useState } from "react";
import { Button } from "../components/Button";
import { contact } from "../data/content";
import { useLanguage } from "../context/LanguageContext";

function Typewriter({ phrases, highlight }) {
  const [display, setDisplay] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const reducedMotion = useRef(
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    setDisplay("");
    setPhraseIndex(0);
    setDeleting(false);
  }, [phrases]);

  useEffect(() => {
    if (reducedMotion.current) {
      setDisplay(phrases[0]);
      return undefined;
    }

    const phrase = phrases[phraseIndex % phrases.length];
    let timer;

    if (!deleting && display.length < phrase.length) {
      timer = setTimeout(() => setDisplay(phrase.slice(0, display.length + 1)), 70);
    } else if (!deleting) {
      timer = setTimeout(() => setDeleting(true), 1900);
    } else if (display.length > 0) {
      timer = setTimeout(() => setDisplay(display.slice(0, -1)), 40);
    } else {
      timer = setTimeout(() => {
        setDeleting(false);
        setPhraseIndex((phraseIndex + 1) % phrases.length);
      }, 350);
    }

    return () => clearTimeout(timer);
  }, [display, deleting, phraseIndex, phrases]);

  const phrase = phrases[phraseIndex % phrases.length];
  const highlightStart = highlight ? phrase.indexOf(highlight) : -1;

  return (
    <span>
      {highlightStart >= 0 ? (
        <>
          {display.slice(0, highlightStart)}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {display.slice(highlightStart, highlightStart + highlight.length)}
          </span>
          {display.slice(highlightStart + highlight.length)}
        </>
      ) : (
        display
      )}
      <span className="blinking-cursor text-primary" aria-hidden="true">|</span>
    </span>
  );
}

function PulseRings() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {[0, 1, 2].map((ring) => (
        <span key={ring} className="pulse-ring" style={{ animationDelay: `${ring * 1.4}s` }} />
      ))}
    </div>
  );
}

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24 lg:px-8">
      <PulseRings />

      <div className="reveal relative z-10 mx-auto max-w-4xl pb-20 text-center">
        <div className="flex min-h-[130px] items-center justify-center sm:min-h-[170px]">
          <h1 className="text-4xl font-black leading-[1.1] tracking-normal text-ink sm:text-5xl lg:text-6xl">
            <Typewriter phrases={t.hero.typed} highlight={t.hero.typedName} />
          </h1>
        </div>

        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-body sm:text-xl">{t.hero.sub1}</p>
        <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-muted">{t.hero.sub2}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="#contact">{t.hero.ctaHire}</Button>
          <Button href="#projects" variant="secondary">{t.hero.ctaWork}</Button>
          <a
            href={contact.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-line bg-panel/80 px-6 py-3 text-sm font-bold text-ink transition duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-chip/60"
          >
            {t.hero.ctaResume}
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label={t.hero.scrollLabel}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted transition hover:text-primary"
      >
        <svg className="h-7 w-7 animate-bounce" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  );
}
