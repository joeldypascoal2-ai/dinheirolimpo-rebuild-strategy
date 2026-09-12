import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function PageIntro({ eyebrow, title, description, link }: { eyebrow: string; title: string; description: string; link?: { label: string; to: "/" | "/programas" | "/conteudos" | "/contactos" } }) {
  return (
    <main id="conteudo-principal">
      <section className="section-space border-b border-border">
        <div className="container-standard grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3"><p className="text-xs font-semibold uppercase tracking-[0.08em] text-secondary">{eyebrow}</p></div>
          <div className="min-w-0 lg:col-span-8 lg:col-start-5">
            <h1 className="max-w-4xl text-[clamp(2.5rem,5vw,4rem)] leading-[1.06] text-primary">{title}</h1>
            <p className="mt-6 max-w-[62ch] text-lg leading-8 text-muted-foreground">{description}</p>
            {link && <Link to={link.to} className="mt-8 inline-flex min-h-11 items-center gap-2 font-semibold text-primary underline-offset-4 hover:underline">{link.label}<ArrowRight className="size-4" /></Link>}
          </div>
        </div>
      </section>
    </main>
  );
}