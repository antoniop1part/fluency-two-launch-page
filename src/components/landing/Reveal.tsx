import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  slow?: boolean;
  as?: "div" | "section" | "header" | "footer" | "article" | "p" | "h2" | "h3";
  className?: string;
  immediate?: boolean;
};

export function Reveal({ children, slow, as = "div", className = "", immediate }: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (immediate) {
      // Trigger next frame so the transition runs
      requestAnimationFrame(() => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [immediate]);

  const Tag = as as "div";
  const base = slow ? "reveal-slow" : "reveal";
  return (
    <Tag ref={ref as never} className={`${base} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
