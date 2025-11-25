import type { JSX, ReactNode } from 'react';

interface SubsectionHeadingProps {
  children: ReactNode;
  className?: string;
}

export const SubsectionHeading = ({
  children,
  className = '',
}: SubsectionHeadingProps): JSX.Element => {
  return (
    <h2
      className={`font-display font-normal text-[40px] leading-[100%] tracking-normal uppercase align-middle text-white ${className}`}
    >
      {children}
    </h2>
  );
};
