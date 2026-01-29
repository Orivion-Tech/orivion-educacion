import type { Metadata } from 'next';
import { Space_Grotesk, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Providers from './providers';

const heading = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading'
});

const body = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body'
});

export const metadata: Metadata = {
  title: 'SAA | Adaptive Learning Platform',
  description: 'Secure, multi-tenant adaptive learning platform.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${heading.variable} ${body.variable} bg-surface-1 text-text-1`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
