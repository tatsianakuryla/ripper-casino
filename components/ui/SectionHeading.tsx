import type { JSX, ReactNode } from 'react';

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
}

export const SectionHeading = ({
  children,
  className = '',
}: SectionHeadingProps): JSX.Element => {
  return (
    <h2
      className={`font-display font-normal text-[56px] leading-[100%] tracking-normal uppercase align-middle ${className}`}
    >
      {children}
    </h2>
  );
};
