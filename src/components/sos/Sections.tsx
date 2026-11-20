import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Star } from "lucide-react";
import { WhatsappIcon } from "@/components/ui/WhatsappIcon";
import { getTestimonials, site } from "@/lib/content";
import { formattedAddress, phoneHref, whatsappHref } from "@/lib/contact";

const checked = site.reviewsSummary
  ? new Date(site.reviewsSummary.checkedAt).toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" })
  : "";

/** Fascia color tufo: le tre cose che un cliente vuole sapere subito. */
export function TrustBand() {
  const r = site.reviewsSummary;
  return (
    <section className="bg-tufo text-charcoal">
      <div className="container-x grid gap-8 py-10 sm:grid-cols-3 sm:gap-10 lg:py-12">
        {r && (
          <a href={r.url} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4">
            <Star className="mt-1 size-6 shrink-0 fill-emerald-deep text-emerald-deep" aria-hidden />
            <span>
              <span className="block text-xl font-bold" style={{ fontStretch: "110%" }}>
                {r.rating.toLocaleString("it-IT")} su 5 su {r.sourceName}
              </span>
              <span className="mt-1 block text-sm text-charcoal/70 group-hover:underline">
                {r.count} recensioni, dato del {checked}
              </span>
            </span>
          </a>
        )}
        <div className="flex items-start gap-4">
          <MapPin className="mt-1 size-6 shrink-0 text-emerald-deep" aria-hidden />
          <span>
            <span className="block text-xl font-bold" style={{ fontStretch: "110%" }}>Ai Colli Aminei</span>
            <span className="mt-1 block text-sm text-charcoal/70">{formattedAddress()}, di fronte al Cardarelli</span>
          </span>
        </div>
        <div className="flex items-start gap-4">
          <Phone className="mt-1 size-6 shrink-0 text-emerald-deep" aria-hidden />
          <span>
            <span className="block text-xl font-bold" style={{ fontStretch: "110%" }}>Un solo referente</span>
            <span className="mt-1 block text-sm text-charcoal/70">Dal sopralluogo alla consegna delle chiavi</span>
          </span>
        </div>
      </div>
    </section>
  );
}

/** Il metodo: è davvero una sequenza, quindi i passaggi sono numerati. */
export function MethodSos() {
  const steps = site.method.steps;
  return (
    <section className="bg-charcoal py-24 text-paper sm:py-32">
      <div className="container-x">
        <h2 className="display-2 max-w-3xl">{site.method.title}: sai sempre a che punto è la tua casa</h2>
        <ol className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="border-t border-paper/20 pt-6">
              <span className="block text-6xl leading-none text-champagne" style={{ fontStretch: "125%", fontWeight: 800 }} aria-hidden>
                {i + 1}
              </span>
              <h3 className="mt-6 text-2xl" style={{ fontStretch: "110%" }}>{s.title}</h3>
              <p className="mt-3 text-paper/70">{s.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** Recensioni reali: una grande, le altre a lato. */
export function ReviewsSos() {
  const list = getTestimonials();
  const r = site.reviewsSummary;
  const [first, ...rest] = list;
  if (!first) return null;
  return (
    <section className="py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="display-2">Cosa scrivono i clienti</h2>
          {r && (
            <a href={r.url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold underline decoration-charcoal/30 underline-offset-[6px] hover:decoration-charcoal">
              Leggi tutte le {r.count} recensioni su Google
            </a>
          )}
        </div>
        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-20">
          <figure>
            <blockquote className="text-3xl leading-[1.15] sm:text-4xl lg:text-[2.9rem]" style={{ fontStretch: "105%", fontWeight: 600 }}>
              “{first.text}”
            </blockquote>
            <figcaption className="mt-6 text-sm text-stone">
              {first.authorized ? first.author : "Cliente privato"}, recensione {first.source.name} a 5 stelle
            </figcaption>
          </figure>
          <div className="space-y-10 lg:border-l lg:border-charcoal/15 lg:pl-12">
            {rest.map((t) => (
              <figure key={t.text}>
                <blockquote className="text-lg leading-relaxed">“{t.text}”</blockquote>
                <figcaption className="mt-3 text-sm text-stone">
                  {t.authorized ? t.author : "Cliente privato"}, recensione {t.source.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Dove siamo: Napoli in foto, orari e quartieri. */
export function ZonaSos() {
  return (
    <section className="relative isolate overflow-hidden text-paper">
      <Image src="/images/sos/napoli.webp" alt="Foto di repertorio: veduta di Napoli" fill sizes="100vw" className="-z-10 object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-charcoal/90 via-charcoal/65 to-charcoal/45" aria-hidden />
      <div className="container-x grid gap-12 py-24 sm:py-32 lg:grid-cols-2">
        <div>
          <h2 className="display-2 max-w-xl">Siamo ai Colli Aminei, di fronte al Cardarelli</h2>
          <p className="mt-6 max-w-md text-lg text-paper/80">
            Lavoriamo soprattutto tra Arenella, Vomero, Colli Aminei e Capodimonte. Chiamaci e ti diciamo subito se arriviamo anche da te.
          </p>
          {site.contact.mapsUrl && (
            <a href={site.contact.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-12 items-center gap-2.5 rounded-full border border-paper/40 px-6 font-semibold transition-colors hover:bg-paper hover:text-charcoal">
              <MapPin className="size-4" aria-hidden /> Apri in Google Maps
            </a>
          )}
        </div>
        {site.contact.openingHours.length > 0 && (
          <div className="self-end bg-charcoal/70 p-6 backdrop-blur-sm sm:p-8 lg:justify-self-end">
            <h3 className="text-xl" style={{ fontStretch: "110%" }}>Orari</h3>
            <ul className="mt-4 min-w-[18rem] divide-y divide-paper/15 border-y border-paper/15">
              {site.contact.openingHours.map((h) => (
                <li key={h} className="py-2.5 text-paper/85">{h}</li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-paper/60">Orari della scheda Google</p>
          </div>
        )}
      </div>
    </section>
  );
}

/** Chiusura: il numero di telefono è l'elemento grafico. */
export function CallSos() {
  const wa = whatsappHref();
  const label = site.contact.phone.replace("+39 ", "");
  return (
    <section className="py-24 sm:py-32">
      <div className="container-x">
        <h2 className="max-w-2xl text-2xl sm:text-3xl" style={{ fontStretch: "110%" }}>
          Hai un SOS in casa? Raccontacelo: ti richiamiamo e, se serve, veniamo a vedere.
        </h2>
        {phoneHref && (
          <a
            href={phoneHref}
            className="mt-8 block text-[clamp(2.8rem,11vw,10rem)] leading-[0.9] text-charcoal transition-colors hover:text-emerald-deep"
            style={{ fontStretch: "125%", fontWeight: 800, letterSpacing: "-0.04em" }}
            aria-label={`Chiama ${label}`}
          >
            {label}
          </a>
        )}
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          {wa && (
            <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2.5 rounded-full bg-champagne px-6 font-semibold text-charcoal transition-colors hover:bg-charcoal hover:text-paper">
              <WhatsappIcon className="size-5" /> Scrivici su WhatsApp
            </a>
          )}
          <Link href="/contatti" className="font-semibold underline decoration-charcoal/30 underline-offset-[6px] hover:decoration-charcoal">
            Oppure compila il modulo
          </Link>
        </div>
      </div>
    </section>
  );
}
