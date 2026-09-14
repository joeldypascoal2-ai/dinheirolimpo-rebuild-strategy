import { Link, createFileRoute } from "@tanstack/react-router";
import { PageHeader, seoMeta } from "@/components/editorial";
import { Button } from "@/components/ui/button";
import { programs } from "@/data/site";

export const Route = createFileRoute("/programas/")({
  head: () => ({
    meta: seoMeta(
      "Programas",
      "Mentoria, formações e ebook do Dinheiro Limpo sobre poupança, investimento, acções e criação de negócio.",
    ),
  }),
  component: ProgramsPage,
});

function ProgramsPage() {
  return (
    <main id="conteudo-principal">
      <PageHeader
        eyebrow="Formação"
        title="Programas do Dinheiro Limpo."
        lead="Quatro percursos distintos, do primeiro passo na poupança à gestão de investimentos em acções e à criação de um negócio próprio."
      />

      <section className="section-space">
        <div className="container-wide flex flex-col gap-16">
          {programs.map((program, index) => (
            <article
              key={program.slug}
              className={`grid items-center gap-8 border-t border-border pt-10 lg:grid-cols-12 ${index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="lg:col-span-5">
                <img
                  src={program.image}
                  alt={`Imagem do programa ${program.name}`}
                  loading="lazy"
                  className="w-full border border-border object-cover"
                />
              </div>
              <div className="lg:col-span-6 lg:col-start-7">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-secondary">{program.type}</p>
                <h2 className="mt-3 text-2xl text-primary sm:text-3xl">{program.name}</h2>
                <p className="mt-4 max-w-[58ch] text-lg leading-8">{program.summary}</p>
                <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.06em] text-secondary">Para quem</dt>
                    <dd className="mt-1 text-sm text-muted-foreground">{program.audience}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.06em] text-secondary">Resultado</dt>
                    <dd className="mt-1 text-sm text-muted-foreground">{program.outcome}</dd>
                  </div>
                </dl>
                <div className="mt-7">
                  <Button asChild>
                    <Link to="/programas/$slug" params={{ slug: program.slug }}>
                      Ver detalhes
                    </Link>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface py-14">
        <div className="container-standard max-w-[62ch]">
          <h2 className="text-xl text-primary">Preços, datas e inscrições</h2>
          <p className="mt-3 text-muted-foreground">
            Os valores, calendários e formas de inscrição não estão publicados no website actual. Enquanto não forem
            confirmados pela organização, o pedido de informação é feito através da página de contactos.
          </p>
          <div className="mt-6">
            <Button asChild variant="outline">
              <Link to="/contactos">Pedir informação</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
