import React from 'react';
import { WhatsappIcon } from '../icons/Icons';

const WhatsappButton = () => {
  return (
    <div className='fixed bottom-4 right-4 animate-bounce cursor-pointer rounded-full bg-green-500 p-2 hover:bg-green-600'>
      <WhatsappIcon className='h-10 w-10' />
    </div>
  );
};

export default WhatsappButton;
