import { Gift } from "lucide-react";
import { Reveal } from "./Reveal";

type Item = {
  marker: string;
  label: string;
  title: string;
  description?: string;
  bullets?: string[];
  bonus?: boolean;
};

const ITEMS: Item[] = [
  {
    marker: "01",
    label: "Etapa 1",
    title: "Papo com o CEO: como seu chefe está olhando para essa oportunidade",
    description: "Em breve mais detalhes.",
  },
  {
    marker: "02",
    label: "Etapa 2",
    title: "Papo com Head de RH: como o recrutador vai te avaliar sobre fluência em IA",
    description: "Em breve mais detalhes.",
  },
  {
    marker: "03",
    label: "Etapa 3",
    title: "O caminho para capturar a maior oportunidade dessa geração no trabalho",
    description:
      "Ferramentas de IA e um framework exclusivo sobre como executar o que os mentores do evento vão compartilhar ao vivo.",
  },
  {
    marker: "gift",
    label: "Bônus",
    title: "Bônus exclusivos do ao vivo",
    bullets: [
      "Sorteio de prêmios",
      "100 prompts para alavancar sua carreira",
      "Ingresso para o maior evento do ano (the news 6e6)",
    ],
    bonus: true,
  },
];

export function Timeline() {
  return (
    <section id="agenda" className="mx-auto max-w-[900px] px-5 py-20">
      <Reveal>
        <p className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">Agenda</p>
        <h2 className="mt-2 font-display text-4xl font-bold text-ink md:text-5xl">
          O que esperar
        </h2>
        <p className="mt-3 text-[16px] text-ink-soft">
          Como o Painel vai funcionar, do início ao bônus.
        </p>
      </Reveal>

      <ol className="mt-10 space-y-5">
        {ITEMS.map((it, i) => (
          <Reveal key={i} as="div" className="flex gap-4 md:gap-6">
            <div className="flex flex-col items-center">
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-mono text-[12px] font-bold ${
                  it.bonus
                    ? "bg-[color:var(--iris-gleam)] text-white"
                    : "bg-ink-strong text-canvas"
                }`}
              >
                {it.bonus ? <Gift className="h-5 w-5" /> : it.marker}
              </div>
              {i < ITEMS.length - 1 && (
                <span className="mt-2 w-px flex-1 bg-[color:var(--line)]" />
              )}
            </div>

            <article
              className={`flex-1 rounded-[16px] bg-surface p-5 shadow-[var(--shadow-card)] md:p-6 ${
                it.bonus ? "ring-1 ring-[color:var(--iris-gleam)]/25" : ""
              }`}
            >
              <div className="flex gap-4">
                <div
                  className="hidden h-24 w-32 shrink-0 items-center justify-center rounded-[10px] bg-canvas-deep font-mono text-[10px] uppercase tracking-wider text-ink-muted sm:flex"
                  aria-hidden
                >
                  [imagem]
                </div>
                <div className="flex-1">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                    {it.label}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-bold text-ink md:text-xl">
                    {it.title}
                  </h3>
                  {it.description && (
                    <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                      {it.description}
                    </p>
                  )}
                  {it.bullets && (
                    <ul className="mt-3 space-y-1.5 text-[14px] leading-relaxed text-ink-soft">
                      {it.bullets.map((b) => (
                        <li key={b}>
                          <span className="mr-2 font-bold text-[color:var(--iris-gleam)]">+</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
