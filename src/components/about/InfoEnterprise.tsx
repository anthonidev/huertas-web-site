import React from 'react';
import { MissionIcon, VisionIcon, YearExpIcon } from '../icons/Icons';

export const InfoEnterprise = () => {
  return (
    <div className=''>
      <div className=' flex h-full  justify-center space-x-10 bg-gradient-to-r from-pri to-sec py-28'>
        <h2 className='flex items-center justify-center py-4 text-4xl font-bold text-white '>
          Misión
        </h2>
        <div className='relative  flex min-h-full items-center justify-center '>
          <div className='absolute bottom-0 top-0 h-full   bg-white p-[0.5px]' />
          <MissionIcon className=' z-10 h-16 w-16 rounded-full bg-sec p-1 text-white' />
        </div>
        <p className='max-w-[16rem] text-justify text-white'>
          <strong>Brindamos soluciones inmobiliarias</strong> personalizadas que
          generan valor, contribuyendo al desarrollo de nuestra ciudad con
          propiedades de alta rentabilidad y servicio excepcional.
        </p>
      </div>
      <div className=' flex h-full  justify-center space-x-10 bg-pri-100 py-28'>
        <h2 className='flex items-center justify-center py-4 text-4xl font-bold text-white '>
          Visión
        </h2>
        <div className='relative  flex min-h-full items-center justify-center '>
          <div className='absolute bottom-0 top-0 h-full   bg-white p-[0.5px]' />
          <VisionIcon className=' z-10 h-16 w-16 rounded-full bg-sec p-1 text-white' />
        </div>
        <p className='max-w-[16rem] text-justify text-white'>
          Ser la referencia líder en el{' '}
          <strong>mercado inmobiliario peruano,</strong> destacando por un
          servicio excelente y relaciones confiables, impulsando el progreso en
          nuestra comunidad.
        </p>
      </div>
      <div className=' flex h-full  justify-center space-x-10 bg-gradient-to-r from-pri to-sec  py-28'>
        <h2 className='flex items-center justify-center py-4 text-2xl font-bold  text-white '>
          Años de <br /> experiencia
        </h2>
        <div className='relative  flex min-h-full items-center justify-center '>
          <div className='absolute bottom-0 top-0 h-full   bg-white p-[0.5px]' />
          <YearExpIcon className=' z-10 h-16 w-16 rounded-full bg-sec p-1 text-white' />
        </div>
        <p className='max-w-[16rem] text-justify text-white'>
          En el sector inmobiliario en Lima, hemos construido una sólida
          reputación como referentes confiables,{' '}
          <strong>
            nuestras relaciones basadas en la ética y la transparencia{' '}
          </strong>{' '}
          han sido clave para generar familias satisfechas.
        </p>
      </div>
    </div>
  );
};
