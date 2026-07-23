import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

// Substitua pelo link real do grupo de WhatsApp:
const GROUP_URL = "https://chat.whatsapp.com/SEU-LINK-AQUI";

export const Route = createFileRoute("/obrigado")({
  head: () => ({
    meta: [
      { title: "Inscrição confirmada | fluênc.ia 2.0" },
      {
        name: "description",
        content:
          "Sua inscrição no fluênc.ia 2.0 foi confirmada. Entre no grupo do WhatsApp para receber os materiais e o link da aula ao vivo.",
      },
      { property: "og:title", content: "Inscrição confirmada | fluênc.ia 2.0" },
      {
        property: "og:description",
        content:
          "Entre no grupo do WhatsApp para não perder a aula e receber os materiais com antecedência.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Obrigado,
});

function Obrigado() {
  const [secs, setSecs] = useState(12);

  useEffect(() => {
    const t = setInterval(() => {
      setSecs((s) => {
        if (s <= 1) {
          clearInterval(t);
          window.location.href = GROUP_URL;
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const urgent = secs <= 3;

  return (
    <div className="min-h-screen bg-[#FAFBFC] font-display text-[#1A1A1A] antialiased">
      <div className="mx-auto flex min-h-screen max-w-[560px] flex-col justify-center px-7 py-12 md:max-w-[640px] md:px-14 md:py-24">
        <div className="mb-6 h-[3px] w-9 bg-[#0099FF] animate-[up_0.5s_ease_0.1s_both]" />

        <div className="mb-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#0099FF] animate-[up_0.5s_ease_0.15s_both]">
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[#0099FF]" />
          Inscrição confirmada
        </div>

        <div className="mb-10 inline-block self-start rounded-r-md border-l-[3px] border-[#0099FF] bg-[#0099FF]/10 px-[18px] py-3 text-sm font-semibold text-[#0099FF] animate-[up_0.5s_ease_0.27s_both]">
          Você receberá os materiais por e-mail
        </div>

        <h1 className="mb-4 text-[clamp(32px,9vw,56px)] font-black leading-[1.05] tracking-[-0.03em] md:text-[64px] md:leading-[1.02] animate-[up_0.5s_ease_0.2s_both]">
          Sua inscrição<br />foi confirmada.
        </h1>

        <p className="mb-12 text-base font-medium leading-[1.65] text-[#6B7280] md:mb-14 md:text-lg animate-[up_0.5s_ease_0.25s_both]">
          Entre no grupo para não perder a aula e receber os materiais com antecedência.
        </p>

        <div className="mb-8 flex flex-col items-start gap-1 animate-[up_0.5s_ease_0.3s_both]">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6B7280]">
            Entrando no grupo em
          </span>
          <div
            className={`text-[clamp(64px,18vw,96px)] font-black leading-none tracking-[-0.05em] tabular-nums transition-colors md:text-[120px] ${
              urgent ? "text-[#0099FF]" : "text-[#1A1A1A]"
            }`}
          >
            {secs}
          </div>
        </div>

        <a
          href={GROUP_URL}
          className="inline-block self-start whitespace-nowrap rounded-lg bg-[#0099FF] px-11 py-[22px] text-[17px] font-bold uppercase tracking-[0.04em] text-white transition-all hover:-translate-y-0.5 hover:opacity-90 active:translate-y-0 active:opacity-100 max-[480px]:w-full max-[480px]:text-center md:px-14 md:py-6 md:text-lg animate-[up_0.5s_ease_0.35s_both]"
        >
          Entrar no Grupo →
        </a>
      </div>

      <style>{`
        @keyframes up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: none; } }
      `}</style>
    </div>
  );
}
