import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NewsletterForm } from "@/components/newsletter-form";
import hero from "@/assets/dinheiro-limpo/hero.png";
import euclides from "@/assets/dinheiro-limpo/euclides.png";
import ana from "@/assets/dinheiro-limpo/ana.png";
import mario from "@/assets/dinheiro-limpo/mario.png";
import silvia from "@/assets/dinheiro-limpo/silvia.png";
import carmen from "@/assets/dinheiro-limpo/carmen.png";
import podcast from "@/assets/dinheiro-limpo/podcast.png";
import articleIa from "@/assets/dinheiro-limpo/article-ia.jpg";
import articleBrics from "@/assets/dinheiro-limpo/article-brics.png";
import articleAgt from "@/assets/dinheiro-limpo/article-agt.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Dinheiro Limpo — Educação financeira em Angola" },
    { name: "description", content: "Educação financeira, programas, artigos e podcast para decisões mais conscientes em Angola." },
    { property: "og:title", content: "Dinheiro Limpo — Educação financeira em Angola" },
    { property: "og:description", content: "Conhecimento financeiro para compreender, decidir e evoluir." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

function Index() {
  return (
    <main id="conteudo-principal">
      <section className="border-b border-border">
        <div className="container-wide grid min-h-[calc(100svh-5rem)] items-center gap-10 py-12 md:grid-cols-8 md:py-16 lg:grid-cols-12 lg:gap-8">
          <div className="min-w-0 md:col-span-5 lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-secondary">Educação financeira em Angola</p>
            <h1 className="mt-5 max-w-[13ch] text-[clamp(2.75rem,6vw,5rem)] leading-[1.02] text-primary">Conhecimento para valorizar a sua renda.</h1>
            <p className="mt-6 max-w-[58ch] text-lg leading-8 text-muted-foreground md:text-xl">O Dinheiro Limpo aproxima pessoas e famílias do conhecimento sobre finanças, investimentos e negócios — através de formação, conteúdos e conversas úteis.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button asChild size="lg"><Link to="/programas">Explorar programas <ArrowRight /></Link></Button><Button asChild variant="link"><Link to="/conteudos">Conhecer os conteúdos</Link></Button></div>
          </div>
          <figure className="relative md:col-span-3 lg:col-span-4 lg:col-start-9">
            <div className="aspect-[4/5] overflow-hidden bg-primary"><img src={hero} alt="Euclides Francisco, fundador do Dinheiro Limpo" className="h-full w-full object-cover object-top grayscale" fetchPriority="high" /></div>
            <figcaption className="mt-3 border-t border-border pt-3 text-xs text-muted-foreground">Uma organização angolana dedicada à educação financeira.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section-space">
        <div className="container-standard grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4"><p className="text-xs font-semibold uppercase tracking-[0.08em] text-secondary">O que encontra aqui</p><h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] leading-[1.12] text-primary">Da compreensão à decisão.</h2></div>
          <div className="lg:col-span-7 lg:col-start-6"><p className="max-w-[62ch] text-lg leading-8">O Dinheiro Limpo reúne educação financeira, formação e informação sobre o contexto económico angolano. Cada formato serve um momento diferente: aprender um princípio, aprofundar um tema ou construir competências.</p><div className="mt-10 grid gap-0 border-y border-border sm:grid-cols-2">{["Finanças pessoais", "Investimentos e acções", "Negócios", "Economia angolana"].map((topic,i)=><div key={topic} className={`flex items-center gap-4 py-5 ${i%2===0 ? "sm:border-r sm:pr-6" : "sm:pl-6"} ${i<2 ? "border-b border-border" : ""}`}><span className="font-display text-sm text-secondary">0{i+1}</span><span className="font-semibold">{topic}</span></div>)}</div></div>
        </div>
      </section>

      <section className="section-space bg-primary text-inverse">
        <div className="container-wide grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5"><p className="text-xs font-semibold uppercase tracking-[0.08em] text-inverse-muted">A instituição</p><h2 className="mt-5 max-w-[12ch] text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.08]">Educação ligada à vida real.</h2></div>
          <div className="lg:col-span-5 lg:col-start-8"><p className="text-lg leading-8 text-inverse-muted">A marca trabalha temas que fazem parte das decisões quotidianas: poupança, rendimento, mercados, carreira e criação de negócios. O contexto angolano não é uma nota lateral — é o ponto de partida.</p><Link to="/sobre" className="mt-7 inline-flex min-h-11 items-center gap-2 font-semibold underline-offset-4 hover:underline">Conhecer o Dinheiro Limpo <ArrowRight className="size-4" /></Link></div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-wide grid gap-12 md:grid-cols-8 lg:grid-cols-12 lg:items-center">
          <figure className="md:col-span-3 lg:col-span-5"><div className="aspect-[4/5] overflow-hidden bg-brand-soft"><img src={euclides} alt="Euclides Francisco" loading="lazy" className="h-full w-full object-contain object-bottom" /></div></figure>
          <div className="min-w-0 md:col-span-5 md:pl-6 lg:col-span-6 lg:col-start-7"><p className="text-xs font-semibold uppercase tracking-[0.08em] text-secondary">Fundador</p><h2 className="mt-4 text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.08] text-primary">Euclides Francisco</h2><p className="mt-3 text-sm font-semibold uppercase tracking-[0.06em] text-muted-foreground">Fundador e CEO</p><p className="mt-7 max-w-[58ch] text-lg leading-8">Educador financeiro e empreendedor, Euclides apresenta-se no projecto com a missão de levar mais inteligência financeira às famílias. É a voz fundadora de uma organização construída para tornar o conhecimento financeiro mais próximo.</p><Link to="/sobre/euclides-francisco" className="mt-7 inline-flex min-h-11 items-center gap-2 font-semibold text-primary underline-offset-4 hover:underline">Conhecer o fundador <ArrowRight className="size-4" /></Link></div>
        </div>
      </section>

      <section className="section-space border-y border-border bg-surface">
        <div className="container-wide"><div className="grid gap-8 lg:grid-cols-12"><div className="lg:col-span-4"><p className="text-xs font-semibold uppercase tracking-[0.08em] text-secondary">Equipa</p><h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] leading-[1.12] text-primary">Uma organização feita por pessoas.</h2><p className="mt-5 max-w-sm text-muted-foreground">Finanças, conteúdo, marketing e gestão de projectos encontram-se numa equipa multidisciplinar.</p></div><div className="grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:col-span-7 lg:col-start-6 lg:grid-cols-4">{team.map((person)=><article key={person.name} className="min-w-0"><div className="aspect-[4/5] overflow-hidden bg-brand-soft"><img src={person.image} alt={person.name} loading="lazy" className="h-full w-full object-contain object-bottom" /></div><h3 className="mt-4 font-sans text-base font-semibold">{person.name}</h3><p className="mt-1 text-xs leading-5 text-muted-foreground">{person.role}</p></article>)}</div></div><div className="mt-10 flex justify-end"><Link to="/sobre/equipa" className="inline-flex min-h-11 items-center gap-2 font-semibold text-primary hover:underline">Conheça a nossa equipa <ArrowRight className="size-4" /></Link></div></div>
      </section>

      <section className="section-space">
        <div className="container-standard"><div className="grid gap-6 border-b border-border pb-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end"><div><p className="text-xs font-semibold uppercase tracking-[0.08em] text-secondary">Programas e recursos</p><h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] leading-[1.12] text-primary">Caminhos para aprender e aplicar.</h2></div><Link to="/programas" className="inline-flex min-h-11 shrink-0 items-center gap-2 font-semibold text-primary hover:underline">Ver todos os programas <ArrowRight className="size-4" /></Link></div><div>{programs.map((program,i)=><article key={program.name} className="grid gap-4 border-b border-border py-7 md:grid-cols-[4rem_minmax(0,1fr)_minmax(0,1.2fr)_auto] md:items-center"><span className="font-display text-sm text-secondary">0{i+1}</span><div><p className="text-xs font-semibold uppercase tracking-[0.06em] text-muted-foreground">{program.type}</p><h3 className="mt-1 text-xl leading-7">{program.name}</h3></div><p className="text-sm leading-6 text-muted-foreground">{program.description}</p><Link to="/programas" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary">Conhecer <ArrowRight className="size-4" /></Link></article>)}</div></div>
      </section>

      <section className="section-space border-y border-border bg-surface">
        <div className="container-wide"><div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end"><div><p className="text-xs font-semibold uppercase tracking-[0.08em] text-secondary">Conteúdos</p><h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] leading-[1.12] text-primary">Uma leitura do dinheiro e do mundo.</h2></div><Link to="/conteudos/artigos" className="inline-flex min-h-11 items-center gap-2 font-semibold text-primary hover:underline">Explorar conteúdos <ArrowRight className="size-4" /></Link></div><div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-12">{articles.map((article,i)=><a key={article.title} href={article.href} target="_blank" rel="noreferrer" className={`group block min-w-0 ${i===0 ? "lg:col-span-7" : "lg:col-span-5"}`}><div className={`overflow-hidden bg-muted ${i===0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}><img src={article.image} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" /></div><p className="mt-4 text-xs font-semibold uppercase tracking-[0.06em] text-secondary">{article.topic} · {article.date}</p><h3 className={`mt-2 leading-tight group-hover:underline ${i===0 ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"}`}>{article.title}</h3><span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">Ler artigo <ExternalLink className="size-3.5" /></span></a>)}</div></div>
      </section>

      <section className="section-space">
        <div className="container-standard grid gap-10 md:grid-cols-8 md:items-center"><div className="md:col-span-3"><div className="aspect-square overflow-hidden bg-brand-soft"><img src={podcast} alt="Dinheiro Limpo Podcast" loading="lazy" className="h-full w-full object-cover" /></div></div><div className="min-w-0 md:col-span-4 md:col-start-5"><p className="text-xs font-semibold uppercase tracking-[0.08em] text-secondary">Podcast</p><h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] leading-[1.12] text-primary">Conversas sobre vida, negócios e investimentos.</h2><p className="mt-5 text-lg leading-8 text-muted-foreground">O Dinheiro Limpo Podcast reúne convidados e experiências numa conversa descontraída sobre decisões financeiras e desenvolvimento.</p><div className="mt-7 flex flex-wrap gap-5"><a href="https://www.youtube.com/channel/UCj0JfuuD4B9iy8318rWyBvg" target="_blank" rel="noreferrer" className="font-semibold text-primary underline underline-offset-4">Ouvir no YouTube</a><a href="https://open.spotify.com/show/4S95eUZR1MZtXvN9a6XtE0" target="_blank" rel="noreferrer" className="font-semibold text-primary underline underline-offset-4">Ouvir no Spotify</a></div></div></div>
      </section>

      <section className="section-space bg-brand-soft"><div className="container-standard grid gap-10 lg:grid-cols-12"><div className="lg:col-span-5"><p className="text-xs font-semibold uppercase tracking-[0.08em] text-secondary">A Linguagem do Dinheiro</p><h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] leading-[1.12] text-primary">Informação para cuidar e fazer crescer o seu património.</h2></div><div className="lg:col-span-6 lg:col-start-7"><p className="max-w-[58ch] text-lg leading-8">A newsletter reúne perspectivas sobre as melhores formas de administrar e desenvolver o seu património.</p><NewsletterForm /></div></div></section>

      <section className="section-space"><div className="container-standard border-y border-border py-14 text-center"><p className="text-xs font-semibold uppercase tracking-[0.08em] text-secondary">Próximo passo</p><h2 className="mx-auto mt-4 max-w-[18ch] text-[clamp(2rem,4vw,3rem)] leading-[1.12] text-primary">Conhecimento para decidir com mais consciência.</h2><p className="mx-auto mt-5 max-w-[56ch] text-muted-foreground">Explore os programas do Dinheiro Limpo e encontre o percurso mais próximo dos seus objectivos.</p><Button asChild size="lg" className="mt-8"><Link to="/programas">Explorar programas <ArrowRight /></Link></Button></div></section>
    </main>
  );
}

