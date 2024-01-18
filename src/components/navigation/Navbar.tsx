'use client';
import { navigationLinks, sectionsColors } from '@/utils/navigation';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LogoIcon } from '../icons/Icons';
import clsx from 'clsx';

export const Navbar = () => {
  const [bgColor, setBgColor] = useState('transparent');
  const path = usePathname();

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    const calculateBackgroundColor = (sectionId: string, color: string) => {
      const sectionTop = document.getElementById(sectionId)?.offsetTop || 0;
      if (scrollPosition >= sectionTop) {
        setBgColor(color);
      }
    };

    sectionsColors.forEach((section) => {
      calculateBackgroundColor(section.anchor, section.bg);
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Disclosure
      as='nav'
      className={`${bgColor}  fixed top-0 z-40 w-full bg-opacity-95 `}
    >
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='flex  flex-row justify-between sm:flex-col lg:flex-row'>
              <div className='flex'>
                <div className='flex h-24 shrink-0 items-center'>
                  <Link href='/'>
                    <LogoIcon height={80} width={200} className='text-white' />
                  </Link>
                </div>
              </div>
              <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
                {navigationLinks.map((link) => {
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={clsx(
                        'inline-flex items-center px-2 pt-1 font-light text-white md:text-base lg:text-xl ',
                        path === link.href && 'my-5 border-b-2 border-white'
                      )}
                    >
                      {link.title}
                    </Link>
                  );
                })}
              </div>

              <div className='-mr-2 flex items-center sm:hidden'>
                <Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                  <span className='absolute -inset-0.5' />
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 pb-3 pt-2'>
              {navigationLinks.map((link) => {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className='block rounded-md px-3 py-2 text-base font-medium text-white '
                  >
                    {link.title}
                  </Link>
                );
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
