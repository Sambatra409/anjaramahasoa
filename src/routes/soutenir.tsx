import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, HandHeart, Handshake, Megaphone } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";

export const Route = createFileRoute("/soutenir")({
  head: () => ({
    meta: [
      { title: "Comment nous aider — Anjaramahasoa" },
      { name: "description", content: "Don, bénévolat, partenariat : trois manières simples de soutenir l'action d'Anjaramahasoa à Madagascar." },
      { property: "og:title", content: "Comment nous aider — Anjaramahasoa" },
      { property: "og:description", content: "Soutenez l'électrification, l'eau, l'éducation et l'hygiène dans les villages malgaches." },
    ],
    links: [{ rel: "canonical", href: "/soutenir" }],
  }),
  component: Support,
});

const ways = [
  { icon: Heart, title: "Faire un don", text: "Chaque contribution finance directement nos projets : panneaux solaires, forages, salles de classe, latrines." },
  { icon: HandHeart, title: "Devenir bénévole", text: "Mettez vos compétences au service des communautés : terrain, communication, ingénierie, éducation." },
  { icon: Handshake, title: "Devenir partenaire", text: "Entreprises, ONG, collectivités : construisons ensemble des programmes durables et mesurables." },
  { icon: Megaphone, title: "Parler de nous", text: "Relayez nos actions auprès de votre réseau pour amplifier l'impact sur le terrain." },
];

function Support() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Comment nous aider"
        title="Votre engagement fait la différence"
        subtitle="Quatre manières simples et concrètes de soutenir Anjaramahasoa."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-6 sm:grid-cols-2">
          {ways.map((w) => (
            <div key={w.title} className="group rounded-2xl border border-border bg-card p-7 shadow-card transition-colors hover:border-primary">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <w.icon className="h-6 w-6" />
              </span>
              <h2 className="mt-4 font-display text-xl font-semibold">{w.title}</h2>
              <p className="mt-2 text-muted-foreground">{w.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl bg-gradient-to-br from-primary to-primary/85 p-10 text-primary-foreground md:p-14">
          <h2 className="text-3xl font-bold md:text-4xl">Prêt(e) à passer à l'action ?</h2>
          <p className="mt-3 max-w-xl text-primary-foreground/90">
            Contactez-nous pour discuter de la meilleure manière de contribuer.
            Nous étudions chaque proposition avec attention et transparence.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-background px-5 py-3 text-sm font-semibold text-primary">
              Nous contacter
            </Link>
            <Link to="/projets" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-5 py-3 text-sm font-semibold">
              Voir nos projets
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
