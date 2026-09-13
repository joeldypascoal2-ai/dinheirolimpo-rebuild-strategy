import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, TextLink, seoMeta } from "@/components/editorial";
import { team } from "@/data/site";

export const Route = createFileRoute("/sobre/equipa")({
  head: () => ({
    meta: seoMeta("Equipa", "A equipa do Dinheiro Limpo: formação, conteúdo técnico, gestão financeira, marketing e projectos."),
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <main id="conteudo-principal">
      <PageHeader
        eyebrow="Equipa"
        title="As pessoas por trás do Dinheiro Limpo."
        lead="Uma equipa pequena, com responsabilidades claras entre formação, conteúdo, finanças, marketing e gestão de projectos."
        breadcrumb={[{ label: "Sobre", to: "/sobre" }]}
      />

      <section className="section-space">
        <div className="container-wide grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <article key={member.name}>
              <img
                src={member.image}
                alt={`Retrato de ${member.name}`}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <h2 className="mt-5 text-xl text-primary">{member.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
            </article>
          ))}
        </div>
        <div className="container-wide mt-14 border-t border-border pt-8">
          <p className="max-w-[62ch] text-sm text-muted-foreground">
            As biografias individuais ainda não foram publicadas pela organização. Serão acrescentadas assim que o
            conteúdo for validado internamente.
          </p>
          <div className="mt-4">
            <TextLink to="/sobre/euclides-francisco">Conhecer o fundador</TextLink>
          </div>
        </div>
      </section>
    </main>
  );
}
