import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const WhatsappButton = () => {
  return (
    <Link
      href="https://api.whatsapp.com/send?phone=51948195923&text=%C2%A1Hola!,%20gracias%20por%20ponerse%20en%20contacto%20con%20nosotros.%20%F0%9F%98%8A%F0%9F%8F%A0%20%C2%BFC%C3%B3mo%20podemos%20ayudarte?%F0%9F%98%84"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-40 animate-bounce cursor-pointer rounded-full"
    >
      <Image src="/imgs/button_wtsp.png" alt="Whatsapp" width={170} height={170} />
    </Link>
  );
};

export default WhatsappButton;
