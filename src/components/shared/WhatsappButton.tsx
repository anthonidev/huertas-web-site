import React from 'react';
import { WhatsappIcon } from '../icons/Icons';
import Link from 'next/link';

const WhatsappButton = () => {
  return (
    <Link
      href='https://api.whatsapp.com/send?phone=+51984403239&text=Escribe%20un%20mensaje%20para%20que%20las%20personas%20te%20saluden%20f%C3%A1cilmente'
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
