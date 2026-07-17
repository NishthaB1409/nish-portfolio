export function Card({ children, className = "", as: Tag = "div" }) {
  return (
    <Tag
      className={`rounded-2xl border border-line bg-panel/80 p-6 shadow-card transition duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-glow ${className}`}
    >
      {children}
    </Tag>
  );
}
