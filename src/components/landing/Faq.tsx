import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";
import { LeadForm } from "./LeadForm";

const QA = [
  {
    q: "Vai ter replay ou ser gravado?",
    a: "Não, o Evento é 100% ao vivo e não ficará gravado.",
  },
  {
    q: "Os documentos, prompts e bônus ficarão disponíveis a todos?",
    a: "Somente àquelas pessoas que participarem da live e permanecerem até o final.",
  },
  {
    q: "Preciso ter algum conhecimento prévio em IA?",
    a: "Não, o evento foi desenvolvido para profissionais de quaisquer áreas e níveis de fluência em IA. Vamos cobrir o caminho pra chegar lá independentemente da ferramenta que você usa também.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-[900px] px-5 py-20">
      <Reveal>
        <p className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">FAQ</p>
        <h2 className="mt-2 font-display text-4xl font-bold text-ink md:text-5xl">
          Perguntas frequentes
        </h2>
      </Reveal>

      <div className="mt-10 divide-y divide-[color:var(--line)] rounded-[16px] bg-surface shadow-[var(--shadow-card)]">
        {QA.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={i}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-display text-[17px] font-semibold text-ink md:text-lg">
                  {item.q}
                </span>
                <Plus
                  className={`h-5 w-5 shrink-0 text-ink transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                />
              </button>
              <div
                className={`grid overflow-hidden transition-all duration-300 ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="min-h-0">
                  <p className="px-6 pb-5 text-[15px] leading-relaxed text-ink-soft">{item.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Reveal as="div" className="mt-16 border-t border-[color:var(--line)] pt-10">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-wider text-ink-muted">
          Quer garantir sua vaga?
        </p>
        <LeadForm />
      </Reveal>
    </section>
  );
}
