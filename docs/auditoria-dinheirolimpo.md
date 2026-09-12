# Auditoria, Descoberta e Planeamento — Dinheiro Limpo

Website auditado: https://dinheirolimpo.com/ (WordPress + tema de blocos + WooCommerce + PixelYourSite)
Data da recolha: 12/09/2026. Recolha por HTML real, sitemap XML, REST API e testes de viewport com browser headless (360 → 1920 px).

Nota metodológica: tudo o que segue foi observado no site real. Nada foi inventado. Onde a informação não existe ou não é verificável, está marcado como **INFORMAÇÃO EM FALTA** ou **NECESSITA VALIDAÇÃO**.

---

## A. RESUMO EXECUTIVO

O Dinheiro Limpo tem hoje activos reais e valiosos: 43 artigos publicados com foco angolano (BODIVA, BAI, AGT, crédito habitacional, inflação em Angola), um podcast com episódios e convidados identificados, quatro produtos formativos nomeados, uma equipa de cinco pessoas identificada e um evento próprio (FIN Summit) com escala declarada.

O problema não é falta de conteúdo — é que o invólucro digital não está à altura do conteúdo. O site actual é um tema WordPress semi-configurado: o rodapé continua em inglês com links de demonstração (About / Team / History / Careers / Privacy Policy / Terms and Conditions / Contact Us), a página Sobre contém o texto de trabalho "aqui vai a missão do dinheiro limpo", a página Cursos apresenta testemunhos em **lorem ipsum** assinados por "Jason Martin — Designer", a Loja está vazia e existe uma `/sample-page/` do WordPress indexável. O site declara em cada página "Designed with WordPress".

Diagnóstico central: **o site comunica improviso onde a marca precisa de comunicar instituição.** Para uma marca de educação financeira, onde o produto vendido é confiança, testemunhos falsos e placeholders visíveis são um risco de credibilidade de primeira ordem (P0), não um detalhe estético.

Segundo eixo: **não existe uma só arquitectura.** As páginas institucionais (Home, Sobre, Cursos, Podcast) e a página `/blog/` usam sistemas de construção diferentes, com cabeçalhos, rodapés e tipografia diferentes. O visitante que passa de `/podcast/` para `/blog/` muda de website.

Terceiro eixo (Desktop): os testes não revelaram overflow horizontal — o problema do desktop não é rebentar, é **não ter limite de leitura**. Aos 1920 px o conteúdo principal ocupa 1920 px de largura útil; não existe container editorial. O desktop é o mobile esticado, exactamente o que se pretende evitar.

Recomendação: reconstrução completa em Lovable, com preservação integral do conteúdo real, reescrita editorial faseada e um design system institucional-editorial próprio. Nenhuma decisão de identidade deve ser tomada antes da validação da secção Q.

---

## B. INVENTÁRIO COMPLETO DO WEBSITE

### B.1 Páginas (13 no sitemap)

