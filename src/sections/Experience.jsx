import { Pill } from "../components/Pill";
import { Section } from "../components/Section";
import { useLanguage } from "../context/LanguageContext";

export function Experience() {
  const { t } = useLanguage();

  return (
    <Section id="experience" eyebrow={t.experience.eyebrow} title={t.experience.title}>
      <div className="grid gap-5 lg:grid-cols-2">
        {t.experience.items.map((item) => (
          <div key={item.role} className="rounded-2xl border border-line bg-panel/80 p-6 shadow-soft sm:p-8">
            <div className="flex flex-col gap-4 border-b border-line pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-bold text-secondary">{item.date}</p>
                <h3 className="mt-3 text-2xl font-bold text-ink">{item.role}</h3>
                <p className="mt-2 text-muted">{item.company}</p>
              </div>
              <Pill>{item.badge}</Pill>
            </div>

            <div className="mt-7 grid gap-4">
              {item.items.map((point) => (
                <div key={point} className="rounded-2xl border border-line bg-inset/50 p-4 text-sm leading-6 text-body">
                  {point}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
