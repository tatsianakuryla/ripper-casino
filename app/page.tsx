import type { JSX } from 'react';

import { BonusDetailsSection } from '@/components/sections/BonusDetails/BonusDetailsSection';
import { CowboysCasinoAdvantagesSection } from '@/components/sections/CowboysCasinoAdvantages/CowboysCasinoAdvantagesSection';
import { CowboysCasinoBonusesPromotionsSection } from '@/components/sections/CowboysCasinoBonusesPromotions/CowboysCasinoBonusesPromotionsSection';
import { CowboysCasinoGamesSection } from '@/components/sections/CowboysCasinoGames/CowboysCasinoGamesSection';
import { CowboysCasinoLoginSection } from '@/components/sections/CowboysCasinoLogin/CowboysCasinoLoginSection';
import { CowboysCasinoSupportSection } from '@/components/sections/CowboysCasinoSupport/CowboysCasinoSupportSection';
import { DallasCasinoSection } from '@/components/sections/DallasCasino/DallasCasinoSection';
import { FAQSection } from '@/components/sections/FAQ/FAQSection';
import { HeroSection } from '@/components/sections/Hero/HeroSection';
import { TopCasinosSection } from '@/components/sections/TopCasinos/TopCasinosSection';
import { TopGamesSection } from '@/components/sections/TopGames/TopGamesSection';
import { WelcomeSection } from '@/components/sections/Welcome/WelcomeSection';
import { Zen8Section } from '@/components/sections/Zen8/Zen8Section';

export default function HomePage(): JSX.Element {
  return (
    <main className="font-display">
      <WelcomeSection />
      <HeroSection />
      <TopCasinosSection />
      <BonusDetailsSection />
      <DallasCasinoSection />
      <TopGamesSection />
      <CowboysCasinoAdvantagesSection />
      <CowboysCasinoLoginSection />
      <Zen8Section />
      <FAQSection />
      <CowboysCasinoGamesSection />
      <CowboysCasinoSupportSection />
      <CowboysCasinoBonusesPromotionsSection />
    </main>
  );
}
