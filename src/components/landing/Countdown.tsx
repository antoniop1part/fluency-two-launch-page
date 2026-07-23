import { useEffect, useState } from "react";

// 18/08/2026 19:30 BRT (-03:00)
const TARGET = new Date("2026-08-18T19:30:00-03:00").getTime();

function calc(now: number) {
  const diff = Math.max(0, TARGET - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { diff, days, h, m, s };
}

const pad = (n: number) => String(n).length < 2 ? `0${n}` : String(n);

export function Countdown() {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const { diff, days, h, m, s } = calc(now);
  const under48h = diff <= 48 * 60 * 60 * 1000;

  return (
    <p className="mt-5 text-center font-mono text-[12px] uppercase tracking-wider text-ink-muted">
      faltam{" "}
      <strong className="font-bold text-ink">
        {under48h ? `${pad(h)}:${pad(m)}:${pad(s)}` : `${days} dias`}
      </strong>
    </p>
  );
}
