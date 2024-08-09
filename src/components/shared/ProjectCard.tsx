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
  project: { banner_card, currency, initial, km, location, logo, min_area, price, title, slug },
  par,
}: Props) => {
  return (
    <article className="group mx-auto my-10 max-w-7xl transform transition duration-500 ease-in-out hover:-translate-y-3">
      <Link href={`/proyectos-inmobiliaria-huertas/${slug}`}>
        <header className="mx-5 flex justify-end">
          <h3
            className={cl(
              'inline-flex items-center rounded-t-3xl px-4 text-lg text-white',
              par ? 'bg-pri' : 'bg-sec',
            )}
          >
            <HandMoneyIcon className="text-white" width={40} hanging={40} />
            Lotes desde {min_area}m²
          </h3>
        </header>

        <figure className="relative">
          <div className="absolute left-0 top-5 z-10 transform rounded-r-full bg-white p-1 transition duration-500 ease-in-out group-hover:scale-110">
            <Image src={logo} alt={title} width={75} height={75} className="rounded-full" />
          </div>
          <Image
            className="h-[350px] rounded-xl bg-black object-cover transition duration-500 ease-in-out group-hover:brightness-75 group-hover:filter"
            src={banner_card}
            alt={title}
            width={1000}
            height={1000}
          />
          <figcaption className="absolute bottom-0 flex w-full justify-between">
            <div className="basis-1/2">
              <div className="rounded-tr-xl bg-pri py-2 text-center text-white">
                <span className="text-xs">Inicial desde</span> <br />
                <span className="text-xl font-extrabold md:text-2xl">
                  {FormatCoin(initial, currency)}
                </span>
              </div>
              <div className="rounded-bl-xl bg-sec py-2 text-center text-white">
                <span className="text-xs">Desde</span> <br />
                <span className="text-xl font-extrabold md:text-2xl">
                  {FormatCoin(price, currency)}
                </span>
              </div>
            </div>
            <div className="mr-5 flex basis-1/2 flex-col items-center justify-center text-white">
              <div className="inline-flex items-center justify-center text-center text-xl font-extrabold text-white lg:text-3xl">
                <MapPinIcon className="h-5 w-5" />
                {location}
              </div>
              <span className="text-sm lg:text-base">{km}</span>
            </div>
          </figcaption>
        </figure>
      </Link>
    </article>
  );
};

export default ProjectCard;
