import { Reveal } from "./Reveal";
import { LeadForm } from "./LeadForm";

export function AudienceCard() {
  return (
    <section id="problema" className="mx-auto max-w-[900px] px-5 py-20">
      <Reveal as="div" className="overflow-hidden rounded-[16px] bg-surface shadow-[var(--shadow-card)]">
        <div
          className="px-8 py-10 md:px-12 md:py-14"
          style={{
            background:
              "linear-gradient(120deg, #0289fe 0%, #2fc0e6 55%, #7ff3d6 100%)",
          }}
        >
          <h2 className="font-display text-3xl font-bold leading-tight text-[#f4f3ef] md:text-5xl">
            O problema real
          </h2>
        </div>
        <div className="space-y-5 px-8 py-10 md:px-12 md:py-14">
          <p className="font-display text-[19px] font-semibold leading-snug text-ink md:text-[22px]">
            O problema não é você, é o hype e o sensacionalismo que estão te vendendo como se fosse
            conhecimento e te fazem sentir atrasado.
          </p>
          <p className="text-[17px] leading-relaxed text-ink-soft md:text-[19px]">
            Todo dia, aparece uma novidade de IA que esfrega na sua cara que pode mudar tudo e
            revolucionar sua vida, mas dificilmente isso é aplicável pra sua rotina no mundo CLT
            usando as ferramentas que você tem disponível. Isso gera muito mais ansiedade do que
            resultado, porque falta um caminho concreto pra aplicar IA no trabalho que você já faz.
            Nessa aula, você vai aprender onde pode aplicar IA personalizado à sua rotina, com casos
            de uso reais do mundo corporativo, pra você fugir do hype vazio mascarado de
            conhecimento. Você vai terminar a aula sabendo exatamente o que fazer.
          </p>

          <div className="mt-8 border-t border-[color:var(--line)] pt-8">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-wider text-ink-muted">
              Quer garantir sua vaga?
            </p>
            <LeadForm />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
