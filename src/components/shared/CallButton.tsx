import { PhoneIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';

const CallButton = () => {
  return (
    <Link
      href="tel:51948195923"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 z-40 flex animate-bounce cursor-pointer items-center justify-center"
    >
      <PhoneIcon className="z-30 h-14 w-14 rounded-full border bg-green-700 p-2 text-white" />
      <span className="-ml-4 rounded-r-full bg-green-700 px-3 py-2 pl-7 text-xl text-white">
        ¡Llame ahora!{' '}
      </span>
    </Link>
  );
};

export default CallButton;
