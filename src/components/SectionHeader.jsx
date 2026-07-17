export function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-primary">{eyebrow}</p>}
      <h2 className="text-3xl font-black leading-tight tracking-normal text-ink sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {children && <div className="mt-5 text-lg leading-8 text-muted">{children}</div>}
    </div>
  );
}
