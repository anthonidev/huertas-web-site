'use client';
import { motion } from 'framer-motion';
import { BeachIcon, CampoIcon } from '../icons/Icons';
import FormContact from './FormContact';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
export const Featured = () => {
  const text = '#TULOTEAHORA'.split('');
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
        <div className='mt-40 flex w-full  flex-col items-center justify-around lg:mt-0  lg:w-1/2'>
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
          <Flip right>
            <p className='mx-auto mt-4 flex w-3/4 items-center justify-center rounded-full bg-white/80 px-4 py-2  text-base font-bold tracking-tighter shadow-2xl shadow-black sm:py-3 sm:text-2xl  md:py-4 2xl:py-6 '>
              <CampoIcon
                className='mr-2   w-12 text-pri lg:block '
                width={85}
              />

              <span className='text-pri'>CAMPO O </span>
              <span className='ml-2 text-sec'>PLAYA </span>
              <BeachIcon className='mr-2  w-12  text-sec lg:block' width={85} />
            </p>
          </Flip>
        </div>
        <Fade right>
          <div className='flex  items-center justify-center lg:w-1/2'>
            <FormContact />
          </div>
        </Fade>
      </div>
    </header>
  );
};
