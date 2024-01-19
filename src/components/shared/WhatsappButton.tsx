import React from 'react';
import { WhatsappIcon } from '../icons/Icons';

const WhatsappButton = () => {
  return (
    <div className='fixed bottom-4 right-4 z-40 animate-bounce  cursor-pointer rounded-full bg-green-500 p-2 hover:bg-green-600'>
      <p className='absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white'>
        1
      </p>
      <WhatsappIcon className='h-10 w-10 md:h-12 md:w-12' />
    </div>
  );
};

export default WhatsappButton;
