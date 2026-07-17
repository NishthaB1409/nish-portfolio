import { Section } from "../components/Section";
import { useLanguage } from "../context/LanguageContext";

const segmentStyles = {
  highlight: "font-semibold text-secondary",
  em: "font-medium italic text-ink",
  accent: "font-bold text-primary"
};

export function About() {
  const { t } = useLanguage();

  return (
    <Section id="about" eyebrow={t.about.eyebrow} title={t.about.title} intro={t.about.intro}>
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 lg:gap-16">
        <div className="relative mx-auto w-full max-w-md md:order-2">
          <div className="absolute -inset-5 -z-10 rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 blur-2xl" />
          <div className="aspect-square overflow-hidden rounded-2xl border border-line shadow-soft">
            <img
              src="/Nishthuu.jpeg"
              alt="Nishtha Bhagyawant portrait"
              className="h-full w-full object-cover object-center transition duration-500 hover:scale-105"
            />
          </div>
        </div>

        <div className="space-y-6 md:order-1">
          {t.about.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-lg leading-8 text-body">
              {paragraph.map((segment, segmentIndex) =>
                segment.style ? (
                  <span key={segmentIndex} className={segmentStyles[segment.style]}>
                    {segment.text}
                  </span>
                ) : (
                  <span key={segmentIndex}>{segment.text}</span>
                )
              )}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
