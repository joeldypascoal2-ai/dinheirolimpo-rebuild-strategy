# Dinheiro Limpo — Etapa 2: Direcção, Sistema e Arquitectura

A etapa 2 está documentada em `docs/sistema-visual-e-arquitectura.md`. Este trabalho não altera a aplicação nem constrói a homepage.

## Decisões visuais seleccionadas

- **Direcção:** Editorial Assimétrica de Prestígio.
- **Paleta:** verde institucional — `#123C2F`, `#1F6A4A`, `#D6E3D9`, `#F6F4EE`, `#202723`.
- **Tipografia:** Libre Baskerville para títulos; IBM Plex Sans para corpo e interface.
- **Estrutura:** grelha magazine assimétrica; fotografia documental real; margens generosas; bordas finas; cantos discretos; quase nenhuma sombra.
- **Hierarquia:** Dinheiro Limpo → instituição; Euclides Francisco → fundador e autoridade; equipa → estrutura humana real.

## Sistema definido

- Escala tipográfica responsiva, espaçamento de base 4 px, containers de leitura/padrão/largo e grelha 4/8/12 colunas.
- Breakpoints e regras específicas de 360 a 1920 px; navegação móvel até 1023 px.
- Sistemas completos para botões, links, cards, formulários, navegação, footer, fotografia, conteúdos, cursos, equipa e podcast.
- Motion mínimo, WCAG 2.2 AA, Core Web Vitals como critério, metadata e dados estruturados por tipo de página.
- Biblioteca conceptual curta, com variantes apenas quando duas utilizações reais as justificam.

## Arquitectura final

- **Início**
- **Sobre:** Instituição, História, Euclides Francisco, Equipa
- **Programas:** índice + uma página por programa
- **Conteúdos:** Artigos, Temas, Podcast e Newsletter
- **FIN Summit**
- **Contactos**
- **Privacidade e Termos**

Cada página tem função e CTA definidos no documento. Artigos ligam a programas relevantes; fundador/equipa ligam aos conteúdos assinados; FIN Summit liga a episódios e artigos relacionados.

## Próxima etapa após aprovação

1. Receber e validar logótipo, fotografias, missão, história, biografias, cargos, dados dos programas, números, testemunhos e fluxo comercial.
2. Implementar apenas as fundações no Lovable: tokens, tipografia, grelha, layout global, navegação, footer e componentes base.
3. Construir a experiência principal seguindo exactamente o sistema aprovado, sem inventar conteúdo.
4. Migrar conteúdos e páginas por fases, preservando slugs e redireccionamentos.

## Restrições mantidas

Sem reconstrução completa nesta etapa; sem homepage nova; sem apagar conteúdos; sem pessoas geradas; sem dependências desnecessárias; sem gradientes decorativos, glassmorphism, blobs, glow, cards em excesso ou animações pesadas.
