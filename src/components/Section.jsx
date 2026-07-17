import { SectionHeader } from "./SectionHeader";

export function Section({ id, eyebrow, title, intro, children }) {
  return (
    <section id={id} className="px-6 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow={eyebrow} title={title}>
          {intro}
        </SectionHeader>
        {children}
      </div>
    </section>
  );
}
