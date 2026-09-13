import { createFileRoute } from "@tanstack/react-router";
import { ArticleCard, ArticleRow, PageHeader, seoMeta } from "@/components/editorial";
import { articles, themes } from "@/data/site";

export const Route = createFileRoute("/conteudos/artigos/")({
  head: () => ({
    meta: seoMeta(
      "Artigos",
      "Artigos do Dinheiro Limpo sobre finanças pessoais, investimentos, negócios e economia angolana.",
    ),
  }),
  component: ArticlesPage,
});

function ArticlesPage() {
  const featured = articles[0];
  const rest = articles.slice(1);
  const highlights = rest.slice(0, 4);
  const archive = rest.slice(4);
  if (!featured) return null;

  return (
    <main id="conteudo-principal">
      <PageHeader
        eyebrow="Publicação editorial"
        title="Artigos do Dinheiro Limpo"
        lead={`${articles.length} artigos publicados sobre finanças pessoais, investimentos, mercados, negócios e o contexto económico angolano.`}
        breadcrumb={[{ label: "Conteúdos", to: "/conteudos" }]}
      />

      <section className="section-space">
        <div className="container-wide grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ArticleCard article={featured} featured />
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-2">
            {highlights.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-12">
        <div className="container-wide">
          <h2 className="text-xs font-semibold uppercase tracking-[0.08em] text-secondary">Temas</h2>
          <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
            {themes.map((theme) => (
              <li key={theme.slug} className="text-sm">
                <span className="font-semibold">{theme.name}</span>{" "}
                <span className="text-muted-foreground">({theme.count})</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-space">
        <div className="container-standard">
          <h2 className="text-2xl text-primary sm:text-3xl">Arquivo</h2>
          <div className="mt-8">
            {archive.map((article) => (
              <ArticleRow key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
