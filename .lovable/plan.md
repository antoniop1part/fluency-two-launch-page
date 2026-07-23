# Plan: landing page "fluênc.ia 2.0"

Página estática única em `/`, todo conteúdo hardcoded, sem backend, sem admin. Segue o spec ao pé da letra — nenhuma seção, texto ou elemento fora do que foi listado.

## Stack e arquivos

- TanStack Start + React + Tailwind v4 (já configurado).
- Reescrevo `src/routes/index.tsx` (remove placeholder) e atualizo `head()` com título/description do evento + og/twitter.
- Design tokens (cores, raios, fontes) definidos em `src/styles.css` via `:root` + `@theme inline`. Adiciono utilities `.animate-fade-in-slow`, `.animate-reveal` e keyframes de shimmer/pulse/marquee/blob no `styles.css`.
- Fontes Inter + Spline Sans + Roboto Mono carregadas via `<link>` no `head` de `__root.tsx` (Google Fonts, com preconnect). Nunca `@import` remoto no CSS.

## Estrutura de componentes (`src/components/landing/`)

- `Nav.tsx` — barra flutuante fixa, badge de data com gradiente + shimmer, CTA que some no scroll (listener de scroll → estado), menu hambúrguer com dropdown numerado (Aula, Painel, O que esperar, FAQ).
- `Hero.tsx` — fundo "grainient" aproximado em CSS (dois blobs radiais animados nas cores branco / `#0289fe` / branco com `@keyframes` lento + leve textura SVG noise em `::after` com `mix-blend-mode`), badge live com dot pulsante, H1 com primeira palavra em itálico e trecho `(antes que ela se feche)` em span cinza menor, subtítulo com sublinhado azul em "executivos", "promovem", "IA", `LeadForm`, `Countdown`, rodapé mono com animação de balanço no texto da direita.
- `Countdown.tsx` — calcula target 2026-08-18 19:30 BRT (usar offset `-03:00`); se `> 48h` mostra "faltam X dias", senão `HH:MM:SS` ticando a cada segundo.
- `LogoMarquee.tsx` — faixa `canvas-deep` com track duplicado animado em `translateX` infinito; 8 retângulos placeholder cinza (~21px altura).
- `AudienceCard.tsx` — card único sempre aberto; header gradiente com título; corpo com 3 parágrafos (peso 600, cor ink); divisor + "Quer garantir sua vaga?" + `LeadForm`.
- `Panel.tsx` — label + título + subtítulo; grid 3 colunas (empilha no mobile) com `GuestCard` para Digo Lemos e dois "Em breve...". Numerador `01/03` etc. no canto inferior esquerdo da área da foto. Cards 2/3 mostram silhueta SVG (círculo + curva) em cinza sobre fundo bege; card 1 fica sem foto.
- `Timeline.tsx` — 4 itens verticais; marcadores 01/02/03 e ícone de presente (lucide `Gift`) roxo `#6a63f0` no bônus; cada card com thumbnail placeholder cinza, label/tempo ("Etapa 1"..."Bônus"), título e descrição. Bônus renderiza lista com "+" prefixo.
- `Faq.tsx` — accordion controlado (state por item), ícone `+` que rotaciona 45° quando aberto; 3 perguntas conforme spec; divisor + "Quer garantir sua vaga?" + `LeadForm` no fim.
- `Footer.tsx` — texto mono centralizado.
- `LeadForm.tsx` — componente reutilizado (3x). 4 etapas one-at-a-time, barra de progresso pill, contador "Etapa N de 4", input + botão seta lado a lado, botão vira "Reservar vaga" no passo 4. Validação: required + regex de e-mail. Simula loading 700ms e mostra tela de sucesso (check em círculo azul claro, título, texto do spec). Nenhuma persistência.
- `Reveal.tsx` — wrapper com IntersectionObserver que aplica `opacity/translateY` transitions (~0.9s). Hero usa variante mais lenta (~2.5s) sem depender de scroll.

## Comportamentos globais

- IntersectionObserver único reutilizado por `Reveal` (unobserve após revelar).
- Scroll listener no `Nav` para esconder CTA quando `scrollY > 0`.
- Badge de data com `@media (max-width: 400px) { display:none }`.
- Todos os elementos com `data-lovable-blank-page-placeholder` removidos.

## SEO / metadata

Em `index.tsx` `head()`: title "fluênc.ia 2.0 — 18/08 às 19h30 | Better Work", description do evento, og:title/description, og:type website, twitter:card summary_large_image. Sem og:image (nenhuma imagem absoluta disponível).

## Assets faltando

Placeholders óbvios: retângulos `bg-[color:var(--color-canvas-deep)]` com texto `[imagem]` em mono cinza para logos do marquee, thumbnails da timeline, e foto do Digo. Silhueta SVG inline nos 2 cards "Em breve...".

## O que NÃO faço

Sem admin, sem backend, sem Lovable Cloud, sem seções extras (Projetos, Audiência, Contato), sem "ideia do dia", sem depoimentos/métricas, sem shader WebGL real (aproximação CSS conforme permitido pelo spec).
