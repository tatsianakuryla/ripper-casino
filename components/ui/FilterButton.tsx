import type { JSX } from 'react';

interface FilterButtonProps {
  children: string;
  onClick?: () => void;
  isHidden?: boolean;
  className?: string;
}

export const FilterButton = ({
  children,
  onClick,
  isHidden = false,
  className = '',
}: FilterButtonProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={`
        max-w-[345px]
        py-[24px] px-[90px] 
        rounded-[6px] 
        font-display font-normal text-[28px] leading-[100%] tracking-[0%] 
        uppercase text-center bg-button-primary text-bg-black
        hover:scale-105 transition-transform cursor-pointer ${className}
        ${isHidden ? 'hidden' : ''}
      `}
    >
      {children}
    </button>
  );
};
