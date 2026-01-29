import { HeroSection } from '@/components/sections/hero';
import { FeatureSection } from '@/components/sections/features';
import { SecuritySection } from '@/components/sections/security';
import { CtaSection } from '@/components/sections/cta';
import { SiteFooter } from '@/components/sections/footer';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeatureSection />
      <SecuritySection />
      <CtaSection />
      <SiteFooter />
    </div>
  );
}
