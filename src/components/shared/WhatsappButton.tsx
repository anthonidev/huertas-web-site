import React from 'react';
import { WhatsappIcon } from '../icons/Icons';
import Link from 'next/link';

const WhatsappButton = () => {
  return (
    <Link
      href='https://api.whatsapp.com/send?phone=51948195923&text=%C2%A1Hola!,%20gracias%20por%20ponerse%20en%20contacto%20con%20nosotros.%20%F0%9F%98%8A%F0%9F%8F%A0%20%C2%BFC%C3%B3mo%20podemos%20ayudarte?%F0%9F%98%84'
      target='_blank'
      rel='noopener noreferrer'
      className='fixed bottom-4 right-4 z-40 animate-bounce  cursor-pointer rounded-full bg-green-500 p-2 hover:bg-green-600'
    >
      <p className='absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white'>
        1
      </p>
      <WhatsappIcon className='h-10 w-10 md:h-12 md:w-12' />
    </Link>
  );
};

export default WhatsappButton;
