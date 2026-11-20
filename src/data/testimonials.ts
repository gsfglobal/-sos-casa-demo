import type { z } from "zod";
import type { testimonialSchema } from "@/config/schema";

/**
 * Recensioni REALI dell'impresa, con fonte verificabile.
 * Non inserire testimonianze inventate. Se l'elenco è vuoto
 * (o features.testimonials è false) la sezione non viene mostrata.
 *
 * Esempio:
 * {
 *   author: "Maria R.",
 *   authorized: true,
 *   text: "Testo copiato dalla recensione pubblica…",
 *   date: "2026-03",
 *   rating: 5,
 *   source: { name: "Google", url: "https://g.page/..." },
 * }
 */
// Estratti testuali di recensioni pubbliche Google (verificate il 20/11/2026).
// Nomi non mostrati finché i clienti non autorizzano (authorized: false).
export const testimonials: z.input<typeof testimonialSchema>[] = [
  {
    author: "Recensione Google",
    authorized: false,
    text: "…Hanno rispettato i tempi e i costi preventivati, e il risultato è stato oltre le mie aspettative. Consigliatissimi!",
    rating: 5,
    source: { name: "Google", url: "https://maps.google.com/?cid=14159497404732937523" },
  },
  {
    author: "Recensione Google",
    authorized: false,
    text: "Il loro personale è stato sempre professionale e disponibile, e hanno saputo affrontare ogni problema con soluzioni creative.",
    rating: 5,
    source: { name: "Google", url: "https://maps.google.com/?cid=14159497404732937523" },
  },
  {
    author: "Recensione Google",
    authorized: false,
    text: "Gentili, affidabili ma soprattutto grandi esperti del settore. Se pensate di ristrutturare casa non esitate e chiamare SOS casa. Io ho risolto tutti i miei problemi.",
    rating: 5,
    source: { name: "Google", url: "https://maps.google.com/?cid=14159497404732937523" },
  },
];
