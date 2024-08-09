import { Metadata } from 'next';
import Image from 'next/image';
import FormPayHere from '../components/form/FormPayHere';
export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: 'Huertas Inmobiliaria - Paga aquí ',
  description: 'En huertas inmobiliaria tenemos los mejores proyectos tanto en campo como en playa',
};

export default function PayHerePage() {
  return (
    <div
      id="featured"
      className="flex min-h-screen flex-col justify-center bg-pattern bg-cover bg-fixed bg-center bg-no-repeat"
    >
      <div className="px-6 pb-20 pt-32 lg:px-8">
        <div className="mx-auto max-w-7xl text-base leading-7 text-gray-700">
          <h1 className="text-2xl font-bold text-pri md:text-4xl">Pagá aquí</h1>
          <p>¡Ahora puedes realizar el pago de tu separación online!</p>
          <div className="mt-6 flex max-w-xl flex-col items-center justify-between rounded-xl bg-gray-100 px-4 py-1 md:flex-row">
            <p className="text-sm text-gray-700">Tarjeta de crédito/débito</p>
            <div className="flex space-x-2">
              <Image
                src="/imgs/cards/Visa.png"
                alt="Visa"
                className="object-contain"
                width={50}
                height={50}
              />
              <Image
                src="/imgs/cards/Mastercard.png"
                alt="Mastercard"
                className="object-contain"
                width={50}
                height={50}
              />
              <Image
                src="/imgs/cards/Amex.png"
                alt="Amex"
                className="object-contain"
                width={50}
                height={50}
              />
              <Image
                src="/imgs/cards/Diners.png"
                alt="Diners"
                className="object-contain"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-full bg-gray-200 px-6 py-10 lg:px-8">
        <div className="mx-auto max-w-7xl text-base leading-7 text-gray-700">
          <FormPayHere />
        </div>
      </div>
    </div>
  );
}
