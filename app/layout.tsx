import React from 'react';
import './globals.css';
import Navbar from '@/components/Navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='pt-br'>
      <body>
        <Navbar />
        <main className='max-w-3xl mx-auto py-10'>
          {children}
        </main>
      </body>
    </html>
  )
}