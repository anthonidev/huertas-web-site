export const Featured = () => {
  return (
    <main className='min-h-screen bg-pattern' id='familia-huertas'>
      <header
        style={{ backgroundImage: 'url(/imgs/familyhuertas.webp)' }}
        className='relative h-screen items-end bg-cover bg-center bg-no-repeat'
      >
        <div className='absolute right-0 top-2/4 z-10 flex flex-col  items-center  justify-center rounded-l-2xl  bg-sec/80 p-20 text-center'>
          <h1 className='text-5xl font-extrabold uppercase tracking-tighter text-white'>
            TU LOTE IDEAL <br />
            <span className=' font-light'>¡TE ESPERA!</span>
          </h1>
          <div className='mt-4 flex w-3/4 items-center justify-center rounded-full bg-white px-4 py-2 text-base  font-bold tracking-tighter text-pri shadow-2xl shadow-black sm:py-3  md:py-4   2xl:py-6'>
            ELIGE EL PROYECTO PARA TI
          </div>
        </div>
      </header>
    </main>
  );
};
