import React from 'react';
import { BannerPrimary } from './detail/BannerPrimary';
import TwoColums from '../shared/TwoColums';
import Form from './detail/Form';
import Stats from './detail/Stats';
import Image from 'next/image';
import MapProject from './detail/MapProject';

type Props = {
  project: ProjectDetail;
};

const ProjectDetail = ({ project }: Props) => {
  return (
    <div>
      <BannerPrimary
        logo={project.logo}
        primary_banner={project.primary_banner}
        slogan={project.slogan}
        currency={project.currency}
        price={project.price}
        location={project.location}
        km={project.km}
        initial={project.initial}
      />
      <TwoColums
        left={
          <div>
            <Stats areas={project.areas} />
            <Image
              src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${project.secondary_banner}`}
              width={800}
              height={800}
              alt={project.title}
            />
            <MapProject />
            <Stats areas={project.areas} />
          </div>
        }
        right={
          <div>
            <Form />
          </div>
        }
      />
    </div>
  );
};

export default ProjectDetail;
