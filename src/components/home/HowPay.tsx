import { howtopay } from '@/utils/data';
import React from 'react';
import clsx from 'clsx';
export const HowPay = () => {
  return (
    <article id='como-pagar' className=' bg-pattern pt-20 '>
      <section className=' mx-auto flex h-screen max-w-7xl flex-col items-center  justify-evenly bg-cover bg-center px-4 sm:px-6 lg:px-8'>
        <header className='pt-20  font-light uppercase text-pri '>
          <h2 className='text-base text-pri-200 md:text-xl lg:text-3xl xl:text-5xl'>
            <span className=' text-2xl font-extrabold md:text-4xl lg:text-5xl xl:text-7xl'>
              ¡Que hoy
            </span>
            sea tu mejor
          </h2>
          <figure className='flex text-5xl   2xl:text-6xl'>
            <CustomTextImage
              className=' text-[50px] font-[1000] md:text-[100px] lg:text-[125px] xl:text-[150px] 2xl:text-[175px] '
              image='/imgs/inver.webp'
              text='INVER'
            />
            <CustomTextImage
              className=' text-[50px] font-[1000] md:text-[100px] lg:text-[125px] xl:text-[150px] 2xl:text-[175px] '
              image='/imgs/sion!.webp'
              text='SIÓN!'
            />
          </figure>
        </header>
        <main>
          <p className='py-10 text-center  text-2xl font-bold uppercase tracking-tight text-pri-200 md:text-4xl lg:text-5xl xl:text-6xl'>
            ¿PORQUÉ
            <span className='mx-3 bg-sec px-2 font-extrabold uppercase text-white'>
              COMPRAR
            </span>
            UN LOTE?
          </p>
          <section className='mt-10 grid grid-cols-2 gap-4 text-justify text-pri-200 lg:grid-cols-4'>
            {howtopay.map(({ paragraph, icon: Icon }, index) => (
              <p
                key={index}
                className='text-center  text-lg text-pri-200 md:text-xl lg:text-2xl xl:text-3xl'
              >
                <Icon className='mx-auto mb-4 h-32 w-32 text-pri-200' />
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
