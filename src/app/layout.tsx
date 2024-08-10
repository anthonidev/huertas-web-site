import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import '../styles/globals.css';
import { ProviderUI } from '@/components/providers/ProviderUI';
import HeadSocial from '@/components/shared/HeadSocial';
import WhatsappButton from '@/components/shared/WhatsappButton';
import { ProviderToast } from '@/components/providers/ProviderToast';
import { Footer, Navbar } from '@/components/common';
import Head from 'next/head';
import { GoogleTagManager } from '@next/third-parties/google';
const inter = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Huertas Inmobiliaria',
  description:
    'Obtén TU LOTE AL TOKE con nuestro crédito directo y financiamiento personalizado. Garantiza hoy la seguridad y bienestar de tu familia. ¡Conversemos!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <GoogleTagManager gtmId="GTM-MH9WCJSW" />
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MH9WCJSW"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <ProviderUI>
          <HeadSocial />
          <Navbar />
          {children}
          <Footer />
          <WhatsappButton />
          <ProviderToast />
        </ProviderUI>
      </body>
    </html>
  );
}
