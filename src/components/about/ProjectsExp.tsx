'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Fade } from 'react-awesome-reveal';

type Props = {
  projects: Project[];
};

const ProjectsExp = ({ projects }: Props) => {
  return (
    <div className='mx-auto flex max-w-7xl px-4 py-12 sm:px-6 lg:px-8 '>
      <Fade triggerOnce cascade>
        <ul className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2  '>
          {projects.map(({ logo, id, slug, title, year_launch_image }) => (
            <li
              key={id}
              className='relative flex flex-col items-center justify-center  rounded-xl   p-4 shadow-lg'
            >
              <div className='absolute right-5 top-5 z-10 transform    p-1 transition duration-500  ease-in-out '>
                <Link href={`/proyectos/${slug}`}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${logo}`}
                    alt={title}
                    width={125}
                    height={125}
                    className='cursor-pointer rounded-full'
                  />
                </Link>
              </div>

              <Image
                src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${year_launch_image}`}
                alt={title}
                width={400}
                height={400}
                className=''
              />
            </li>
          ))}
        </ul>
      </Fade>
    </div>
  );
};

export default ProjectsExp;
