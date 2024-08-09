import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import '../styles/globals.css';
import { ProviderUI } from '@/components/providers/ProviderUI';
import HeadSocial from '@/components/shared/HeadSocial';
import WhatsappButton from '@/components/shared/WhatsappButton';
import { ProviderToast } from '@/components/providers/ProviderToast';
import { Footer, Navbar } from '@/components/common';
import Head from 'next/head';
const inter = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Huertas Inmobiliaria',
  description:
    'Obtén TU LOTE AL TOKE con nuestro crédito directo y financiamiento personalizado. Garantiza hoy la seguridad y bienestar de tu familia. ¡Conversemos!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      {/* Google Tag Manager */}
      {process.env.NEXT_PUBLIC_HUERTAS_ENV === 'production' && (
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
             new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
             j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
             'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
             })(window,document,'script','dataLayer','GTM-MH9WCJSW');`,
            }}
          />
        </Head>
      )}

      {/* End Google Tag Manager */}

      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        {process.env.NEXT_PUBLIC_SOKSO_ENV === 'production' && (
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MH9WCJSW"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
        )}

        {/* End Google Tag Manager (noscript) */}
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
