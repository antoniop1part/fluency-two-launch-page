import { Check, X } from "lucide-react";
import { Reveal } from "./Reveal";

type Block = {
  n: string;
  title: string;
  before: string;
  after: string;
};

const BLOCKS: Block[] = [
  {
    n: "1",
    title: "Clareza de onde IA entra no seu trabalho",
    before: "Você não sabe onde IA entra no seu trabalho.",
    after: "Você tem um mapa claro de aplicação para a sua função.",
  },
  {
    n: "2",
    title: "Como pedir o que você realmente precisa",
    before: "Você pede ajuda pra IA, o resultado sai genérico e você desiste.",
    after: "Você sabe exatamente o que faltava, como pedir e recebe o que precisa.",
  },
  {
    n: "3",
    title: "Seu assistente personalizado configurado",
    before: "Você tem acesso à ferramenta mas não sabe como usar.",
    after: "Você tem um assistente que conhece o seu trabalho e te ajuda com precisão.",
  },
  {
    n: "4",
    title: "A ferramenta certa para cada tarefa",
    before: "Você perde tempo decidindo qual ferramenta usar em cada situação.",
    after: "Você entende a ferramenta certa pra cada tarefa no seu trabalho corporativo.",
  },
];

export function Expectations() {
  return (
    <section id="agenda" className="mx-auto max-w-[1200px] px-5 py-20">
      <Reveal>
        <h2 className="font-display text-4xl font-bold text-ink md:text-5xl">
          O que você pode esperar da nossa aula:
        </h2>
        <p className="mt-3 text-[16px] text-ink-soft">
          Esses são os 4 principais bloqueios que vamos resolver.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {BLOCKS.map((b) => (
          <Reveal
            key={b.n}
            as="article"
            className="rounded-[16px] bg-surface p-5 shadow-[var(--shadow-card)] ring-1 ring-[color:var(--glow-blue)]/25 md:p-6"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[color:var(--glow-blue)] font-mono text-[12px] font-bold text-white">
                {b.n}
              </div>
              <h3 className="font-display text-[15px] font-bold uppercase leading-snug tracking-wide text-ink md:text-base">
                {b.title}
              </h3>
            </div>

            <div className="mt-5 grid divide-y divide-[color:var(--line)] border-t border-[color:var(--line)] pt-5 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              <div className="pb-4 sm:pb-0 sm:pr-5">
                <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                  <X className="h-3.5 w-3.5 shrink-0 text-[#e0293e]" />
                  Antes
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{b.before}</p>
              </div>
              <div className="pt-4 sm:pl-5 sm:pt-0">
                <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                  <Check className="h-3.5 w-3.5 shrink-0 text-[#12a17a]" />
                  Depois
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{b.after}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
