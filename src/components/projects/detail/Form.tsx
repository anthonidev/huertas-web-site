import Input from '@/components/shared/form/Input';
import TextArea from '@/components/shared/form/TextArea';
import React from 'react';

const Form = () => {
  return (
    <form className='rounded-2xl bg-sky-200 px-10 py-20'>
      <p className='mb-5 text-center text-2xl text-pri md:text-3xl lg:text-4xl xl:text-5xl'>
        Quiero que me contacten
        <span className='font-extrabold text-pri'> para mayor información</span>
      </p>
      <p className='mb-5 text-center text-sm text-pri md:text-lg '>
        Déjanos tus datos y un asesor se contactará contigo lo antes posible
      </p>
      <div className='grid grid-cols-2 gap-4'>
        <div className='col-span-2 md:col-span-1'>
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
          className='col-span-2 rounded-xl bg-pri py-2 text-white'
        >
          Solicitar información
        </button>
        <span className='col-span-2 mb-5 text-center text-xs text-pri md:text-sm'>
          Al enviar este formulario, aceptas que los datos que nos proporcionas
          se utilicen para responder a tu consulta.
        </span>
      </div>
    </form>
  );
};

export default Form;
