import { Archivo } from "next/font/google";

/*
 * Tema dedicato SOS Casa: una sola famiglia, Archivo (variabile in peso e larghezza).
 * I titoli usano la versione larga e pesante, come le scritte da cantiere;
 * i testi la larghezza normale.
 */
const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  weight: "variable",
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
  preload: true,
});

export const fontVariables = archivo.variable;
export const fontStack = {
  heading: "var(--font-archivo)",
  body: "var(--font-archivo)",
};