| # | URL | Finalidade | Público | Conteúdo principal | CTA principal | Problemas | Prioridade |
|---|-----|-----------|---------|--------------------|---------------|-----------|-----------|
| 1 | `/` | Homepage | Novo visitante | Listagens de artigos ("Artigos mais recentes", "Mais do nosso blog", "Os mais lidos"), bloco "Olá,", newsletter "A Linguagem do dinheiro" | Ambíguo (nenhum CTA dominante) | H1 é literalmente "Home"; homepage é um índice de blog, não uma apresentação da marca; nenhuma menção a cursos, fundador ou equipa acima da dobra | P0 |
| 2 | `/sobre/` | Institucional + equipa | Avaliador da marca | "Sobre nós", "Nós somos experientes", 4 pilares (Renda Fixa / Renda Variável-Acções / Criptomoedas / Negócios), 5 membros de equipa | Nenhum | Contém o placeholder "aqui vai a missão do dinheiro limpo"; H1 duplicado ("sobre" + "Sobre nós"); zero biografias | P0 |
| 3 | `/cursos/` | Vitrine de produtos | Potencial aluno | 4 produtos: O Caminho da Liberdade (Mentoria), Ebook "Como começar um negócio do zero", JIS — Jornada do Investidor de Sucesso, O Mestre das Acções | 4 CTAs distintos | Testemunhos em lorem ipsum, duplicados duas vezes; sem preços; sem páginas de produto; erro "investidore" | P0 |
| 4 | `/podcast/` | Hub do podcast | Ouvinte | "Dinheiro Limpo Podcast", último episódio, 7 episódios listados por convidado, links Youtube/Spotify | "ver todos os podcasts" | Episódios identificados só por "Euclides vs [nome]"; CTA "Listen now" em inglês; sem datas nem descrições | P1 |
| 5 | `/blog/` | Índice editorial | Leitor | 17 artigos + "Leitura obrigatória" + números 6.069 / 22.500 / 700+ + "Junte-se a mais de 10.000 pessoas" | Newsletter | Cabeçalho e rodapé completamente diferentes do resto do site; cabeçalho duplicado no DOM; "Read More »" em inglês; números sem fonte | P0 |
| 6 | `/newsletter/` | Captação | Leitor | "A Linguagem do Dinheiro", formulário de subscrição | Subscrever | Página sem cabeçalho nem rodapé do site (fica fora da navegação); voz na 1.ª pessoa ("a minha visão pessoal") vs. "nós" no resto do site | P1 |
| 7 | `/cadastrado-newsletter/` | Confirmação | Subscritor | Agradecimento | — | Não verificada em profundidade | P2 |
| 8 | `/loja/` | Loja WooCommerce | Comprador | **Vazia** — "No results found"; API de produtos devolve `[]` | Nenhum | Loja pública e indexável sem produtos | P0 |
| 9 | `/carrinho/` | WooCommerce | Comprador | Carrinho | — | Existe sem produtos que o alimentem | P2 |
| 10 | `/finalizar-compra/` | WooCommerce | Comprador | Checkout | — | Idem | P2 |
| 11 | `/minha-conta/` | Conta WooCommerce | Aluno/cliente | Login/registo | — | Sem área de aluno real associada | P2 |
| 12 | `/finsummit/` | Venda de bilhetes | Participante do evento | FIN Summit 2026, 31 Out–01 Nov, Hotel Intercontinental Luanda; "+8.000 pessoas já passaram pelo FIN Summit"; bilhetes Presencial / Online / L&C; pagamento FaciPay (Multicaixa Express, mobile money, referência) ou cartão; WhatsApp +244 930 580 048 | Comprar bilhete | Página órfã (não está no menu); usa emojis 🔥🎤 como elementos de interface; tratamento por "tu" vs. "você/si" noutras páginas | P1 |
| 13 | `/sample-page/` | — | — | Página de exemplo do WordPress | — | Deve ser removida e redireccionada | P1 |

### B.2 Sistemas adicionais encontrados

- 43 artigos (`/wp-sitemap-posts-post-1.xml`) — 2021 a 2024, o mais recente sobre IA e mercado financeiro.
- 47 categorias, incluindo categorias aninhadas absurdas (`/category/clube-do-livro/clube-do-livro-clube-do-livro/`, `/category/uncategorized/2023/sp-500/`, `/category/brics/brics-brics/`) e `uncategorized`.
- Arquivo de tags, arquivo de autores (`wp-sitemap-users-1.xml`), feeds RSS (`/feed/`, `/comments/feed/`), endpoints oEmbed e REST API do WordPress abertos.
- Menu principal: **Home · Artigos · Cursos · Podcast · sobre** (5 itens, "sobre" em minúscula; sem Contactos; sem FIN Summit; sem Newsletter).
- Rodapé (tema, em inglês): About / Team / History / Careers · Privacy Policy / Terms and Conditions / Contact Us · Facebook / Instagram / Twitter-X · "Designed with WordPress".
- Rodapé alternativo em `/blog/`: Instagram, Twitter, Youtube, Telegram + pesquisa.
- Tracking: PixelYourSite Free 11.1.4.2.

---

## C. ARQUITECTURA ACTUAL

```text
/  (Home = índice de blog)
├── /blog/            (sistema visual distinto)
│   └── 43 artigos → 47 categorias, muitas órfãs/duplicadas
├── /cursos/          (4 produtos, sem páginas próprias)
├── /podcast/         (7 episódios, sem páginas próprias)
├── /sobre/           (institucional + equipa, com placeholder)
├── /newsletter/      (fora do layout do site)
├── /finsummit/       (órfã, fora do menu)
├── /loja/ /carrinho/ /finalizar-compra/ /minha-conta/  (WooCommerce vazio)
└── /sample-page/     (resto de instalação)
```

Problemas estruturais: não existe página de Contactos; não existe página por curso; não existe página por episódio; não existe página do fundador; o evento principal da marca é invisível na navegação; a homepage não tem função institucional.

---

## D. PROBLEMAS DE UX

