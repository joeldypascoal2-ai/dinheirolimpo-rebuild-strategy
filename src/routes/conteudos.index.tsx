import { Link, createFileRoute } from "@tanstack/react-router";
import { ArticleCard, PageHeader, TextLink, seoMeta } from "@/components/editorial";
import { Button } from "@/components/ui/button";
import { articles, podcast, themes } from "@/data/site";
import podcastCover from "@/assets/dinheiro-limpo/podcast.png";

export const Route = createFileRoute("/conteudos/")({
  head: () => ({
    meta: seoMeta(
      "Conteúdos",
      "Artigos, podcast e newsletter do Dinheiro Limpo sobre finanças pessoais, investimentos e economia angolana.",
    ),
  }),
  component: ContentHub,
});

function ContentHub() {
  const latest = articles.slice(0, 3);

  return (
    <main id="conteudo-principal">
      <PageHeader
        eyebrow="Centro de conteúdos"
        title="Compreender antes de decidir."
        lead="Tudo o que publicamos serve o mesmo propósito: dar contexto suficiente para que cada decisão financeira seja tomada com consciência."
      />

      <section className="section-space">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-2xl text-primary sm:text-3xl">Artigos recentes</h2>
            <p className="mt-3 max-w-[56ch] text-muted-foreground">
              {articles.length} artigos publicados, organizados por tema.
            </p>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              {latest.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
            <div className="mt-8">
              <TextLink to="/conteudos/artigos">Ver todos os artigos</TextLink>
            </div>
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <h2 className="text-xs font-semibold uppercase tracking-[0.08em] text-secondary">Temas</h2>
            <ul className="mt-5 divide-y divide-border border-y border-border">
              {themes.map((theme) => (
                <li key={theme.slug} className="flex items-baseline justify-between gap-4 py-3 text-sm">
                  <span className="min-w-0">{theme.name}</span>
                  <span className="shrink-0 text-muted-foreground">{theme.count}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section-space border-t border-border bg-surface">
        <div className="container-wide grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_1.2fr]">
          <img
            src={podcastCover}
            alt="Capa do Dinheiro Limpo Podcast"
            loading="lazy"
            className="w-full max-w-sm border border-border"
          />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-secondary">Podcast</p>
            <h2 className="mt-4 text-3xl text-primary sm:text-4xl">{podcast.name}</h2>
            <p className="mt-4 max-w-[56ch] text-muted-foreground">{podcast.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/conteudos/podcast">Ver episódios</Link>
              </Button>
              <Button asChild variant="outline">
                <a href={podcast.spotify} target="_blank" rel="noreferrer">
                  Ouvir no Spotify
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-standard max-w-[62ch]">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-secondary">Newsletter</p>
          <h2 className="mt-4 text-3xl text-primary sm:text-4xl">A Linguagem do Dinheiro</h2>
          <p className="mt-4 text-muted-foreground">
            A newsletter do Dinheiro Limpo, com leitura sobre finanças pessoais e contexto económico.
          </p>
          <div className="mt-8">
            <TextLink to="/conteudos/newsletter">Conhecer a newsletter</TextLink>
          </div>
        </div>
      </section>
    </main>
  );
}
