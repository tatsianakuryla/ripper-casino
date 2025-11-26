import type { JSX, ReactNode } from 'react';

interface DescriptionBlockProperties {
  children: ReactNode;
  className?: string;
}

export const DescriptionBlock = ({
  children,
  className = '',
}: DescriptionBlockProperties): JSX.Element => {
  return (
    <div
      className={`flex flex-col font-sans font-medium text-[20px] leading-[40px] tracking-[0] align-middle text-white ${className}`}
    >
      {children}
    </div>
  );
};
