import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { LogoMarquee } from "@/components/landing/LogoMarquee";
import { AudienceCard } from "@/components/landing/AudienceCard";
import { Panel } from "@/components/landing/Panel";
import { Expectations } from "@/components/landing/Expectations";
import { Faq } from "@/components/landing/Faq";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "fluênc.ia 2.0 | the news BW" },
      {
        name: "description",
        content:
          "Evento ao vivo com diretores executivos sobre como aproveitar a maior janela de oportunidade da sua carreira na era da IA. 09/09 às 19h30.",
      },
      { property: "og:title", content: "fluênc.ia 2.0 | the news BW" },
      {
        property: "og:description",
        content:
          "Aprenda com diretores executivos o caminho para se tornar o profissional que eles premiam e promovem na era de IA.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Nav />
      <Hero />
      <LogoMarquee />
      <AudienceCard />
      <Expectations />
      <Panel />
      <Faq />
      <Footer />
    </div>
  );
}
