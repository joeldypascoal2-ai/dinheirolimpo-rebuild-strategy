# Dinheiro Limpo — Etapa 3: Experiência principal

## Resultado

Construir a primeira versão utilizável do novo website com a direcção **Editorial Assimétrica de Prestígio**, preservando os conteúdos e fotografias reais disponíveis. A homepage explicará a instituição, demonstrará autoridade e conduzirá a programas e conteúdos sem recorrer a números, biografias ou testemunhos não validados.

## Implementação

1. **Fundações**
   - Aplicar os tokens aprovados, Libre Baskerville e IBM Plex Sans.
   - Criar containers, ritmos de secção, botões e links reutilizáveis.
   - Transferir para o projecto apenas os assets reais usados, com dimensões estáveis e carregamento diferido fora da primeira dobra.

2. **Estrutura global**
   - Criar header institucional com navegação desktop e menu móvel acessível.
   - Criar footer compacto em português com links internos e canais externos validados.
   - Criar rotas-base funcionais para Sobre, Programas, Conteúdos, FIN Summit, Contactos, fundador, equipa, artigos, podcast, newsletter, privacidade e termos; as páginas internas terão uma apresentação honesta e não fingirão estar completas.

3. **Homepage**
   - Abertura clara com proposta institucional e CTA para programas.
   - Transição institucional e áreas de conhecimento reais.
   - Não publicar a secção de números enquanto os indicadores não forem validados.
   - Introduzir Euclides Francisco e a equipa com os nomes, cargos e fotografias existentes, sem ampliar biografias.
   - Mostrar os quatro programas reais com descrições factuais existentes.
   - Criar uma selecção editorial assimétrica com artigos e imagens reais.
   - Apresentar o podcast com capa e ligações reais, sem player falso.
   - Integrar a newsletter visualmente; sem ligação de inscrição confirmada, o formulário informará honestamente que o serviço ainda está em preparação e não simulará sucesso.
   - Encerrar com CTA coerente para explorar programas.

4. **Qualidade**
   - Metadata única por rota, um H1, semântica, foco, teclado, labels, alt text e `prefers-reduced-motion`.
   - Verificar menu, links, formulário, imagens, consola e ausência de overflow em 360, 390, 430, 768, 820, 1024, 1280, 1440 e 1920 px.
   - Rever primeira impressão, autenticidade e sinais de template.

## Limites editoriais

- Não usar os números de impacto auditados, missão placeholder, testemunhos lorem ipsum ou credenciais não validadas.
- Não gerar pessoas, imagens, factos ou integrações.
- A história será apresentada apenas através de factos publicados: foco em educação financeira, conteúdos, formação, podcast e contexto angolano.
- O cargo de Euclides será preservado como **Fundador e CEO**, conforme o site actual; os restantes cargos mantêm a forma auditada.

## Entrega

- Homepage funcional e visualmente completa.
- Header, navegação móvel, footer e componentes globais.
- Rotas-base sem destinos mortos.
- Relatório final curto com mudanças, problemas resolvidos e conteúdos ainda pendentes de validação.