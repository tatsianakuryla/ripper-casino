import type { JSX } from 'react';

import { BonusDetailsSection } from '@/components/sections/BonusDetails/BonusDetailsSection';
import { HeroSection } from '@/components/sections/Hero/HeroSection';
import { TopCasinosSection } from '@/components/sections/TopCasinos/TopCasinosSection';
import { WelcomeSection } from '@/components/sections/Welcome/WelcomeSection';

export default function HomePage(): JSX.Element {
  return (
    <main className="font-display">
      <WelcomeSection />
      <HeroSection />
      <TopCasinosSection />
      <BonusDetailsSection />
    </main>
  );
}
