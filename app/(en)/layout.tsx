import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { rootMetadata } from '@/lib/metadata';
import '../globals.css';

export const metadata: Metadata = rootMetadata;
export const viewport: Viewport = { themeColor: '#171717' };

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
