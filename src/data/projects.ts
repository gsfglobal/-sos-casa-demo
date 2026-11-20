import type { z } from "zod";
import type { projectSchema } from "@/config/schema";

type ProjectInput = z.input<typeof projectSchema>;

/**
 * Progetti realizzati.
 * I progetti con `demo: true` sono FITTIZI: compaiono solo in DEMO MODE,
 * con l'etichetta "Progetto dimostrativo", e vengono esclusi in produzione.
 * Per un cliente reale: sostituire con lavori autentici e foto autorizzate.
 */
// Foto di repertorio con licenza libera: esempi, non lavori di SOS Casa.
const projectPhoto: Record<string, [string, string, string]> = {
  "appartamento-arenella": ["progetto-1", "appartamento", "appartamento-2"],
  "bagno-vomero": ["progetto-2", "bagno", "bagno-2"],
  "cucina-veletta": ["progetto-3", "cartongesso", "cartongesso-2"],
  "infissi-vetrate": ["progetto-4", "infissi", "hero-mobile"],
  "casa-colli-aminei": ["progetto-5", "pavimenti", "pavimenti-2"],
  "parete-luce": ["progetto-6", "impianti", "impianti-2"],
};
const pic = (slug: string, file: string, alt: string) => {
  const idx = file === "cover" ? 0 : file === "02" ? 1 : 2;
  return { src: `/images/sos/${projectPhoto[slug]?.[idx] ?? "progetto-1"}.webp`, alt: `Foto di repertorio: ${alt}`, demo: true };
};

const demoProject = (
  slug: string,
  title: string,
  service: string,
  city: string,
  excerpt: string,
  featured = true,
): ProjectInput => ({
  slug,
  title,
  service,
  city,
  year: null,
  excerpt,
  description: [
    "Progetto dimostrativo creato per mostrare la struttura della pagina. Qui l'impresa descrive la richiesta del cliente, le scelte progettuali e le lavorazioni eseguite.",
    "Suggerimento: indicare superficie, durata del cantiere e materiali utilizzati solo se verificati.",
  ],
  cover: pic(slug, "cover", `${title.toLowerCase()}, vista principale`),
  gallery: [pic(slug, "02", `${title.toLowerCase()}, vista secondaria`), pic(slug, "03", `${title.toLowerCase()}, dettaglio`)],
  details: [
    { label: "Tipologia", value: "Esempio" },
    { label: "Stato", value: "Dimostrativo" },
  ],
  beforeAfter: null,
  featured,
  demo: true,
});

export const projects: ProjectInput[] = [
  demoProject("appartamento-arenella", "Appartamento in zona Arenella", "ristrutturazione-appartamenti", "Napoli", "Esempio: zona giorno ridisegnata attorno alla luce naturale."),
  demoProject("bagno-vomero", "Bagno al Vomero", "ristrutturazione-bagni", "Napoli", "Esempio: bagno compatto con nicchia ad arco e doccia a filo."),
  demoProject("cucina-veletta", "Cucina con veletta luminosa", "cartongesso-e-controsoffitti", "Napoli", "Esempio: controsoffitto e luci a sospensione sopra il piano di lavoro."),
  demoProject("infissi-vetrate", "Infissi a tutta altezza", "infissi-tapparelle-zanzariere", "Napoli", "Esempio: grandi superfici vetrate per un ambiente più luminoso."),
  demoProject("casa-colli-aminei", "Casa ai Colli Aminei", "pavimenti-e-rivestimenti", "Napoli", "Esempio: una sequenza di archi e un pavimento continuo."),
  demoProject("parete-luce", "Parete attrezzata con luce", "impianti-idraulici-ed-elettrici", "Napoli", "Esempio: finiture a doghe con una linea di luce integrata.", false),
];
