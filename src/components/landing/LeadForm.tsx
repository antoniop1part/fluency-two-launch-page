import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

const SENIORITY = [
  "Em transição de emprego",
  "Estagiário",
  "Analista",
  "Supervisor",
  "Coordenador",
  "Gerente",
  "Diretor",
  "Fundador",
];

const STEPS = [
  { key: "email", label: "Seu melhor email", placeholder: "voce@email.com", type: "email" },
  { key: "name", label: "Como você se chama?", placeholder: "Seu nome", type: "text" },
  { key: "seniority", label: "Sua senioridade", placeholder: "Selecione...", type: "select" },
  { key: "whatsapp", label: "Seu WhatsApp", placeholder: "(11) 99999-9999", type: "tel" },
] as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Values = Record<string, string>;

export function LeadForm({ id }: { id?: string }) {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Values>({});
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const current = STEPS[step];
  const isLast = step === STEPS.length - 1;
  const value = values[current?.key] ?? "";

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    const v = value.trim();
    if (!v) {
      setError("Preencha esse campo.");
      return;
    }
    if (current.key === "email" && !EMAIL_RE.test(v)) {
      setError("Digite um email válido.");
      return;
    }
    if (!isLast) {
      setStep((s) => s + 1);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDone(true);
    }, 700);
  }

  if (done) {
    return (
      <div className="rounded-[16px] bg-surface p-8 text-center shadow-[var(--shadow-card)]" id={id}>
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--glow-blue)]/12 text-[color:var(--glow-blue)]">
          <Check className="h-7 w-7" strokeWidth={2.5} />
        </div>
        <h3 className="mt-5 font-display text-2xl font-bold text-ink">Vaga reservada!</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
          Agora sim! Clique no botão abaixo pra entrar no grupo de WhatsApp e ficar por dentro
          de tudo (zero spam, só criamos o grupo pra facilitar a vida de todos ao encaminhar os
          materiais).
        </p>
        <a
          href="#"
          className="mt-6 inline-flex items-center justify-center rounded-[8px] bg-ink-strong px-5 py-3 text-sm font-semibold text-canvas transition-transform hover:-translate-y-[1px]"
        >
          Entrar no grupo de WhatsApp
        </a>
      </div>
    );
  }

  const progress = ((step + 1) / STEPS.length) * 100;

  return (
    <form onSubmit={handleSubmit} className="w-full" id={id} noValidate>
      <div className="mb-3 flex items-center gap-3">
        <div className="h-[6px] flex-1 overflow-hidden rounded-full bg-black/[0.08]">
          <div
            className="h-full rounded-full bg-ink-strong transition-[width] duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
          Etapa {step + 1} de {STEPS.length}
        </span>
      </div>

      <label className="mb-2 block font-mono text-[11px] uppercase tracking-wider text-ink-muted">
        {current.label}
      </label>

      <div className="flex items-stretch gap-2">
        {current.type === "select" ? (
          <select
            className="flex-1 rounded-[8px] border border-[color:var(--line-strong)] bg-surface px-4 py-3 text-[15px] text-ink outline-none transition focus:border-[color:var(--glow-blue)] focus:ring-2 focus:ring-[color:var(--glow-blue)]/25"
            value={value}
            onChange={(e) => setValues((v) => ({ ...v, [current.key]: e.target.value }))}
            required
          >
            <option value="">{current.placeholder}</option>
            {SENIORITY.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        ) : (
          <input
            className="flex-1 rounded-[8px] border border-[color:var(--line-strong)] bg-surface px-4 py-3 text-[15px] text-ink outline-none transition placeholder:text-ink-muted focus:border-[color:var(--glow-blue)] focus:ring-2 focus:ring-[color:var(--glow-blue)]/25"
            type={current.type}
            placeholder={current.placeholder}
            value={value}
            onChange={(e) => setValues((v) => ({ ...v, [current.key]: e.target.value }))}
            autoFocus
            required
          />
        )}

        <button
          type="submit"
          disabled={loading}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-[8px] bg-ink-strong px-4 py-3 text-sm font-semibold text-canvas transition hover:-translate-y-[1px] disabled:opacity-70"
        >
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : isLast ? (
            <>
              Reservar vaga
              <ArrowRight className="h-4 w-4" />
            </>
          ) : (
            <ArrowRight className="h-4 w-4" />
          )}
        </button>
      </div>

      {error && <p className="mt-2 text-xs text-red-600">{error}</p>}
    </form>
  );
}
