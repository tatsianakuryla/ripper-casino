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
          background: '#fff',
          color: '#1a1a1a',
          border: '1px solid #e5e5e5',
        },
        className: 'sonner-toaster',
      }}
    />
  );
}
