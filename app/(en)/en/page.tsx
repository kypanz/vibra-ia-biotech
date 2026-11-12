import type { Metadata } from 'next';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { HomePage } from '@/components/HomePage';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata('en', 'home');

export default function Page() {
  return (
    <>
      <Header lang="en" page="home" />
      <HomePage lang="en" />
      <Footer lang="en" />
    </>
  );
}
