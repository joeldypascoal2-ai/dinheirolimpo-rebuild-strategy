import { Link, createFileRoute } from "@tanstack/react-router";
import { createFileRoute as _unused } from "@tanstack/react-router";
import { PageHeader, seoMeta } from "@/components/editorial";
import { finSummit, podcast, programs } from "@/data/site";

export const Route = createFileRoute("/contactos")({
  head: () => ({
    meta: seoMeta(
      "Contactos",
      "Fale com a equipa do Dinheiro Limpo sobre programas de formação, parcerias, conteúdos ou o FIN Summit.",
    ),
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main id="conteudo-principal">
      <PageHeader
        eyebrow="Contactos"
        title="Falar com a equipa."
        lead="Respondemos a pedidos de informação sobre programas, participação em eventos, parcerias e imprensa."
      />

      <section className="section-space">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="text-2xl text-primary sm:text-3xl">Canais directos</h2>
            <dl className="mt-8 divide-y divide-border border-y border-border">
              <div className="grid gap-1 py-5 sm:grid-cols-[12rem_minmax(0,1fr)]">
                <dt className="text-xs font-semibold uppercase tracking-[0.06em] text-secondary">WhatsApp</dt>
                <dd className="min-w-0">
                  <a
                    href={`https://wa.me/${finSummit.whatsapp.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-primary underline underline-offset-4"
                  >
                    {finSummit.whatsapp}
                  </a>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Número publicado pela organização para pedidos de grupos e empresas.
                  </p>
                </dd>
              </div>
              <div className="grid gap-1 py-5 sm:grid-cols-[12rem_minmax(0,1fr)]">
                <dt className="text-xs font-semibold uppercase tracking-[0.06em] text-secondary">YouTube</dt>
                <dd className="min-w-0">
                  <a href={podcast.youtube} target="_blank" rel="noreferrer" className="font-semibold text-primary underline underline-offset-4">
                    Dinheiro Limpo no YouTube
                  </a>
                </dd>
              </div>
              <div className="grid gap-1 py-5 sm:grid-cols-[12rem_minmax(0,1fr)]">
                <dt className="text-xs font-semibold uppercase tracking-[0.06em] text-secondary">Spotify</dt>
                <dd className="min-w-0">
                  <a href={podcast.spotify} target="_blank" rel="noreferrer" className="font-semibold text-primary underline underline-offset-4">
                    Dinheiro Limpo Podcast
                  </a>
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-sm text-muted-foreground">
              O endereço de email institucional e a morada não estão publicados no website actual. Serão acrescentados
              assim que forem confirmados pela organização.
            </p>
          </div>

          <aside className="lg:col-span-5 lg:col-start-8">
            <div className="border border-border bg-surface p-7">
              <h2 className="text-xl text-primary">Sobre o que nos escrevem</h2>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                <li>Inscrições e informação sobre os {programs.length} programas de formação.</li>
                <li>Participação no {`FIN Summit (${finSummit.dates})`}.</li>
                <li>Convites para o podcast, parcerias e imprensa.</li>
              </ul>
              <div className="mt-7 flex flex-col gap-3 text-sm">
                <Link to="/programas" className="min-h-11 font-semibold text-primary underline underline-offset-4">
                  Ver programas
                </Link>
                <Link to="/fin-summit" className="min-h-11 font-semibold text-primary underline underline-offset-4">
                  Ver o FIN Summit
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
