import { PhoneIcon } from '@heroicons/react/24/solid';

export const Contact = () => {
  return (
    <section className=' flex  items-center justify-center bg-pri  bg-pattern '>
      <div className='mx-auto flex w-full max-w-7xl flex-col items-start justify-start px-4  sm:px-6 lg:px-8'>
        <header className=' mb-20 rounded-b-[50px] bg-sec px-5  pb-10 pt-12 text-3xl text-white  md:px-16 md:pb-20 md:pt-36 md:text-5xl'>
          Contáctanos:
        </header>
        <div className='flex w-full flex-col items-center justify-between space-y-10 pb-36 md:flex-row md:space-y-0'>
          <p className='text-2xl font-normal text-white  lg:text-4xl'>
            No dejes <strong>pasar</strong> <br /> esta gran{' '}
            <strong>oportunidad</strong> <br /> estamos para ti
          </p>
          <div className='flex flex-col items-end justify-end space-y-4'>
            <div className='flex w-full items-center space-x-5'>
              <PhoneIcon className='h-12 w-12 rounded-full border-2 p-2 text-white' />
              <p className='text-4xl font-extrabold text-white lg:text-7xl'>
                997 002 337
              </p>
            </div>

            <p className='text-xl font-extralight text-white'>
              Tu lote ideal te espera !Llamános!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
