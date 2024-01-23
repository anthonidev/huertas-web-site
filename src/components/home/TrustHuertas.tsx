'use client';
import { stats } from '@/utils/data';
import { Fade } from 'react-awesome-reveal';
import StatCard from '../shared/StatCard';
import Link from 'next/link';

type Props = {};

export const TrustHuertas = (props: Props) => {
  return (
    <main
      className=' flex min-h-screen items-center justify-center bg-pattern '
      id='confia-huertas'
    >
      <section className=' mx-auto mt-20 flex max-w-7xl flex-col  justify-evenly px-4 sm:px-6  md:mt-10  md:space-x-20 lg:flex-row lg:px-8'>
        <header className='my-10 flex flex-col items-start justify-center space-y-16  '>
          <h2 className='mt-2 border-pri-200 text-start text-3xl font-extrabold uppercase text-sec-100  md:text-4xl lg:text-5xl xl:text-6xl'>
            CONFÍA <br />
            <span className=' border-b-8 border-pri text-pri-200'>EN HUE</span>
            RTAS
          </h2>

          <p className='text-xl font-light tracking-wider text-pri md:text-2xl'>
            Invierte con confianza en un futuro <br /> seguro para tu familia.{' '}
            <br /> ¡Ahora tener
            <span className=' font-extrabold'> TÚ LOTE ES ALTOKE!</span>
          </p>
          <Link
            href='/nosotros'
            className='button  bg-pri  px-5 py-3 text-white '
          >
            Conoce más{' '}
            <svg fill='currentColor' viewBox='0 0 24 24' className='icon'>
              <path
                clipRule='evenodd'
                d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z'
                fillRule='evenodd'
              ></path>
            </svg>
          </Link>
        </header>
        <Fade cascade direction='right' triggerOnce={true}>
          <ul className='grid grid-cols-1 justify-stretch gap-10 text-pri-200 lg:grid-cols-2'>
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                stat={stat}
                par={index % 2 === 0 ? true : false}
              />
            ))}
          </ul>
        </Fade>
      </section>
    </main>
  );
};
