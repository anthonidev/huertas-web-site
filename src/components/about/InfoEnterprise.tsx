'use client';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import { MissionIcon, VisionIcon, YearExpIcon } from '../icons/Icons';

export const InfoEnterprise = () => {
  return (
    <div
      id='nosotros-info'
      className='relative min-h-screen bg-[url(/imgs/fondobuild.png)] bg-cover bg-center bg-no-repeat '
    >
      <div className=' flex h-full flex-col items-center justify-center bg-gradient-to-r from-pri to-sec py-28 opacity-85 md:flex-row md:items-stretch md:space-x-10'>
        <Fade direction='left'>
          <h2 className='flex items-center justify-center py-4 text-4xl font-bold text-white '>
            Misión
          </h2>
          <div className='relative  flex min-h-full items-center justify-center '>
            <div className='absolute bottom-0 top-0 h-full   bg-white p-[0.5px]' />
            <MissionIcon className='z-10 h-16 w-16 animate-bounce rounded-full bg-sec p-1 text-white' />
          </div>
          <p className='max-w-[16rem]  text-white'>
            <strong>Brindamos soluciones inmobiliarias</strong> personalizadas
            que generan valor, contribuyendo al desarrollo de nuestra ciudad con
            propiedades de alta rentabilidad y servicio excepcional.
          </p>
        </Fade>
      </div>

      <div
        id='nosotros-vision'
        className=' flex h-full flex-col  items-center  justify-center bg-pri-100 py-28 md:flex-row md:items-stretch md:space-x-10  '
      >
        <Fade direction='right'>
          <h2 className='flex items-center justify-center py-4 text-4xl font-bold text-white '>
            Visión
          </h2>
          <div className='relative  flex min-h-full items-center justify-center '>
            <div className='absolute bottom-0 top-0 h-full   bg-white p-[0.5px]' />
            <VisionIcon className='z-10 h-16 w-16 animate-bounce rounded-full bg-sec p-1 text-white' />
          </div>
          <p className='max-w-[16rem]  text-white'>
            Ser la referencia líder en el{' '}
            <strong>mercado inmobiliario peruano,</strong> destacando por un
            servicio excelente y relaciones confiables, impulsando el progreso
            en nuestra comunidad.
          </p>
        </Fade>
      </div>
      <div
        id='nosotros-experiencia'
        className=' flex h-full flex-col items-center justify-center bg-gradient-to-r from-pri to-sec py-28 opacity-85 md:flex-row  md:items-stretch md:space-x-10'
      >
        <Fade direction='left'>
          <h2 className='flex items-center justify-center py-4 text-2xl font-bold  text-white '>
            Años de <br /> experiencia
          </h2>
          <div className='relative  flex min-h-full items-center justify-center '>
            <div className='absolute bottom-0 top-0 h-full   bg-white p-[0.5px]' />
            <YearExpIcon className=' z-10 h-16 w-16 animate-bounce rounded-full bg-sec p-1 text-white' />
          </div>
          <p className='max-w-[16rem] text-white'>
            En el sector inmobiliario en Lima, hemos construido una sólida
            reputación como referentes confiables,{' '}
            <strong>
              nuestras relaciones basadas en la ética y la transparencia{' '}
            </strong>{' '}
            han sido clave para generar familias satisfechas.
          </p>
        </Fade>
      </div>

      <Image
        src='/imgs/build.png'
        width={500}
        height={500}
        alt='huertas inmobiliaria'
        className='absolute bottom-0 left-0 hidden md:block '
      />
    </div>
  );
};
