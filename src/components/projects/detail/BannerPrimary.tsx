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

export const BannerPrimary = ({ logo, primary_banner, slogan }: Props) => {
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
        <figcaption className='absolute bottom-0 left-0 rounded-r-full bg-white px-5'>
          <Image
            src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${logo}`}
            alt={slogan}
            width={200}
            height={200}
            className='rounded-full'
          />
        </figcaption>
      </figure>
    </header>
  );
};
