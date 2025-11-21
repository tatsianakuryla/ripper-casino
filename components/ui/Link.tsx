import Link from 'next/link';

import type { JSX, ReactNode, ComponentProps } from 'react';

import { APP_ROUTES } from '@/shared/constants/app_routes.constants';

type NextLinkProps = ComponentProps<typeof Link>;

interface AppLinkProperties extends Omit<NextLinkProps, 'href'> {
  href?: NextLinkProps['href'];
  className?: string;
  children: ReactNode;
}

export const AppLink = ({
  href = APP_ROUTES.HOME,
  children,
  className,
  target,
  rel,
  ...rest
}: AppLinkProperties): JSX.Element => {
  const safeRel =
    target === '_blank'
      ? ['noopener', 'noreferrer', rel].filter(Boolean).join(' ')
      : rel;

  return (
    <Link
      href={href}
      className={className}
      target={target}
      rel={safeRel}
      {...rest}
    >
      {children}
    </Link>
  );
};