| Gravidade | Prio | Problema | Impacto |
|---|---|---|---|
| CRÍTICO | P0 | A homepage não explica o que é o Dinheiro Limpo. Abre com uma lista de artigos. | Um visitante novo não consegue responder "o que é isto e para quem é". Perde-se a primeira impressão. |
| CRÍTICO | P0 | Testemunhos em lorem ipsum na página que vende formação. | Destrói confiança no momento exacto da decisão de compra. |
| CRÍTICO | P0 | Placeholder "aqui vai a missão do dinheiro limpo" na página Sobre. | Sinaliza ao avaliador que o site está inacabado. |
| CRÍTICO | P0 | Nenhum curso tem página própria, preço ou detalhe de programa. | Impossível decidir. O funil termina num botão sem destino informativo. |
| CRÍTICO | P0 | Loja pública e vazia. | Caminho morto visível para o utilizador e para o Google. |
| ALTO | P1 | Não existe página nem via clara de Contactos. | Empresas, parceiros e imprensa não têm por onde entrar. |
| ALTO | P1 | FIN Summit (o maior activo de prova social) não está na navegação. | Perde-se autoridade e receita. |
| ALTO | P1 | Dois sistemas visuais diferentes entre `/blog/` e o resto. | Quebra de confiança e de orientação. |
| ALTO | P1 | Episódios de podcast nomeados "Euclides vs Homem finanças". | Impossível saber o tema; nada convida a ouvir. |
| ALTO | P1 | Números 6.069 / 22.500 / 700+ / "+10.000 pessoas" sem contexto nem fonte. | Prova social não credível. **NECESSITA VALIDAÇÃO.** |
| MÉDIO | P2 | 47 categorias para 43 artigos, com duplicados. | Descoberta de conteúdo inutilizável. |
| MÉDIO | P2 | Página Newsletter fora do layout do site. | Beco sem saída, sem navegação de regresso. |
| MÉDIO | P2 | Mini-carrinho WooCommerce presente em todas as páginas ("Your cart is currently empty!"). | Ruído em inglês sem função. |
| BAIXO | P3 | Menu com "sobre" em minúscula. | Inconsistência que sinaliza descuido. |

---

## E. PROBLEMAS DE UI

- Tipografia sem sistema: tamanhos e famílias variam entre o bloco institucional e o bloco `/blog/`.
- Cartões de artigo repetidos em três secções da homepage com o mesmo tratamento — a página inteira é uma grelha de cartões, sem hierarquia editorial.
- Nenhum destaque visual distingue "Os mais lidos" de "Mais do nosso blog": três listagens seguidas com aparência idêntica.
- Cartões de equipa reduzidos a fotografia + nome + cargo, sem qualquer profundidade.
- Uso de emojis como elemento de interface na `/finsummit/`.
- Ausência de um estilo de botão consistente entre páginas (o CTA de curso, o de podcast e o de newsletter não pertencem ao mesmo sistema).
- Rodapé em inglês com colunas de demonstração — o elemento mais repetido do site é também um dos menos cuidados.

---

## F. PROBLEMAS DE RESPONSIVIDADE

Testado em 360, 390, 768, 1024, 1280, 1440 e 1920 px, em `/`, `/sobre/`, `/cursos/`, `/podcast/` e `/blog/`.

**Resultado factual:** não foi detectado overflow horizontal em nenhuma combinação (`scrollWidth` = largura da viewport em todos os casos). Os únicos elementos fora da viewport são as gavetas ocultas do carrinho WooCommerce, que é comportamento normal.

Ou seja: o site "não rebenta". O problema é outro e mais subtil — **ausência de intenção por breakpoint**. O layout limita-se a redistribuir a mesma grelha, sem alterar hierarquia, densidade ou composição. O tema fornece fluidez; a marca não fornece desenho.

Prioridade: P2 como defeito técnico, P1 como oportunidade de desenho.

---

## G. PROBLEMAS ESPECÍFICOS DE DESKTOP

| Prio | Problema | Evidência |
|---|---|---|
| P1 | Sem limite de leitura. A área de conteúdo principal mede 1920 px a 1920 px de viewport. | Medição directa do `main`. |
| P1 | Linhas de texto demasiado longas em monitores grandes (muito acima dos 60–75 caracteres confortáveis). | Consequência do ponto anterior. |
| P1 | O espaço horizontal não é aproveitado com composição: a mesma grelha de cartões cresce em vez de mudar de estrutura. | Home, Blog. |
| P2 | O cabeçalho de 5 itens deixa a maior parte da barra vazia em desktop, sem acomodar pesquisa, CTA ou acesso ao FIN Summit. | Home. |

Regra para a reconstrução: containers com `max-width` (conteúdo editorial ~68–72ch; grelhas institucionais até ~1280–1440 px), tipografia com `clamp()`, grelhas CSS que mudam de composição — não só de número de colunas.

---

