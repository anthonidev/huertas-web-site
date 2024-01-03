import React from 'react';

type Props = {};

export const FamilyHuertas = (props: Props) => {
  return (
    <main className='bg-pattern ' id='familia-huertas'>
      <header
        style={{ backgroundImage: 'url(/imgs/familyhuertas.webp)' }}
        className='h-[30rem] items-end bg-cover bg-center bg-no-repeat '
      >
        <div className='flex flex-row  items-stretch'>
          <div className='mb-20 max-w-sm basis-1/3 self-end pl-5 text-3xl font-extrabold uppercase text-white   md:text-4xl lg:mx-auto lg:text-5xl xl:text-7xl'>
            Familia Huertas
          </div>
          <div className='flex h-[30rem]  basis-2/3 justify-end  bg-gradient-to-r  from-pri/85 to-sec-100/85  '>
            <div className=' flex w-full items-end justify-end  p-20  text-lg text-white md:text-xl lg:text-2xl  xl:text-3xl'>
              <p className=' flex w-full justify-end border-t-4 border-white pt-2'>
                Invierte con confianza en <br /> un futuro seguro
              </p>
            </div>
          </div>
        </div>
      </header>
    </main>
  );
};
