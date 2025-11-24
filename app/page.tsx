import type { JSX } from 'react';

import { EmptyPage } from '@/components/ui/EmptyPage';

export default function HomePage(): JSX.Element {
  return (
    <main>
      <EmptyPage title="Home page" />
    </main>
  );
}
