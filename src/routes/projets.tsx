import { createFileRoute, Link } from "@tanstack/react-router";
import { Sun, Droplets, GraduationCap, Sprout, ArrowRight } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import solarImg from "@/assets/project-solar.jpg";
import waterImg from "@/assets/project-water.jpg";
import schoolImg from "@/assets/project-school.jpg";
import hygieneImg from "@/assets/project-hygiene.jpg";
import communityImg from "@/assets/community.jpg";
import heroImg from "@/assets/hero-village.jpg";

export const Route = createFileRoute("/projets")({
  head: () => ({
    meta: [
      { title: "Nos Projets — Anjaramahasoa" },
      { name: "description", content: "Électrification solaire, adduction d'eau, écoles et hygiène : découvrez les 4 projets phares d'Anjaramahasoa à Madagascar." },
      { property: "og:title", content: "Nos Projets — Anjaramahasoa" },
      { property: "og:description", content: "Quatre projets pour transformer durablement les villages ruraux de Madagascar." },
    ],
    links: [{ rel: "canonical", href: "/projets" }],
  }),
  component: Projects,
});

const projects = [
  {
    icon: Sun,
    title: "Électrification Rurale",
    img: solarImg,
    desc: "Installation de systèmes solaires pour apporter l'électricité dans les villages non desservis.",
    goal: "Éclairer les foyers, les écoles et les centres de santé.",
    quote: "Chaque ampoule allumée est une vie transformée",
  },
  {
    icon: Droplets,
    title: "Adduction d'Eau Potable",
    img: waterImg,
    desc: "Forage de puits, construction de bornes fontaines et protection des sources.",
    goal: "Offrir un accès durable à une eau saine pour tous.",
    quote: "De l'eau propre aujourd'hui pour une santé meilleure demain",
  },
  {
    icon: GraduationCap,
    title: "Éducation",
    img: schoolImg,
    desc: "Construction et réhabilitation d'écoles primaires.",
    goal: "Permettre aux enfants d'étudier dans de bonnes conditions.",
    quote: "Construisons ensemble l'avenir de nos enfants",
  },
  {
    icon: Sprout,
    title: "Assainissement & Hygiène",
    img: hygieneImg,
    desc: "Construction de latrines améliorées et sensibilisation aux bonnes pratiques d'hygiène.",
    goal: "Promouvoir des ménages et écoles plus sains.",
    quote: "Petits gestes, grands impacts dans les campagnes malgaches",
  },
];

function Projects() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Nos Projets"
        title="Quatre piliers, un même engagement"
        subtitle="Chaque projet est co-construit avec les communautés pour répondre à leurs besoins réels."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 space-y-16">
        {projects.map((p, i) => (
          <article key={p.title} className={`grid items-center gap-8 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}>
            <div className="overflow-hidden rounded-3xl shadow-card">
              <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover aspect-[4/3]" />
            </div>
            <div>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
                <p.icon className="h-5 w-5" />
              </span>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">{p.title}</h2>
              <p className="mt-4 text-muted-foreground">{p.desc}</p>
              <p className="mt-2 text-foreground/80"><strong>Objectif :</strong> {p.goal}</p>
              <blockquote className="mt-5 border-l-4 border-accent pl-4 italic text-foreground/80">
                « {p.quote} »
              </blockquote>
            </div>
          </article>
        ))}
      </section>

      {/* Gallery */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <h2 className="text-center text-3xl font-bold md:text-4xl">Galerie</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
            Aperçu des terrains, des communautés et de notre quotidien.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
            {[heroImg, solarImg, waterImg, schoolImg, hygieneImg, communityImg, solarImg, waterImg].map((src, i) => (
              <div key={i} className="overflow-hidden rounded-xl aspect-square">
                <img src={src} alt={`Photo ${i + 1}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 hover:scale-110" />
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/soutenir" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">
              Soutenir un projet <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
