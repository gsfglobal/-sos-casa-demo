import { HeroSos } from "@/components/sos/HeroSos";
import { ServicesIndex } from "@/components/sos/ServicesIndex";
import { CallSos, MethodSos, ReviewsSos, TrustBand, ZonaSos } from "@/components/sos/Sections";
import { BeforeAfterSection } from "@/components/home/BeforeAfterSection";
import { getServices, site } from "@/lib/content";
import { phoneHref, whatsappNumber } from "@/lib/contact";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ path: "/" });

export default function HomePage() {
  const rows = getServices().map((s) => ({ slug: s.slug, title: s.title, excerpt: s.excerpt, image: { src: s.image.src, alt: s.image.alt } }));
  return (
    <>
      <HeroSos whatsappNumber={whatsappNumber ?? ""} phoneHref={phoneHref} phoneLabel={site.contact.phone} />
      <TrustBand />
      <ServicesIndex rows={rows} />
      <MethodSos />
      <BeforeAfterSection />
      <ReviewsSos />
      <ZonaSos />
      <CallSos />
    </>
  );
}
