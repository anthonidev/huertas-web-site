import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Huertas Inmobiliaria',
    short_name: 'Huertas Inmobiliaria',
    description:
      'Obtén TU LOTE AL TOKE con nuestro crédito directo y financiamiento personalizado. Garantiza hoy la seguridad y bienestar de tu familia. ¡Conversemos!',
    start_url: '/',
    display: 'standalone',
    categories: ['Proyectos', 'Nosotros', 'Contactanos'],
    icons: [
      {
        src: '/favicon.ico',
        sizes: '105x92',
        type: 'image/x-icon',
      },
    ],
    theme_color: '#ffffff',
    background_color: '#ffffff',
  };
}
