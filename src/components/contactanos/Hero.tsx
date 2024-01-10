import React from 'react';

export const Hero = () => {
  return (
    <section className='flex min-h-screen items-center justify-center bg-pattern  '>
      <header className='mx-auto w-full max-w-7xl px-4  sm:px-6 lg:px-8'>
        <h1 className='flex flex-col  text-4xl font-extrabold text-gray-900'>
          <span className='text-7xl font-normal text-pri-100'>¡Hola!</span>
          <span className='text-5xl uppercase text-sec '>como podemos </span>
          <span className='text-6xl uppercase text-pri '>ayudarte.</span>
        </h1>
      </header>
    </section>
  );
};
