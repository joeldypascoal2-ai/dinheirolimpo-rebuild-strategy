# Dinheiro Limpo — Direcção Visual, Design System e Arquitectura Final

**Estado:** documento de decisão para aprovação; não é uma implementação.
**Base:** auditoria de 12/09/2026 + direcção visual seleccionada: **Editorial Assimétrica de Prestígio**.
**Princípio:** Não procurar parecer moderno. Procurar parecer credível, claro, humano e intencional.

---

## 1. Direcção criativa

O Dinheiro Limpo será apresentado como uma **instituição angolana de educação financeira com linguagem de publicação editorial**. A interface combina rigor institucional, hierarquia de revista financeira e fotografia documental de pessoas reais.

A qualidade visual virá de quatro decisões: tipografia com autoridade; grelha assimétrica controlada; margens generosas; e conteúdo real como principal matéria visual. A marca surge primeiro, Euclides surge como fundador e autoridade, e a equipa demonstra estrutura institucional.

**Metáfora de projecto:** uma revista financeira angolana cuidadosamente encadernada — páginas claras, tinta verde profunda, fotografia documental e margens generosas.

**Não é:** fintech, SaaS, landing page promocional, revista de luxo, nem site pessoal do fundador.

### Personalidade visual

- **Credível:** poucos elementos, afirmações comprováveis, contraste forte.
- **Editorial:** títulos com serif, colunas de leitura controladas, pesos variados entre conteúdos.
- **Humana:** rostos reais em contexto; nomes, funções e especialidades visíveis.
- **Angolana:** identidade construída por assuntos, pessoas, linguagem e fotografia locais — nunca por clichés gráficos.
- **Sóbria:** superfícies mate, bordas finas, quase nenhuma sombra, cantos discretos.
- **Próxima:** corpo de texto acessível e CTAs específicos, sem linguagem de pressão.

---

## 2. Princípios de UX

1. Cada página responde em poucos segundos: o que é, para quem é, por que confiar, o que fazer a seguir.
2. Uma acção principal por página; acções secundárias são links, não botões concorrentes.
3. A instituição precede a venda; a prova precede o CTA.
4. Conteúdos ajudam a descobrir programas; programas remetem para conteúdos que demonstram conhecimento.
5. O utilizador não precisa de conhecer a estrutura interna da organização para encontrar informação.
6. Mobile reorganiza prioridade — não empilha mecanicamente o desktop.
7. Informação validada distingue-se de afirmações promocionais; números exigem fonte e contexto.
8. Navegação, pesquisa e filtros reduzem decisões, não as multiplicam.
9. Estados vazios e erros explicam o que aconteceu e o passo seguinte.
10. A experiência mantém-se completa sem animação.

---

## 3. Princípios anti-AI design

Proibido por defeito: gradient text, mesh gradients, blobs, glassmorphism, neon, glow, transparências decorativas, cards flutuantes, sombras exageradas, raios excessivos, ícones gigantes, headings desproporcionados, pills em série, grelhas de cartões para tudo, ilustrações genéricas, pessoas artificiais, parallax, entradas em todas as secções e cursores personalizados.

**Teste obrigatório para cada elemento:** melhora compreensão, hierarquia, navegação ou percepção de marca? Se não, remover.

Para não parecer template:
- variar composição por função, não por decoração;
- reservar a assimetria para destaques editoriais;
- usar divisórias, tipografia e espaço antes de caixas;
- manter o conteúdo real e a fotografia do Dinheiro Limpo como assinatura.

---

## 4. Identidade visual existente e recomendação

O site actual usa verde vivo sobre branco, nome do domínio como wordmark textual e uma serif nos títulos. Há matéria aproveitável: **verde + contraste editorial + serif**. Os problemas são verde demasiado luminoso para texto, ausência de tons institucionais e falta de hierarquia.