const team = [
  { name: "Ana Francisco", role: "Directora Financeira", image: ana },
  { name: "Mário José Maria", role: "Parceiro e Gestor de Conteúdo Técnico", image: mario },
  { name: "Silvia Costa", role: "Marketing e Vendas", image: silvia },
  { name: "Carmen Tati", role: "Gestora de Projectos", image: carmen },
];
const programs = [
  { type: "Mentoria", name: "O Caminho da Liberdade", description: "Da poupança ao investimento, com foco na construção de liberdade financeira." },
  { type: "Formação", name: "JIS — Jornada do Investidor de Sucesso", description: "Uma introdução à jornada de investimento, segurança e gestão de risco." },
  { type: "Formação", name: "O Mestre das Acções", description: "Um guia prático para compreender e gerir investimentos em acções." },
  { type: "Ebook", name: "Como começar um negócio do zero", description: "Um passo a passo para estruturar uma nova fonte de rendimento." },
];
const articles = [
  { topic: "Inteligência Artificial", date: "8 Maio 2023", title: "O poder da Inteligência Artificial na transformação do mundo financeiro", image: articleIa, href: "https://dinheirolimpo.com/o-poder-da-inteligencia-artificial-ia-na-transformacao-do-mundo-financeiro/" },
  { topic: "BRICS", date: "15 Abril 2023", title: "Entenda tudo sobre o BRICS e o seu impacto na economia mundial", image: articleBrics, href: "https://dinheirolimpo.com/entenda-tudo-sobre-o-brics-e-o-seu-impacto-na-economia-mundial/" },
  { topic: "Empreendedorismo", date: "20 Dezembro 2022", title: "Por que os empresários precisam de acesso ao portal da AGT", image: articleAgt, href: "https://dinheirolimpo.com/es-um-empresario-saiba-por-que-precisas-ter-acesso-ao-portal-da-agt/" },
];
