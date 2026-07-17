export function Button({ href, children, variant = "primary" }) {
  const variants = {
    primary: "bg-primary text-onprimary hover:bg-primary-strong button-glow",
    secondary: "border border-line bg-chip/60 text-ink hover:bg-chip hover:border-primary/40",
    ghost: "border border-transparent bg-transparent text-muted hover:text-primary hover:bg-chip/60"
  };

  const isExternal = typeof href === "string" && href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition duration-300 hover:-translate-y-0.5 ${variants[variant]}`}
    >
      {children}
    </a>
  );
}
