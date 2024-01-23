'use client';
import FormatCoin from '@/utils/coin';
import { MapPinIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import Image from 'next/image';
import { Fade, Flip, JackInTheBox, Zoom } from 'react-awesome-reveal';
type Props = {
  logo: string;
  primary_banner: string;
  slogan: string;
  price: number;
  currency: string;
  location: string;
  km: string;
  initial: number;
  primary_color: string;
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
  primary_color,
}: Props) => {
  const words = slogan.split(' ');
  const lastWord = words[words.length - 1];
  const styleLastWord = words.map((word, index) => {
    if (word === lastWord) {
      return (
        <span
          key={index}
          style={{ background: primary_color }}
          className='px-2'
        >
          {word}
        </span>
      );
    }
    return <span key={index}>{word} </span>;
  });
  return (
    <header
      id='featured'
      className={`relative flex h-screen  flex-col items-center justify-around space-y-5`}
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_MEDIA_URL}${primary_banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0,0,0,0.3)',
      }}
    >
      <JackInTheBox
        triggerOnce
        className='absolute left-0   hidden rounded-r-full bg-white px-10 py-8 md:block'
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${logo}`}
          alt={slogan}
          width={200}
          height={200}
          className=''
        />
      </JackInTheBox>

      <div className=' mt-10 flex border-separate flex-col items-center justify-center space-y-5'>
        <Image
          src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${logo}`}
          alt={slogan}
          width={200}
          height={200}
          className='block md:hidden'
        />
        <Fade direction='up'>
          <h1
            className={clsx(
              'title-banner max-w-xl text-center font-extrabold uppercase  leading-snug tracking-tighter  text-white xl:max-w-3xl '
            )}
          >
            {styleLastWord}
          </h1>
        </Fade>
      </div>

      <div className='mx-5 flex w-full flex-col justify-between space-y-10 md:flex-row md:space-y-0 '>
        <Fade
          direction='left'
          triggerOnce={true}
          className=' flex basis-1/2 flex-col '
        >
          <div className='mr-5 flex basis-1/2 flex-col items-center justify-center text-white'>
            <span className='text-sm font-bold uppercase md:text-xl '>
              Lotes en
            </span>
            <div className='flex  items-center justify-center text-center text-2xl font-extrabold uppercase text-white md:text-5xl '>
              <MapPinIcon className='h-7 w-7 lg:h-11 lg:w-11 ' />
              <span>{location}</span>
            </div>
            <span className='md:tex-2xl text-xl font-light '>{km}</span>
            <button className='pushable mt-5'>
              <span className='edge'></span>
              <span
                style={{ background: primary_color }}
                className='front flex items-center justify-center uppercase text-white'
              >
                Ver Proyecto
              </span>
            </button>
          </div>
        </Fade>
        <Fade
          direction='right'
          triggerOnce={true}
          className='flex  basis-1/2  items-center justify-center space-x-5  '
        >
          <div className='flex  basis-1/2  items-center justify-center space-x-5  text-white'>
            <div className='flex border-separate flex-col items-center border-r-4 pr-5'>
              <span className='text-xs   md:text-xl  '>Inicial desde</span>
              <span className='text-3xl font-extrabold uppercase text-white md:text-5xl  '>
                {FormatCoin(initial, currency)}
              </span>
            </div>
            <div className='flex border-separate flex-col items-center'>
              <span className='text-xs  lg:text-sm  '>Al contando desde</span>
              <span className='text-2xl font-extrabold uppercase text-white md:text-4xl   '>
                {FormatCoin(price, currency)}
              </span>
            </div>
          </div>
        </Fade>
      </div>
    </header>
  );
};
