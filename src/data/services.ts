import type { z } from "zod";
import type { serviceSchema } from "@/config/schema";

type ServiceInput = z.input<typeof serviceSchema>;

/**
 * Servizi di SOS Casa.
 * Fonte: bio e post della pagina Facebook dell'impresa (idraulica, elettrico,
 * infissi, pavimentazione, controsoffitti, muri, ristrutturazioni) e recensioni Google.
 * contentReviewed resta false finché il titolare non conferma i testi.
 */
// Foto di repertorio con licenza libera (crediti in /public/images/sos/CREDITI.md).
// demo: true finché non arrivano le foto dei lavori di SOS Casa.
const img = (name: string, alt: string, n = "") => ({
  src: `/images/sos/${name}${n}.webp`,
  alt: `Foto di repertorio: ${alt}`,
  demo: true,
});

export const services: ServiceInput[] = [
  {
    slug: "ristrutturazione-appartamenti",
    title: "Ristrutturazione appartamenti chiavi in mano",
    shortTitle: "Appartamenti",
    excerpt: "Casa comprata o di famiglia da rifare? Ce ne occupiamo dall'inizio alla fine, con un solo referente e un piano chiaro.",
    heroTitle: "Ristrutturazione di appartamenti a Napoli, chiavi in mano",
    description: [
      "Ristrutturare un appartamento a Napoli significa mettere d'accordo muratori, idraulici, elettricisti, posatori e spesso un intero condominio. Noi ti togliamo questo pensiero: coordiniamo tutte le lavorazioni in un unico cantiere, con un ordine preciso e un cronoprogramma condiviso.",
      "Partiamo da un sopralluogo e da un preventivo voce per voce, così sai cosa paghi e perché. Durante i lavori hai un referente che risponde al telefono e ti aggiorna. Alla fine ricevi una casa pulita e pronta da arredare, non un cantiere da chiudere.",
      "Facciamo ristrutturazioni parziali e complete: dalla zona giorno da ridisegnare alla casa intera, cucina compresa per la parte di impianti, pareti e pavimenti.",
    ],
    image: img("appartamento", "zona giorno open space con cucina bianca e parquet"),
    gallery: [img("appartamento", "cucina aperta con penisola in pietra", "-2")],
    benefits: [
      { title: "Sopralluogo e preventivo", text: "Rilievo in casa e preventivo dettagliato voce per voce." },
      { title: "Opere murarie", text: "Demolizioni, tramezzi, massetti, intonaci e rasature." },
      { title: "Impianti e finiture", text: "Rifacimento degli impianti, pavimenti, rivestimenti e tinteggiatura." },
      { title: "Un solo referente", text: "Coordinamento di tutte le lavorazioni con un cronoprogramma condiviso." },
    ],
    faqs: [
      { question: "Quanto costa ristrutturare un appartamento a Napoli?", answer: "Dipende da metratura, stato degli impianti e materiali scelti. Per questo non diamo prezzi al metro quadro a occhio: dopo il sopralluogo ricevi un preventivo dettagliato voce per voce." },
      { question: "Quanto durano i lavori?", answer: "Ogni casa è diversa. I tempi li stabiliamo insieme prima di iniziare e li scriviamo nel cronoprogramma, così sai quando potrai rientrare." },
      { question: "Rifate anche la cucina?", answer: "Sì, per la parte edile: impianti, pareti, pavimenti e rivestimenti. I mobili li monta il tuo rivenditore: siamo un'impresa edile e ci coordiniamo volentieri con lui." },
    ],
    seo: {
      title: "Ristrutturazione appartamenti a Napoli chiavi in mano",
      description: "Ristrutturazione di appartamenti a Napoli (Colli Aminei, Arenella, Vomero): opere murarie, impianti e finiture con un solo referente e preventivo voce per voce.",
    },
    enabled: true,
    contentReviewed: false,
  },
  {
    slug: "ristrutturazione-bagni",
    title: "Ristrutturazione bagni",
    shortTitle: "Bagni",
    excerpt: "Il bagno si rifà da zero, impianti compresi: è la stanza dove gli errori si pagano di più.",
    heroTitle: "Ristrutturazione bagni a Napoli, impianti compresi",
    description: [
      "Un bagno nuovo non è solo questione di piastrelle: sotto ci sono tubi, scarichi e impermeabilizzazioni che, se fatti male, presentano il conto dopo pochi anni, magari al vicino del piano di sotto.",
      "Per questo partiamo dalla base: smontiamo, controlliamo e rifacciamo gli impianti, poi passiamo a massetto, rivestimenti, sanitari e finiture. Sfruttiamo al meglio anche i bagni piccoli e ciechi, tipici di tante case napoletane, con docce a filo pavimento, sanitari sospesi e nicchie a muro.",
    ],
    image: img("bagno", "bagno effetto marmo con doccia walk-in"),
    gallery: [img("bagno", "bagno bianco effetto marmo con sanitari sospesi", "-2")],
    benefits: [
      { title: "Demolizione e smaltimento", text: "Rimozione del vecchio bagno e pulizia del cantiere." },
      { title: "Impianti nuovi", text: "Rifacimento di adduzioni, scarichi e punti elettrici del bagno." },
      { title: "Impermeabilizzazione", text: "Zone doccia protette prima della posa dei rivestimenti." },
      { title: "Sanitari e rubinetteria", text: "Montaggio di sanitari, piatto doccia o vasca e box doccia." },
    ],
    faqs: [
      { question: "Posso sostituire la vasca con una doccia?", answer: "Sì, è uno dei lavori più richiesti. Al sopralluogo verifichiamo scarichi e pendenze per capire quale soluzione è possibile nel tuo bagno." },
      { question: "Quanti giorni resto senza bagno?", answer: "Dipende dal lavoro. Te lo diciamo prima di iniziare, così puoi organizzarti." },
      { question: "I sanitari li fornite voi o li compro io?", answer: "Vanno bene tutte e due le strade: possiamo sceglierli insieme oppure li compri tu e li montiamo noi." },
    ],
    seo: {
      title: "Ristrutturazione bagno a Napoli",
      description: "Ristrutturazione bagni a Napoli, Vomero e Arenella: impianti nuovi, impermeabilizzazione, rivestimenti e sanitari. Preventivo voce per voce dopo il sopralluogo.",
    },
    enabled: true,
    contentReviewed: false,
  },
  {
    slug: "impianti-idraulici-ed-elettrici",
    title: "Impianti idraulici ed elettrici",
    shortTitle: "Impianti",
    excerpt: "La parte che non si vede e che conta di più: in una ristrutturazione seria gli impianti si rifanno per primi.",
    heroTitle: "Impianti idraulici ed elettrici a Napoli",
    description: [
      "In molti appartamenti napoletani gli impianti hanno decenni: cavi vecchi, poche prese, tubi che perdono. Rifarli durante la ristrutturazione costa molto meno che dover rompere pavimenti nuovi dopo.",
      "Progettiamo con te la posizione di prese, punti luce e attacchi in base a come vivrai la casa, poi realizziamo gli impianti sottotraccia prima delle finiture, coordinati con il resto del cantiere. Interveniamo anche per riparazioni idrauliche ed elettriche.",
    ],
    image: img("impianti", "elettricista che collega le prese a parete"),
    gallery: [img("impianti", "quadro elettrico aperto", "-2")],
    benefits: [
      { title: "Impianto elettrico", text: "Linee, quadro, prese e punti luce progettati sulla casa." },
      { title: "Impianto idrico e scarichi", text: "Rifacimento per bagno, cucina e lavanderia." },
      { title: "Predisposizioni", text: "Attacchi per condizionatori ed elettrodomestici dove servono." },
      { title: "Riparazioni", text: "Interventi su guasti idraulici ed elettrici." },
    ],
    faqs: [
      { question: "Devo rifare l'impianto elettrico se ristrutturo?", answer: "Non sempre è obbligatorio, ma se l'impianto è vecchio conviene farlo durante i lavori. Al sopralluogo ti diciamo come stanno le cose." },
      { question: "Fate anche piccole riparazioni?", answer: "Sì, interveniamo anche per riparazioni idrauliche ed elettriche. Chiamaci e valutiamo insieme il lavoro." },
    ],
    seo: {
      title: "Impianti idraulici ed elettrici a Napoli",
      description: "Rifacimento impianti elettrici e idraulici a Napoli durante la ristrutturazione, più riparazioni. Impresa edile in zona Colli Aminei e Arenella.",
    },
    enabled: true,
    contentReviewed: false,
  },
  {
    slug: "pavimenti-e-rivestimenti",
    title: "Pavimenti e rivestimenti",
    shortTitle: "Pavimenti",
    excerpt: "Il pavimento è la prima cosa che vedi entrando in casa. Ti aiutiamo a sceglierlo e lo posiamo con cura.",
    heroTitle: "Pavimenti e rivestimenti a Napoli",
    description: [
      "Gres effetto legno o marmo, grandi formati, rivestimenti per bagno e cucina: la scelta è enorme e dal catalogo è difficile capire come renderà davvero in casa. Ti aiutiamo a scegliere materiali e formati in base agli ambienti e al budget.",
      "Prepariamo il fondo, controlliamo i livelli e posiamo seguendo il disegno scelto, con fughe e tagli curati. Quando le condizioni lo consentono possiamo posare sopra il pavimento esistente, riducendo demolizioni e tempi.",
    ],
    image: img("pavimenti", "posa di piastrelle in gres"),
    gallery: [img("pavimenti", "stanza con parquet a spina di pesce", "-2")],
    benefits: [
      { title: "Consulenza sui materiali", text: "Formati, finiture e tipo di posa scelti insieme." },
      { title: "Preparazione del fondo", text: "Rimozione del vecchio pavimento, massetti e autolivellanti." },
      { title: "Posa accurata", text: "Pavimenti e rivestimenti con tagli e fughe a regola d'arte." },
      { title: "Rifiniture", text: "Battiscopa, soglie e pulizia finale." },
    ],
    faqs: [
      { question: "Si può posare il nuovo pavimento sopra quello vecchio?", answer: "A volte sì: dipende dallo stato del pavimento esistente, dagli spessori e dalle porte. Lo valutiamo al sopralluogo." },
      { question: "Mi aiutate a scegliere le piastrelle?", answer: "Sì, ti consigliamo materiali e formati adatti a ogni ambiente e ti spieghiamo come cambia la posa." },
    ],
    seo: {
      title: "Posa pavimenti e rivestimenti a Napoli",
      description: "Posa di pavimenti e rivestimenti a Napoli: scelta dei materiali, massetti, gres e grandi formati. Impresa edile in zona Colli Aminei, Arenella e Vomero.",
    },
    enabled: true,
    contentReviewed: false,
  },
  {
    slug: "infissi-tapparelle-zanzariere",
    title: "Infissi, tapparelle e zanzariere",
    shortTitle: "Infissi",
    excerpt: "Infissi in PVC, tapparelle motorizzate e zanzariere: più comfort e meno spifferi, con posa inclusa.",
    heroTitle: "Infissi, tapparelle e zanzariere a Napoli",
    description: [
      "Infissi vecchi vogliono dire spifferi, rumore e bollette più alte. Sostituiamo finestre e porte finestre con infissi in PVC e ci occupiamo della posa e delle finiture intorno al vano, così non resta nulla da sistemare.",
      "Installiamo anche tapparelle motorizzate e zanzariere su misura, da sole o insieme agli infissi nuovi, per rendere la casa più comoda tutto l'anno.",
    ],
    image: img("infissi", "finestra nuova appena montata"),
    gallery: [{ src: "/images/sos/hero-mobile.webp", alt: "Foto di repertorio: porta finestra ad arco in un salone d'epoca", demo: true }],
    benefits: [
      { title: "Infissi in PVC", text: "Finestre e porte finestre su misura, con posa inclusa." },
      { title: "Tapparelle motorizzate", text: "Motorizzazione di tapparelle nuove o esistenti." },
      { title: "Zanzariere", text: "Su misura per finestre e balconi." },
      { title: "Finiture del vano", text: "Ripristino di intonaci e tinteggiatura intorno all'infisso." },
    ],
    faqs: [
      { question: "Posso motorizzare le tapparelle che ho già?", answer: "In molti casi sì. Verifichiamo cassonetto e rullo al sopralluogo e ti diciamo se conviene motorizzare o sostituire." },
      { question: "Cambiare gli infissi richiede lavori in muratura?", answer: "Di solito sono lavori limitati al vano della finestra. Ce ne occupiamo noi, comprese le finiture." },
    ],
    seo: {
      title: "Infissi in PVC, tapparelle e zanzariere a Napoli",
      description: "Sostituzione infissi in PVC, tapparelle motorizzate e zanzariere su misura a Napoli, con posa e finiture del vano. Zona Colli Aminei, Arenella e Vomero.",
    },
    enabled: true,
    contentReviewed: false,
  },
  {
    slug: "cartongesso-e-controsoffitti",
    title: "Cartongesso e controsoffitti",
    shortTitle: "Controsoffitti",
    excerpt: "Una parete in più, un controsoffitto con luci a incasso, una nicchia dove serve: la casa cambia senza opere pesanti.",
    heroTitle: "Cartongesso e controsoffitti a Napoli",
    description: [
      "Il cartongesso è lo strumento giusto quando vuoi dividere un ambiente, creare una cabina armadio, nascondere tubi e travi o disegnare la luce con controsoffitti e velette. È veloce da montare, pulito e si integra con gli impianti: faretti e cavi passano all'interno.",
      "È qui che le soluzioni creative fanno la differenza, ed è quello che i clienti ci riconoscono. Chiudiamo il lavoro con stuccatura, rasatura e tinteggiatura, così ricevi pareti pronte da vivere.",
    ],
    image: img("cartongesso", "finitura di un controsoffitto in cartongesso"),
    gallery: [img("cartongesso", "parete in cartongesso stuccata", "-2")],
    benefits: [
      { title: "Pareti e contropareti", text: "Divisori, cabine armadio e contropareti per nascondere impianti." },
      { title: "Controsoffitti", text: "Velette, ribassi e gole per luce indiretta." },
      { title: "Nicchie e librerie", text: "Elementi su misura integrati nella parete." },
      { title: "Finitura completa", text: "Stuccatura, rasatura e tinteggiatura finale." },
    ],
    faqs: [
      { question: "Una parete in cartongesso è resistente?", answer: "Con la struttura giusta e i rinforzi dove servono sì: si possono appendere pensili e mensole, purché lo si preveda in fase di montaggio." },
      { question: "Il cartongesso isola dai rumori?", answer: "Una parete semplice isola poco. Con lana minerale e lastre specifiche le prestazioni migliorano molto: ne parliamo in base all'esigenza." },
    ],
    seo: {
      title: "Cartongesso e controsoffitti a Napoli",
      description: "Pareti in cartongesso, controsoffitti, velette e luci a incasso a Napoli. Impresa edile in zona Colli Aminei, Arenella e Vomero.",
    },
    enabled: true,
    contentReviewed: false,
  },
];
