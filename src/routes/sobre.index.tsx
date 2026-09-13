import { Link, createFileRoute } from "@tanstack/react-router";
import { PageHeader, TextLink, seoMeta } from "@/components/editorial";
import { Button } from "@/components/ui/button";
import { founder, team } from "@/data/site";

export const Route = createFileRoute("/sobre/")({
  head: () => ({
    meta: seoMeta(
      "Sobre",
      "O Dinheiro Limpo é uma organização angolana de educação financeira: formação, conteúdos e conversas sobre dinheiro.",
    ),
  }),
  component: AboutPage,
});

const principles = [
  {
    title: "Linguagem acessível",
    body: "Explicamos dinheiro sem jargão. Se um conceito não puder ser explicado com clareza, não está pronto para ser ensinado.",
  },
  {
    title: "Contexto angolano",
    body: "Trabalhamos a partir da realidade de quem vive e investe em Angola, com atenção à inflação, ao câmbio e ao mercado local.",
  },
  {
    title: "Da teoria à prática",
    body: "Cada formação termina em aplicação: decisões concretas de poupança, investimento ou gestão de um negócio.",
  },
];

function AboutPage() {
  return (
    <main id="conteudo-principal">
      <PageHeader
        eyebrow="A instituição"
        title="Educação financeira para decisões conscientes."
        lead="O Dinheiro Limpo nasceu para aproximar a educação financeira das famílias e dos empreendedores angolanos, através de formação, conteúdos editoriais e conversas públicas sobre dinheiro."
      />

      <section className="section-space">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-2xl text-primary sm:text-3xl">O que fazemos</h2>
            <p className="mt-6 text-lg leading-8">
              Formamos pessoas em poupança, investimento e gestão de negócios, publicamos artigos sobre o contexto
              económico e conduzimos o Dinheiro Limpo Podcast, onde discutimos vida, negócios e investimentos com
              convidados.
            </p>
            <p className="mt-5 text-lg leading-8">
              A organização é conduzida por {founder.name}, {founder.role.toLowerCase()}, com uma equipa nas áreas
              financeira, de conteúdo técnico, marketing e gestão de projectos.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/programas">Ver programas</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/conteudos">Ler conteúdos</Link>
              </Button>
            </div>
          </div>

          <aside className="border-t border-border pt-8 lg:col-span-4 lg:col-start-9 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <h2 className="text-xs font-semibold uppercase tracking-[0.08em] text-secondary">Missão declarada pelo fundador</h2>
            <blockquote className="mt-5 font-display text-xl leading-8 text-primary">“{founder.statement}”</blockquote>
            <p className="mt-4 text-sm text-muted-foreground">
              {founder.name}, {founder.role}
            </p>
          </aside>
        </div>
      </section>

      <section className="section-space border-y border-border bg-surface">
        <div className="container-wide">
          <h2 className="text-2xl text-primary sm:text-3xl">Como trabalhamos</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {principles.map((principle, index) => (
              <div key={principle.title} className="border-t border-border pt-5">
                <p className="font-display text-sm text-secondary">0{index + 1}</p>
                <h3 className="mt-3 text-xl text-primary">{principle.title}</h3>
                <p className="mt-3 text-muted-foreground">{principle.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-2xl text-primary sm:text-3xl">Quem conduz o projecto</h2>
            <p className="mt-4 max-w-[52ch] text-muted-foreground">
              Uma equipa de {team.length} pessoas entre formação, conteúdo, gestão financeira e projectos.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <TextLink to="/sobre/euclides-francisco">Conhecer o fundador</TextLink>
              <TextLink to="/sobre/equipa">Ver a equipa</TextLink>
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-6 lg:col-span-6 lg:col-start-7 lg:grid-cols-3">
            {team.map((member) => (
              <li key={member.name}>
                <img
                  src={member.image}
                  alt={`Retrato de ${member.name}`}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
                <p className="mt-3 font-display text-base leading-tight">{member.name}</p>
                <p className="text-xs text-muted-foreground">{member.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
