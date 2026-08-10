import { Gift } from "lucide-react";
import { Reveal } from "./Reveal";
import tnsBw from "@/assets/logos/tns-bw.png.asset.json";

type Item = {
  marker: string;
  label: string;
  title: string;
  description?: string;
  bullets?: string[];
  bonus?: boolean;
  image?: string;
  imageAlt?: string;
};

const ITEMS: Item[] = [
  {
    marker: "01",
    label: "Etapa 1",
    title: "Papo com CEO: como seu chefe enxerga essa oportunidade",
    description:
      "Entenda porque Inteligência Artificial criou uma posição onde a maior alavanca não é ser técnico ou desenvolvedor.",
  },
  {
    marker: "02",
    label: "Etapa 2",
    title: "Papo com o RH: como o recrutador vai avaliar sua fluência em IA",
    description:
      "Entenda porque quem ganha nesse jogo não é o colaborador que mais investe infinitas horas aprendendo novas ferramentas.",
  },
  {
    marker: "03",
    label: "Etapa 3",
    title: "Como aplicar o que você viu no painel para alavancar sua carreira",
    description:
      "Um guia passo a passo com ferramentas práticas aplicadas ao seu contexto e nível de fluência em IA.",
    image: tnsBw.url,
    imageAlt: "Logo the news Better Work",
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
          O que esperar | 09/09
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
                {it.image ? (
                  <div className="hidden h-24 w-32 shrink-0 items-center justify-center overflow-hidden rounded-[10px] bg-white p-3 sm:flex">
                    <img
                      src={it.image}
                      alt={it.imageAlt}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                ) : (
                  <div
                    className="hidden h-24 w-32 shrink-0 items-center justify-center rounded-[10px] bg-canvas-deep font-mono text-[10px] uppercase tracking-wider text-ink-muted sm:flex"
                    aria-hidden
                  >
                    [imagem]
                  </div>
                )}
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
