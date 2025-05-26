import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from './components/footer';
import Header from './components/header';
import { LanguageProvider } from './contexts/LanguageContext';
import './globals.css';
import './i18n/client';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Venador Prim',
  description: 'Venador Prim - Your Trusted Partner in Industrial Solutions',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true} >
      <body className={inter.className}>
        <LanguageProvider>
          <Header />
          <main className="pt-24">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
