import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../styles/globals.css";
import { ProviderUI } from "@/components/providers/ProviderUI";
import HeadSocial from "@/shared/HeadSocial";
import WhatsappButton from "@/shared/WhatsappButton";
import { ProviderToast } from "@/components/providers/ProviderToast";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Huertas Inmobiliaria",
  description:
    "Obtén TU LOTE AL TOKE con nuestro crédito directo y financiamiento personalizado. Garantiza hoy la seguridad y bienestar de tu familia. ¡Conversemos!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ProviderUI>
          <HeadSocial />
          {/* <Navbar /> */}
          {children}
          {/* <Footer /> */}
          <WhatsappButton />
          <ProviderToast />
        </ProviderUI>
      </body>
    </html>
  );
}
