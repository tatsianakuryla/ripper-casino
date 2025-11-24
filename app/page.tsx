import type { JSX } from 'react';

import { WelcomeSection } from '@/components/sections/Welcome/WelcomeSection';

export default function HomePage(): JSX.Element {
  return (
    <main>
      <WelcomeSection />
    </main>
  );
}
