import './globals.css';
import { Roboto, Paytone_One } from 'next/font/google';

import type { Metadata } from 'next';
import type { ReactNode, JSX } from 'react';

import { Header } from '@/components/layout/Header/Header';
import { QueryProvider } from '@/providers/QueryProvider';
import { ToasterProvider } from '@/providers/ToasterProvider';
import { Footer } from '@/components/layout/Footer/Footer';

export const metadata: Metadata = {
  title: 'Ripper Casino',
  description:
    'Ripper Casino offers the best online casinos in Australia - generous bonuses, popular slots, live dealers and secure payment methods. Discover top offers today.',
};

const roboto = Roboto({
  subsets: ['latin'],
  weight: '500',
  variable: '--font-roboto',
});

const paytoneOne = Paytone_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-paytone-one',
});

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <html lang="en" className={`${roboto.variable} ${paytoneOne.variable}`}>
      <body className="font-sans bg-bg-black text-text-main my-0 mx-auto">
        <QueryProvider>
          <ToasterProvider />
          <Header />
          {children}
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
