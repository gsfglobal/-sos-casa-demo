"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

export type ServiceRow = { slug: string; title: string; excerpt: string; image: { src: string; alt: string } };

/**
 * Indice dei servizi: a sinistra una foto fissa che cambia con la riga
 * su cui passi (o che selezioni da tastiera); su mobile ogni riga ha la sua foto.
 */
export function ServicesIndex({ rows }: { rows: ServiceRow[] }) {
  const [active, setActive] = useState(rows[0]?.slug);
  if (!rows.length) return null;

  return (
    <section className="py-24 sm:py-32">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
          <h2 className="display-2 max-w-xl">Dalla singola stanza alla casa intera</h2>
          <p className="max-w-lg self-end text-lg text-stone">
            Facciamo noi tutte le lavorazioni e le coordiniamo in un solo cantiere. Tu parli con una persona sola, dall&apos;inizio alla fine.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
          <div className="relative hidden lg:block">
            <div className="sticky top-28 aspect-[4/5] overflow-hidden">
              {rows.map((r) => (
                <Image
                  key={r.slug}
                  src={r.image.src}
                  alt={r.image.alt}
                  fill
                  sizes="40vw"
                  className={cn("object-cover transition-opacity duration-500", r.slug === active ? "opacity-100" : "opacity-0")}
                />
              ))}
              <span className="absolute bottom-3 left-3 rounded-full bg-charcoal/60 px-3 py-1 text-xs text-paper/85 backdrop-blur-sm">Foto di repertorio</span>
            </div>
          </div>

          <ul className="border-t border-charcoal/15">
            {rows.map((r) => (
              <li key={r.slug} className="border-b border-charcoal/15">
                <Link
                  href={`/servizi/${r.slug}`}
                  onMouseEnter={() => setActive(r.slug)}
                  onFocus={() => setActive(r.slug)}
                  className="group grid grid-cols-[5.5rem_minmax(0,1fr)] items-start gap-5 py-7 sm:grid-cols-[7rem_minmax(0,1fr)] lg:grid-cols-1 lg:py-9"
                >
                  <span className="relative aspect-square overflow-hidden lg:hidden">
                    <Image src={r.image.src} alt="" fill sizes="7rem" className="object-cover" />
                  </span>
                  <span>
                    <span
                      className={cn(
                        "flex items-baseline justify-between gap-4 text-2xl font-bold transition-colors sm:text-3xl lg:text-[2.4rem] lg:leading-[1.05]",
                        r.slug === active ? "lg:text-emerald-deep" : "",
                      )}
                      style={{ fontStretch: "112%" }}
                    >
                      {r.title}
                      <span aria-hidden className="hidden text-2xl transition-transform group-hover:translate-x-1 lg:inline">↗</span>
                    </span>
                    <span className="mt-3 block max-w-xl text-stone">{r.excerpt}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
