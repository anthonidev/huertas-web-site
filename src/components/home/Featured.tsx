import Image from 'next/image';
import React from 'react';
import { BarMoneyIcon } from '../icons/Icons';

export const Featured = () => {
  return (
    <header id='featured' className='relative h-screen '>
      <section className='absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2  transform text-center lg:top-1/3'>
        <h1 className=' title-banner px-14 font-extrabold uppercase  tracking-tighter text-white'>
          #TULOTEAHORA
        </h1>
        <p className='mx-auto mt-4 flex w-3/4 items-center justify-center rounded-full bg-white px-4 py-2  text-base font-bold tracking-tighter shadow-2xl shadow-black sm:py-3 sm:text-2xl  md:py-4 md:text-4xl  2xl:py-6 2xl:text-5xl'>
          <BarMoneyIcon className='text-pri mr-2  hidden lg:block' width={85} />
          <span className='text-pri'>CAMPO O </span>
          <span className='text-sec ml-2'>PLAYA </span>
          <BarMoneyIcon
            className='text-sec mr-2  hidden lg:block '
            width={85}
          />
        </p>
      </section>
      <figure>
        <Image
          src='/imgs/montaje-banner-web.webp'
          alt='Invierte con Huertas Inmobiliaria'
          className='h-screen w-full object-cover object-center brightness-75 filter'
          width={1920}
          height={1080}
        />
      </figure>
    </header>
  );
};
