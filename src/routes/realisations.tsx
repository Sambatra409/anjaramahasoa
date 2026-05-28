import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Target } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import communityImg from "@/assets/community.jpg";

export const Route = createFileRoute("/realisations")({
  head: () => ({
    meta: [
      { title: "Réalisations & Impact — Anjaramahasoa" },
      { name: "description", content: "Sensibilisations, comités villageois, études de besoins : découvrez les premières réalisations d'Anjaramahasoa à Madagascar." },
      { property: "og:title", content: "Réalisations & Impact — Anjaramahasoa" },
      { property: "og:description", content: "Notre action sur le terrain et nos objectifs pour les villages malgaches." },
    ],
    links: [{ rel: "canonical", href: "/realisations" }],
  }),
  component: Impact,
});

const done = [
  "Sensibilisations communautaires menées dans plusieurs fokontany",
  "Accompagnement à la création de comités villageois",
  "Études de besoins réalisées auprès des populations rurales",
];

const goals = [
  "Équiper des villages en énergie solaire",
  "Offrir un accès durable à l'eau potable",
  "Améliorer les infrastructures scolaires",
  "Promouvoir l'assainissement dans les ménages et écoles",
];

function Impact() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Réalisations & Impact"
        title="Aux côtés des communautés, étape par étape"
        subtitle="Depuis sa création, Anjaramahasoa s'engage concrètement sur le terrain."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
            <div className="flex items-center gap-2 text-primary">
              <CheckCircle2 className="h-5 w-5" />
              <h2 className="font-display text-xl font-semibold">Déjà réalisé</h2>
            </div>
            <ul className="mt-5 space-y-3">
              {done.map((d) => (
                <li key={d} className="flex items-start gap-3 text-foreground/85">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
            <div className="flex items-center gap-2 text-accent">
              <Target className="h-5 w-5" />
              <h2 className="font-display text-xl font-semibold">Nos objectifs</h2>
            </div>
            <ul className="mt-5 space-y-3">
              {goals.map((g) => (
                <li key={g} className="flex items-start gap-3 text-foreground/85">
                  <Target className="mt-1 h-4 w-4 shrink-0 text-accent" />
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {[
            { k: "Fokontany", v: "Plusieurs", l: "engagés à nos côtés" },
            { k: "Domaines", v: "4", l: "piliers d'intervention" },
            { k: "Approche", v: "100%", l: "communautaire" },
          ].map((s) => (
            <div key={s.k} className="rounded-2xl bg-primary p-6 text-primary-foreground">
              <p className="text-xs uppercase tracking-widest text-primary-foreground/70">{s.k}</p>
              <p className="mt-1 text-4xl font-bold">{s.v}</p>
              <p className="mt-1 text-sm text-primary-foreground/85">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-6">
        <div className="overflow-hidden rounded-3xl">
          <img src={communityImg} alt="Communauté malgache" loading="lazy" className="h-full w-full object-cover" />
        </div>
      </section>
    </SiteLayout>
  );
}
