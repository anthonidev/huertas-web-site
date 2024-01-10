import React from 'react';
import Input from '../shared/form/Input';
import TextArea from '../shared/form/TextArea';
import Image from 'next/image';

export const ContactForm = () => {
  return (
    <section className='  bg-pattern p-20'>
      <div className='mx-auto flex w-full max-w-7xl flex-col px-4  sm:px-6  md:flex-row lg:px-8'>
        <div className='basis-1/2'>
          <Image
            src='/imgs/contact.png'
            width={500}
            height={500}
            alt='contact'
          />
        </div>
        <form className='basis-1/2 rounded-2xl '>
          <p className='mb-5 text-center text-2xl text-sec md:text-3xl lg:text-4xl xl:text-5xl'>
            Quiero que me contacten
            <span className='font-extrabold text-sec'>
              {' '}
              para mayor información
            </span>
          </p>
          <p className='mb-5 text-center text-sm text-pri md:text-lg '>
            Déjanos tus datos y un asesor se contactará contigo lo antes posible
          </p>
          <div className='grid grid-cols-2 gap-4'>
            <div className='col-span-2  md:col-span-1'>
              <Input title='Nombres y apellidos' type='text' />
            </div>
            <div className='col-span-2 md:col-span-1'>
              <Input title='Correo electrónico' type='email' />
            </div>
            <div className='col-span-2 md:col-span-1'>
              <Input title='Número de teléfono' type='text' />
            </div>
            <div className='col-span-2 md:col-span-1'>
              <Input title='DNI' type='text' />
            </div>

            <div className='col-span-2'>
              <TextArea title='Mensaje' />
            </div>

            <button
              type='submit'
              className='col-span-2 rounded-xl bg-sec py-2 text-white'
            >
              Solicitar información
            </button>
            <span className='col-span-2 mb-5 text-center text-xs text-pri md:text-sm'>
              Al enviar este formulario, aceptas que los datos que nos
              proporcionas se utilicen para responder a tu consulta.
            </span>
          </div>
        </form>
      </div>
    </section>
  );
};
