import type { JSX } from 'react';

import { HeroSection } from '@/components/sections/Hero/HeroSection';
import { WelcomeSection } from '@/components/sections/Welcome/WelcomeSection';

export default function HomePage(): JSX.Element {
  return (
    <main className="font-display">
      <WelcomeSection />
      <HeroSection />
    </main>
  );
}
