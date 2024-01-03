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
        <figcaption className='absolute left-0 top-1/4 rounded-r-full bg-white px-5'>
          <Image
            src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${logo}`}
            alt={slogan}
            width={200}
            height={200}
            className='rounded-full'
          />
        </figcaption>
        <figcaption className=' absolute bottom-20 w-full  rounded-r-full  px-5'>
          <div className='mx-auto flex max-w-7xl justify-between '>
            <div className='mr-5 flex basis-1/2 flex-col items-center justify-center text-white'>
              <div className='inline-flex items-center justify-center text-center  font-extrabold text-white'>
                <MapPinIcon className='h-5 w-5 ' />
                {location}
              </div>
              <span className='text-[9px]'>{km}</span>
              <button className=''>Ver Proyecto</button>
            </div>
            <div className='flex  items-center justify-center space-x-5  text-white'>
              <div className='border-separate border-r pr-5'>
                <span>Inicial desde</span>
                <span>{initial}</span>
              </div>
              <div>
                <span>Inicial desde</span>
                <span>{initial}</span>
              </div>
            </div>
          </div>
        </figcaption>
      </figure>
    </header>
  );
};
