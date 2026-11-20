import Image from "next/image";
import { cn } from "@/lib/utils";

export type LogoData = { name: string; logo: string; logoLight: string };

/**
 * Logo SOS Casa (versione DEMO): marchio ricostruito in vettoriale ispirandosi
 * al logo pubblicato dall'impresa (tetto con comignolo, "S" in verde).
 * Da sostituire con il file originale fornito dal titolare (branding.logo).
 */
export function Logo({ data, tone, className }: { data: LogoData; tone: "light" | "dark"; className?: string }) {
  const src = tone === "light" ? data.logoLight || data.logo : data.logo || data.logoLight;
  if (src) {
    return <Image src={src} alt={data.name} width={180} height={48} className={cn("h-9 w-auto sm:h-10", className)} priority />;
  }
  const ink = tone === "light" ? "text-paper" : "text-charcoal";
  return (
    <span className={cn("flex items-end gap-2.5 leading-none", ink, className)} aria-label={data.name} role="img">
      <svg viewBox="0 0 44 36" className="h-9 w-auto shrink-0 sm:h-10" aria-hidden>
        <path d="M4 20 L22 5 L40 20" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M31 12.5 V5.5 h4.5 V16.3" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinejoin="round" />
        <rect x="9" y="25" width="6" height="6" className="fill-champagne" />
        <rect x="16" y="25" width="6" height="6" fill="currentColor" opacity="0.85" />
        <rect x="23" y="25" width="6" height="6" className="fill-champagne" />
        <rect x="30" y="25" width="6" height="6" fill="currentColor" opacity="0.85" />
      </svg>
      <span className="flex flex-col" aria-hidden>
        <span className="font-display text-[1.55rem] font-medium tracking-[0.01em] sm:text-[1.7rem]">
          <span className="text-champagne">S</span>O<span className="text-champagne">S</span> Ca<span className="text-champagne">s</span>a
        </span>
        <span className="mt-1 text-[0.52rem] font-semibold opacity-70">ristrutturare</span>
      </span>
    </span>
  );
}
