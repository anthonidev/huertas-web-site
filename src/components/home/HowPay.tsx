import { howtopay } from '@/utils/data';
import React from 'react';
import clsx from 'clsx';
export const HowPay = () => {
  return (
    <article id='como-pagar' className='bg-pattern  pt-20 '>
      <section className=' mx-auto flex h-screen max-w-7xl flex-col items-center  justify-evenly bg-cover bg-center px-4 sm:px-6 lg:px-8'>
        <header className='text-pri pt-20 text-5xl font-light uppercase '>
          <h2 className=' text-pri-200'>
            <span className=' text-7xl font-extrabold  '>¡Que hoy</span>
            sea tu mejor
          </h2>
          <figure className='flex'>
            <CustomTextImage
              className='text-[175px] font-[1000]'
              image='/imgs/inver.webp'
              text='INVER'
            />
            <CustomTextImage
              className='text-[175px] font-[1000]'
              image='/imgs/sion!.webp'
              text='SIÓN!'
            />
          </figure>
        </header>
        <main>
          <p className='text-pri-200 py-10 text-center text-6xl font-bold uppercase tracking-tight'>
            ¿PORQUÉ
            <span className='bg-sec mx-3 px-2 font-extrabold uppercase text-white'>
              COMPRAR
            </span>
            UN LOTE?
          </p>
          <section className='text-pri-200 mt-10 grid grid-cols-2 gap-4 text-justify lg:grid-cols-4'>
            {howtopay.map(({ paragraph, icon: Icon }, index) => (
              <p key={index} className='text-pri-200 text-center text-3xl'>
                <Icon className='text-pri-200 mx-auto mb-4 h-32 w-32' />
                {paragraph.map(({ bold, text }, i) => (
                  <span
                    key={i}
                    className={clsx(
                      bold ? 'font-extrabold' : 'font-normal',
                      'text-pri-200'
                    )}
                  >
                    {text} <br />
                  </span>
                ))}
              </p>
            ))}
          </section>
        </main>
      </section>
    </article>
  );
};

type CustomTextImageProps = {
  className?: string;
  image: string;
  text: string;
};

const CustomTextImage = ({ className, image, text }: CustomTextImageProps) => (
  <div
    className={clsx('bg-cover bg-center text-transparent', className)}
    style={{
      backgroundImage: `url('${image}')`,
      WebkitTextFillColor: 'transparent',
      WebkitBackgroundClip: 'text',
    }}
  >
    {text}
  </div>
);
