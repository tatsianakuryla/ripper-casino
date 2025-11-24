'use client';

import { Toaster } from 'sonner';

import type { JSX } from 'react';

export function ToasterProvider(): JSX.Element {
  return (
    <Toaster
      position="top-right"
      expand={false}
      richColors
      closeButton
      toastOptions={{
        style: {
          background: '#1a1a1a',
          color: '#fff',
          border: '1px solid #333',
        },
        className: 'sonner-toaster',
      }}
    />
  );
}
