import React from 'react';
import { BannerPrimary } from './detail/BannerPrimary';
import TwoColums from '../shared/TwoColums';
import Form from './detail/Form';
import Stats from './detail/Stats';
import Image from 'next/image';
import MapProject from './detail/MapProject';
import { ObrasIcon } from '../icons/Icons';
import Galllery from './detail/Galllery';

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
        primary_color={project.primary_color}
      />

      <Galllery
        gallery={project.gallery}
        primary_color={project.primary_color}
        secondary_color={project.secondary_color}
      />

      <TwoColums
        left={
          <div>
            <Stats
              areas={project.areas}
              primary_color={project.primary_color}
            />
            <Image
              src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${project.secondary_banner}`}
              width={800}
              height={800}
              alt={project.title}
            />
            <MapProject
              km={project.km}
              location={project.location}
              photo_map={project.photo_map}
              title={project.title}
            />
          </div>
        }
        right={
          <div>
            <Form project={project.id} />
          </div>
        }
      />
    </div>
  );
};

export default ProjectDetail;
