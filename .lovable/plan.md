# Dinheiro Limpo — Etapa 1: Auditoria concluída, plano para as etapas seguintes

A auditoria completa está escrita em `docs/auditoria-dinheirolimpo.md`, com as 22 secções pedidas (A a V), prioridades P0–P3 e a verificação crítica final. Nada foi alterado no site actual e nada foi construído ainda.

## O que a auditoria encontrou (essencial)

- 13 páginas, 43 artigos, 47 categorias, 4 programas, 5 pessoas na equipa, 7+ episódios de podcast e uma página de evento (FIN Summit 2026) fora do menu.
- **P0 de credibilidade:** testemunhos em lorem ipsum assinados por pessoas inexistentes na página de cursos; a missão por escrever na página Sobre ("aqui vai a missão do dinheiro limpo"); loja vazia e pública; `sample-page` do WordPress indexada; rodapé em inglês com links de demonstração.
- **P0 de estrutura:** a homepage é um índice de blog — não apresenta a marca, o fundador, a equipa nem os programas. O H1 é "Home".
- **Desktop:** não há overflow em nenhum tamanho entre 360 e 1920 px (testado). O problema é não existir limite de leitura — o conteúdo ocupa 1920 px de largura aos 1920 px.
- **Duas identidades:** `/blog/` usa cabeçalho, rodapé e tipografia diferentes do resto do site.
- Sem meta descriptions, sem dados estruturados, sem página de contactos.

## Próximo passo antes de qualquer implementação

Preciso das respostas da secção **Q** da auditoria (15 pontos), nomeadamente: logótipo e cores oficiais, missão e história, biografia de Euclides e da equipa, preços e programas dos cursos, origem dos números de impacto, testemunhos reais autorizados, contactos oficiais, redes activas, e a decisão sobre venda online (checkout no site ou FaciPay/WhatsApp).

## Faseamento proposto

1. **Fase 0 — Validação:** respostas da secção Q + materiais reais.
2. **Fase 1 — Correcções de emergência no site actual** (lorem ipsum, placeholder, sample-page, loja, inglês residual). Requer acesso ao WordPress.
3. **Fase 2 — Fundações no Lovable:** design system (tipografia, cor, grelha, espaçamento), layout global, cabeçalho e rodapé reais, rotas.
4. **Fase 3 — Núcleo institucional:** Início, Sobre, Fundador, Equipa, Contactos.
5. **Fase 4 — Programas:** índice + página por programa com estrutura fixa.
6. **Fase 5 — Conteúdos:** migração dos 43 artigos com slugs preservados, temas consolidados, podcast com página por episódio, newsletter integrada.
7. **Fase 6 — FIN Summit.**
8. **Fase 7 — Qualidade final:** SEO técnico, redireccionamentos 1:1, acessibilidade, performance, revisão editorial em português de Angola, testes em todos os breakpoints.

## Notas técnicas

- Reconstrução em TanStack Start (React) no Lovable, com uma rota por página e conteúdo modelado (artigos, episódios, programas, equipa) em vez de páginas manuais.
- Migração dos artigos via API do WordPress, preservando slug, data, categoria, imagem e autor; mapa de redireccionamentos obrigatório antes de publicar.
- Layouts fluidos: CSS Grid/Flexbox, `max-width`, `clamp()`, `aspect-ratio`, imagens responsivas; sem posicionamento absoluto estrutural nem larguras rígidas.
- Sem bibliotecas de animação; movimento limitado a transições de hover/foco e respeito por `prefers-reduced-motion`.

Aprovando, começo pela **Fase 2 (fundações e design system)** assim que tiver os materiais da Fase 0 — ou, se preferir, avanço primeiro só com a estrutura técnica e o sistema visual em rascunho, sem publicar conteúdo por validar.
