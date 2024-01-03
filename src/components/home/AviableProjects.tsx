'use client';
import { useEffect, useState } from 'react';
// import { projects } from '@/utils/pruebaData';
import ProjectCard from '../shared/ProjectCard';

type Props = {
  projects: Project[];
};

export const AviableProjects = ({ projects }: Props) => {
  return (
    <main className='bg-pattern ' id='proyectos-disponibles'>
      <section className=' mx-auto flex min-h-screen max-w-7xl flex-col  justify-evenly bg-cover bg-center px-4 sm:px-6 lg:px-8'>
        <header className='flex w-20 flex-col items-start border-b-[10px] border-pri-200 pt-20 md:w-24 lg:w-32 xl:w-72'>
          <h2 className='mt-2  text-start  text-3xl font-extrabold uppercase text-sec-100 md:text-4xl lg:text-5xl xl:text-6xl'>
            PROYECTOS
            <br /> <span className=' text-pri-200'>DISPO</span>NIBLES
          </h2>
        </header>
        <div className='grid grid-cols-1 gap-10 text-justify text-pri-200 lg:grid-cols-2'>
          {projects &&
            projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                par={index % 2 === 0 ? true : false}
              />
            ))}
        </div>
      </section>
    </main>
  );
};
