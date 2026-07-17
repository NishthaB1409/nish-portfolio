export function Pill({ children, tone = "primary" }) {
  const tones = {
    primary: "border-primary/40 bg-primary/10 text-primary",
    secondary: "border-secondary/40 bg-secondary/10 text-secondary",
    neutral: "border-line bg-chip/60 text-body"
  };

  return (
    <span className={`inline-flex items-center rounded-full border px-3.5 py-1.5 text-sm font-bold ${tones[tone]}`}>
      {children}
    </span>
  );
}
