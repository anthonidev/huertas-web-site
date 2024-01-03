import React from 'react';

type Props = {};

export const FamilyHuertas = (props: Props) => {
  return (
    <main className='bg-pattern min-h-screen' id='familia-huertas'>
      <header
        style={{ backgroundImage: 'url(/imgs/familyhuertas.webp)' }}
        className='h-[30rem] items-end bg-cover bg-center bg-no-repeat '
      >
        <div className='flex flex-row  items-stretch'>
          <div className='mb-20 max-w-sm basis-1/3 self-end pl-5 text-7xl   font-extrabold uppercase text-white lg:mx-auto'>
            Familia Huertas
          </div>
          <div className='from-pri/85 to-sec-100/85  flex h-[30rem]  basis-2/3  justify-end bg-gradient-to-r  '>
            <div className=' flex w-full items-end justify-end  p-20  text-2xl  text-white'>
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
