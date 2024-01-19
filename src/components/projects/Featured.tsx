export const Featured = () => {
  return (
    <main className='min-h-screen bg-pattern' id='featured-project'>
      <header
        style={{
          backgroundImage: 'url(/imgs/bannerProject.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0,0,0,0.3)',
        }}
        className='relative min-h-screen items-end  '
      >
        <div className='absolute bottom-0 right-0 z-10 flex flex-col  items-center  justify-center  bg-sec/90 p-20 text-center  lg:bottom-auto lg:top-2/4 lg:rounded-l-2xl'>
          <h1 className='text-5xl font-extrabold uppercase tracking-tighter text-white md:text-6xl'>
            TU LOTE IDEAL <br />
            <span className=' font-light'>¡TE ESPERA!</span>
          </h1>
          <div className='mt-4 flex w-3/4 items-center justify-center rounded-full bg-white px-4 py-2 text-base font-bold  tracking-tighter text-pri shadow-2xl shadow-black sm:py-3 md:py-4  md:text-lg   2xl:py-6'>
            ELIGE EL PROYECTO PARA TI
          </div>
        </div>
      </header>
    </main>
  );
};