**Decisão:** preservar o verde como origem da marca, aprofundando-o para uma paleta institucional. O logótipo não será redesenhado sem ficheiros oficiais e validação.

### Paleta seleccionada

| Token | Valor | Uso |
|---|---:|---|
| `brand-deep` / Primary | `#123C2F` | Cabeçalhos, botões primários, áreas institucionais, links principais |
| `brand` / Secondary | `#1F6A4A` | Acentos, categorias, estados seleccionados, links |
| `brand-soft` | `#D6E3D9` | Fundos de apoio, divisórias fortes, imagens indisponíveis |
| `canvas` / Background | `#F6F4EE` | Fundo principal quente e editorial |
| `ink` / Text primary | `#202723` | Texto corrido e títulos sobre fundo claro |
| `surface` | `#FFFDF8` | Formulários e superfícies funcionais |
| `border` | `#CBD2CC` | Bordas e separadores |
| `text-secondary` | `#59645E` | Metadados e texto secundário |
| `success` | `#17683A` | Confirmações e sucesso |
| `error` | `#A63732` | Erros e acções destrutivas |
| `info` | `#245C70` | Informação neutra, nunca decoração |

Implementação futura: converter estes valores em tokens `oklch` equivalentes; componentes usam apenas nomes semânticos. Contraste mínimo WCAG AA: 4,5:1 para texto normal e 3:1 para texto grande e controlos.

**Uso de cor:** 70% canvas/surface, 20% ink/neutros, 10% verdes. A cor não cria ornamentos; marca hierarquia e acção.

---

## 5. Tipografia

### Famílias seleccionadas

- **Títulos:** Libre Baskerville (400, 700, itálico 400). Autoridade editorial, bons acentos, números legíveis.
- **Corpo e interface:** IBM Plex Sans (400, 500, 600). Excelente leitura, densidade institucional e clareza em mobile.
- Carregamento apenas destes seis ficheiros, preferencialmente alojados localmente e pré-carregados; `font-display: swap`.

### Escala responsiva

| Estilo | Mobile | Desktop | Linha | Uso |
|---|---:|---:|---:|---|
| Display | `clamp(3rem, 5vw, 5rem)` | máx. 80px | 0,98 | Apenas aberturas institucionais especiais |
| H1 | `clamp(2.5rem, 4vw, 4rem)` | máx. 64px | 1,05 | Um por página |
| H2 | `clamp(2rem, 3vw, 3rem)` | máx. 48px | 1,12 | Secções principais |
| H3 | `clamp(1.5rem, 2vw, 2rem)` | máx. 32px | 1,2 | Subsecções e destaques |
| H4 | `1.25rem` | `1.375rem` | 1,3 | Cards e módulos |
| Body large | `1.125rem` | `1.25rem` | 1,6 | Leads, max 62ch |
| Body | `1rem` | `1rem` | 1,65 | Texto geral, max 68–72ch |
| Body small | `0.875rem` | `0.875rem` | 1,55 | Descrições secundárias |
| Caption | `0.75rem` | `0.75rem` | 1,45 | Datas e fontes |
| Label | `0.75rem` | `0.75rem` | 1,2 | Campos e metadados |

Letter-spacing: `0` por defeito. Apenas labels em maiúsculas podem usar `0.06em`; nunca valores negativos. Itálico editorial é pontual, não decorativo.

---

## 6. Espaçamento

