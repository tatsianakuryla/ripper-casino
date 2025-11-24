import Link from 'next/link';

import type { JSX, ReactNode, ComponentProps } from 'react';

import { APP_ROUTES } from '@/shared/constants/app_routes.constants';

type NextLinkProps = ComponentProps<typeof Link>;

interface AppLinkProperties extends Omit<NextLinkProps, 'href'> {
  href?: NextLinkProps['href'];
  className?: string;
  children: ReactNode;
  disabled?: boolean;
}

export const AppLink = ({
  href = APP_ROUTES.HOME,
  children,
  className,
  target,
  rel,
  disabled = false,
  ...rest
}: AppLinkProperties): JSX.Element => {
  const safeRel =
    target === '_blank'
      ? ['noopener', 'noreferrer', rel].filter(Boolean).join(' ')
      : rel;

  const disabledClasses = disabled
    ? 'cursor-not-allowed pointer-events-none'
    : '';

  return (
    <Link
      href={disabled ? '#' : href}
      className={`${className} ${disabledClasses}`}
      target={disabled ? undefined : target}
      rel={safeRel}
      aria-disabled={disabled}
      onClick={(event) => {
        if (disabled) {
          event.preventDefault();
        }
      }}
      {...rest}
    >
      {children}
    </Link>
  );
};
