'use client';
import { motion } from 'framer-motion';
import { BeachIcon, CampoIcon } from '../icons/Icons';
import FormContact from './FormContact';
import { Fade, Flip, Zoom } from 'react-awesome-reveal';
import Link from 'next/link';

export const Featured = () => {
  const text = '#TULOTEALTOKE'.split('');
  return (
    <header
      id='featured'
      className='  flex min-h-screen flex-col justify-center'
      style={{
        backgroundImage: 'url("/imgs/montaje-banner-web.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0,0,0,0.3)',
      }}
    >
      <div className='mx-auto flex h-full  max-w-7xl flex-col items-stretch justify-between px-4 sm:px-6 lg:flex-row lg:space-x-5 lg:px-8'>
        <div className='mt-40 flex w-full  flex-col items-center justify-around lg:mt-0  '>
          <h1 className=' text-4xl font-extrabold   uppercase tracking-tighter  text-white lg:text-6xl'>
            {text.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.25,
                  delay: i / 10,
                }}
                key={i}
              >
                {el}
              </motion.span>
            ))}
          </h1>
          <Zoom className='w-full'>
            <Link
              href='/proyectos'
              className=' group mx-auto mt-4 flex items-center justify-center rounded-full bg-white/80 px-4 py-2 text-base  font-bold tracking-tighter shadow-2xl shadow-black transition-all duration-300 ease-in-out hover:-translate-y-1  hover:bg-opacity-70 hover:bg-gradient-to-r hover:from-pri hover:to-sec hover:shadow-2xl sm:py-3 sm:text-2xl md:py-4 lg:w-3/4 2xl:py-6 '
            >
              <CampoIcon
                className='mr-2   w-12 text-pri group-hover:text-white lg:block '
                width={85}
              />

              <span className='text-pri group-hover:text-white'>CAMPO O </span>
              <span className='ml-2 text-sec group-hover:text-white'>
                PLAYA{' '}
              </span>
              <BeachIcon
                className='mr-2  w-12 text-sec  group-hover:text-white lg:block'
                width={85}
              />
            </Link>
          </Zoom>
        </div>
        <Fade
          direction='right'
          className='flex   items-center justify-center lg:mt-20 lg:max-w-lg'
        >
          <FormContact />
        </Fade>
      </div>
    </header>
  );
};
