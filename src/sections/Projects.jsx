import { Button } from "../components/Button";
import { Section } from "../components/Section";
import { useLanguage } from "../context/LanguageContext";

// A distinct accent per project card (RGB triplets), tuned to read well
// against both the light and dark surfaces.
const accents = [
  "16 185 129", // emerald
  "139 92 246", // violet
  "217 119 6", // amber
  "14 165 233", // sky
  "244 63 94" // rose
];

function ProjectCard({ project, accent }) {
  const { t } = useLanguage();
  const style = { "--accent": accent };

  return (
    <div
      style={style}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-panel/80 p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft"
    >
      {/* Colored top bar */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1.5"
        style={{ background: "linear-gradient(90deg, rgb(var(--accent)), rgb(var(--accent) / 0.35))" }}
      />
      {/* Soft accent glow */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-40 blur-3xl transition-opacity duration-300 group-hover:opacity-80"
        style={{ background: "rgb(var(--accent) / 0.5)" }}
      />

      <h3 className="relative mt-2 text-xl font-bold text-ink">{project.title}</h3>
      <p className="relative mt-3 text-sm leading-7 text-muted">{project.summary}</p>

      <div className="relative mt-5 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-full px-3 py-1 text-xs font-bold"
            style={{
              border: "1px solid rgb(var(--accent) / 0.4)",
              background: "rgb(var(--accent) / 0.1)",
              color: "rgb(var(--accent))"
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="relative mt-auto flex flex-wrap gap-3 pt-6">
        {project.github && <Button href={project.github} variant="secondary">{t.projects.githubLabel}</Button>}
        {project.live && <Button href={project.live} variant="ghost">{t.projects.liveLabel}</Button>}
      </div>
    </div>
  );
}

export function Projects() {
  const { t } = useLanguage();

  return (
    <Section id="projects" eyebrow={t.projects.eyebrow} title={t.projects.title}>
      <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
        {t.projects.items.map((project, index) => (
          <ProjectCard key={project.title} project={project} accent={accents[index % accents.length]} />
        ))}
      </div>
    </Section>
  );
}
