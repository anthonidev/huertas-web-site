import Image from 'next/image';
import React from 'react';

export const Hero = () => {
  return (
    <section className='flex min-h-screen items-center justify-center bg-pattern  '>
      <header className='mx-auto flex w-full max-w-7xl  items-center justify-between px-4  sm:px-6 lg:px-8'>
        <div className='flex flex-col  space-y-10 '>
          <div className='  font-extrabold '>
            <p className=' text-6xl  text-pri-100'>¿Quiénes</p> <br />
            <span className='mx-3  bg-sec px-2 text-6xl uppercase text-white'>
              SOMOS?
            </span>
          </div>
          <p className='  mt-3 max-w-sm text-justify text-base text-pri'>
            Somos una empresa peruana, con experiencia en el sector
            inmobiliario,<strong> Huertas Inmobiliaria </strong> empresa 100%
            peruana encargada de brindarte la mejor oportunidad de invertir en
            tu futuro.
          </p>
        </div>
        <Image
          src='/imgs/nosotros.png'
          width={500}
          height={500}
          alt='somos una empresa peruana, con experiencia en el sector
            inmobiliario'
        />
      </header>
    </section>
  );
};