## H. PROBLEMAS ESPECÍFICOS DE MOBILE

| Prio | Problema |
|---|---|
| P2 | Três listagens de artigos consecutivas tornam a homepage extremamente longa em 360–430 px, sem nada que oriente o visitante. |
| P2 | O bloco do mini-carrinho ocupa atenção no topo em mobile sem função real. |
| P2 | Os cartões de equipa em coluna única transformam a página Sobre numa lista longa de fotografias sem informação. |
| P3 | Áreas de toque dos links de categoria acima dos cartões são pequenas. |

---

## I. PROBLEMAS DE CONTEÚDO / COPY

Formato: CONTEÚDO ACTUAL → PROBLEMA → DIRECÇÃO RECOMENDADA (a reescrita fica para fase posterior).

1. **"aqui vai a missão do dinheiro limpo"** (Sobre) → Placeholder de trabalho publicado. → Declaração de missão real, 2–3 frases, escrita com o fundador. **P0**
2. **Testemunhos "Lectus, nonummy et. Occaecat delectus… — Jason Martin, Designer"** (Cursos, duplicados) → Lorem ipsum e pessoas inexistentes numa página de venda. → Remover já; substituir apenas por testemunhos reais e autorizados de alunos. **P0**
3. **H1 "Home"** → Não é um título; é o nome do ficheiro. → H1 com a proposta de valor real. **P0**
4. **Title "dinheirolimpo.com – Valorize a sua renda"** → O domínio como nome da marca. → "Dinheiro Limpo — [proposta]"; o domínio não é a marca. **P1**
5. **"Nós somos experientes"** (Sobre) → Afirmação sem prova, das mais fracas possíveis. → Substituir por prova concreta: anos de actividade, formações, alunos, FIN Summit. **P1**
6. **"Temos uma equipa dinâmica e genial para o servir"** → Auto-elogio genérico. → Descrever o que a equipa faz e domina. **P1**
7. **Mistura de variantes de português**: "Você tem metas", "te ajudar", "seu orçamento" (pt-BR) vs. "a sua renda", "precisas" (pt-PT/AO); tratamento por "tu" na `/finsummit/` e por "você/si" no blog. → Definir norma única: português de Angola, tratamento formal por "si", consistente em todo o site. **P1**
8. **Inglês residual**: "Read More »", "Listen now", "Your cart is currently empty!", "No results found", rodapé About/Team/History/Careers, "Designed with WordPress". → Traduzir/eliminar integralmente. **P1**
9. **Erros e descuidos**: "investidore de sucesso"; "guia pratico" (sem acento); "Jis" em vez de "JIS"; "Nosso time"/"Nossa equipa" inconsistente; "É um empresário?" escrito "És um empresário?". **P1**
10. **Números sem fonte**: 6.069 / 22.500 / 700+ / "mais de 10.000 pessoas" / "+8.000 pessoas já passaram pelo FIN Summit". → Só usar com definição explícita (o quê, quando, fonte). **NECESSITA VALIDAÇÃO. P1**
11. **Conteúdo datado**: "5 condições financeiras mais previstas para 2022", "Análise de mercado do 2.º trimestre de 2022", "Como fazer dinheiro em 2023" — ainda listados como destaques. → Arquivar, actualizar ou datar visivelmente. **NECESSITA VALIDAÇÃO. P2**
12. **Voz inconsistente**: a Newsletter fala na 1.ª pessoa do singular; o resto do site fala em "nós". → Definir: a instituição fala em "nós"; o fundador fala em "eu" apenas nos espaços assinados. **P2**

---

## J. PROBLEMAS DE ACESSIBILIDADE

| Prio | Problema |
|---|---|
| P1 | Hierarquia de headings incorrecta: H1 "Home"; `/sobre/` e `/podcast/` com dois H1; `/blog/` começa em H2 sem H1; saltos de H2 para H5 e H6. |
| P1 | Links "Ler Mais »" / "Read More »" repetidos dezenas de vezes sem contexto acessível — inutilizáveis em navegação por links. |
| P1 | Idioma declarado `pt-AO` mas com blocos de interface em inglês — leitores de ecrã leem-nos com pronúncia errada. |
| P2 | Texto alternativo das imagens por verificar sistematicamente (fotografias de equipa e capas de artigo). |
| P2 | Estados de foco visível não garantidos pelo tema em todos os controlos. |
| P2 | Rótulos do formulário de newsletter dependentes de placeholder. |
| P2 | Contraste a verificar em texto sobre imagem no cabeçalho de secções. |

Princípio para a reconstrução: navegação por teclado completa, foco sempre visível, alvos de toque ≥44 px, semântica HTML real (`header`/`nav`/`main`/`article`/`footer`), mensagens de erro associadas aos campos.

