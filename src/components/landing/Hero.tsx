import { Reveal } from "./Reveal";
import { LeadForm } from "./LeadForm";
import { Countdown } from "./Countdown";

export function Hero() {
  return (
    <header id="top" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="grainient-bg" aria-hidden />
      <div className="grain-overlay" aria-hidden />

      <div className="relative mx-auto max-w-[900px] px-5 text-center">
        <Reveal slow immediate>
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-black/[0.03] px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-ink">
            <span className="live-dot inline-block h-2 w-2 rounded-full bg-[#e0293e]" />
            Evento ao vivo 18/08 às 19h30.
          </span>
        </Reveal>

        <Reveal slow immediate as="div" className="mt-6">
          <h1 className="font-display text-[2.5rem] font-bold leading-[1.02] tracking-[-0.03em] text-ink sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem]">
            Como aproveitar a maior janela de oportunidade da sua carreira{" "}
            <span className="block text-[0.55em] font-medium text-ink-soft sm:inline sm:text-[0.4em]">
              (antes que ela se feche)
            </span>
          </h1>
        </Reveal>

        <Reveal slow immediate as="p" className="mx-auto mt-6 max-w-[640px] text-[17px] leading-relaxed text-ink-soft md:text-[19px]">
          O painel para você aprender com <u className="hero-underline">líderes</u> e{" "}
          <u className="hero-underline">executivos</u> o caminho pra se tornar o profissional que eles premiam e{" "}
          <u className="hero-underline">promovem</u> na era da <u className="hero-underline">IA</u>.
        </Reveal>

        <Reveal slow immediate as="div" className="mx-auto mt-10 max-w-[520px]">
          <p id="reservar" className="mb-3 font-mono text-[11px] uppercase tracking-wider text-ink-muted">
            Reservar vaga
          </p>
          <LeadForm />
          <Countdown />
        </Reveal>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-wider text-ink-muted md:flex-row">
          <span>/// só ao vivo, sem gravação.</span>
          <span className="inline-flex items-center gap-1 hero-bob">
            junte-se a milhares de profissionais de empresas como ↓
          </span>
        </div>
      </div>

      <style>{`
        .live-dot { animation: livePulse 1.5s ease-in-out infinite; }
        .hero-underline {
          text-decoration: underline;
          text-decoration-color: var(--glow-blue);
          text-decoration-thickness: 2px;
          text-underline-offset: 4px;
        }
        .hero-bob { animation: bob 2.6s ease-in-out infinite; }
      `}</style>
    </header>
  );
}
