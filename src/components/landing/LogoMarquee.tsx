import google from "@/assets/logos/google.png.asset.json";
import heineken from "@/assets/logos/heineken.png.asset.json";
import ifood from "@/assets/logos/ifood.png.asset.json";
import microsoft from "@/assets/logos/microsoft.png.asset.json";
import waze from "@/assets/logos/waze.png.asset.json";
import xp from "@/assets/logos/xp.png.asset.json";
import btg from "@/assets/logos/btg.png.asset.json";
import duolingo from "@/assets/logos/duolingo.png.asset.json";

const LOGOS = [
  { src: google.url, alt: "Google" },
  { src: heineken.url, alt: "Heineken" },
  { src: ifood.url, alt: "iFood" },
  { src: microsoft.url, alt: "Microsoft" },
  { src: waze.url, alt: "Waze" },
  { src: xp.url, alt: "XP" },
  { src: btg.url, alt: "BTG Pactual" },
  { src: duolingo.url, alt: "Duolingo" },
];

export function LogoMarquee() {
  return (
    <section
      aria-label="Empresas"
      className="border-y border-[color:var(--line)] bg-canvas-deep py-7 overflow-hidden"
    >
      <div className="marquee">
        <div className="marquee-track">
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <div
              key={i}
              className="mx-4 flex h-14 shrink-0 items-center justify-center rounded-xl bg-white px-5"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-8 w-auto max-w-[140px] object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .marquee { display: flex; width: 100%; overflow: hidden; }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marqueeSlide 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