---

## K. PROBLEMAS DE SEO

| Prio | Problema |
|---|---|
| P0 | **Sem meta description** em nenhuma das páginas testadas (`/`, `/sobre/`, `/cursos/`, `/podcast/`, `/blog/`, `/loja/`). |
| P0 | Title da homepage é o domínio. Titles das restantes são uma palavra ("sobre", "Cursos", "Podcast") + o domínio. |
| P0 | H1 "Home" na página mais importante. |
| P1 | `/sample-page/` indexável no sitemap. |
| P1 | 47 categorias para 43 artigos, com duplicações aninhadas — geram páginas finas e conteúdo duplicado. |
| P1 | Páginas WooCommerce (`/carrinho/`, `/finalizar-compra/`, `/minha-conta/`) e `/loja/` vazia indexáveis. |
| P1 | Sem Open Graph nem Twitter Card verificáveis → partilhas em redes sociais sem pré-visualização controlada. |
| P1 | Sem dados estruturados: faltam Organization, Person (fundador), Course, PodcastEpisode, Article, BreadcrumbList, Event (FIN Summit). |
| P2 | Sem breadcrumbs consistentes (existem apenas nas páginas WooCommerce). |
| P2 | Ligação interna pobre: artigos não ligam a cursos nem a episódios. |
| P2 | URLs com caracteres codificados (`…dos-seus-sonhos%ef%bf%bc/` — contém um carácter inválido). |
| P2 | Feeds de comentários e endpoints oEmbed/REST expostos sem necessidade. |

---

## L. PROBLEMAS DE PERFORMANCE

| Prio | Problema | Evidência |
|---|---|---|
| P1 | HTML da homepage com ~258 KB só de marcação, antes de imagens. | Medição directa. |
| P1 | Dezenas de blocos `<style>` inline injectados pelo WordPress/WooCommerce, muitos para blocos não utilizados. | Inspecção do HTML. |
| P1 | WooCommerce carregado em todas as páginas (mini-carrinho, gavetas, scripts) para uma loja sem produtos. | Home, Sobre, Cursos, Podcast. |
| P2 | 27 imagens na homepage, dominadas por miniaturas de artigos repetidos em três listagens. | Contagem directa. |
| P2 | Script de tracking (PixelYourSite) a executar em todas as páginas. | HTML. |
| P3 | Formatos de imagem e lazy loading a confirmar por ficheiro. | **A validar na migração.** |

Na reconstrução: imagens responsivas com `aspect-ratio` e dimensões declaradas, formatos modernos, lazy loading fora da primeira dobra, sem bibliotecas de animação pesadas, tipografia com poucas fontes e `font-display: swap`.

---

## M. PROBLEMAS TÉCNICOS

Formato: PROBLEMA → IMPACTO → SOLUÇÃO RECOMENDADA.

1. **Dois sistemas de construção coexistem** (tema de blocos nas páginas institucionais, construtor distinto em `/blog/`, com cabeçalho duplicado no DOM). → Manutenção dupla, incoerência visual, peso extra. → Reconstrução única em Lovable com um só layout e um só sistema de componentes.
2. **WooCommerce instalado sem produtos.** → Peso, rotas mortas, páginas indexáveis vazias, ruído de interface em inglês. → Decidir: ou se vendem cursos com checkout real, ou o comércio sai do site e os produtos remetem para o fluxo de pagamento existente (FaciPay/WhatsApp). **NECESSITA VALIDAÇÃO.**
3. **Conteúdo acoplado ao WordPress.** → Migrar 43 artigos, 7+ episódios, 5 perfis de equipa e 4 produtos exige exportação estruturada. → Usar a REST API do WordPress para exportar artigos com título, slug, data, categoria, imagem destacada e corpo; migrar media para o novo alojamento; manter os slugs para preservar SEO.
4. **Sem estrutura de dados para cursos, episódios e equipa.** → Cada novo item exige trabalho manual de página. → Modelar como conteúdo (base de dados ou ficheiros de conteúdo tipados) com componentes únicos de apresentação.
5. **Placeholders publicados** (lorem ipsum, sample-page, missão por escrever). → Risco de credibilidade. → Remover na primeira fase, mesmo antes do redesenho.
6. **Sem redireccionamentos planeados.** → Uma migração sem mapa de redireccionamentos perde o tráfego orgânico dos 43 artigos. → Mapa 1:1 de URLs antigos → novos antes de qualquer publicação.

---

## N. CONTEÚDOS A PRESERVAR

