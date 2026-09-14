import { Link, createFileRoute } from "@tanstack/react-router";
import { PageHeader, seoMeta } from "@/components/editorial";
import { Button } from "@/components/ui/button";
import { finSummit } from "@/data/site";

export const Route = createFileRoute("/fin-summit")({
  head: () => ({
    meta: seoMeta(
      "FIN Summit",
      `Encontro de finanças e investimento organizado pelo Dinheiro Limpo, a ${finSummit.dates}, no ${finSummit.venue}.`,
      "event",
    ),
  }),
  component: FinSummitPage,
});

function FinSummitPage() {
  return (
    <main id="conteudo-principal">
      <PageHeader
        eyebrow="Evento"
        title="FIN Summit"
        lead={`Encontro organizado pelo Dinheiro Limpo, a ${finSummit.dates}, no ${finSummit.venue}.`}
      />

      <section className="section-space">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-2xl text-primary sm:text-3xl">Informação confirmada</h2>
            <dl className="mt-8 divide-y divide-border border-y border-border">
              <div className="grid gap-1 py-5 sm:grid-cols-[10rem_minmax(0,1fr)]">
                <dt className="text-xs font-semibold uppercase tracking-[0.06em] text-secondary">Datas</dt>
                <dd className="min-w-0">{finSummit.dates}</dd>
              </div>
              <div className="grid gap-1 py-5 sm:grid-cols-[10rem_minmax(0,1fr)]">
                <dt className="text-xs font-semibold uppercase tracking-[0.06em] text-secondary">Local</dt>
                <dd className="min-w-0">{finSummit.venue}</dd>
              </div>
              <div className="grid gap-1 py-5 sm:grid-cols-[10rem_minmax(0,1fr)]">
                <dt className="text-xs font-semibold uppercase tracking-[0.06em] text-secondary">Bilhetes</dt>
                <dd className="min-w-0">{finSummit.tickets.join(", ")}</dd>
              </div>
              <div className="grid gap-1 py-5 sm:grid-cols-[10rem_minmax(0,1fr)]">
                <dt className="text-xs font-semibold uppercase tracking-[0.06em] text-secondary">Pagamento</dt>
                <dd className="min-w-0">{finSummit.payment}</dd>
              </div>
            </dl>
            <p className="mt-6 text-sm text-muted-foreground">
              O programa, os oradores e os preços por tipo de bilhete não estão aqui publicados por ainda não terem
              sido confirmados. A inscrição é feita através dos canais oficiais da organização.
            </p>
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="border border-border bg-surface p-7">
              <h2 className="text-xl text-primary">Grupos e empresas</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Para participações em grupo ou em nome de uma empresa, a organização indica o contacto de WhatsApp.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Button asChild>
                  <a
                    href={`https://wa.me/${finSummit.whatsapp.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {finSummit.whatsapp}
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/contactos">Outros contactos</Link>
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
