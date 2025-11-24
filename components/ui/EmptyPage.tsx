import type { JSX } from 'react';

import { Container } from '@/components/ui/Container';

interface PageProperties {
  title: string;
  description?: string;
}
export const EmptyPage = ({
  title,
  description = 'Coming soon...',
}: PageProperties): JSX.Element => {
  return (
    <Container styles="flex-col">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-xl text-text-main/70">{description}</p>
    </Container>
  );
};
