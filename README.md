# Fluênc.ia 2.0 Landing Page

Contexto: você vai recriar uma landing page de captação de leads para um evento ao
vivo chamado **"fluênc.ia 2.0"**, no dia **18/08 às 19h30**, organizado por **the news
better work / Better Work**. É uma página **estática, sem painel admin e sem backend**
— todo o conteúdo abaixo deve ser escrito direto no código (hardcoded), não vindo de
API nem de CMS.

**Regra mais importante: replique exatamente o que está descrito abaixo — não invente,
não resuma, não "melhore" copy, não adicione seções, ícones, imagens ou textos que não
estejam explicitamente listados aqui. Se alguma informação parecer faltando, deixe um
placeholder óbvio (ex.: `[IMAGEM AQUI]`) em vez de inventar conteúdo.**

Stack sugerida: React + Tailwind (padrão do Lovable). Sem formulário conectado a
backend real — o formulário de captação de leads deve existir visualmente e funcionar
no front-end (validação, avanço de etapas, tela de sucesso), mas não precisa persistir
dados em lugar nenhum.

---

## 1. Design system

**Cores** (usar exatamente estes hex):
- `--color-canvas: #f4f3ef` — fundo principal da página
- `--color-canvas-deep: #ebe8e1` — fundo de seções mais "fundas" (faixa de logos)
- `--color-surface: #ffffff` — fundo dos cards
- `--color-ink: #16171b` — texto forte / títulos
- `--color-ink-strong: #0a0a0c` — quase preto (botões)
- `--color-ink-soft: #52535b` — texto secundário
- `--color-ink-muted: #86868f` — labels em caixa alta, texto terciário
- `--color-glow-blue: #0289fe` — azul de marca (destaques, links, glow)
- `--color-iris-gleam: #6a63f0` — roxo de acento (usado só no ícone de bônus da timeline)
- Linha/borda sutil: `rgba(20, 21, 27, 0.12)`; borda mais forte: `rgba(20, 21, 27, 0.22)`
- Sombra de card: `0 1px 2px rgba(20,21,27,0.04), 0 8px 24px rgba(20,21,27,0.06)`

**Tipografia:**
- Fonte de títulos/display: **Inter** (peso 700 nos títulos grandes, 600 em subtítulos/destaques)
- Fonte de corpo: **Spline Sans** (peso 400)
- Fonte mono (labels em caixa alta, contadores): **Roboto Mono**

**Raios:** botões/inputs `8px`, cards `16px`, pill (badges/botão redondo) `9999px`.

**Tema:** claro (light) o tempo todo — fundo quase-branco quente, cards brancos com
sombra suave, texto escuro. Não é um site com dark mode.

---

## 2. Comportamentos globais (aplicam-se à página toda)

- **Fade-in ao rolar:** elementos entram com opacidade 0 → 1 e translateY(18px) → 0,
  transição suave (~0.9s), disparado quando entram na viewport (Intersection Observer).
- **Fade-in mais lento no hero:** os elementos do topo (badge, título, subtítulo,
  formulário) entram com uma transição mais longa (~2.5s) assim que a página carrega,
  não precisa de scroll.
- **Nav:** menu fixo no topo, flutuante (glass/blur), sempre visível. O botão
  "Reservar vaga" do menu **some com fade assim que o usuário rola um pixel** e só
  volta a aparecer no topo absoluto da página.
- **Primeira palavra em itálico:** no título principal do hero, a primeira palavra
  aparece em itálico (negrito+itálico), o resto do título em peso normal(-bold).

---

## 3. Seção: Menu (nav fixo no topo)

Barra flutuante (fundo branco translúcido com blur, borda clara, sombra, cantos
arredondados), fixa a 12px do topo, alinhada ao centro, largura máxima de 1200px.

**Lado esquerdo:**
- Logo (imagem — ver seção "Assets faltando"). Sem logo, mostra o texto "BW Classes"
  em itálico bold.
