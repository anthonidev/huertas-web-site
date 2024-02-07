'use client';
import React from 'react';
import { Fade } from 'react-awesome-reveal';

export const Hero = () => {
  return (
    <section
      id='nosotros-header'
      className='flex min-h-screen items-center justify-center bg-[url(/imgs/heronosotros.jpg)] bg-cover bg-center bg-no-repeat  '
    >
      <header className='mx-auto  w-full max-w-7xl   px-4  sm:px-6 lg:px-8 '>
        <Fade
          direction='down'
          triggerOnce
          className='flex flex-col  space-y-10 '
        >
          <div className='  font-extrabold '>
            <p className=' text-6xl  text-pri-100'>¿Quiénes</p> <br />
            <span className='mx-3  bg-sec px-2 text-6xl uppercase text-white'>
              SOMOS?
            </span>
          </div>
          <p className='  mt-3 max-w-sm  text-base text-pri'>
            Somos una empresa <strong> 100% peruana </strong> , desarrollando
            proyectos inmobiliarios de casa de campo y playa para todas las
            familias peruanas. Contamos con exclusivos condominios en el norte y
            sur del país.
          </p>
        </Fade>
      </header>
    </section>
  );
};
