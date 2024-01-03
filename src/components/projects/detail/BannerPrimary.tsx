import FormatCoin from '@/utils/coin';
import { MapPinIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react';

type Props = {
  logo: string;
  primary_banner: string;
  slogan: string;
  price: number;
  currency: string;
  location: string;
  km: string;
  initial: number;
};

export const BannerPrimary = ({
  logo,
  primary_banner,
  slogan,
  currency,
  initial,
  km,
  location,
  price,
}: Props) => {
  return (
    <header id='featured' className='relative h-screen '>
      <section className='absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2  transform text-center lg:top-1/3'>
        <h1 className=' title-banner px-14 font-extrabold uppercase  tracking-tighter text-white'>
          {slogan}
        </h1>
      </section>
      <figure>
        <Image
          src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${primary_banner}`}
          alt='Invierte con Huertas Inmobiliaria'
          className='h-screen w-full object-cover object-center brightness-75 filter'
          width={1920}
          height={1080}
        />
        <figcaption className='absolute left-0 top-1/4 block rounded-r-full bg-white px-5 lg:hidden'>
          <Image
            src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${logo}`}
            alt={slogan}
            width={100}
            height={100}
          />
        </figcaption>
        <figcaption className='absolute left-0 top-1/4 hidden rounded-r-full bg-white px-5 lg:block'>
          <Image
            src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${logo}`}
            alt={slogan}
            width={200}
            height={200}
          />
        </figcaption>
        <figcaption className=' absolute bottom-20 w-full  rounded-r-full  px-5 '>
          <div className='mx-auto flex max-w-7xl flex-col justify-between space-y-10 md:flex-row md:space-y-0 '>
            <div className='mr-5 flex basis-1/2 flex-col items-center justify-center text-white'>
              <span className='text-base font-bold uppercase md:text-xl lg:text-2xl xl:text-3xl'>
                Lotes en
              </span>
              <div className='flex  items-center justify-center text-center text-4xl font-extrabold uppercase text-white md:text-5xl  lg:text-6xl xl:text-7xl'>
                <MapPinIcon className='h-7 w-7 lg:h-11 lg:w-11 ' />
                <span>{location}</span>
              </div>
              <span className='md:tex-2xl text-xl font-light lg:text-3xl xl:text-4xl 2xl:text-5xl'>
                {km}
              </span>
              <button className='mt-5 w-1/2 bg-yellow-800 py-2 text-lg'>
                Ver Proyecto
              </button>
            </div>
            <div className='flex  items-center justify-center space-x-5  text-white'>
              <div className='flex border-separate flex-col items-center border-r-4 pr-5'>
                <span className='text-base   md:text-xl lg:text-2xl xl:text-3xl'>
                  Inicial desde
                </span>
                <span className='text-4xl font-extrabold uppercase text-white md:text-5xl  lg:text-6xl xl:text-7xl'>
                  {FormatCoin(initial, currency)}
                </span>
              </div>
              <div className='flex border-separate flex-col items-center'>
                <span className='text-base   md:text-lg lg:text-xl xl:text-2xl'>
                  Al contando desde
                </span>
                <span className='text-3xl font-extrabold uppercase text-white md:text-4xl  lg:text-5xl xl:text-6xl'>
                  {FormatCoin(price, currency)}
                </span>
              </div>
            </div>
          </div>
        </figcaption>
      </figure>
    </header>
  );
};
