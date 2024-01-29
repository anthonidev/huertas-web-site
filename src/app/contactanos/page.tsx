import { ContactForm, Hero } from '@/components/contactanos';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Huertas Inmobiliaria - Contactanos',
  description:
    'En huertas inmobiliaria estamos para ayudarte, contactanos y te ayudaremos a encontrar tu lote ideal',
};

export default function ContactPage() {
  return (
    <main>
      <Hero />
      <ContactForm />
    </main>
  );
}