1. **43 artigos** com os respectivos slugs, datas, imagens e autores — o activo de SEO mais valioso do site.
2. **Podcast**: título, descrição ("Um podcast descontraído, onde falaremos sobre vida, negócios, investimentos e muito mais…"), cadência declarada (segunda-feira), links Youtube e Spotify, e os episódios/convidados identificados: Luzia Quia, Homem Finanças, Gilmário, Hanormais, Jusemara António, Nahary e Aliondy Garcia, Rui Oliveira, e o episódio "Contabilidade para pequenas e médias empresas em Angola".
3. **Quatro produtos**, com as descrições actuais como base de reescrita: O Caminho da Liberdade (Mentoria), Ebook "Como começar um negócio do zero", JIS — Jornada do Investidor de Sucesso, O Mestre das Acções.
4. **Equipa (5 pessoas)**: Euclides Francisco (Founder & CEO), Ana Francisco (Directora Financeira), Mário José Maria (Parceiro & Gestor de Conteúdo Técnico), Silvia Costa (Marketing e Vendas), Carmen Tati (Gestora de Projectos).
5. **Quatro pilares temáticos**: Renda Fixa, Renda Variável/Acções, Criptomoedas, Negócios.
6. **Assinatura da marca**: "Valorize a sua renda".
7. **Newsletter "A Linguagem do Dinheiro"** e o seu texto de apresentação.
8. **FIN Summit 2026**: 31 de Outubro e 1 de Novembro, Hotel Intercontinental (Luanda), tipos de bilhete Presencial / Online / L&C, pagamento FaciPay, contacto de grupos e empresas WhatsApp +244 930 580 048.
9. **Todas as fotografias reais** de Euclides, equipa, eventos e episódios.
10. **Redes sociais** listadas: Facebook, Instagram, Twitter/X, Youtube, Telegram, Spotify.

---

## O. ELEMENTOS A CORRIGIR (correcção directa, sem redesenho)

| Prio | Acção |
|---|---|
| P0 | Remover os testemunhos em lorem ipsum de `/cursos/`. |
| P0 | Remover ou substituir o placeholder da missão em `/sobre/`. |
| P0 | Eliminar `/sample-page/`. |
| P0 | Fechar ou esvaziar da navegação a Loja vazia. |
| P1 | Traduzir todo o texto de interface residual em inglês. |
| P1 | Corrigir os erros ortográficos listados em I.9. |
| P1 | Reescrever titles e adicionar meta descriptions a todas as páginas. |
| P1 | Corrigir a hierarquia de headings (um H1 real por página). |
| P1 | Limpar e consolidar as 47 categorias. |

## P. ELEMENTOS A RECONSTRUIR

Homepage (institucional, não índice de blog) · Sobre (marca + história + missão real) · Fundador (página própria) · Equipa (apresentação institucional, não fila de cartões) · Programas (índice + uma página por programa) · Conteúdos/Blog (publicação editorial com hierarquia, não lista) · Podcast (hub + página por episódio) · FIN Summit (na navegação) · Contactos (nova) · Newsletter (integrada no site) · Rodapé (real, em português) · Sistema completo de navegação, breadcrumbs e ligação entre conteúdos.

## Q. ELEMENTOS QUE NECESSITAM DE VALIDAÇÃO (antes de qualquer implementação)

1. Logótipo em ficheiro vectorial e regras de utilização.
2. Cores oficiais da marca (valores exactos) e tipografia oficial, se existir.
3. Missão, visão e história do Dinheiro Limpo (ano de fundação, marcos).
4. Biografia oficial de Euclides Francisco + credenciais verificáveis.
5. Nomes, cargos e biografias confirmados dos 5 membros da equipa (e se a equipa continua a mesma).
6. Preços, duração, formato e conteúdo programático dos 4 programas.
7. Os números 6.069 / 22.500 / 700+ / "+10.000" / "+8.000 no FIN Summit" — o que medem, quando, e se podem ser publicados.
8. Testemunhos reais de alunos, com autorização escrita e fotografia.
9. Contactos oficiais: email, telefone, morada, horário.
10. Redes sociais activas (o rodapé lista Facebook/Instagram/X; o blog lista Instagram/X/Youtube/Telegram — qual é a lista real?).
11. Política de Privacidade e Termos (os links actuais são de demonstração).
12. Decisão sobre venda online: checkout no site ou encaminhamento para FaciPay/WhatsApp.
13. Estado do FIN Summit 2026 e se passa a ser secção permanente.
14. Que artigos de 2021–2023 devem ser mantidos, actualizados ou arquivados.
15. Idioma: só português, ou também inglês?

---

