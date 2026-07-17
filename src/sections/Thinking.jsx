import { Section } from "../components/Section";
import { useLanguage } from "../context/LanguageContext";

export function Thinking() {
  const { t } = useLanguage();

  return (
    <Section id="thinking" eyebrow={t.thinking.eyebrow} title={t.thinking.title}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {t.thinking.items.map((principle, index) => (
          <div key={principle.title} className="rounded-2xl border border-line bg-panel/70 p-6 shadow-card transition hover:-translate-y-0.5 hover:border-primary/40">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-sm font-black text-primary">
              0{index + 1}
            </div>
            <h3 className="mt-5 text-lg font-bold text-ink">{principle.title}</h3>
            <p className="mt-3 leading-7 text-muted">{principle.copy}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