- Ao lado do logo, um **badge de data**: pill com fundo em gradiente diagonal
  azul→ciano→verde-água (`linear-gradient(90deg, #0289fe 0%, #2fc0e6 55%, #7ff3d6
  100%)`), texto branco-creme, fonte mono bold, com um emoji de calendário 📅 e o
  texto **"18/08 às 19h30"**. Tem um efeito de **brilho deslizante** (uma faixa clara
  diagonal que atravessa o badge da esquerda pra direita a cada ~3.2s, em loop).
  Em telas muito pequenas (abaixo de 400px) esse badge some pra não quebrar o layout.

**Lado direito:**
- Botão preto "Reservar vaga" (some ao rolar a página, como descrito acima).
- Botão hambúrguer (3 linhas) que abre um menu dropdown com links para as seções
  (Aula, Painel, O que esperar, FAQ), cada item numerado (01, 02, 03...).

---

## 4. Seção: Hero (topo)

Fundo: **gradiente animado fluido** branco → azul (`#0289fe`) → branco, com movimento
lento e textura de grão sutil (o efeito real do site original usa um shader WebGL
["Grainient"] com essas 3 cores; se não for viável replicar em WebGL, aproxime com um
CSS `background` animado — um gradiente que se move lentamente, ou um blob suave
pulsando — mas mantenha as mesmas 3 cores e uma sensação orgânica, não um gradiente
estático parado).

Conteúdo, centralizado, nesta ordem:

1. **Badge "ao vivo"**: pill com fundo levemente cinza, borda clara, contendo uma
   **bolinha vermelha piscando** (`#e0293e`, pulso de opacidade a cada 1.5s) + o texto
   **"Evento ao vivo 18/08 às 19h30."**
2. **Título (H1), gigante** (até ~5rem em desktop): **"IA: Como aproveitar a maior
   janela de oportunidade da sua carreira (antes que ela se feche)"** — a primeira
   palavra ("IA:") em itálico; o trecho entre parênteses **"(antes que ela se feche)"**
   aparece menor e em cor mais suave (cinza), tipo uma ressalva.
3. **Subtítulo**: **"Aprenda com diretores executivos o caminho para se tornar o
   profissional que eles premiam e promovem na era de IA."** — as palavras
   **"executivos"**, **"promovem"** e **"IA"** ganham sublinhado azul.
4. **Formulário de captação de leads** (ver seção 8 — é o mesmo componente reusado em
   vários lugares da página), com um título suave acima dele: **"Reservar vaga"**.
5. Abaixo do formulário, uma **contagem regressiva** até 18/08 às 19h30 (horário de
   Brasília): enquanto faltar mais de 48h, mostra **"faltam X dias"**; abaixo de 48h,
   passa a mostrar **"faltam HH:MM:SS"** atualizando a cada segundo, com o número em
   negrito.
6. No rodapé do hero, duas linhas pequenas em fonte mono, uma de cada lado (empilham
   no mobile): à esquerda **"/// só ao vivo, sem gravação."**; à direita **"junte-se a
   milhares de profissionais de empresas como ↓"** com uma animação de balanço leve
   (sobe e desce) contínua.

---

## 5. Seção: Faixa de logos (marquee)

Uma faixa horizontal contínua (fundo bege mais escuro que o resto da página, bordas
finas em cima/embaixo), com **8 logos de empresas rolando infinitamente da direita pra
esquerda**, em loop contínuo e suave (sem pausas, sem controles). As imagens dos logos
não estão disponíveis aqui — ver seção "Assets faltando". Use retângulos placeholder
cinza no lugar de cada logo, mesma altura (~21px), até as imagens reais serem enviadas.

---

## 6. Seção: card "Pra quem é o fluênc.ia 2.0?"

**Não é uma sanfona/accordion — é um único card, sempre aberto**, sem necessidade de
clicar em nada.

- **Cabeçalho do card**: mesmo gradiente do badge de data (azul→ciano→verde-água,
  diagonal), texto grande e bold em cor creme (`#f4f3ef`): **"Pra quem é o fluênc.ia
  2.0?"**
