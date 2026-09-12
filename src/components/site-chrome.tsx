import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const nav = [
  { label: "Sobre", to: "/sobre" as const },
  { label: "Programas", to: "/programas" as const },
  { label: "FIN Summit", to: "/fin-summit" as const },
  { label: "Contactos", to: "/contactos" as const },
];

export function Wordmark({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link to="/" className={`group inline-flex flex-col leading-none ${inverse ? "text-inverse" : "text-primary"}`} aria-label="Dinheiro Limpo — Início">
      <span className="font-display text-xl font-bold sm:text-2xl">Dinheiro Limpo</span>
      <span className={`mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.12em] ${inverse ? "text-inverse-muted" : "text-muted-foreground"}`}>Valorize a sua renda</span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 16);
    update(); window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) requestAnimationFrame(() => closeRef.current?.focus());
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`sticky top-0 z-40 border-b bg-background/95 backdrop-blur-sm transition-[height,border-color] ${scrolled ? "border-border" : "border-transparent"}`}>
      <div className={`container-wide grid grid-cols-[minmax(0,1fr)_auto] items-center transition-[height] lg:grid-cols-[auto_minmax(0,1fr)_auto] ${scrolled ? "h-[4.5rem]" : "h-20 lg:h-[5.5rem]"}`}>
        <Wordmark />
        <nav className="hidden items-center justify-center gap-7 lg:flex" aria-label="Navegação principal">
          {nav.slice(0, 2).map((item) => <NavLink key={item.to} {...item} />)}
          <div className="group relative">
            <Link to="/conteudos" className="inline-flex min-h-11 items-center gap-1 text-sm font-medium text-foreground after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform hover:after:scale-x-100 focus-visible:after:scale-x-100">
              Conteúdos <ChevronDown className="size-3.5" aria-hidden="true" />
            </Link>
            <div className="invisible absolute left-1/2 top-full w-48 -translate-x-1/2 border border-border bg-surface p-2 opacity-0 shadow-sm transition-[opacity,visibility] group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              <Link to="/conteudos/artigos" className="block px-3 py-2 text-sm hover:bg-accent">Artigos</Link>
              <Link to="/conteudos/podcast" className="block px-3 py-2 text-sm hover:bg-accent">Podcast</Link>
              <Link to="/conteudos/newsletter" className="block px-3 py-2 text-sm hover:bg-accent">Newsletter</Link>
            </div>
          </div>
          {nav.slice(2).map((item) => <NavLink key={item.to} {...item} />)}
        </nav>
        <div className="hidden lg:block"><Button asChild><Link to="/programas">Explorar programas</Link></Button></div>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Abrir menu" aria-expanded={open} onClick={() => setOpen(true)}><Menu className="size-6" /></Button>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 min-h-dvh bg-background lg:hidden" role="dialog" aria-modal="true" aria-label="Menu principal">
          <div className="container-wide grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center"><Wordmark /><Button ref={closeRef} variant="ghost" size="icon" aria-label="Fechar menu" onClick={() => setOpen(false)}><X className="size-6" /></Button></div>
          <nav className="container-wide flex flex-col border-t border-border py-6" aria-label="Navegação móvel">
            {[...nav.slice(0,2), {label:"Conteúdos",to:"/conteudos" as const}, ...nav.slice(2)].map((item) => <Link key={item.to} to={item.to} className="border-b border-border py-4 font-display text-2xl">{item.label}</Link>)}
            <div className="mt-8"><Button asChild className="w-full"><Link to="/programas">Explorar programas</Link></Button></div>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLink({ label, to }: { label: string; to: "/sobre" | "/programas" | "/fin-summit" | "/contactos" }) {
  return <Link to={to} activeProps={{ className: "text-primary" }} className="relative inline-flex min-h-11 items-center text-sm font-medium after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform hover:after:scale-x-100 focus-visible:after:scale-x-100">{label}</Link>;
}

export function SiteFooter() {
  return (
    <footer className="bg-primary text-inverse">
      <div className="container-standard grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div><Wordmark inverse /><p className="mt-6 max-w-xs text-sm text-inverse-muted">Educação financeira, formação e conteúdos para decisões mais conscientes.</p></div>
        <FooterGroup title="Instituição" links={[["Sobre", "/sobre"], ["Fundador", "/sobre/euclides-francisco"], ["Equipa", "/sobre/equipa"]]} />
        <FooterGroup title="Explorar" links={[["Programas", "/programas"], ["Artigos", "/conteudos/artigos"], ["Podcast", "/conteudos/podcast"], ["FIN Summit", "/fin-summit"]]} />
        <FooterGroup title="Contacto" links={[["Falar com a equipa", "/contactos"], ["Newsletter", "/conteudos/newsletter"], ["YouTube", "https://www.youtube.com/channel/UCj0JfuuD4B9iy8318rWyBvg"], ["Spotify", "https://open.spotify.com/show/4S95eUZR1MZtXvN9a6XtE0"]]} />
      </div>
      <div className="border-t border-inverse/20"><div className="container-standard flex flex-col gap-3 py-6 text-xs text-inverse-muted sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Dinheiro Limpo.</p><div className="flex gap-5"><Link to="/privacidade" className="hover:text-inverse">Privacidade</Link><Link to="/termos" className="hover:text-inverse">Termos</Link></div></div></div>
    </footer>
  );
}

function FooterGroup({ title, links }: { title: string; links: readonly (readonly [string, string])[] }) {
  return <div><h2 className="font-sans text-xs font-semibold uppercase tracking-[0.08em] text-inverse-muted">{title}</h2><ul className="mt-4 space-y-2.5 text-sm">{links.map(([label, href]) => <li key={href}>{href.startsWith("http") ? <a href={href} target="_blank" rel="noreferrer" className="hover:underline">{label}</a> : <Link to={href as "/sobre"} className="hover:underline">{label}</Link>}</li>)}</ul></div>;
}