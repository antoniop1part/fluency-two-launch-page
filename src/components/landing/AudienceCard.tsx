import { Reveal } from "./Reveal";
import { LeadForm } from "./LeadForm";

export function AudienceCard() {
  return (
    <section id="para-quem" className="mx-auto max-w-[900px] px-5 py-20">
      <Reveal as="div" className="overflow-hidden rounded-[16px] bg-surface shadow-[var(--shadow-card)]">
        <div
          className="px-8 py-10 md:px-12 md:py-14"
          style={{
            background:
              "linear-gradient(120deg, #0289fe 0%, #2fc0e6 55%, #7ff3d6 100%)",
          }}
        >
          <h2 className="font-display text-3xl font-bold leading-tight text-[#f4f3ef] md:text-5xl">
            Pra quem é o <em className="italic">fluênc.ia 2.0</em>?
          </h2>
        </div>
        <div className="space-y-5 px-8 py-10 md:px-12 md:py-14">
          <p className="font-display text-[19px] font-semibold leading-snug text-ink md:text-[22px]">
            Esse evento é para profissionais que entenderam que IA pode ser O salto da sua
            carreira e querem entender com grandes executivos como capturar essa oportunidade.
          </p>
          <p className="font-display text-[19px] font-semibold leading-snug text-ink md:text-[22px]">
            Se você é um profissional que entendeu que não é o mais técnico que vai vencer o
            jogo, mas quem é bom no que faz e usa IA pra alavancar...
          </p>
          <p className="font-display text-[19px] font-semibold leading-snug text-ink md:text-[22px]">
            Esse evento é pra você.
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
