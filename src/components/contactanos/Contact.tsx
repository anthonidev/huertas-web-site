import { PhoneIcon } from '@heroicons/react/24/solid';

export const Contact = () => {
  return (
    <section className=' flex  items-center justify-center bg-pri  bg-pattern '>
      <div className='mx-auto flex w-full max-w-7xl flex-col items-start justify-start px-4  sm:px-6 lg:px-8'>
        <header className=' mb-20 rounded-b-[50px] bg-sec px-16  pb-20 pt-36 text-5xl text-white'>
          Contáctanos:
        </header>
        <div className='flex w-full justify-between pb-36'>
          <p className='text-4xl font-normal text-white'>
            No dejes <strong>pasar</strong> <br /> esta gran{' '}
            <strong>oportunidad</strong> <br /> estamos para ti
          </p>
          <div className='flex flex-col items-end justify-end space-y-4'>
            <div className='flex w-full items-center space-x-5'>
              <PhoneIcon className='h-12 w-12 rounded-full border-2 p-2 text-white' />
              <p className='text-7xl font-extrabold text-white'>997 002 337</p>
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
