import { Pill } from "../components/Pill";
import { Section } from "../components/Section";
import { useLanguage } from "../context/LanguageContext";

export function Education() {
  const { t } = useLanguage();

  return (
    <Section id="education" eyebrow={t.education.eyebrow} title={t.education.title} intro={t.education.intro}>
      <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="grid gap-5">
          {t.education.items.map((item) => (
            <div key={item.degree} className="rounded-2xl border border-line bg-panel/80 p-6 shadow-card sm:p-8">
              <Pill tone="neutral">{item.year}</Pill>
              <h3 className="mt-5 text-2xl font-bold text-ink">{item.degree}</h3>
              <p className="mt-3 leading-7 text-muted">{item.school}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/10 via-secondary/10 to-panel p-6 shadow-glow sm:p-8">
          <Pill>{t.education.researchPill}</Pill>
          {t.education.publications.map((publication) => (
            <div key={publication.title} className="mt-6">
              <h3 className="text-2xl font-bold leading-tight text-ink">{publication.title}</h3>
              <p className="mt-3 text-sm leading-6 text-body">{publication.venue}</p>
              <a
                href={publication.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex text-sm font-bold text-primary transition hover:text-primary-strong"
              >
                {t.education.viewPaper}
              </a>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
