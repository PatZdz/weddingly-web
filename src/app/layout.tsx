import '../globals.css';
import type { Metadata } from 'next';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import Navbar from '../components/Navbar'; // Import Navbar

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LetsProject – Digital Solutions for Ambitious Brands',
  description: 'Branding, Web & Mobile Apps, eCommerce, and Innovative SaaS solutions.',
};

type Props = {
  children: ReactNode;
  params: { locale: string };
};

// Zmieniamy funkcję na async
export default async function RootLayout({ children, params }: Props) {
  // Używamy await przed dostępem do params.locale
  const locale = params.locale;

  // Pobieranie wiadomości dla wybranego języka
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className="h-full">
      <body className={`${inter.className} flex h-full flex-col`}>
        {/* Globalny navbar */}
        <NextIntlClientProvider messages={messages}>
          <header>
            <Navbar />
          </header>
          {children}
          <footer>
            <p>© 2025 LetsProject. All rights reserved.</p>
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}