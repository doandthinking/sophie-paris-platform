import type { Metadata } from "next";
import { PageHeader } from "@/components/v3/PageHeader";
import { DemoBadge, StatusBadge } from "@/components/v3/Badges";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Présentation partenaire | Paris Local Link",
};

const partnerKeeps = ["Billetterie", "Créneaux", "Prix", "Règles du lieu", "Règles de navigation", "Remboursements", "Marque", "Images", "Validation finale"];
const platformDoes = ["Page en quatre langues", "Communication avec visiteurs sinophones", "Demandes de réservation", "Rappels voyageurs", "Pré-sélection guides certifiés", "Localisation des contenus", "Synthèse des données pilote", "Collecte de feedback"];

export default function PartnerPresentationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Noindex · Partner deck"
        title="Proposition de pilote bas risque pour visiteurs sinophones à Paris"
        description="Page de présentation imprimable pour compagnies de croisières, musées, réseaux touristiques et partenaires culturels."
      />
      <section className="bg-mist py-10">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <DemoBadge />
            <h2 className="mt-4 text-2xl font-semibold text-navy">Positionnement</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600">
              Paris Local Link est une plateforme multilingue MVP dédiée aux visiteurs internationaux à Paris, avec une attention particulière portée à la clientèle sinophone. Le pilote ne vend pas de forfaits complexes et ne revendique aucun partenariat officiel sans contrat.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <StatusBadge label="zh-CN" />
              <StatusBadge label="zh-TW" />
              <StatusBadge label="FR" />
              <StatusBadge label="EN" />
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-navy">Pilote 6 à 8 semaines</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600">
              Objectif : tester une page dédiée, une collecte de demandes, une redirection officielle ou confirmation manuelle, puis mesurer les demandes, langues, profils et retours voyageurs.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-navy">La plateforme prend en charge</h2>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600">{platformDoes.map((item) => <li key={item}>· {item}</li>)}</ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-navy">Le partenaire conserve</h2>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600">{partnerKeeps.map((item) => <li key={item}>· {item}</li>)}</ul>
          </div>
          <div className="rounded-2xl border border-dashed border-zinc-300 bg-white p-6 text-sm text-zinc-500 lg:col-span-2">
            Demo screenshot area · Contact TODO · Site de démonstration TODO.
          </div>
        </div>
      </section>
    </>
  );
}
