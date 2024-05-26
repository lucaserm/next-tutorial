import './globals.css';
import type { Metadata } from 'next';
import React from 'react';
import Navbar from '@/components/Navbar';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
// const inconsolata = Inconsolata({ subsets: ['latin'] });
// const roboto = Roboto({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: 'Next.js Project',
  description: 'A Next.js project with TypeScript and TailwindCSS.',
  keywords: 'Next.js, Typescript, TailwindCSS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='pt-br'>
      <body className={inter.className}>
        <Navbar />
        <main className='max-w-3xl mx-auto py-10'>
          {children}
        </main>
      </body>
    </html>
  );
}