import { stats } from '@/utils/data';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import React from 'react';
import StatCard from '../shared/StatCard';

type Props = {};

export const TrustHuertas = (props: Props) => {
  return (
    <main
      className=' bg-pattern flex min-h-screen items-center justify-center '
      id='confia-huertas'
    >
      <section className=' mx-auto flex   max-w-7xl justify-evenly  space-x-20  px-4 sm:px-6 lg:px-8'>
        <header className='flex flex-col items-start justify-center space-y-16 '>
          <h2 className='border-pri-200  text-sec-100 mt-2 text-start text-5xl font-extrabold uppercase'>
            CONFÍA <br />
            <span className=' border-pri text-pri-200 border-b-8'>EN HUE</span>
            RTAS
          </h2>
          <p className='text-pri text-2xl font-light tracking-wider'>
            Invierte con confianza en un futuro <br /> seguro para tu familia.{' '}
            <br /> ¡Ahora tener
            <span className=' font-extrabold'> TÚ LOTE ES ALTOKE!</span>
          </p>
          <button className='bg-pri inline-flex items-center  rounded-full px-4 py-3  text-white'>
            Conoce más{' '}
            <ArrowRightIcon
              className='ml-3 h-5 w-5  text-white'
              aria-hidden='true'
            />
          </button>
        </header>
        <div className='text-pri-200 grid grid-cols-1 justify-stretch gap-10 lg:grid-cols-2'>
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              par={index % 2 === 0 ? true : false}
            />
          ))}
        </div>
      </section>
    </main>
  );
};
