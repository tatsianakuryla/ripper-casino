import type { JSX, ReactNode } from 'react';

import { DescriptionBlock } from '@/components/ui/DescriptionBlock';
import { SubsectionHeading } from '@/components/ui/SubsectionHeading';

interface ContentBlockProperties {
  title: string;
  children: ReactNode;
  gap?: string;
  className?: string;
}

export const ContentBlock = ({
  title,
  children,
  gap = '24px',
  className = '',
}: ContentBlockProperties): JSX.Element => {
  return (
    <DescriptionBlock gap={gap} className={className}>
      <SubsectionHeading>{title}</SubsectionHeading>
      {children}
    </DescriptionBlock>
  );
};
