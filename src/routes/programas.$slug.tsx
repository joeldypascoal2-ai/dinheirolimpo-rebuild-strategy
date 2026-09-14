import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { PageHeader, seoMeta } from "@/components/editorial";
import { Button } from "@/components/ui/button";
import { programs } from "@/data/site";

export const Route = createFileRoute("/programas/$slug")({
  loader: ({ params }) => {
    const program = programs.find((item) => item.slug === params.slug);
    if (!program) throw notFound();
    return { program };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Programa indisponível — Dinheiro Limpo" }, { name: "robots", content: "noindex" }] };
    }
    const { program } = loaderData;
    return { meta: seoMeta(program.name, program.summary) };
  },
  component: ProgramPage,
  notFoundComponent: () => (
    <main id="conteudo-principal" className="section-space">
      <div className="container-standard max-w-2xl">
        <h1 className="text-4xl text-primary">Programa não encontrado</h1>
        <p className="mt-4 text-muted-foreground">Este endereço não corresponde a nenhum programa publicado.</p>
        <Link to="/programas" className="mt-6 inline-flex min-h-11 items-center font-semibold text-primary underline">
          Ver todos os programas
        </Link>
      </div>
    </main>
  ),
});

function ProgramPage() {
  const { program } = Route.useLoaderData();
  const others = programs.filter((item) => item.slug !== program.slug);

  return (
    <main id="conteudo-principal">
      <PageHeader
        eyebrow={program.type}
        title={program.name}
        lead={program.summary}
        breadcrumb={[{ label: "Programas", to: "/programas" }]}
      />

      <section className="section-space">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <img src={program.image} alt={`Imagem do programa ${program.name}`} className="w-full border border-border" />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <h2 className="text-2xl text-primary">Para quem é</h2>
            <p className="mt-3 text-lg leading-8">{program.audience}</p>
            <h2 className="mt-10 text-2xl text-primary">O que fica no fim</h2>
            <p className="mt-3 text-lg leading-8">{program.outcome}</p>
            <div className="mt-10 border-t border-border pt-6">
              <p className="text-sm text-muted-foreground">
                O programa detalhado, a duração, o preço e as datas ainda não estão publicados. Peça informação
                directamente à equipa e receberá as condições em vigor.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <Link to="/contactos">Pedir informação</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/programas">Ver todos os programas</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space border-t border-border bg-surface">
        <div className="container-wide">
          <h2 className="text-2xl text-primary sm:text-3xl">Outros programas</h2>
          <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((item) => (
              <li key={item.slug}>
                <Link to="/programas/$slug" params={{ slug: item.slug }} className="group block">
                  <img
                    src={item.image}
                    alt=""
                    loading="lazy"
                    className="aspect-[4/3] w-full border border-border object-cover"
                  />
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.06em] text-secondary">{item.type}</p>
                  <h3 className="mt-1 text-lg group-hover:underline">{item.name}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
