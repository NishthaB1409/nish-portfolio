export function Logo({ href = "#home" }) {
  return (
    <a
      href={href}
      className="font-logo inline-flex items-center text-3xl font-bold tracking-tight transition duration-300 hover:scale-110"
    >
      <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">NB</span>
    </a>
  );
}
