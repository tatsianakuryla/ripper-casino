import type { JSX, ReactNode } from 'react';

interface BodyTextProperties {
  children: ReactNode;
  className?: string;
}

export const BodyText = ({
  children,
  className = '',
}: BodyTextProperties): JSX.Element => {
  return (
    <p
      className={`font-sans font-medium text-[20px] leading-[40px] tracking-[0] text-white ${className}`}
    >
      {children}
    </p>
  );
};
