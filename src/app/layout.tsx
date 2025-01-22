import './globals.css'
import { Metadata } from 'next';
import Cookies from './components/Cookies';
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Strona Ślubna',
  description: 'Strona ślubna Andrzeja i Marzeny',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body>
        {children}
        <Cookies />
        <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
      </body>
    </html>
  );
}
