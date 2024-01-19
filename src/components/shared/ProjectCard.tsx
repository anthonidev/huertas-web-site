'use client';
import { MapPinIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { HandMoneyIcon } from '../icons/Icons';
import cl from 'clsx';
import Link from 'next/link';
import FormatCoin from '@/utils/coin';
type Props = {
  project: Project;
  par: boolean;
};

const ProjectCard = ({
  project: {
    banner_card,
    currency,
    initial,
    km,
    location,
    logo,
    min_area,
    price,
    title,
    slug,
  },
  par,
}: Props) => {
  return (
    <article className='mx-auto my-10  max-w-7xl'>
      <Link href={`/proyectos/${slug}`}>
        <header className='mx-5 flex justify-end  '>
          <h3
            className={cl(
              'inline-flex items-center rounded-t-3xl px-4   text-lg   text-white',
              par ? 'bg-pri' : 'bg-sec'
            )}
          >
            <HandMoneyIcon className='  text-white ' width={40} hanging={40} />
            Lotes desde {min_area}m²
          </h3>
        </header>

        <figure className='relative'>
          <div className='absolute left-0 top-5 rounded-r-full bg-white p-1'>
            <Image
              src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${logo}`}
              alt={title}
              width={75}
              height={75}
              className='rounded-full'
            />
          </div>
          <Image
            className='rounded-xl'
            src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${banner_card}`}
            alt={title}
            width={800}
            height={800}
          />
          <figcaption className='absolute bottom-0 flex w-full justify-between '>
            <div className='basis-1/2'>
              <div className='rounded-tr-xl bg-pri py-2  text-center text-white'>
                <span className='text-xs'>Inicial desde</span> <br />
                <span className='text-xl font-extrabold md:text-2xl'>
                  {FormatCoin(initial, currency)}
                </span>
              </div>
              <div className=' rounded-bl-xl bg-sec py-2 text-center text-white'>
                <span className='text-xs'>Desde</span> <br />
                <span className='text-xl font-extrabold md:text-2xl'>
                  {FormatCoin(price, currency)}
                </span>
              </div>
            </div>
            <div className='mr-5 flex basis-1/2 flex-col items-center justify-center text-white'>
              <div className='inline-flex items-center justify-center text-center text-3xl  font-extrabold text-white'>
                <MapPinIcon className='h-5 w-5 ' />
                {location}
              </div>
              <span className='text-base'>{km}</span>
            </div>
          </figcaption>
        </figure>
      </Link>
    </article>
  );
};

export default ProjectCard;
