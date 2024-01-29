import Image from 'next/image';
import React from 'react';

export const Hero = () => {
  return (
    <section
      className='flex bg-gradient-to-r from-pri to-sec pt-20'
      id='contactanos'
    >
      <header className='mx-auto flex w-full max-w-7xl flex-col items-center px-4 sm:px-6  lg:flex-row lg:px-8'>
        <div className='flex h-full basis-1/2 items-end '>
          <Image
            src='/imgs/nosotroschica.png'
            width={500}
            height={500}
            alt='logo'
          />
        </div>

        <div className='flex h-full basis-1/2 flex-col items-center justify-center space-y-2  text-pri'>
          <Image src='/imgs/altoque.png' width={400} height={300} alt='logo' />
          <p className='mx-auto  text-center   text-xl text-white md:text-2xl lg:text-3xl xl:text-4xl'>
            No dejes pasar <br /> esta gran oportunidad <br /> estamos para ti
          </p>
        </div>
      </header>
    </section>
  );
};
