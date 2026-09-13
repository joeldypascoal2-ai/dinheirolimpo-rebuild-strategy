import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { formatDate, themeOf, type Article } from "@/data/site";

export function PageHeader({
  eyebrow,
  title,
  lead,
  breadcrumb,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  breadcrumb?: { label: string; to: string }[];
}) {
  return (
    <header className="border-b border-border pb-12 pt-12 sm:pt-16">
      <div className="container-standard">
        {breadcrumb && (
          <nav aria-label="Trilho de navegação" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              {breadcrumb.map((crumb) => (
                <li key={crumb.to} className="flex items-center gap-2">
                  <Link to={crumb.to} className="hover:text-primary hover:underline">
                    {crumb.label}
                  </Link>
                  <span aria-hidden="true">/</span>
                </li>
              ))}
            </ol>
          </nav>
        )}
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-secondary">{eyebrow}</p>
        <h1 className="mt-5 max-w-[20ch] text-[clamp(2.25rem,5vw,4rem)] leading-[1.06] text-primary">{title}</h1>
        {lead && <p className="mt-6 max-w-[62ch] text-lg leading-8 text-muted-foreground">{lead}</p>}
      </div>
    </header>
  );
}

export function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  return (
    <article className="group min-w-0">
      <Link to="/conteudos/artigos/$slug" params={{ slug: article.slug }} className="block">
        <div className={`overflow-hidden bg-brand-soft ${featured ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
          {article.image ? (
            <img
              src={article.image}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          ) : (
            <div className="flex h-full w-full items-end p-5">
              <span className="font-display text-sm text-primary">{themeOf(article)}</span>
            </div>
          )}
        </div>
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.06em] text-secondary">
          {themeOf(article)} · {formatDate(article.date)}
        </p>
        <h3
          className={`mt-2 leading-tight text-foreground group-hover:underline ${featured ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"}`}
        >
          {article.title}
        </h3>
        {featured && article.excerpt && (
          <p className="mt-3 max-w-[62ch] text-muted-foreground">{article.excerpt}</p>
        )}
      </Link>
    </article>
  );
}

export function ArticleRow({ article }: { article: Article }) {
  return (
    <article className="border-b border-border">
      <Link
        to="/conteudos/artigos/$slug"
        params={{ slug: article.slug }}
        className="group grid gap-2 py-5 sm:grid-cols-[10rem_minmax(0,1fr)_auto] sm:items-baseline sm:gap-6"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.06em] text-secondary">{themeOf(article)}</p>
        <h3 className="min-w-0 text-lg leading-7 group-hover:underline">{article.title}</h3>
        <p className="text-xs text-muted-foreground">{formatDate(article.date)}</p>
      </Link>
    </article>
  );
}

export function TextLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} className="inline-flex min-h-11 items-center gap-2 font-semibold text-primary underline-offset-4 hover:underline">
      {children}
      <ArrowRight className="size-4" aria-hidden="true" />
    </Link>
  );
}

export function seoMeta(title: string, description: string, type = "website") {
  const full = `${title} — Dinheiro Limpo`;
  return [
    { title: full },
    { name: "description", content: description },
    { property: "og:title", content: full },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { name: "twitter:card", content: "summary_large_image" },
  ];
}
