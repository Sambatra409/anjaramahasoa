import { createFileRoute } from "@tanstack/react-router";
import { HandHeart, Eye, Leaf, Users } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import communityImg from "@/assets/community.jpg";

export const Route = createFileRoute("/qui-sommes-nous")({
  head: () => ({
    meta: [
      { title: "Qui sommes-nous — Anjaramahasoa" },
      { name: "description", content: "Anjaramahasoa, association malgache engagée dans le développement communautaire durable : eau, énergie, école et hygiène." },
      { property: "og:title", content: "Qui sommes-nous — Anjaramahasoa" },
      { property: "og:description", content: "Notre mission, nos valeurs et notre approche communautaire à Madagascar." },
    ],
    links: [{ rel: "canonical", href: "/qui-sommes-nous" }],
  }),
  component: About,
});

const values = [
  { icon: HandHeart, title: "Solidarité", text: "Agir aux côtés des plus vulnérables, avec respect et écoute." },
  { icon: Eye, title: "Transparence", text: "Une gestion claire et responsable de chaque action menée." },
  { icon: Leaf, title: "Durabilité", text: "Des solutions pensées pour durer et respecter l'environnement." },
  { icon: Users, title: "Inclusion", text: "Femmes, enfants, autorités locales : tous acteurs du changement." },
];

function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Qui sommes-nous"
        title="Une association malgache, au service des communautés rurales"
        subtitle="Anjaramahasoa œuvre pour un développement durable et inclusif dans les zones rurales de Madagascar."
      />

      <section className="mx-auto max-w-5xl px-4 py-16 md:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3 space-y-5 text-foreground/85 leading-relaxed">
            <p>
              <strong>Anjaramahasoa</strong> est une association à but non lucratif créée à
              Madagascar, engagée dans le développement communautaire durable.
            </p>
            <p>
              Notre mission est d'améliorer les conditions de vie des populations rurales en
              intervenant dans quatre domaines prioritaires : l'électrification rurale,
              l'accès à l'eau potable, l'éducation (construction et réhabilitation d'écoles)
              et l'assainissement & hygiène.
            </p>
            <p>
              Nous croyons que le développement se fait <em>avec</em> et <em>pour</em> les
              communautés. C'est pourquoi nous travaillons main dans la main avec les villages,
              les autorités locales et les bénéficiaires pour créer des solutions durables et
              adaptées à la réalité malgache.
            </p>
          </div>
          <div className="lg:col-span-2 overflow-hidden rounded-2xl shadow-card">
            <img src={communityImg} alt="Communauté rurale de Madagascar" loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Nos valeurs</span>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Ce qui nous guide chaque jour</h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
