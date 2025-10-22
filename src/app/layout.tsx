import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import '../styles/globals.css';
import { ProviderUI } from '@/components/providers/ProviderUI';
import HeadSocial from '@/components/shared/HeadSocial';
import WhatsappButton from '@/components/shared/WhatsappButton';
import { ProviderToast } from '@/components/providers/ProviderToast';
import { Footer, Navbar } from '@/components/common';
import { GoogleTagManager } from '@next/third-parties/google';
import CallButton from '@/components/shared/CallButton';
import CampoPlata from '@/components/shared/CampoPlata';
import { ModalProvider } from '@/components/providers/ModalProvider';
const inter = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Huertas Inmobiliaria',
  description:
    'Obtén TU LOTE AL TOKE con nuestro crédito directo y financiamiento personalizado. Garantiza hoy la seguridad y bienestar de tu familia. ¡Conversemos!',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
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
          <CampoPlata />
          <CallButton />
          <ProviderToast />
          <ModalProvider />
        </ProviderUI>
      </body>
    </html>
  );
}
