import type { JSX, ReactNode } from 'react';

interface BulletListProperties {
  children: ReactNode;
  className?: string;
}

export const BulletList = ({
  children,
  className = '',
}: BulletListProperties): JSX.Element => {
  return (
    <ul
      className={`list-disc list-outside font-sans font-medium text-[20px] leading-[40px] tracking-[0] pl-[38px] text-white ${className}`}
    >
      {children}
    </ul>
  );
};
