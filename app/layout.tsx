import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { site } from '@/lib/site';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: `${site.name} — First 100 Users for B2C Startups`,
  description:
    'Done-for-you early user acquisition for B2C startups and mobile apps. Get 100 real users plus structured feedback in 14 days.',
  metadataBase: new URL('https://seedlift.co'),
  openGraph: {
    title: `${site.name} — First 100 Users for B2C Startups`,
    description:
      'We recruit real, engaged early adopters through community seeding and a curated tester network.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
