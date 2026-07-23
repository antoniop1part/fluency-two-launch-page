const LOGOS = Array.from({ length: 8 }, (_, i) => i);

export function LogoMarquee() {
  return (
    <section
      aria-label="Empresas"
      className="border-y border-[color:var(--line)] bg-canvas-deep py-6 overflow-hidden"
    >
      <div className="marquee">
        <div className="marquee-track">
          {[...LOGOS, ...LOGOS].map((_, i) => (
            <div
              key={i}
              className="mx-6 flex h-[21px] w-[110px] items-center justify-center rounded bg-black/[0.08] font-mono text-[9px] uppercase tracking-wider text-ink-muted"
            >
              [logo]
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .marquee { display: flex; width: 100%; overflow: hidden; }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marqueeSlide 38s linear infinite;
        }
      `}</style>
    </section>
  );
}
