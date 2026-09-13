import rawArticles from "./articles.json";

import euclidesPhoto from "@/assets/dinheiro-limpo/euclides.png";
import anaPhoto from "@/assets/dinheiro-limpo/ana.png";
import marioPhoto from "@/assets/dinheiro-limpo/mario.png";
import silviaPhoto from "@/assets/dinheiro-limpo/silvia.png";
import carmenPhoto from "@/assets/dinheiro-limpo/carmen.png";
import courseLiberdade from "@/assets/dinheiro-limpo/course-liberdade.png";
import courseJis from "@/assets/dinheiro-limpo/course-jis.png";
import courseAccoes from "@/assets/dinheiro-limpo/course-accoes.png";
import courseEbook from "@/assets/dinheiro-limpo/course-ebook.jpg";

export type Article = {
  slug: string;
  title: string;
  date: string;
  categories: string[];
  image: string | null;
  excerpt: string;
  blocks: { t: string; v: string }[];
  source: string;
};

/** Artigos exportados do website actual do Dinheiro Limpo. Conteúdo original preservado. */
export const articles = (rawArticles as Article[]).slice().sort((a, b) => b.date.localeCompare(a.date));

/** Consolidação das categorias originais nos temas definidos na etapa de arquitectura. */
const themeMap: Record<string, string> = {
  "Educação Financeira": "Educação Financeira",
  "Educação Financeira Para Crianças": "Educação Financeira",
  Hábitos: "Educação Financeira",
  Perspectivas: "Educação Financeira",
  Mentiras: "Educação Financeira",
  Dinheiro: "Educação Financeira",
  poupança: "Poupança",
  "Pague-se Primeiro": "Poupança",
  "Juros Compostos": "Poupança",
  Investimentos: "Investimentos",
  "Como Investir": "Investimentos",
  "Mundo de Investimento": "Investimentos",
  "Liberdade Financeira": "Investimentos",
  Liberdade: "Investimentos",
  Ações: "Bolsa e Mercados",
  "Bolsas de Vaores": "Bolsa e Mercados",
  BODIVA: "Bolsa e Mercados",
  "Mercado Financeiro": "Bolsa e Mercados",
  "S&amp;P 500": "Bolsa e Mercados",
  NFT: "Bolsa e Mercados",
  "Clube do livro": "Bolsa e Mercados",
  Angola: "Angola e Economia",
  Inflação: "Angola e Economia",
  "credito habitacional": "Angola e Economia",
  comunidade: "Angola e Economia",
  Recessão: "Angola e Economia",
  "Crise Económica": "Angola e Economia",
  Mundo: "Angola e Economia",
  "Estados Unidos": "Angola e Economia",
  BRICS: "Angola e Economia",
  "Silicon Valley": "Angola e Economia",
  Empreendedorismo: "Negócios e Empreendedorismo",
  contabilidade: "Negócios e Empreendedorismo",
  "Renda Extra": "Negócios e Empreendedorismo",
  FinTech: "Negócios e Empreendedorismo",
  "Internet Banking": "Negócios e Empreendedorismo",
  "Inteligência Artificial": "Tecnologia e Finanças",
  "CHAT GPT": "Tecnologia e Finanças",
  Futuro: "Tecnologia e Finanças",
  Carreira: "Carreira",
  Metas: "Carreira",
  Sonhos: "Carreira",
  Filhos: "Educação Financeira",
};

export const themeSlugs: Record<string, string> = {
  "Educação Financeira": "educacao-financeira",
  Investimentos: "investimentos",
  "Bolsa e Mercados": "bolsa-e-mercados",
  "Angola e Economia": "angola-e-economia",
  "Negócios e Empreendedorismo": "negocios-e-empreendedorismo",
  Poupança: "poupanca",
  Carreira: "carreira",
  "Tecnologia e Finanças": "tecnologia-e-financas",
};

export function themeOf(article: Article): string {
  for (const category of article.categories) {
    const theme = themeMap[category];
    if (theme) return theme;
  }
  return "Educação Financeira";
}

export function formatDate(value: string): string {
  const months = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
  const [year, month, day] = value.split("-");
  return `${Number(day)} de ${months[Number(month) - 1]} de ${year}`;
}

export function readingMinutes(article: Article): number {
  const words = article.blocks.reduce((total, block) => total + block.v.split(/\s+/).length, 0);
  return Math.max(2, Math.round(words / 200));
}

export const themes = Object.keys(themeSlugs)
  .map((name) => ({ name, slug: themeSlugs[name], count: articles.filter((a) => themeOf(a) === name).length }))
  .filter((theme) => theme.count > 0)
  .sort((a, b) => b.count - a.count);

export type Program = {
  slug: string;
  name: string;
  type: string;
  summary: string;
  audience: string;
  outcome: string;
  image: string;
};

