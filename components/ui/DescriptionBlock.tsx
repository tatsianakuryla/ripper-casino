import type { JSX, ReactNode } from 'react';

interface DescriptionBlockProperties {
  children: ReactNode;
  className?: string;
  gap?: string;
  maxWidth?: string;
}

export const DescriptionBlock = ({
  children,
  className = '',
  gap = '12px',
  maxWidth,
}: DescriptionBlockProperties): JSX.Element => {
  const maxWidthClass = maxWidth ? `max-w-[${maxWidth}]` : '';
  return (
    <div
      className={`flex flex-col gap-[${gap}] ${maxWidthClass} font-sans font-medium text-[20px] leading-[40px] tracking-[0] align-middle text-white ${className}`}
    >
      {children}
    </div>
  );
};
