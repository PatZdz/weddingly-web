import './globals.css'
import { Metadata } from 'next';
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Weddingly - Marianna i Bartosz',
  description: 'Strona ślubna Marianny i Bartosza',
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
        <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
      </body>
    </html>
  );
}
