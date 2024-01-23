import Image from 'next/image';
import TwoColums from '../shared/TwoColums';
import { BannerPrimary } from './detail/BannerPrimary';
import Form from './detail/Form';
import Galllery from './detail/Galllery';
import MapProject from './detail/MapProject';
import Stats from './detail/Stats';
import PriceFrom from './detail/PriceFrom';

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
            <PriceFrom
              secondary_color={project.secondary_color}
              separate={project.separate}
              currency={project.currency}
              initial={project.initial}
              price={project.price}
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
            <Form
              project={project.id}
              tertiary_color={project.tertiary_color}
              primary_color={project.primary_color}
              secondary_color={project.secondary_color}
            />
          </div>
        }
      />
    </div>
  );
};

export default ProjectDetail;
