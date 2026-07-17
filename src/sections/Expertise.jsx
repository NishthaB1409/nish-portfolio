import { Section } from "../components/Section";
import { useLanguage } from "../context/LanguageContext";

export function Expertise() {
  const { t } = useLanguage();

  return (
    <Section id="expertise" eyebrow={t.expertise.eyebrow} title={t.expertise.title}>
      <div className="grid gap-4 md:grid-cols-2">
        {t.expertise.items.map((item) => (
          <div key={item} className="flex gap-3 rounded-2xl border border-line bg-panel/70 p-5 text-body transition hover:border-primary/40">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
