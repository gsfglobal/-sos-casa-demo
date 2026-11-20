"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useRef, useState } from "react";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { WhatsappIcon } from "@/components/ui/WhatsappIcon";
import { problems } from "./problems";

/**
 * Hero dedicata SOS Casa: il visitatore sceglie il "SOS" della sua casa
 * e vede subito come lo risolviamo, con il messaggio WhatsApp già pronto.
 */
export function HeroSos({ whatsappNumber, phoneHref, phoneLabel }: { whatsappNumber: string; phoneHref: string | null; phoneLabel: string }) {
  const first = problems[0]!;
  const [active, setActive] = useState(first.id);
  const current = problems.find((p) => p.id === active) ?? first;
  const answerId = useId();
  const panel = useRef<HTMLDivElement>(null);
  const choose = (id: string) => {
    setActive(id);
    // Su mobile la risposta è sotto l'elenco: la portiamo in vista
    if (window.innerWidth < 1024) {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      requestAnimationFrame(() => panel.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" }));
    }
  };
  const waHref = whatsappNumber ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(current.whatsapp)}` : null;

  return (
    <section className="relative bg-charcoal text-paper">
      <div className="grid lg:min-h-[100svh] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
        {/* Colonna testo */}
        <div className="flex flex-col justify-end px-5 pt-36 pb-12 sm:px-8 lg:px-12 lg:pt-40 lg:pb-16 xl:pl-[max(3rem,calc((100vw-1440px)/2+3rem))]">
          <h1 className="text-[clamp(2.2rem,11vw,3rem)] leading-[0.9] sm:text-7xl lg:text-[4.4rem] xl:text-[5.3rem] 2xl:text-[6rem]" style={{ fontStretch: "125%", fontWeight: 800 }}>
            <span className="block overflow-hidden pb-[0.06em]">
              <span className="block animate-reveal-line [animation-delay:150ms]">Che SOS ha</span>
            </span>
            <span className="block overflow-hidden pb-[0.06em]">
              <span className="block animate-reveal-line [animation-delay:300ms]">la tua casa?</span>
            </span>
          </h1>
          <p className="mt-6 max-w-md animate-fade-up text-lg text-paper/75 [animation-delay:650ms]">
            Scegli il problema: ti diciamo come lo risolviamo. Siamo un&apos;impresa edile ai Colli Aminei, a Napoli.
          </p>

          <div role="group" aria-label="Che lavoro ti serve?" aria-describedby={answerId} className="mt-10 animate-fade-up border-t border-paper/15 [animation-delay:800ms]">
            {problems.map((p) => {
              const on = p.id === active;
              return (
                <button
                  key={p.id}
                  type="button"
                  aria-pressed={on}
                  onClick={() => choose(p.id)}
                  className={cn(
                    "group flex w-full items-center justify-between gap-4 border-b border-paper/15 py-3.5 text-left transition-colors duration-300 sm:py-4",
                    on ? "text-champagne" : "text-paper/80 hover:text-paper",
                  )}
                >
                  <span className="text-xl font-semibold sm:text-2xl" style={{ fontStretch: "110%" }}>{p.label}</span>
                  <span
                    aria-hidden
                    className={cn(
                      "grid size-7 shrink-0 place-items-center rounded-full border transition-all duration-300",
                      on ? "border-champagne bg-champagne" : "border-paper/30 group-hover:border-paper/70",
                    )}
                  >
                    <span className={cn("size-2 rounded-full transition-colors", on ? "bg-charcoal" : "bg-transparent")} />
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Colonna foto + risposta */}
        <div ref={panel} className="relative min-h-[34rem] scroll-mt-24 overflow-hidden lg:min-h-0">
          {problems.map((p, i) => (
            <Image
              key={p.id}
              src={p.image.src}
              alt={p.image.alt}
              fill
              priority={i === 0}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className={cn(
                "object-cover transition-[opacity,transform] duration-700 ease-(--ease-luxe)",
                p.id === active ? "scale-100 opacity-100" : "scale-[1.04] opacity-0",
              )}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" aria-hidden />
          <div className="absolute inset-x-0 top-0 hidden h-48 bg-gradient-to-b from-charcoal/75 to-transparent lg:block" aria-hidden />
          <span className="absolute top-4 right-4 rounded-full bg-charcoal/60 px-3 py-1 text-xs text-paper/85 backdrop-blur-sm lg:top-32">
            Foto di repertorio
          </span>

          <div id={answerId} aria-live="polite" className="absolute inset-x-4 bottom-4 bg-ivory p-6 text-charcoal sm:inset-x-8 sm:bottom-8 sm:p-8 lg:right-auto lg:max-w-[30rem]">
            <p className="text-sm font-semibold text-emerald-deep">{current.serviceTitle}</p>
            <p className="mt-2 text-lg leading-snug">{current.answer}</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              {waHref ? (
                <a href={waHref} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2.5 rounded-full bg-charcoal px-6 font-semibold text-paper transition-colors hover:bg-emerald-deep">
                  <WhatsappIcon className="size-5" />
                  Scrivici su WhatsApp
                </a>
              ) : phoneHref ? (
                <a href={phoneHref} className="inline-flex min-h-12 items-center gap-2.5 rounded-full bg-charcoal px-6 font-semibold text-paper">
                  <Phone className="size-4" /> Chiama {phoneLabel}
                </a>
              ) : null}
              <Link href={`/servizi/${current.service}`} className="font-semibold underline decoration-charcoal/30 underline-offset-[6px] hover:decoration-charcoal">
                Come lavoriamo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
