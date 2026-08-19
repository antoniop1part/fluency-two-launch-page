import { Reveal } from "./Reveal";
import digoLemosPhoto from "@/assets/digo-lemos.jpg.asset.json";

type Guest = {
  name: string;
  role?: string;
  bio?: string[];
  showSilhouette?: boolean;
  image?: string;
  imageAlt?: string;
};

const GUESTS: Guest[] = [
  {
    name: "Digo Lemos",
    role: "Fundador · Better Work",
    bio: [
      "Fundador da maior newsletter de carreira e performance da América latina: Better Work.",
      "Ele também é sócio e parte do time fundador da Link School of Business, uma das faculdades mais inovadoras do mundo, onde liderou a criação da área de investimentos em startups, captando e investindo mais de R$ 5 milhões.",
      "Rodrigo é pós graduado em Neurociência aplicada à Educação, empreende com educação há 8 anos e agora lidera a construção dos cursos da Better Work.",
    ],
    image: digoLemosPhoto.url,
    imageAlt: "Foto de Digo Lemos",
  },
  { name: "Em breve...", showSilhouette: true },
];

function Silhouette() {
  return (
    <svg viewBox="0 0 100 100" className="h-24 w-24 text-ink-muted/40" aria-hidden>
      <circle cx="50" cy="38" r="18" fill="currentColor" />
      <path d="M14 100 C 14 70, 86 70, 86 100 Z" fill="currentColor" />
    </svg>
  );
}

export function Panel() {
  return (
    <section id="painel" className="mx-auto max-w-[1200px] px-5 py-20">
      <Reveal>
        <h2 className="font-display text-4xl font-bold text-ink md:text-5xl">Seus instrutores</h2>
      </Reveal>

      <div className="mx-auto mt-6 grid max-w-[800px] grid-cols-1 gap-6 md:grid-cols-2">
        {GUESTS.map((g, i) => (
          <Reveal key={i} as="article" className="overflow-hidden rounded-[16px] bg-surface shadow-[var(--shadow-card)]">
            <div className="relative flex aspect-[4/5] items-center justify-center bg-canvas-deep overflow-hidden">
              {g.image && (
                <img
                  src={g.image}
                  alt={g.imageAlt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}
              {g.showSilhouette && <Silhouette />}
              <span className="absolute bottom-3 left-3 rounded-full bg-black/70 px-2 py-1 font-mono text-[10px] tracking-wider text-white z-10">
                {String(i + 1).padStart(2, "0")}/{String(GUESTS.length).padStart(2, "0")}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-bold text-ink">{g.name}</h3>
              {g.role && (
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                  {g.role}
                </p>
              )}
              {g.bio && (
                <div className="mt-4 space-y-3 text-[14px] leading-relaxed text-ink-soft">
                  {g.bio.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