- **Corpo do card** (fundo branco, cantos arredondados, sombra leve), com o **mesmo
  peso visual do subtítulo do hero** (fonte de título, peso 600, cor escura — não é
  texto cinza secundário), em 3 parágrafos separados:

  > Esse evento é para profissionais que entenderam que IA pode ser O salto da sua
  > carreira e querem entender com grandes executivos como capturar essa oportunidade.

  > Se você é um profissional que entendeu que não é o mais técnico que vai vencer o
  > jogo, mas quem é bom no que faz e usa IA pra alavancar...

  > Esse evento é pra você.

- No fim do card, uma linha divisória e o texto **"Quer garantir sua vaga?"** seguido
  do mesmo formulário de captação de leads (seção 8).

---

## 7. Seção: Painel de convidados

Título pequeno (label): **"Painel"**. Título: **"Convidados do Painel"**. Subtítulo:
**"Quem já confirmou presença — arraste ou use as setas."** *(nota: mesmo com esse
texto de subtítulo mencionando setas, não construa setas nem paginação — são só 3
cards, lado a lado)*.

**3 cards em grid (lado a lado no desktop, empilhados um abaixo do outro no
mobile)**, sem carrossel, sem setas, sem bolinhas de navegação:

1. **Digo Lemos** — foto não disponível (ver "Assets faltando"; até lá, deixe a foto
   em branco, sem placeholder de silhueta neste card). Cargo: **"Fundador · Better
   Work"**. Bio (3 parágrafos):
   > Fundador da maior newsletter de carreira e performance da América latina: Better
   > Work.

   > Ele também é sócio e parte do time fundador da Link School of Business, uma das
   > faculdades mais inovadoras do mundo, onde liderou a criação da área de
   > investimentos em startups, captando e investindo mais de R$ 5 milhões.

   > Rodrigo é pós graduado em Neurociência aplicada à Educação, empreende com
   > educação há 8 anos e agora lidera a construção dos cursos da Better Work.

2. **"Em breve..."** — sem cargo, sem bio. No lugar da foto, mostre um **ícone de
   silhueta genérica de pessoa** (círculo pra cabeça + curva pros ombros), em cinza
   claro, centralizado num box com fundo bege.

3. **"Em breve..."** — igual ao card 2 (mesmo ícone de silhueta).

Cada card tem, no canto inferior esquerdo da foto, um numerador pequeno tipo
**"01/03"**, **"02/03"**, **"03/03"** (fonte mono, fundo escuro translúcido, texto
branco).

---

## 8. Seção: "O que esperar" (linha do tempo / timeline)

Label: **"Agenda"**. Título: **"O que esperar"**. Subtítulo: **"Como o Painel vai
funcionar, do início ao bônus."**

4 itens em lista vertical, cada um com um marcador numerado à esquerda (01, 02, 03) e
um card à direita com thumbnail (placeholder, sem imagem real definida), rótulo/tempo,
título e descrição:

1. **Etapa 1** — **"Papo com o CEO: como seu chefe está olhando para essa
   oportunidade"** — descrição: *"Em breve mais detalhes."*
2. **Etapa 2** — **"Papo com Head de RH: como o recrutador vai te avaliar sobre
   fluência em IA"** — descrição: *"Em breve mais detalhes."*
3. **Etapa 3** — **"O caminho para capturar a maior oportunidade dessa geração no
   trabalho"** — descrição: *"Ferramentas de IA e um framework exclusivo sobre como
   executar o que os mentores do evento vão compartilhar ao vivo."*
4. **Bônus** (card em destaque — marcador é um ícone de presente/gift em vez de
   número, com fundo roxo `#6a63f0`) — **"Bônus exclusivos do ao vivo"** — descrição
   em formato de **lista** (cada linha com um "+" na frente, não repita o "+" dentro
   do próprio texto):
   - Sorteio de prêmios
   - 100 prompts para alavancar sua carreira
   - Ingresso para o maior evento do ano (the news 6e6)

---

## 9. Seção: FAQ

Label: **"FAQ"**. Título: **"Perguntas frequentes"**.

**Accordion de 3 perguntas** (clique na pergunta pra abrir/fechar a resposta; ícone
"+" que gira 45° virando "×" quando aberto):

