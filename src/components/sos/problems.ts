/**
 * I "SOS" della casa: ogni problema porta al servizio che lo risolve.
 * Le foto in /images/sos sono foto di repertorio con licenza libera
 * (crediti in /public/images/sos/CREDITI.md), non lavori di SOS Casa.
 */
export type Problem = {
  id: string;
  label: string;
  answer: string;
  service: string;
  serviceTitle: string;
  image: { src: string; alt: string };
  whatsapp: string;
};

export const problems: Problem[] = [
  {
    id: "casa",
    label: "Tutta la casa va rifatta",
    answer:
      "Ci occupiamo noi di tutto: opere murarie, impianti, pavimenti, infissi e finiture, coordinati in un solo cantiere. Prima di iniziare ricevi un preventivo voce per voce e il programma dei lavori.",
    service: "ristrutturazione-appartamenti",
    serviceTitle: "Ristrutturazione appartamenti",
    image: { src: "/images/sos/appartamento.webp", alt: "Foto di repertorio: zona giorno open space con cucina bianca e parquet a spina di pesce" },
    whatsapp: "Buongiorno SOS Casa, devo ristrutturare casa. Possiamo fissare un sopralluogo?",
  },
  {
    id: "bagno",
    label: "Il bagno è da rifare",
    answer:
      "Lo rifacciamo da zero, impianti compresi: scarichi, impermeabilizzazione, rivestimenti e sanitari. Ti diciamo prima quanto spendi e per quanti giorni resti senza bagno.",
    service: "ristrutturazione-bagni",
    serviceTitle: "Ristrutturazione bagni",
    image: { src: "/images/sos/bagno.webp", alt: "Foto di repertorio: bagno effetto marmo con doccia walk-in e rubinetteria nera" },
    whatsapp: "Buongiorno SOS Casa, vorrei rifare il bagno. Possiamo fissare un sopralluogo?",
  },
  {
    id: "impianti",
    label: "Gli impianti sono vecchi",
    answer:
      "Rifacciamo l'impianto elettrico e quello idraulico prima delle finiture, così non dovrai rompere pavimenti nuovi dopo. Interveniamo anche per riparazioni.",
    service: "impianti-idraulici-ed-elettrici",
    serviceTitle: "Impianti idraulici ed elettrici",
    image: { src: "/images/sos/impianti.webp", alt: "Foto di repertorio: elettricista che collega le prese a parete" },
    whatsapp: "Buongiorno SOS Casa, ho bisogno di un intervento sugli impianti di casa. Possiamo sentirci?",
  },
  {
    id: "pavimenti",
    label: "Il pavimento è rovinato",
    answer:
      "Ti aiutiamo a scegliere materiale e formato, prepariamo il fondo e posiamo con tagli e fughe curati. Quando si può, posiamo sopra il pavimento esistente.",
    service: "pavimenti-e-rivestimenti",
    serviceTitle: "Pavimenti e rivestimenti",
    image: { src: "/images/sos/pavimenti.webp", alt: "Foto di repertorio: posa di piastrelle in gres con distanziatori" },
    whatsapp: "Buongiorno SOS Casa, vorrei rifare il pavimento. Possiamo fissare un sopralluogo?",
  },
  {
    id: "infissi",
    label: "Dalle finestre entra freddo",
    answer:
      "Sostituiamo gli infissi con nuovi in PVC e sistemiamo il vano intorno. Montiamo anche tapparelle motorizzate e zanzariere su misura.",
    service: "infissi-tapparelle-zanzariere",
    serviceTitle: "Infissi, tapparelle e zanzariere",
    image: { src: "/images/sos/infissi.webp", alt: "Foto di repertorio: finestra nuova appena montata in una stanza in ristrutturazione" },
    whatsapp: "Buongiorno SOS Casa, vorrei cambiare gli infissi. Possiamo sentirci?",
  },
  {
    id: "spazi",
    label: "Vorrei ridisegnare una stanza",
    answer:
      "Con cartongesso e controsoffitti dividiamo ambienti, creiamo nicchie e cabine armadio e disegniamo la luce, senza opere pesanti.",
    service: "cartongesso-e-controsoffitti",
    serviceTitle: "Cartongesso e controsoffitti",
    image: { src: "/images/sos/cartongesso.webp", alt: "Foto di repertorio: finitura di un controsoffitto in cartongesso" },
    whatsapp: "Buongiorno SOS Casa, vorrei ridisegnare una stanza con cartongesso o controsoffitto. Possiamo sentirci?",
  },
];
