import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Anjaramahasoa" },
      { name: "description", content: "Contactez l'Association Anjaramahasoa à Madagascar pour toute question, partenariat ou proposition de soutien." },
      { property: "og:title", content: "Contact — Anjaramahasoa" },
      { property: "og:description", content: "Écrivez-nous : nous répondons à chaque message avec attention." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Nom trop court").max(100),
  email: z.string().trim().email("Email invalide").max(255),
  subject: z.string().trim().min(2, "Sujet requis").max(150),
  message: z.string().trim().min(10, "Message trop court").max(2000),
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const r = schema.safeParse(data);
    if (!r.success) {
      const fe: Record<string, string> = {};
      r.error.issues.forEach((i) => { fe[i.path[0] as string] = i.message; });
      setErrors(fe);
      return;
    }
    setErrors({});
    setSent(true);
  }

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title="Parlons ensemble"
        subtitle="Une question, une idée, une envie de soutenir ? Écrivez-nous."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-10 lg:grid-cols-5">
          <aside className="lg:col-span-2 space-y-5">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-semibold">Coordonnées</h3>
              <ul className="mt-4 space-y-3 text-sm text-foreground/85">
                <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> Antananarivo, Madagascar</li>
                <li className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 text-primary" /> contact@anjaramahasoa.org</li>
                <li className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 text-primary" /> +261 00 000 00 00</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-secondary p-6">
              <p className="text-sm text-foreground/80">
                Nous répondons généralement sous 48&nbsp;heures ouvrées. Pour les partenariats,
                merci de préciser le contexte de votre démarche.
              </p>
            </div>
          </aside>

          <form onSubmit={onSubmit} className="lg:col-span-3 rounded-2xl border border-border bg-card p-6 md:p-8 shadow-card space-y-5">
            {sent && (
              <div className="flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-3 text-sm text-primary">
                <CheckCircle2 className="h-4 w-4" /> Merci ! Votre message a bien été envoyé.
              </div>
            )}
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Nom" name="name" error={errors.name} />
              <Field label="Email" name="email" type="email" error={errors.email} />
            </div>
            <Field label="Sujet" name="subject" error={errors.subject} />
            <div>
              <label className="text-sm font-medium" htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={6} className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:scale-[1.02] transition-transform">
              <Send className="h-4 w-4" /> Envoyer le message
            </button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", error }: { label: string; name: string; type?: string; error?: string }) {
  return (
    <div>
      <label className="text-sm font-medium" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