1. **Vai ter replay ou ser gravado?**
   Não, o Evento é 100% ao vivo e não ficará gravado.
2. **Os documentos, prompts e bônus ficarão disponíveis a todos?**
   Somente àquelas pessoas que participarem da live e permanecerem até o final.
3. **Preciso ter algum conhecimento prévio em IA?**
   Não, o evento foi desenvolvido para profissionais de quaisquer áreas e níveis de
   fluência em IA. Vamos cobrir o caminho pra chegar lá independentemente da
   ferramenta que você usa também.

No fim da seção, mesma linha divisória + "Quer garantir sua vaga?" + formulário de
captação de leads (seção 8).

---

## 10. Componente reutilizado: formulário de captação de leads

Aparece em 3 lugares da página: no hero, no fim do card "Pra quem é...", e no fim do
FAQ. É o **mesmo componente**, sempre com **4 etapas dentro do mesmo campo** (uma
pergunta por vez, sem mostrar as 4 de uma vez):

1. **E-mail** — label "Seu melhor email", placeholder "voce@email.com"
2. **Nome** — label "Como você se chama?", placeholder "Seu nome"
3. **Senioridade** — select com label "Sua senioridade", placeholder "Selecione...",
   opções: Em transição de emprego, Estagiário, Analista, Supervisor, Coordenador,
   Gerente, Diretor, Fundador
4. **WhatsApp** — label "Seu WhatsApp", placeholder "(11) 99999-9999"

Acima do campo atual, uma barrinha de progresso fina (pill, preenche conforme avança)
e um contador tipo "Etapa 2 de 4". Input + botão com seta (→) lado a lado. No último
passo, o botão mostra o texto **"Reservar vaga"**. Validação simples: campo
obrigatório, e-mail precisa ter formato válido.

**Tela de sucesso** (depois de enviar): ícone de check num círculo azul claro, título
**"Vaga reservada!"**, texto: *"Agora sim! Clique no botão abaixo pra entrar no grupo
de WhatsApp e ficar por dentro de tudo (zero spam, só criamos o grupo pra facilitar a
vida de todos ao encaminhar os materiais)."*

Como não há backend neste projeto, ao "enviar" o formulário, simplesmente mostre a
tela de sucesso (pode simular um pequeno delay de loading no botão) — não precisa
salvar o lead em lugar nenhum.

---

## 11. Rodapé

Texto simples, centralizado, fonte mono pequena, cor cinza:

> © 2026 the news better work. Site feito com muito café, country music, Claude Code e
> as melhores das intenções.

---

## 12. O que NÃO incluir

- **Nenhum painel admin.** Não crie tela de login, edição de conteúdo, upload de
  imagem ou qualquer CRUD. Todo o texto acima é fixo no código.
- **Nenhuma seção além das listadas acima.** O projeto original tem seções extras
  (Projetos, Audiência em números, Contato/Parcerias) que estão **desligadas** no site
  hoje — não as inclua nesta réplica.
- **Nenhum botão/recurso de "ideia do dia" ou frases motivacionais flutuantes** — isso
  existia antes e foi removido de propósito.
- Não adicione depoimentos, provas sociais, métricas ou qualquer texto que não esteja
  explicitamente escrito acima.

---

## 13. Assets faltando (não dá pra transferir por texto)

Estas imagens/vídeo existem no projeto original mas precisam ser **reenviadas
manualmente** no Lovable — este prompt não consegue incluir os arquivos:

- Logo do cabeçalho (PNG, fundo transparente)
- 8 imagens de logos para a faixa animada (marquee)
- Foto de Digo Lemos (painel de convidados) — atualmente também não configurada no
  site original, então pode deixar sem foto por enquanto
- Todos os "thumbnails" da timeline ("O que esperar") também não têm imagem definida
  no site original — pode deixar sem imagem/com placeholder

Enquanto não tiver os arquivos reais, use placeholders visuais óbvios (retângulo
cinza com texto "[imagem]") em vez de inventar uma imagem.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://fluency-two-launch-page.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/e263ac98-7ecd-4d45-8b19-1dc4d7ef108a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
