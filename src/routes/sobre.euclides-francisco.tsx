import { Link, createFileRoute } from "@tanstack/react-router";
import { PageHeader, seoMeta } from "@/components/editorial";
import { Button } from "@/components/ui/button";
import { founder, podcast } from "@/data/site";

export const Route = createFileRoute("/sobre/euclides-francisco")({
  head: () => ({
    meta: seoMeta(
      "Euclides Francisco",
      "Euclides Francisco é fundador e CEO do Dinheiro Limpo, educador financeiro e anfitrião do Dinheiro Limpo Podcast.",
      "profile",
    ),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Euclides Francisco",
          jobTitle: "Fundador e CEO",
          worksFor: { "@type": "Organization", name: "Dinheiro Limpo" },
        }),
      },
    ],
  }),
  component: FounderPage,
});

function FounderPage() {
  return (
    <main id="conteudo-principal">
      <PageHeader
        eyebrow="Fundador"
        title="Euclides Francisco"
        lead="Fundador e CEO do Dinheiro Limpo, educador financeiro e anfitrião do Dinheiro Limpo Podcast."
        breadcrumb={[{ label: "Sobre", to: "/sobre" }]}
      />

      <section className="section-space">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <img
              src={founder.image}
              alt="Retrato de Euclides Francisco"
              className="w-full object-cover"
            />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <blockquote className="border-l-2 border-secondary pl-5 font-display text-xl leading-8 text-primary sm:text-2xl">
              “{founder.statement}”
            </blockquote>
            <p className="mt-8 text-lg leading-8">{founder.description}</p>
            <p className="mt-5 text-lg leading-8">
              Conduz as formações da organização e as conversas do podcast, onde recebe convidados para falar de vida,
              negócios e investimentos.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/programas">Ver programas</Link>
              </Button>
              <Button asChild variant="outline">
                <a href={podcast.youtube} target="_blank" rel="noreferrer">
                  Ver o podcast no YouTube
                </a>
              </Button>
            </div>
            <p className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground">
              Percurso académico, datas e números de alunos não estão aqui publicados por ainda não terem sido
              validados pela organização.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
