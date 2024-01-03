import { stepsgetland } from '@/utils/data';
import React from 'react';

type Props = {};

export const GetLandSteps = (props: Props) => {
  return (
    <main className='bg-pattern min-h-screen' id='obten-tu-lote'>
      <header
        style={{ backgroundImage: 'url(/imgs/getLand.webp)' }}
        className='min-h-screen items-end bg-cover bg-center bg-no-repeat '
      >
        <div className='  mx-auto   max-w-7xl '>
          <div className='from-sec-100 to-pri flex max-w-lg flex-col items-start justify-start space-y-20 rounded-b-3xl  bg-gradient-to-t px-4 py-16  sm:px-6 lg:px-8'>
            <h3 className='mx-auto text-7xl font-extrabold uppercase text-white'>
              <span className='text-6xl font-light'>OBTEN TU</span> <br />
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
                    <p className='w-64 text-wrap text-sm font-light text-white'>
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className=' bg-sec   my-10 ml-[140px] p-4 text-white'>
            MÁS INFORMACIÓN
          </button>
        </div>
      </header>
    </main>
  );
};
