import { stepsgetland } from '@/utils/data';
import React from 'react';

type Props = {};

export const GetLandSteps = (props: Props) => {
  return (
    <main className='min-h-screen bg-pattern' id='obten-tu-lote'>
      <header
        style={{ backgroundImage: 'url(/imgs/getLand.webp)' }}
        className='min-h-screen items-end bg-cover bg-center bg-no-repeat '
      >
        <div className='  mx-auto   max-w-7xl '>
          <div className='mx-5 flex max-w-lg flex-col items-start justify-start space-y-20 rounded-b-3xl bg-gradient-to-t from-sec-100  to-pri px-4 py-16  sm:px-6 lg:px-8'>
            <h3 className='mx-auto  text-4xl font-extrabold uppercase text-white md:text-5xl xl:text-6xl 2xl:text-7xl'>
              <span className=' text-2xl font-light md:text-3xl xl:text-4xl 2xl:text-6xl'>
                OBTEN TU
              </span>{' '}
              <br />
              LOTE EN <br />3 PASOS
            </h3>
            <div className='mx-auto flex flex-col justify-center  space-y-10'>
              {stepsgetland.map(({ description, icon: Icon, title }, index) => (
                <div key={index} className=' flex items-center justify-start  '>
                  <Icon className='h-24 w-24 text-white' />
                  <div>
                    <p className='text-2xl font-extrabold text-white'>
                      {title}
                    </p>
                    <p className='w-40 text-sm font-light text-white  md:w-44 lg:w-52 xl:w-64'>
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className=' mx-10 my-10   max-w-7xl bg-sec   px-6 py-4 text-xl font-extrabold text-white'>
            MÁS INFORMACIÓN
          </button>
        </div>
      </header>
    </main>
  );
};