## R. BENCHMARKS E REFERÊNCIAS ANALISADAS (padrões, não layouts a copiar)

- **Bancos centrais e instituições financeiras** (ex.: Banco Nacional de Angola, BCE, Banco de Portugal): hierarquia sóbria, tipografia de alta legibilidade, ausência de decoração, credibilidade pela clareza. *A adaptar:* densidade informativa sem frieza.
- **Publicações financeiras** (Financial Times, The Economist, Bloomberg): grelha editorial com pesos diferentes por artigo, um destaque dominante, secções nomeadas, largura de leitura controlada. *A adaptar:* o blog do Dinheiro Limpo deve parecer uma publicação, com artigo principal e níveis de destaque.
- **Instituições de ensino e formação** (universidades, escolas de negócios): páginas de programa com estrutura fixa — para quem, o que aprende, formato, duração, docente, próximo passo. *A adaptar:* estrutura idêntica para os 4 programas.
- **Consultoras e casas de conhecimento** (McKinsey Insights, Deloitte): conteúdo como demonstração de autoridade; artigos ligados a serviços. *A adaptar:* ligar cada artigo ao programa correspondente.
- **Marcas pessoais que se tornaram instituições**: o fundador tem página própria e presença nos momentos de confiança, mas a marca institucional é a voz dominante. *A adaptar:* exactamente o equilíbrio pedido para Euclides.
- **Organizações africanas e angolanas com presença institucional sólida**: fotografia real de pessoas e eventos como principal elemento de humanização; nada de ilustração genérica.

Padrões transversais a adoptar: fotografia real acima de ilustração; espaço branco generoso mas com densidade informativa; no máximo duas famílias tipográficas; cor usada com parcimónia e função; nenhum efeito sem propósito.

---

## S. PRINCÍPIOS DE DESIGN RECOMENDADOS

1. **Tipografia como identidade.** Duas famílias no máximo — uma com carácter editorial para títulos, uma neutra e legível para texto. Escala tipográfica com `clamp()`.
2. **Grelha antes de decoração.** Uma grelha base consistente; o desktop muda de composição, não só de número de colunas.
3. **Largura de leitura controlada.** Texto corrido entre 60 e 75 caracteres; grelhas institucionais até 1280–1440 px; nada ocupa 1920 px.
4. **Fotografia real como principal elemento visual.** Sem stock genérico, sem pessoas geradas artificialmente.
5. **Cor com função.** Uma cor institucional dominante, neutros, e uma cor de acento apenas para acção. Sem gradientes decorativos.
6. **Cantos, sombras e bordas discretos e sistemáticos.** Um raio, uma sombra, uma borda — usados sempre da mesma maneira.
7. **Movimento mínimo.** Transições de 150–250 ms em hover e foco; entradas discretas no máximo. O site tem de continuar elegante com todas as animações desligadas (`prefers-reduced-motion`).
8. **Consistência absoluta de componentes.** Um botão primário é igual em todo o site. Um cartão de artigo e um cartão de curso partilham o mesmo sistema, com diferenças justificadas.
9. **Acessibilidade por princípio**, não como correcção final.
10. **Prova em vez de adjectivos.** Substituir "somos experientes" por factos verificáveis.

---

## T. ARQUITECTURA FUTURA RECOMENDADA

```text
Início
Sobre
 ├── A nossa história
 ├── Euclides Francisco (fundador)
 └── Equipa
Programas
 ├── O Caminho da Liberdade (Mentoria)
 ├── JIS — Jornada do Investidor de Sucesso
 ├── O Mestre das Acções
 └── Ebook — Como começar um negócio do zero
Conteúdos
 ├── Artigos (com temas consolidados)
 ├── Podcast (hub + página por episódio)
 └── Newsletter — A Linguagem do Dinheiro
FIN Summit
Contactos
```

Decisões de arquitectura:
- Menu principal com 5 a 6 itens: **Sobre · Programas · Conteúdos · FIN Summit · Contactos**, com um CTA único à direita.
- "Artigos" passa a viver dentro de **Conteúdos** — o blog deixa de ser o site e passa a ser uma secção da instituição.
- As 47 categorias consolidam-se em 6 a 8 temas (proposta a validar: Educação Financeira · Investimentos · Bolsa e Mercados · Angola e Economia · Negócios e Empreendedorismo · Poupança · Carreira).
- Cada programa com página própria e estrutura fixa: para quem · o que aprende · formato e duração · docente · investimento · próximo passo.
- Cada episódio com página própria (título temático real, convidado, descrição, player, links externos, artigos relacionados).
- Ligação cruzada sistemática: artigo → programa relacionado · episódio → artigo · programa → episódios e artigos do tema.
- Breadcrumbs em todas as páginas de nível 2 e 3.
- Rodapé real em português: navegação completa, contactos, redes activas, newsletter, políticas legais.

