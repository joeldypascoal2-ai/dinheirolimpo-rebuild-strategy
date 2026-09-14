import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, seoMeta } from "@/components/editorial";
import { NewsletterForm } from "@/components/newsletter-form";

export const Route = createFileRoute("/conteudos/newsletter")({
  head: () => ({
    meta: seoMeta(
      "Newsletter",
      "A Linguagem do Dinheiro: a newsletter do Dinheiro Limpo sobre finanças pessoais e contexto económico.",
    ),
  }),
  component: NewsletterPage,
});

function NewsletterPage() {
  return (
    <main id="conteudo-principal">
      <PageHeader
        eyebrow="Newsletter"
        title="A Linguagem do Dinheiro"
        lead="Uma leitura regular sobre finanças pessoais, decisões de investimento e o contexto económico que afecta o dia a dia."
        breadcrumb={[{ label: "Conteúdos", to: "/conteudos" }]}
      />

      <section className="section-space">
        <div className="container-standard max-w-[62ch]">
          <h2 className="text-2xl text-primary">O que recebe</h2>
          <p className="mt-4 text-lg leading-8">
            Escrevemos sobre os mesmos temas que publicamos nos artigos: poupança, investimento, mercados, negócios e
            economia angolana, em linguagem acessível.
          </p>
          <NewsletterForm />
          <p className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground">
            A ligação ao serviço de envio de emails ainda não está configurada neste website. Até lá, nenhum endereço é
            recolhido nem guardado.
          </p>
        </div>
      </section>
    </main>
  );
}
