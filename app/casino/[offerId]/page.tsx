import type { JSX } from 'react';

import { Container } from '@/components/ui/Container';
import { Loader } from '@/components/ui/Loader/Loader';

export default function CasinoPage(): JSX.Element {
  return (
    <main>
      <Container styles="items-center justify-center min-h-[calc(100vh-200px)]">
        <Loader size={48} />
      </Container>
    </main>
  );
}
