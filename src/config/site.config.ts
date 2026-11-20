import type { SiteConfigInput } from "./schema";

/**
 * ============================================================
 *  SOS CASA RISTRUTTURARE — versione DEMO del template RENOVATION
 *  Fonti pubbliche verificate il 20/11/2026:
 *  - scheda Google Maps (indirizzo, telefono, orari, valutazione, recensioni)
 *  - pagina Facebook "SOS Casa" (servizi dichiarati in bio e nei post, logo e colori)
 *  Tutto ciò che è marcato "DA CONFERMARE" va verificato con il titolare
 *  prima di passare a NEXT_PUBLIC_SITE_MODE=production.
 * ============================================================
 */
export const siteConfig = {
  mode: "demo",
  siteUrl: "https://soscasa-demo.vercel.app",
  locale: "it_IT",

  company: {
    name: "SOS Casa",
    legalName: "", // DA CONFERMARE con visura (probabile SOS CASA S.r.l.s.)
    tagline: "Tutto ciò di cui la tua casa ha bisogno",
    description:
      "Impresa edile a Napoli, zona Colli Aminei: ristrutturazioni di appartamenti e bagni, impianti idraulici ed elettrici, pavimenti, infissi, cartongesso e controsoffitti, con un solo referente dal sopralluogo alla consegna.",
    city: "Napoli",
    province: "NA",
    region: "Campania",
    serviceAreas: ["Colli Aminei", "Arenella", "Vomero", "Capodimonte", "Napoli"],
    vatNumber: "", // DA CONFERMARE
    stats: {
      verified: false,
      yearsExperience: null,
      projectsCompleted: null,
    },
  },

  contact: {
    phone: "+39 392 722 0704",
    whatsapp: "+39 392 722 0704", // DA CONFERMARE che il numero sia attivo su WhatsApp
    whatsappDefaultMessage: "Buongiorno SOS Casa, vorrei informazioni per un lavoro a casa mia.",
    email: "sos.casa.ristrutturare@gmail.com", // da directory pubbliche: DA CONFERMARE
    address: { street: "Via Michele Pietravalle, 26", postalCode: "80128", city: "Napoli", province: "NA", country: "IT" },
    openingHours: ["Lun 9:30–13:30", "Mar 9:30–13:30 · 16:00–18:30", "Mer–Ven 9:30–13:30 · 16:00–19:00", "Sab 9:30–13:30", "Dom chiuso"],
    mapsUrl: "https://maps.google.com/?cid=14159497404732937523",
  },

  branding: {
    logo: "",
    logoLight: "",
    favicon: "/icon.png",
    // Palette ricavata dal logo esistente dell'impresa: antracite + verde smeraldo
    primaryColor: "#262B29",
    accentColor: "#46B080",
    backgroundColor: "#F6F5F0",
    mutedColor: "#5E635F",
  },

  hero: {
    eyebrow: "Impresa edile · Colli Aminei, Napoli",
    title: "Ristrutturiamo casa tua",
    subtitle: "con tempi e costi chiari.",
    description:
      "Appartamenti, bagni, impianti, pavimenti e infissi. Un preventivo voce per voce e un solo referente, dal sopralluogo alla consegna delle chiavi.",
    image: { src: "/images/sos/hero.webp", alt: "Foto di repertorio: salone luminoso con camino e finestre alte", demo: true },
    imageMobile: { src: "/images/sos/hero-mobile.webp", alt: "Foto di repertorio: salone d'epoca con porta finestra ad arco", demo: true },
    video: "",
    ctaPrimary: "Richiedi un sopralluogo",
    ctaSecondary: "Guarda i lavori",
  },

  intro: {
    eyebrow: "SOS Casa",
    title: "Quando la casa chiede aiuto,\nci pensiamo noi.",
    paragraphs: [
      "Rifare casa a Napoli spesso vuol dire inseguire muratori, idraulici, elettricisti e posatori, con preventivi che cambiano e cantieri che non finiscono. Noi ti togliamo questo pensiero.",
      "Coordiniamo ogni lavorazione in un unico cantiere: opere murarie, impianti, pavimenti, infissi e finiture. Prima di iniziare mettiamo nero su bianco cosa facciamo, quanto costa e quando finiamo.",
    ],
    image: { src: "/images/sos/cantiere.webp", alt: "Foto di repertorio: lavori in corso in un appartamento", demo: true },
  },

  about: {
    title: "Chi siamo",
    lead: "Un'impresa edile napoletana che fa il suo mestiere: costruire bene.",
    paragraphs: [
      "SOS Casa ha sede in Via Michele Pietravalle, in zona Colli Aminei, a due passi dall'Ospedale Cardarelli. Lavoriamo soprattutto tra Arenella, Vomero, Colli Aminei e Capodimonte.",
      "Il nome dice cosa facciamo: quando la casa ha bisogno di essere rifatta o sistemata, ci prendiamo cura di tutto. Ristrutturazioni, impianti idraulici ed elettrici, pavimenti, infissi, controsoffitti e opere murarie.",
      "Siamo un'impresa edile: non montiamo mobili e non improvvisiamo. Preferiamo fare bene il nostro lavoro e dirti con chiarezza cosa possiamo fare per te.",
      "[DA CONFERMARE con il titolare: anno di nascita dell'impresa, nome e ruolo del titolare, composizione della squadra.]",
    ],
    image: { src: "/images/sos/chi-siamo.webp", alt: "Foto di repertorio: attrezzi e mani al lavoro in cantiere", demo: true },
    values: [
      { title: "Un solo referente", text: "Una persona segue il tuo cantiere, risponde al telefono e ti aggiorna in ogni fase.", icon: "message" },
      { title: "Preventivo voce per voce", text: "Sai cosa paghi e perché, prima che inizino i lavori.", icon: "clipboard" },
      { title: "Tempi e costi rispettati", text: "Un programma condiviso all'inizio: è quello che i clienti ci riconoscono nelle recensioni.", icon: "clock" },
    ],
  },

  method: {
    title: "Come lavoriamo",
    intro: "Quattro passaggi chiari. Sai sempre a che punto è la tua casa.",
    steps: [
      { title: "Ci sentiamo", description: "Chiami o scrivi su WhatsApp e ci racconti cosa vuoi fare. Bastano pochi minuti per capire il lavoro e fissare un appuntamento.", icon: "phone" },
      { title: "Sopralluogo e preventivo", description: "Veniamo a vedere la casa, prendiamo le misure e ascoltiamo le tue idee. Poi ricevi un preventivo voce per voce.", icon: "ruler" },
      { title: "Scelte e programma", description: "Scegliamo insieme materiali e finiture e fissiamo il cronoprogramma: inizio, fasi e fine prevista.", icon: "clipboard" },
      { title: "Cantiere e consegna", description: "Lavoriamo secondo il programma con un referente sempre raggiungibile. A fine lavori facciamo insieme il giro della casa.", icon: "key" },
    ],
  },

  beforeAfter: {
    title: "Prima e dopo",
    intro: "Trascina il cursore per confrontare lo stato iniziale e il risultato finale.",
    items: [
      {
        label: "Dal cantiere alla casa finita",
        before: { src: "/images/sos/prima.webp", alt: "Foto di repertorio: ambiente prima dei lavori", demo: true },
        after: { src: "/images/sos/dopo.webp", alt: "Foto di repertorio: ambiente dopo i lavori", demo: true },
        caption: "Due foto di repertorio di ambienti diversi, non un lavoro di SOS Casa. Qui andrà il prima e dopo di un vostro cantiere.",
        demo: true,
      },
    ],
  },

  reviewsSummary: {
    rating: 4.6,
    count: 13,
    sourceName: "Google",
    url: "https://maps.google.com/?cid=14159497404732937523",
    checkedAt: "2026-11-20",
  },

  cta: {
    title: "La tua casa ha bisogno di un SOS?\nParliamone.",
    text: "Raccontaci cosa vuoi fare, anche solo un'idea. Ti richiamiamo, capiamo il lavoro e, se serve, fissiamo un sopralluogo.",
  },

  social: { instagram: "", facebook: "https://www.facebook.com/soscasaristruttura/", linkedin: "", youtube: "", tiktok: "" },

  seo: {
    defaultTitle: "SOS Casa — Ristrutturazioni a Napoli, Colli Aminei e Arenella",
    titleTemplate: "%s | SOS Casa Napoli",
    description:
      "Impresa edile a Napoli (Colli Aminei, Arenella, Vomero): ristrutturazione appartamenti e bagni, impianti, pavimenti, infissi e controsoffitti. Preventivo voce per voce.",
    keywords: [
      "ristrutturazioni Napoli",
      "impresa edile Colli Aminei",
      "ristrutturazione appartamento Arenella",
      "ristrutturazione bagno Vomero",
      "impresa ristrutturazioni Napoli nord",
    ],
    businessType: "GeneralContractor",
  },

  legal: {
    privacyPolicyUrl: "",
    cookiePolicyUrl: "",
    privacySections: [],
    cookieSections: [],
    usesTrackingCookies: false,
  },

  features: {
    testimonials: true,
    beforeAfter: true,
    threeD: false,
    quoteForm: true,
    floatingWhatsapp: true,
    mobileStickyCta: true,
  },

  threeD: { modelUrl: "", title: "", caption: "" },

  leads: { adapter: "whatsapp", endpointUrl: "" },
} satisfies SiteConfigInput;
