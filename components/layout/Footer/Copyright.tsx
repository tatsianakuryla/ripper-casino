import type { JSX } from 'react';

export const Copyright = (): JSX.Element => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-gray-400 font-sans font-medium tracking-[0]">
      <span className="text-[32px] leading-[100%]">18+</span>
      <small className="text-[20px] leading-[40px] ">
        Copyright &copy; 2025 Ripper Casino
      </small>
    </div>
  );
};
