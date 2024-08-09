'use client';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import FormContact from './FormContact';

const SectionForm = () => {
  return (
    <section className="bg-pattern p-5 lg:p-20" id="contactanos-form">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-4 sm:px-6 md:flex-row lg:px-8">
        <div className="flex basis-1/2 flex-col space-y-7">
          <h1 className="w-36 border-b-4 border-pri text-3xl font-extrabold text-sec md:text-4xl lg:text-5xl">
            CONTÁCTANOS
          </h1>
          <p className="max-w-sm text-pri">
            Envíenos un mensaje y nos pondremos en contacto con usted lo más pronto posible para
            resolver todas sus dudas o preguntas que tenga respecto a nuestros proyectos.
          </p>
          <p className="text-pri">
            ¡Ahora tener <strong> TÚ LOTE ES ALTOKE!</strong>
          </p>
          <div className="flex flex-col space-y-2 text-pri">
            <Link href="tel:+51948195923" className="flex items-center justify-start space-x-3">
              <PhoneIcon className="h-5 w-5" />
              <span>(+51) 948 195 923</span>
            </Link>
            <Link
              href="mailto:ventas@inmobiliariahuertas.com"
              className="flex items-center justify-start space-x-3"
            >
              <EnvelopeIcon className="h-5 w-5 text-pri" />

              <span>ventas@inmobiliariahuertas.com</span>
            </Link>
          </div>
        </div>
        <Fade direction="right" className="mx-auto flex max-w-7xl flex-row lg:mb-32">
          <div className="max-w-xl">
            <FormContact />
          </div>
        </Fade>
      </div>
    </section>
  );
};
export default SectionForm;
