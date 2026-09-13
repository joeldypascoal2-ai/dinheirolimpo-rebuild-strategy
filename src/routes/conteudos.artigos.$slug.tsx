import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { ArticleCard, seoMeta } from "@/components/editorial";
import { articles, formatDate, readingMinutes, themeOf } from "@/data/site";

export const Route = createFileRoute("/conteudos/artigos/$slug")({
  loader: ({ params }) => {
    const article = articles.find((item) => item.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Artigo indisponível — Dinheiro Limpo" }, { name: "robots", content: "noindex" }] };
    }
    const { article } = loaderData;
    return {
      meta: seoMeta(article.title, article.excerpt || `Artigo do Dinheiro Limpo sobre ${themeOf(article)}.`, "article"),
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            datePublished: article.date,
            author: { "@type": "Organization", name: "Dinheiro Limpo" },
          }),
        },
      ],
    };
  },
  component: ArticlePage,
  notFoundComponent: () => (
    <main id="conteudo-principal" className="section-space">
      <div className="container-standard max-w-2xl">
        <h1 className="text-4xl text-primary">Artigo não encontrado</h1>
        <p className="mt-4 text-muted-foreground">Este endereço não corresponde a nenhum artigo publicado.</p>
        <Link to="/conteudos/artigos" className="mt-6 inline-flex min-h-11 items-center font-semibold text-primary underline">
          Ver todos os artigos
        </Link>
      </div>
    </main>
  ),
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const theme = themeOf(article);
  const related = articles.filter((item) => item.slug !== article.slug && themeOf(item) === theme).slice(0, 3);

  return (
    <main id="conteudo-principal">
      <article>
        <header className="border-b border-border pb-10 pt-12">
          <div className="container-standard max-w-[72ch]">
            <nav aria-label="Trilho de navegação" className="mb-8 text-xs text-muted-foreground">
              <Link to="/conteudos/artigos" className="hover:text-primary hover:underline">
                Artigos
              </Link>
              <span aria-hidden="true"> / </span>
              <span>{theme}</span>
            </nav>
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-secondary">{theme}</p>
            <h1 className="mt-4 text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.1] text-primary">{article.title}</h1>
            <p className="mt-5 text-sm text-muted-foreground">
              {formatDate(article.date)} · {readingMinutes(article)} min de leitura
            </p>
          </div>
        </header>

        {article.image && (
          <figure className="container-standard mt-10 max-w-[80ch]">
            <div className="aspect-[16/9] overflow-hidden bg-brand-soft">
              <img src={article.image} alt="" className="h-full w-full object-cover" />
            </div>
          </figure>
        )}

        <div className="container-standard my-12 max-w-[72ch]">
          {article.blocks.map((block, index) => {
            if (block.t === "h2")
              return (
                <h2 key={index} className="mt-12 text-2xl leading-8 text-primary sm:text-3xl">
                  {block.v}
                </h2>
              );
            if (block.t === "h3")
              return (
                <h3 key={index} className="mt-9 text-xl leading-7 text-primary">
                  {block.v}
                </h3>
              );
            if (block.t === "blockquote")
              return (
                <blockquote key={index} className="my-8 border-l-2 border-secondary pl-5 font-display text-lg italic">
                  {block.v}
                </blockquote>
              );
            if (block.t === "li")
              return (
                <p key={index} className="mt-3 pl-5 text-lg leading-8 before:mr-3 before:text-secondary before:content-['—']">
                  {block.v}
                </p>
              );
            return (
              <p key={index} className="mt-6 text-lg leading-8">
                {block.v}
              </p>
            );
          })}
        </div>

        <div className="container-standard max-w-[72ch] border-t border-border py-8">
          <Link to="/conteudos/artigos" className="inline-flex min-h-11 items-center gap-2 font-semibold text-primary hover:underline">
            <ArrowLeft className="size-4" aria-hidden="true" /> Voltar aos artigos
          </Link>
        </div>
      </article>

      {related.length > 0 && (
        <section className="section-space border-t border-border bg-surface">
          <div className="container-wide">
            <h2 className="text-2xl text-primary sm:text-3xl">Continuar em {theme}</h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ArticleCard key={item.slug} article={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
