import type { JSX, ReactNode } from 'react';

import { DescriptionBlock } from '@/components/ui/DescriptionBlock';
import { SubsectionHeading } from '@/components/ui/SubsectionHeading';

interface ContentBlockProperties {
  title: string;
  children: ReactNode;
  className?: string;
}

export const ContentBlock = ({
  title,
  children,
  className = '',
}: ContentBlockProperties): JSX.Element => {
  return (
    <DescriptionBlock className={`gap-[24px] ${className}`}>
      <SubsectionHeading>{title}</SubsectionHeading>
      {children}
    </DescriptionBlock>
  );
};
