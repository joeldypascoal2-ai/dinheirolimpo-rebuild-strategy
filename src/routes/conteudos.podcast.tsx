import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, seoMeta } from "@/components/editorial";
import { Button } from "@/components/ui/button";
import { podcast } from "@/data/site";
import podcastCover from "@/assets/dinheiro-limpo/podcast.png";

export const Route = createFileRoute("/conteudos/podcast")({
  head: () => ({
    meta: seoMeta(
      "Podcast",
      "Dinheiro Limpo Podcast: conversas sobre vida, negócios e investimentos, com novos episódios às segundas-feiras.",
    ),
  }),
  component: PodcastPage,
});

function PodcastPage() {
  return (
    <main id="conteudo-principal">
      <PageHeader
        eyebrow="Podcast"
        title="Dinheiro Limpo Podcast"
        lead={podcast.description}
        breadcrumb={[{ label: "Conteúdos", to: "/conteudos" }]}
      />

      <section className="section-space">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <img src={podcastCover} alt="Capa do Dinheiro Limpo Podcast" className="w-full border border-border" />
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <a href={podcast.spotify} target="_blank" rel="noreferrer">
                  Ouvir no Spotify
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={podcast.youtube} target="_blank" rel="noreferrer">
                  Ver no YouTube
                </a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <h2 className="text-2xl text-primary sm:text-3xl">Episódio em destaque</h2>
            <p className="mt-4 text-lg leading-8">{podcast.featured.title}</p>
            <a
              href={podcast.featured.link}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex min-h-11 items-center font-semibold text-primary underline underline-offset-4"
            >
              Ver o episódio no YouTube
            </a>

            <h2 className="mt-12 text-2xl text-primary sm:text-3xl">Conversas publicadas</h2>
            <ul className="mt-6 divide-y divide-border border-y border-border">
              {podcast.episodes.map((episode) => (
                <li key={episode} className="py-4 text-lg">
                  {episode}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              As ligações individuais de cada episódio ainda não estão disponíveis no website actual. A lista completa,
              com datas e duração, pode ser ouvida nas plataformas oficiais.
            </p>
            <a
              href={podcast.playlist}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex min-h-11 items-center font-semibold text-primary underline underline-offset-4"
            >
              Abrir a playlist completa
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
