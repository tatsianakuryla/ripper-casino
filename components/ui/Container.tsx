import type { JSX, ReactNode } from 'react';

type ContainerProperties = {
  children: ReactNode;
  styles?: string;
};

export const Container = ({
  children,
  styles,
}: ContainerProperties): JSX.Element => {
  return (
    <div
      className={`mx-auto w-full max-w-[2560px] [@media(max-width:1480px)]:max-w-[1440px] px-4 md:px-8 xl:px-[160px] flex ${styles}`}
    >
      {children}
    </div>
  );
};
