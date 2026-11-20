/** Loader per l'export statico: aggiunge il basePath e serve il file originale (già ottimizzato in WebP). */
export default function staticImageLoader({ src, width }: { src: string; width: number; quality?: number }) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const url = src.startsWith("/") ? `${base}${src}` : src;
  return width ? `${url}?w=${width}` : url;
}