Escala base de 4 px: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128`.

- Espaço dentro de controlos: 12–16 px vertical, 16–24 px horizontal.
- Entre título e texto: 16–24 px.
- Entre elementos do mesmo grupo: 8–16 px.
- Entre grupos: 24–48 px.
- Entre secções: `clamp(4rem, 8vw, 7.5rem)`.
- Abertura de página: 64–96 px após header.

Não existem margens isoladas de 18, 27 ou 55 px. Excepções exigem justificação no componente.

---

## 7. Containers e grelha

### Containers

| Nome | Máximo | Uso |
|---|---:|---|
| Reading | `72ch` | Artigos, biografias, texto longo |
| Standard | `1200px` | Páginas institucionais e programas |
| Wide | `1360px` | Aberturas editoriais e listagens assimétricas |
| Full | `100%` | Apenas fundos; conteúdo interno volta ao container |

Gutters: 20 px (360–479), 24 px (480–767), 32 px (768–1023), 48 px (1024–1279), 64 px (≥1280). Nunca menos de 20 px no mobile.

### Grelha

- Mobile: 4 colunas, gap 16 px.
- Tablet: 8 colunas, gap 24 px.
- Desktop: 12 colunas, gap 24–32 px.
- Wide: 12 colunas dentro de 1360 px; o espaço restante é margem.

A assimetria aparece em módulos editoriais (7/5, 8/4, 5/7), nunca em formulários ou leitura longa. Conteúdo de texto usa `minmax(0, 1fr)` e `min-width: 0`; imagens usam proporções estáveis.

---

## 8. Breakpoints e comportamento

| Faixa | Regra |
|---|---|
| 360–479 | Uma coluna; 20 px gutter; controlos a 44 px; imagens 4:3 ou 1:1; prioridade editorial explícita |
| 480–767 | Uma coluna com maior respiro; pares compactos apenas quando seguros |
| 768–819 | Tablet estreito; 8 colunas; 2 colunas apenas para módulos curtos |
| 820–1023 | Tablet largo; navegação ainda móvel; composições 5/3 ou 4/4 |
| 1024–1279 | Desktop compacto; header completo; grelha de 12; composição editorial moderada |
| 1280–1535 | Desktop padrão; sistema completo dentro de 1200–1360 px |
| ≥1536 | Margens crescem, conteúdo não; leitura mantém 72ch |

Testes obrigatórios: 360, 390, 430, 480, 768, 820, 1024, 1280, 1366, 1440, 1536 e 1920 px.

---

## 9. Navegação

### Desktop

Header com três zonas: marca à esquerda; navegação no centro; uma acção contextual à direita. Itens: **Sobre · Programas · Conteúdos · FIN Summit · Contactos**. "Conteúdos" abre um menu curto com Artigos, Podcast e Newsletter — não um mega-menu.

- Altura inicial: 80–88 px; durante scroll: 64–72 px.
- Fundo sólido canvas; uma borda inferior discreta quando fixa.
- Hover: sublinhado que cresce 150–200 ms; focus: outline de 2 px com offset.
- CTA do header muda por contexto apenas se necessário; por defeito, "Explorar programas".

### Mobile e tablet

- Marca + botão de menu por ícone reconhecível, alvo 44×44 px.
- Painel sólido, sem transparência, com navegação vertical e CTA no fim.
- Fecha com botão, Escape, clique num destino e mudança de rota.
- Bloqueia scroll do conteúdo e devolve foco ao activador.
- Não esconde FIN Summit nem Contactos.

Breadcrumbs em páginas de nível 2/3; ausentes na homepage.

---

## 10. Botões e links

### Botões

- **Primary:** fundo `brand-deep`, texto claro, raio 4 px, altura mínima 48 px.
- **Secondary:** transparente, borda `brand-deep`, texto `brand-deep`.
- **Tertiary:** sem caixa; texto + seta curta; sublinhado no hover.
- **Destructive:** apenas operações irreversíveis, token `error`.

Estados: hover com mudança de tom, active com deslocamento máximo de 1 px, focus ring 2 px, disabled a 45% + cursor, loading mantém largura e mostra indicador com label acessível. Botões não são pills.

CTAs específicos: "Conhecer o programa", "Ler o artigo", "Ouvir o episódio", "Subscrever a newsletter", "Falar com a equipa". Evitar "Começar agora".

Links no corpo são sublinhados; navegação pode usar sublinhado apenas em hover/focus.

---

## 11. Cards e módulos

Regra: card só existe quando o elemento é uma unidade clicável/repetível. Secções institucionais ficam sem caixa.

- **Article Card:** imagem 4:3 ou 16:9; tema + data; título; excerto opcional. Variantes destaque/padrão/compacta partilham tokens.
- **Course Card:** número/programa, nome, público, benefício, formato quando validado, CTA. Borda superior; sem sombra.
- **Podcast Card:** capa quadrada, número/data, título temático, convidado e duração quando validada, play/link.
- **Team Profile:** retrato 4:5, nome, cargo, especialidade e resumo; não é um cartão fechado — fotografia e texto participam na grelha.
- **Stat:** número + unidade + descrição + fonte/período obrigatório; sem contador animado.
- **Testimonial:** citação, nome, relação com o programa, fotografia real e autorização; ausente enquanto não houver material validado.

Raio padrão: 4 px; imagens editoriais podem não ter raio. Sombra só para overlays funcionais (menu/modal): curta e de baixa opacidade.

---

## 12. Inputs e formulários

- Label sempre visível acima do campo; placeholder apenas como exemplo.
- Altura mínima 48 px; textarea mínimo 144 px.
- Surface clara, borda neutra, raio 4 px.
- Focus: borda `brand` + ring 2 px.
- Error: borda `error`, ícone opcional, mensagem textual associada por `aria-describedby`.
- Success: mensagem fora do campo, não só cor.
- Disabled: aparência e `disabled` real.
- Loading: botão mantém dimensões e bloqueia submissão duplicada.
- Teclado apropriado em mobile (`email`, `tel`, `inputmode`).

---

## 13. Footer

Área institucional compacta em fundo `brand-deep`:

1. Marca + frase institucional curta validada.
2. Sobre: História, Fundador, Equipa.
3. Explorar: Programas, Artigos, Podcast, FIN Summit.
4. Contacto + redes activas.
5. Newsletter numa linha própria apenas se integrada.
6. Base: copyright, Privacidade, Termos.

No desktop, 4 colunas; em tablet, 2×2; em mobile, secções empilhadas com títulos visíveis (sem accordions desnecessários). Sem mapa de site interminável.

---

## 14. Sistema de fotografia

- Só fotografias reais de Euclides, equipa, eventos, alunos autorizados e actividades.
- Tratamento: luz natural, contraste moderado, temperatura neutra/quente, saturação contida; sem filtros verdes.
- Retratos: 4:5; eventos/editorial: 3:2 ou 16:9; capas de artigos: 4:3; podcast: 1:1.
- `object-fit: cover`, ponto focal definido por imagem, `srcset` e `sizes`, formatos AVIF/WebP com fallback.
- Alt text descreve conteúdo e função; imagens decorativas recebem alt vazio.
- Sem substituição por stock ou pessoas geradas. Quando falta fotografia, usar superfície tipográfica simples com indicação editorial — nunca inventar rosto.

Hierarquia humana: Dinheiro Limpo (marca, primeiro sinal) → Euclides (fundador, secção de autoridade) → equipa (estrutura multidisciplinar). Euclides não ocupa todas as capas nem assina conteúdos que não são seus.

---

## 15. Sistema editorial

### Índice

Abertura com destaque principal real; selecção editorial assimétrica; temas consolidados; listagem cronológica secundária; pesquisa e filtros apenas quando úteis. Não repetir a mesma grelha três vezes.

### Artigo

H1 + lead + autor + data + tempo de leitura + imagem. Corpo em 68–72ch; H2/H3 claros; figuras com legenda e fonte; pull quotes raras; notas e referências. No fim: autor, artigos relacionados (máx. 3), programa relacionado se relevante e newsletter.

### Taxonomia proposta

Educação Financeira · Investimentos · Bolsa e Mercados · Angola e Economia · Negócios e Empreendedorismo · Poupança · Carreira. Consolidar só após mapear todos os artigos.

---

## 16. Sistema de cursos e programas

### Índice

Uma abertura que explica a oferta, seguida de programas comparáveis por público e resultado. Evitar depender de preço e botão.

### Página de programa

1. Nome + proposta + CTA;
2. Para quem é / para quem não é;
3. O que aprende;
4. Estrutura ou módulos;
5. Formato, duração, datas e investimento (validados);
6. Docente/facilitadores;
7. Testemunhos reais;
8. FAQ;
9. CTA final coerente.

Dados ausentes aparecem no sistema editorial como pendentes; nunca são preenchidos por texto genérico.

---

## 17. Sistema da equipa e fundador

- **Fundador:** uma página editorial própria com retrato documental, biografia validada, papel na instituição, experiência verificável, conteúdos assinados e contacto institucional. Sem "celebrity hero".
- **Equipa:** introdução sobre a forma de trabalhar; composição assimétrica com perfis completos; especialidades que mostram complementaridade; retratos coerentes mas não artificiais.
- Na homepage futura, fundador e equipa aparecem em blocos separados, com a marca sempre acima na hierarquia.

---

## 18. Sistema do podcast

O podcast usa a mesma paleta e tipografia, com capa quadrada e um tom ligeiramente mais denso, não uma nova marca.

- Hub: descrição, plataformas, episódio em destaque, lista cronológica e temas.
- Episódio: título temático (não só "Euclides vs X"), convidado, data, duração, descrição, player leve ou link externo, notas e conteúdo relacionado.
- Players externos só carregam após interacção quando possível, para proteger performance e privacidade.

---

## 19. Motion

- Duração: 150–200 ms em controlos; 200–300 ms em menu/accordion.
- Curva: `ease-out` para entrada, `ease-in` para saída.
- Propriedades: opacity e transform máximo 4–8 px; cor, borda e sublinhado.
- Proibido: movimento contínuo, scroll hijacking, parallax, contadores animados e animação de cada secção.
- `prefers-reduced-motion: reduce` desactiva transformações e reduz durações a praticamente zero.

---

## 20. Acessibilidade

- WCAG 2.2 AA como mínimo.
- Um H1 por página; níveis sem saltos decorativos.
- Skip link, landmarks, nomes acessíveis e ordem de foco lógica.
- Focus visível em todos os controlos.
- Alvos mínimos 44×44 px; espaçamento entre alvos em mobile.
- Contraste validado para cada combinação de tokens.
- Menu, modal e accordion com gestão de foco e teclado.
- Formulários com labels, instruções e erros associados.
- Imagens com alt apropriado; legendas e fontes quando informativas.
- Conteúdo nunca depende apenas de cor, posição ou movimento.

---

## 21. Arquitectura final e mapa de páginas

```text
/                              Início
/sobre                         A instituição
/sobre/historia                História e missão
/sobre/euclides-francisco      Fundador
/sobre/equipa                  Equipa
/programas                     Todos os programas
/programas/o-caminho-da-liberdade
/programas/jornada-do-investidor-de-sucesso
/programas/o-mestre-das-accoes
/recursos/como-comecar-um-negocio-do-zero  (ebook; classificação a validar)
/conteudos                     Hub editorial
/conteudos/artigos             Artigos
/conteudos/artigos/:slug       Artigo
/conteudos/temas/:slug         Tema
/conteudos/podcast             Podcast
/conteudos/podcast/:slug       Episódio
/conteudos/newsletter          A Linguagem do Dinheiro
/fin-summit                    Evento
/contactos                     Contactos
/privacidade                   Política de Privacidade
/termos                        Termos e Condições
```

### Função e CTA por página

| Página | Função | CTA principal |
|---|---|---|
| Início | Compreender instituição, autoridade e oferta | Explorar programas |
| Sobre | Conhecer identidade, missão e estrutura | Conhecer a equipa |
| História | Contextualizar origem e marcos | Conhecer o fundador |
| Euclides | Demonstrar autoridade verificável | Ler conteúdos de Euclides |
| Equipa | Provar estrutura multidisciplinar | Falar com a equipa |
| Programas | Comparar caminhos de aprendizagem | Conhecer um programa |
| Programa | Decidir relevância e condições | Inscrever-se / manifestar interesse (a validar) |
| Ebook | Explicar recurso e acesso | Obter o ebook (fluxo a validar) |
| Conteúdos | Descobrir conhecimento por formato/tema | Ler artigo em destaque |
| Artigos | Explorar publicação | Ler artigo |
| Artigo | Aprender e continuar percurso | Ler conteúdo relacionado / conhecer programa relevante |
| Podcast | Descobrir episódios | Ouvir episódio |
| Episódio | Ouvir e aprofundar | Ouvir na plataforma / explorar tema |
| Newsletter | Perceber valor e subscrever | Subscrever |
| FIN Summit | Compreender evento e participação | Escolher bilhete |
| Contactos | Escolher canal adequado | Enviar mensagem |

Relações: conteúdos ↔ programas por tema; fundador/equipa ↔ conteúdos assinados; FIN Summit ↔ episódios e artigos relevantes. Breadcrumbs em todas as páginas abaixo do primeiro nível.

---

## 22. Biblioteca conceptual de componentes

### Foundation
`Container` · `Section` · `Stack` · `Cluster` · `EditorialGrid` · `Divider` · `Typography` · `ImageFrame`

### Navigation
`SiteHeader` · `DesktopNav` · `MobileNav` · `Breadcrumb` · `Pagination` · `TopicFilter` · `SearchField` · `SiteFooter`

### Content
`ArticleCard` (featured/standard/compact) · `CourseSummary` · `EpisodeCard` · `TeamProfile` · `FounderFeature` · `Testimonial` · `Stat` · `AuthorBlock` · `RelatedContent` · `Figure` · `Quote`

### Interaction
`Button` · `TextLink` · `IconButton` · `Input` · `Textarea` · `Select` · `Checkbox` · `Accordion` · `Dialog`

### Feedback
`FieldError` · `Alert` · `LoadingIndicator` · `Skeleton` · `EmptyState` · `SuccessMessage`

### Structured sections
`PageIntro` · `ProgramOverview` · `ProgramCurriculum` · `PodcastPlayer` · `NewsletterForm` · `ContactForm` · `EventTicketSelector`

Não implementar `Carousel`, `Tabs`, `Modal`, `Badge` ou `Toast` sem necessidade comprovada.

---

## 23. Regras de consistência

1. Tokens semânticos são a única fonte de cor, fonte, espaçamento, raio e sombra.
2. Um componente só ganha variante quando duas utilizações reais o exigem.
3. Um botão não muda de raio, altura ou peso entre páginas.
4. Imagens do mesmo tipo partilham proporção.
5. Labels, datas e categorias usam o mesmo estilo editorial.
6. Secções não recebem fundo alternado automaticamente; mudança de fundo marca mudança real de contexto.
7. Não colocar cards dentro de cards.
8. Toda excepção entra no documento antes do código.
9. Conteúdo em falta permanece assinalado; não recebe placeholder público.
10. Toda página deve usar o layout global e metadata própria.

---

## 24. Regras de responsividade

- `minmax(0, 1fr)` em grelhas com texto; `min-width: 0` em blocos flexíveis; elementos fixos com `flex-shrink: 0`.
- Sem posições absolutas estruturais. Overlap editorial só em desktop, com fallback em fluxo normal no mobile.
- Navegação móvel até 1023 px para proteger tablet.
- Grelhas de 3 colunas só a partir de 1024 px e apenas quando o conteúdo suporta.
- Tabelas de programas/bilhetes tornam-se blocos comparáveis ou scroll horizontal explicitamente rotulado.
- Não esconder informação essencial; reorganizar ordem com semântica preservada.
- Headings têm limites de tamanho e largura; nenhuma palavra deve sair do contentor.
- Imagens mantêm `aspect-ratio`; não definem altura de secções inteiras.

---

## 25. Performance como design

- Orçamento inicial: JS de interface reduzido; nenhuma biblioteca de animação.
- Duas famílias, seis pesos/estilos no máximo; subset latino e preload apenas dos ficheiros críticos.
- AVIF/WebP, `srcset`, dimensões explícitas e lazy loading fora da primeira dobra.
- Players e embeds carregados por consentimento/interacção.
- Sem vídeo automático, fundos animados ou scripts decorativos.
- Server rendering para páginas editoriais; conteúdo essencial no HTML.
- CSS concentrado no sistema; sem estilos duplicados por página.
- Meta de qualidade: Core Web Vitals “Good” em mobile real; LCP <2,5 s, CLS <0,1, INP <200 ms.

---

## 26. SEO integrado

- Um H1 e title/description únicos por rota.
- URLs curtas em português, sem datas e sem caracteres codificados.
- Canonical auto-referencial; sitemap apenas com páginas indexáveis; robots exclui conta/checkout quando existirem.
- Open Graph e Twitter Card com fotografia real adequada.
- Dados estruturados: `Organization`, `Person`, `Article`, `Course`, `PodcastSeries`/`PodcastEpisode`, `Event`, `BreadcrumbList` — apenas com dados reais.
- Autoria, data de publicação/actualização e fontes visíveis.
- Mapa 301 completo dos 43 slugs actuais e páginas alteradas.
- Ligações internas editoriais por relevância, nunca automáticas apenas por categoria.
- Categorias consolidadas; páginas de tema só indexáveis quando têm conteúdo suficiente.

---

## 27. Validação crítica

- **Poderia ser qualquer fintech?** Não: não usa dashboards, linguagem SaaS, símbolos financeiros óbvios nem estética tecnológica. O conteúdo angolano, pessoas reais e formato editorial são estruturais.
- **Parece template?** Não, desde que a assimetria seja aplicada por hierarquia editorial e as fotografias reais substituam todas as áreas provisórias.
- **Parece gerado por IA?** Não: proíbe padrões AI-looking, exige fontes, validação e conteúdo real, e evita repetição automática de cards.
- **Existe personalidade suficiente?** Sim: verde institucional preservado, dupla tipográfica editorial e grelha magazine seleccionada.
- **A marca está presente?** Sim: é o primeiro nível da hierarquia; fundador e equipa suportam-na.
- **Transmite confiança?** Sim, condicionado à remoção dos placeholders e validação dos números/testemunhos.
- **Conteúdo protagonista?** Sim: a composição nasce de artigos, pessoas, programas e eventos.
- **Funciona em mobile?** Sim conceptualmente: 4 colunas, ordem editorial explícita, sem overlaps, menu acessível e alvos 44 px.
- **Funciona em desktop?** Sim: grelha 12 colunas dentro de 1360 px, leitura a 72ch e assimetria útil.
- **Pessoas reais percebidas?** Sim, se forem fornecidas fotografias e biografias validadas; o sistema não permite substitutos artificiais.
- **Permite crescimento?** Sim: rotas e modelos próprios para artigo, episódio, programa, pessoa e evento.
- **É sustentável?** Sim: paleta curta, dois tipos, escala única, poucos componentes e variantes justificadas.

### Condições antes da implementação

1. Receber logótipo oficial e confirmar se a paleta seleccionada respeita a marca.
2. Receber fotografias reais em alta resolução.
3. Validar missão, história, biografias, cargos, programas, preços, números e testemunhos.
4. Confirmar fluxo comercial (checkout ou FaciPay/WhatsApp).
5. Confirmar a direcção seleccionada e este documento.

Só depois: construir a experiência principal seguindo estes tokens, componentes, arquitectura e regras — sem reinterpretar a direcção visual.
