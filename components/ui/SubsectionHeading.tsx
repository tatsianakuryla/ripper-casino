import type { JSX, ReactNode } from 'react';

interface SubsectionHeadingProperties {
  children: ReactNode;
  className?: string;
}

export const SubsectionHeading = ({
  children,
  className = '',
}: SubsectionHeadingProperties): JSX.Element => {
  return (
    <h2
      className={`font-display font-normal text-[40px] leading-[100%] tracking-normal uppercase align-middle text-white ${className}`}
    >
      {children}
    </h2>
  );
};
