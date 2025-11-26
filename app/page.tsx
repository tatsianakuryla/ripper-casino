import type { JSX } from 'react';

import { BonusDetailsSection } from '@/components/sections/BonusDetails/BonusDetailsSection';
import { CowboysCasinoAdvantagesSection } from '@/components/sections/CowboysCasinoAdvantages/CowboysCasinoAdvantagesSection';
import { CowboysCasinoLoginSection } from '@/components/sections/CowboysCasinoLogin/CowboysCasinoLoginSection';
import { DallasCasinoSection } from '@/components/sections/DallasCasino/DallasCasinoSection';
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
    </main>
  );
}
