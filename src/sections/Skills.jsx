import { Section } from "../components/Section";
import { useLanguage } from "../context/LanguageContext";

// Distinct accent + icon per skill group, keyed by index (titles are translated).
const groupStyles = [
  { accent: "139 92 246", icon: "brain" }, // violet — Applied AI / LLMs
  { accent: "16 185 129", icon: "agent" }, // emerald — AI Agents
  { accent: "14 165 233", icon: "layers" }, // sky — RAG & Vector DBs
  { accent: "244 63 94", icon: "gauge" }, // rose — LLMOps & Eval
  { accent: "217 119 6", icon: "code" }, // amber — Python & Backend
  { accent: "20 184 166", icon: "bolt" }, // teal — ML Frameworks
  { accent: "99 102 241", icon: "cloud" }, // indigo — Cloud & DevOps
  { accent: "236 72 153", icon: "chart" } // pink — Data & Analytics
];

function GroupIcon({ type }) {
  const c = "h-6 w-6 text-white";
  const icons = {
    code: (
      <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13 6l-2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    brain: (
      <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3l1.4 4.8L18 9l-4.6 1.2L12 15l-1.4-4.8L6 9l4.6-1.2L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M18 15l.7 2.3L21 18l-2.3.7L18 21l-.7-2.3L15 18l2.3-.7L18 15Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
    bolt: (
      <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="m13 2-8 12h6l-1 8 9-13h-6l0-7Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
    agent: (
      <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="7" y="8" width="10" height="8" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M12 4v4M9 12h.01M15 12h.01M4 11v3M20 11v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    gauge: (
      <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 18a8 8 0 1 1 16 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="m12 14 4-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    layers: (
      <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="m12 3 9 5-9 5-9-5 9-5ZM3 13l9 5 9-5M3 17l9 5 9-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    cloud: (
      <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M7 18a4 4 0 0 1-.5-7.97 5 5 0 0 1 9.6-1.2A3.5 3.5 0 0 1 17.5 18H7Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
    chart: (
      <svg className={c} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 20V4M4 20h16M8 16v-4M12 16V8M16 16v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  };
  return icons[type] ?? icons.code;
}

function SkillGroup({ group, accent, icon }) {
  const style = { "--accent": accent };

  return (
    <div
      style={style}
      className="rounded-2xl border border-line bg-panel/80 p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-soft sm:p-7"
    >
      <div className="flex items-center gap-4">
        <span
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl shadow-lg"
          style={{
            background: "linear-gradient(135deg, rgb(var(--accent)), rgb(var(--accent) / 0.65))",
            boxShadow: "0 8px 20px rgb(var(--accent) / 0.35)"
          }}
        >
          <GroupIcon type={icon} />
        </span>
        <h3 className="text-xl font-bold text-ink">{group.title}</h3>
      </div>

      <div className="mt-5 flex flex-wrap gap-2.5">
        {group.items.map((item) => (
          <span
            key={item}
            className="inline-flex items-center gap-2 rounded-lg border border-line bg-chip/50 px-3 py-1.5 text-sm font-semibold text-body"
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "rgb(var(--accent))" }} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  const { t } = useLanguage();

  return (
    <Section id="skills" eyebrow={t.skills.eyebrow} title={t.skills.title}>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {t.skills.groups.map((group, index) => {
          const { accent, icon } = groupStyles[index % groupStyles.length];
          return <SkillGroup key={group.title} group={group} accent={accent} icon={icon} />;
        })}
      </div>
    </Section>
  );
}