/** Programas reais publicados em dinheirolimpo.com/cursos. Preços e formatos não estão publicados. */
export const programs: Program[] = [
  {
    slug: "o-caminho-da-liberdade",
    name: "O Caminho da Liberdade",
    type: "Mentoria",
    summary:
      "Uma mentoria sobre a passagem de poupador a investidor, com acompanhamento na aplicação prática de cada decisão.",
    audience: "Quem já poupa e quer começar a investir com método.",
    outcome: "Compreender na prática o percurso entre poupança e liberdade financeira.",
    image: courseLiberdade,
  },
  {
    slug: "jornada-do-investidor-de-sucesso",
    name: "JIS — Jornada do Investidor de Sucesso",
    type: "Formação",
    summary:
      "Um percurso inicial de investimento, centrado em segurança e na redução do risco de perda de capital.",
    audience: "Quem está a começar e procura um primeiro caminho estruturado.",
    outcome: "Iniciar a jornada de investimento com critérios claros de risco.",
    image: courseJis,
  },
  {
    slug: "o-mestre-das-accoes",
    name: "O Mestre das Acções",
    type: "Formação",
    summary:
      "Um guia prático sobre investimento em acções e sobre a gestão de risco associada a rendimentos em dólares.",
    audience: "Quem já investe e quer avançar para acções.",
    outcome: "Gerir investimentos de risco mais elevado com maior consciência.",
    image: courseAccoes,
  },
  {
    slug: "como-comecar-um-negocio-do-zero",
    name: "Como começar um negócio do zero",
    type: "Ebook",
    summary:
      "Um passo a passo para começar um negócio de raiz, como fonte de rendimento complementar ou principal.",
    audience: "Quem quer criar uma nova fonte de rendimento.",
    outcome: "Estruturar as primeiras decisões de um negócio próprio.",
    image: courseEbook,
  },
];

export type TeamMember = { name: string; role: string; image: string; slug?: string };

/** Equipa identificada em dinheirolimpo.com/sobre. Biografias ainda não publicadas. */
export const founder = {
  name: "Euclides Francisco",
  role: "Fundador e CEO",
  image: euclidesPhoto,
  statement:
    "A minha missão é levar mais inteligência financeira às famílias e permitir uma vida e reforma com dignidade, sem exclusão por classe ou estatuto.",
  description:
    "Euclides Francisco é o fundador do Dinheiro Limpo, educador financeiro e empreendedor. Conduz as formações da organização e o Dinheiro Limpo Podcast, onde conversa com convidados sobre finanças, negócios e decisões de vida.",
};

export const team: TeamMember[] = [
  { name: "Euclides Francisco", role: "Fundador e CEO", image: euclidesPhoto },
  { name: "Ana Francisco", role: "Directora Financeira", image: anaPhoto },
  { name: "Mário José Maria", role: "Parceiro e Gestor de Conteúdo Técnico", image: marioPhoto },
  { name: "Silvia Costa", role: "Marketing e Vendas", image: silviaPhoto },
  { name: "Carmen Tati", role: "Gestora de Projectos", image: carmenPhoto },
];

/** Episódios identificados na página de podcast do website actual. */
export const podcast = {
  name: "Dinheiro Limpo Podcast",
  description:
    "Um podcast descontraído, onde falamos sobre vida, negócios, investimentos e muito mais. Novos episódios semanais à segunda-feira.",
  youtube: "https://www.youtube.com/channel/UCj0JfuuD4B9iy8318rWyBvg",
  spotify: "https://open.spotify.com/show/4S95eUZR1MZtXvN9a6XtE0",
  playlist: "https://youtube.com/playlist?list=PL661tlSj2OzJAOFDI-cVs2q9p1tIQVtn6",
  featured: {
    title: "Contabilidade para pequenas e médias empresas em Angola",
    link: "https://www.youtube.com/watch?v=2VNJaL9b-bI",
  },
  episodes: [
    "Euclides vs Luzia Quia",
    "Euclides vs Homem Finanças",
    "Euclides e Ana vs Gilmário",
    "Euclides e Ana vs Hanormais",
    "Euclides e Ana vs Jusemara António",
    "Euclides e Ana vs Nahary e Aliondy Garcia",
    "Euclides vs Rui Oliveira",
  ],
};

/** Dados do evento publicados em dinheirolimpo.com/finsummit. */
export const finSummit = {
  dates: "31 de Outubro e 1 de Novembro de 2026",
  venue: "Hotel Intercontinental, Luanda",
  tickets: ["Presencial", "Online", "L&C"],
  payment: "FaciPay (Multicaixa Express, mobile money e referência) ou cartão.",
  whatsapp: "+244 930 580 048",
};
