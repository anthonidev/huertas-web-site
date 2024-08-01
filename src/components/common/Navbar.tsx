'use client';
import { navigationLinks, sectionsColors } from '@/utils/navigation';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LogoIcon } from '../icons/Icons';

export const Navbar = () => {
  const [currentSection, setCurrentSection] = useState('');
  const path = usePathname();

  useEffect(() => {
    // Función para manejar el evento de desplazamiento
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Iterar a través de las secciones y encontrar la actual en función de la posición de desplazamiento
      sectionsColors.forEach((section, index) => {
        const sectionElement = document.getElementById(section.anchor);

        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop;
          const sectionBottom = sectionTop + sectionElement.clientHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setCurrentSection(section.anchor);
          }
        }
      });
    };
    sectionsColors;
    // Agregar el evento de desplazamiento al montar el componente
    window.addEventListener('scroll', handleScroll);

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Disclosure
      as="nav"
      className={clsx(
        'fixed z-50 w-full transition-all duration-500 ease-in-out',
        sectionsColors.find((section) => section.anchor === currentSection)?.bg || 'bg-pri',
        sectionsColors.find((section) => section.anchor === currentSection) && 'bg-opacity-95',
      )}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-row justify-between sm:flex-col lg:flex-row">
              <div className="flex">
                <div className="flex h-24 shrink-0 items-center">
                  <Link href="/">
                    <LogoIcon height={80} width={200} className="text-white" />
                  </Link>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {navigationLinks.map((link) => {
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={clsx(
                        'inline-flex items-center px-2 pt-1 font-light text-white md:text-base lg:text-xl',
                        path === link.href && 'my-5 border-b-2 border-white',
                      )}
                    >
                      {link.title}
                    </Link>
                  );
                })}

                <Link
                  href="/paga-aqui"
                  className="m-5 flex cursor-pointer items-center justify-center rounded-md border-1 border-dashed bg-pri px-4 py-2 font-light text-white"
                >
                  Pagar aquí
                </Link>
              </div>

              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="absolute -inset-0.5" />

                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigationLinks.map((link) => {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-white"
                  >
                    {link.title}
                  </Link>
                );
              })}
              <Link
                href="/paga-aqui"
                className="m-5 flex cursor-pointer items-center justify-center rounded-md border-1 border-dashed bg-pri px-4 py-2 font-light text-white"
              >
                Pagar aquí
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
