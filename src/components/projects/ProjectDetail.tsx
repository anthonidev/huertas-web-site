import React from 'react';
import { BannerPrimary } from './detail/BannerPrimary';

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
    </div>
  );
};

export default ProjectDetail;
