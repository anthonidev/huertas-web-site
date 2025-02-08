'use client';
import { Fade, JackInTheBox } from 'react-awesome-reveal';
import ProjectCard from '../shared/ProjectCard';

type Props = {
  projects: Project[];
};

export const AviableProjects = ({ projects }: Props) => {
  return (
    <main className="bg-pattern" id="proyectos-disponibles">
      <section className="mx-auto mt-10 flex min-h-screen max-w-7xl flex-col justify-evenly bg-cover bg-center px-4 sm:px-6 lg:mt-20 lg:px-8">
        <header className="flex w-20 flex-col items-start border-b-[10px] border-pri pt-20 md:w-24 lg:w-32 xl:w-72">
          <Fade direction="left" triggerOnce={true}>
            <h2 className="mt-2 text-start text-3xl font-extrabold uppercase text-sec md:text-4xl lg:text-5xl xl:text-6xl">
              PROYECTOS
              <br /> <span className="text-pri">DISPO</span>NIBLES
            </h2>
          </Fade>
        </header>
        <JackInTheBox cascade triggerOnce={true}>
          <ul className="grid grid-cols-1 gap-10 text-justify lg:grid-cols-2 xl:grid-cols-2">
            {projects &&
              projects.map((project, index) => (
                <li key={project.id}>
                  <ProjectCard
                    key={project.id}
                    project={project}
                    par={index % 2 === 0 ? true : false}
                  /> </li>
              ))}
          </ul>
        </JackInTheBox>
      </section>
    </main>
  );
};