## U. COMPONENTES FUTUROS RECOMENDADOS (design system a construir na fase 2)

Fundações: escala tipográfica, paleta, espaçamento, raios, sombras, grelha, breakpoints, estados de foco.

Layout: `Container` (3 larguras: editorial, padrão, largo) · `Section` (ritmo vertical consistente) · `Grid`.

Tipografia e texto: `Eyebrow` · `Heading` (níveis 1–4) · `Lead` · `Prose` (corpo de artigo) · `Quote` · `Figure` com legenda.

Acção: `Button` (primário, secundário, subtil) · `LinkArrow` · `CTABanner`.

Cartões e listagens: `ArticleCard` (3 variantes: destaque, padrão, compacto) · `CourseCard` · `EpisodeCard` · `TeamCard` (com biografia expansível) · `TestimonialCard` (apenas com testemunhos reais) · `StatBlock` (com fonte obrigatória).

Navegação: `Header` com menu responsivo · `Footer` · `Breadcrumb` · `Pagination` · `TopicFilter` · `RelatedContent` · `ShareLinks`.

Formulários: `Input` · `Select` · `NewsletterForm` · `ContactForm` · estados de erro, sucesso e carregamento.

Institucional: `FounderIntro` · `TimelineItem` (história) · `ProgramSyllabus` · `FAQAccordion` · `EventTicketTable`.

Regra: nenhum componente novo é criado sem entrar neste inventário; nenhum estilo é escrito fora do sistema.

---

## V. PLANO DE RECONSTRUÇÃO POR FASES

**Fase 0 — Validação (o seu passo seguinte).** Responder aos 15 pontos da secção Q e fornecer logótipo, fotografias e conteúdos oficiais. Sem isto, qualquer implementação assenta em suposições.

**Fase 1 — Correcções de emergência no site actual.** Remover lorem ipsum, placeholder da missão e `/sample-page/`; esconder a loja vazia; traduzir o inglês residual. Baixo esforço, ganho imediato de credibilidade. *(Depende de acesso ao WordPress actual — a confirmar.)*

**Fase 2 — Fundações no Lovable.** Design system (tokens, tipografia, grelha, componentes base), layout global, cabeçalho e rodapé reais, estrutura de rotas completa. Sem conteúdo inventado.

**Fase 3 — Núcleo institucional.** Início, Sobre, Fundador, Equipa, Contactos — com conteúdo validado na Fase 0.

**Fase 4 — Programas.** Índice e uma página por programa, com estrutura fixa e fluxo de conversão definido.

**Fase 5 — Conteúdos.** Migração dos 43 artigos com slugs preservados, consolidação de temas, páginas de artigo editoriais, podcast com página por episódio, newsletter integrada.

**Fase 6 — FIN Summit.** Secção de evento com bilhetes e fluxo de pagamento definido na Fase 0.

**Fase 7 — Qualidade final.** SEO técnico completo (titles, descriptions, Open Graph, dados estruturados, sitemap, redireccionamentos 1:1), auditoria de acessibilidade, performance, revisão editorial integral em português de Angola, testes em todos os breakpoints.

---

## 30. VERIFICAÇÃO CRÍTICA DE QUALIDADE

**"O que faria um profissional desconfiar deste website?"**
Testemunhos em lorem ipsum assinados por "Jason Martin — Designer" numa página que vende formação financeira. Uma missão por escrever publicada. Um rodapé em inglês com links de demonstração. "Designed with WordPress" no fundo de cada página. Um H1 chamado "Home". Uma loja vazia. Uma `sample-page` indexada. Números de impacto sem fonte. Dois sistemas visuais no mesmo domínio. Nenhuma forma de contactar a organização. Para uma marca cujo produto é confiança financeira, cada um destes pontos é um argumento contra a própria proposta.

**"O que faria este website parecer construído especificamente para o Dinheiro Limpo?"**
O contexto angolano tratado a sério: BODIVA, BAI, AGT, kwanza, inflação em Angola, crédito habitacional — conteúdo que nenhum site genérico tem, hoje escondido numa lista indiferenciada. As pessoas reais: Euclides e uma equipa com nomes e funções. O FIN Summit, com data, local e escala. O podcast com convidados angolanos identificáveis. Uma publicação editorial que trate economia angolana com o cuidado gráfico de uma publicação financeira internacional. E um sistema visual construído a partir da identidade real da marca — que é o primeiro elemento a validar.
