import type { Metadata } from 'next';
import { EhviPage } from '@/components/EhviPage';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata('es', 'ehvi');

export default function Page() {
  return (
    <>
      <Header lang="es" page="ehvi" />
      <EhviPage lang="es" />
      <Footer lang="es" />
    </>
  );
}
