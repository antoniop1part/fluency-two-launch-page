import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/fluencia-logo-final.png.asset.json";

const MENU = [
  { n: "01", label: "Aula", href: "#top" },
  { n: "02", label: "O que esperar", href: "#agenda" },
  { n: "03", label: "Painel", href: "#painel" },
  { n: "04", label: "FAQ", href: "#faq" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 0);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <nav className="fixed left-1/2 top-3 z-50 w-[calc(100%-24px)] max-w-[1200px] -translate-x-1/2">
      <div className="flex items-center justify-between gap-3 rounded-full border border-[color:var(--line)] bg-white/70 py-2 pl-3 pr-2 shadow-[0_6px_24px_rgba(20,21,27,0.08)] backdrop-blur-xl">
        <div className="flex min-w-0 items-center gap-2">
          <a href="#top" className="flex items-center gap-2 pl-1 pr-2">
            <img
              src={logo.url}
              alt="fluênc.ia"
              className="h-6 w-auto object-contain"
            />
          </a>
          <span className="date-badge relative hidden items-center gap-1.5 overflow-hidden rounded-full px-3 py-1.5 font-mono text-[11px] font-bold text-[#fdfbf4] sm:inline-flex min-[401px]:inline-flex">
            <span aria-hidden>📅</span>
            18/08 às 19h30
            <span className="date-shimmer" aria-hidden />
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#reservar"
            className={`hidden rounded-full bg-ink-strong px-4 py-2 text-[13px] font-semibold text-canvas transition-opacity duration-300 sm:inline-flex ${
              scrolled ? "pointer-events-none opacity-0" : "opacity-100"
            }`}
          >
            Reservar vaga
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Abrir menu"
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--line)] bg-white text-ink transition hover:bg-canvas-deep"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mt-2 overflow-hidden rounded-2xl border border-[color:var(--line)] bg-white/95 shadow-[var(--shadow-card)] backdrop-blur-xl">
          <ul className="divide-y divide-[color:var(--line)]">
            {MENU.map((item) => (
              <li key={item.n}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-4 px-5 py-4 text-ink transition hover:bg-canvas-deep"
                >
                  <span className="font-mono text-[11px] text-ink-muted">{item.n}</span>
                  <span className="font-display text-base font-semibold">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        .date-badge {
          background: linear-gradient(90deg, #0289fe 0%, #2fc0e6 55%, #7ff3d6 100%);
        }
        .date-shimmer {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 40%;
          background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.55) 50%, rgba(255,255,255,0) 100%);
          animation: shimmerSlide 3.2s ease-in-out infinite;
          pointer-events: none;
        }
        @media (max-width: 400px) {
          .date-badge { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
