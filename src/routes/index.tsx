import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sun, Droplets, GraduationCap, Sprout, Heart, Users, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import heroImg from "@/assets/hero-village.jpg";
import solarImg from "@/assets/project-solar.jpg";
import waterImg from "@/assets/project-water.jpg";
import schoolImg from "@/assets/project-school.jpg";
import hygieneImg from "@/assets/project-hygiene.jpg";
import communityImg from "@/assets/community.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anjaramahasoa — Développement rural durable à Madagascar" },
      { name: "description", content: "Anjaramahasoa œuvre pour l'électrification rurale, l'eau potable, l'éducation et l'hygiène dans les communautés rurales de Madagascar." },
      { property: "og:title", content: "Anjaramahasoa — Développement rural à Madagascar" },
      { property: "og:description", content: "Ensemble, apportons lumière, eau et espoir aux communautés rurales de Madagascar." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const projects = [
  { icon: Sun, title: "Électrification Rurale", img: solarImg, text: "Systèmes solaires pour éclairer foyers, écoles et centres de santé." },
  { icon: Droplets, title: "Adduction d'Eau Potable", img: waterImg, text: "Forage de puits, bornes fontaines et protection des sources." },
  { icon: GraduationCap, title: "Éducation", img: schoolImg, text: "Construction et réhabilitation d'écoles primaires." },
  { icon: Sprout, title: "Assainissement & Hygiène", img: hygieneImg, text: "Latrines améliorées et sensibilisation aux bonnes pratiques." },
];

const quotes = [
  "Chaque ampoule allumée est une vie transformée",
  "De l'eau propre aujourd'hui pour une santé meilleure demain",
  "Construisons ensemble l'avenir de nos enfants",
  "Petits gestes, grands impacts dans les campagnes malgaches",
];

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="Village rural à Madagascar" width={1920} height={1280} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/55 to-foreground/80" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-36 lg:py-44">
          <div className="max-w-3xl text-primary-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-3 py-1 text-xs font-medium uppercase tracking-widest backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Association · Madagascar
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight md:text-6xl">
              Ensemble, apportons <span className="text-accent">lumière</span>, <span className="text-accent">eau</span> et espoir aux communautés rurales de Madagascar
            </h1>
            <p className="mt-5 max-w-2xl text-base text-primary-foreground/90 md:text-lg">
              Anjaramahasoa œuvre pour un développement durable et inclusif dans les zones rurales.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/projets" className="inline-flex items-center gap-2 rounded-full bg-background px-5 py-3 text-sm font-semibold text-primary shadow-soft transition-transform hover:scale-[1.02]">
                Découvrir nos projets <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/soutenir" className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-soft transition-transform hover:scale-[1.02]">
                <Heart className="h-4 w-4" /> Nous soutenir
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Nos 4 piliers</span>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">Un développement avec et pour les communautés</h2>
          <p className="mt-3 text-muted-foreground">
            Quatre domaines prioritaires, une même conviction : des solutions durables co-construites avec les villages.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-transform hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-primary">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{p.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/projets" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent">
            En savoir plus sur nos projets <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* QUOTE STRIP */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {quotes.map((q) => (
              <blockquote key={q} className="text-balance text-sm font-medium leading-relaxed md:text-base">
                <span className="block text-2xl text-accent">“</span>
                {q}
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl">
            <img src={communityImg} alt="Communauté villageoise à Madagascar" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Qui sommes-nous</span>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Le développement se fait avec et pour les communautés</h2>
            <p className="mt-4 text-muted-foreground">
              Créée à Madagascar, Anjaramahasoa est une association à but non lucratif engagée
              dans le développement communautaire durable. Nous travaillons main dans la main
              avec les villages, les autorités locales et les bénéficiaires pour bâtir des
              solutions adaptées à la réalité malgache.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
              {["Solidarité", "Transparence", "Durabilité", "Inclusion"].map((v) => (
                <li key={v} className="flex items-center gap-2 rounded-lg bg-secondary px-3 py-2">
                  <Users className="h-4 w-4 text-primary" /> <span className="font-medium">{v}</span>
                </li>
              ))}
            </ul>
            <Link to="/qui-sommes-nous" className="mt-8 inline-flex items-center gap-1.5 rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
              En savoir plus <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-10 text-primary-foreground md:p-14">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl font-bold md:text-4xl">Votre soutien change des vies</h2>
            <p className="mt-3 text-primary-foreground/90">
              Don, bénévolat, partenariat : chaque geste compte pour éclairer un foyer,
              forer un puits ou rebâtir une école.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/soutenir" className="inline-flex items-center gap-2 rounded-full bg-background px-5 py-3 text-sm font-semibold text-primary">
                Comment nous aider <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-5 py-3 text-sm font-semibold">
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
