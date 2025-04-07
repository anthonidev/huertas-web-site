import Link from 'next/link';
import { BeachIcon, CampoIcon } from '../icons/Icons';

const CampoPlata = () => {
  return (
    <div className="fixed bottom-24 left-1/2 right-1/2 z-40 flex w-full max-w-2xl -translate-x-1/2 transform items-center justify-center lg:bottom-0">
      <Link
        href="/proyectos-inmobiliaria-huertas"
        className="group mx-auto flex animate-bounce items-center justify-center gap-3 rounded-full border bg-white/90 px-8 py-4 text-lg font-bold tracking-tight backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-500 hover:shadow-lg md:text-xl"
      >
        <CampoIcon className="w-8 text-green-600 group-hover:text-white md:w-10" width={40} />
        <span className="text-green-600 group-hover:text-white">CAMPO</span>
        <span className="mx-2 text-gray-400 group-hover:text-white">o</span>
        <span className="text-blue-600 group-hover:text-white">PLAYA</span>
        <BeachIcon className="w-8 text-blue-600 group-hover:text-white md:w-10" width={40} />
      </Link>
    </div>
  );
};

export default CampoPlata;
