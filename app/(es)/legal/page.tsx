import type { Metadata } from 'next';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { LegalPage } from '@/components/LegalPage';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata('es', 'legal');

export default function Page() {
  return (
    <>
      <Header lang="es" page="legal" />
      <LegalPage lang="es" />
      <Footer lang="es" />
    </>
  );
}
