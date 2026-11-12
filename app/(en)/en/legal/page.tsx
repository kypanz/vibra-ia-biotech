import type { Metadata } from 'next';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { LegalPage } from '@/components/LegalPage';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata('en', 'legal');

export default function Page() {
  return (
    <>
      <Header lang="en" page="legal" />
      <LegalPage lang="en" />
      <Footer lang="en" />
    </>
  );
}
