import './globals.css';
import { Roboto, Paytone_One } from 'next/font/google';

import type { Metadata } from 'next';
import type { ReactNode, JSX } from 'react';

import { Footer } from '@/components/layout/Footer/Footer';
import { Header } from '@/components/layout/Header/Header';
import { QueryProvider } from '@/providers/QueryProvider';
import { ToasterProvider } from '@/providers/ToasterProvider';

export const metadata: Metadata = {
  title: 'Ripper Casino - Best Online Casinos in Australia 2025',
  description:
    'Ripper Casino offers the best online casinos in Australia - generous bonuses, popular slots, live dealers and secure payment methods. Discover top offers today.',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://rippercasino.com',
    siteName: 'Ripper Casino',
    title: 'Ripper Casino - Best Online Casinos in Australia 2025',
    description:
      'Ripper Casino offers the best online casinos in Australia - generous bonuses, popular slots, live dealers and secure payment methods. Discover top offers today.',
    images: [
      {
        url: '/main-img.png',
        width: 1200,
        height: 630,
        alt: 'Ripper Casino - Online Casino Australia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ripper Casino - Best Online Casinos in Australia 2025',
    description:
      'Ripper Casino offers the best online casinos in Australia - generous bonuses, popular slots, live dealers and secure payment methods.',
    images: ['/main-img.png'],
    creator: '@RipperCasino',
  },
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
