import { getProjects } from '@/components/actions/getProjects';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getProjects();

  return [
    {
      url: 'https://www.inmobiliariahuertas.com',
      lastModified: new Date().toISOString(),
    },
    {
      url: 'https://www.inmobiliariahuertas.com/proyectos',
      lastModified: new Date().toISOString(),
    },
    {
      url: 'https://www.inmobiliariahuertas.com/nosotros',
      lastModified: new Date().toISOString(),
    },
    {
      url: 'https://www.inmobiliariahuertas.com/contactanos',
      lastModified: new Date().toISOString(),
    },

    ...projects.map((project) => ({
      url: `https://www.inmobiliariahuertas.com/proyectos/${project.slug}`,
      lastModified: new Date().toISOString(),
    })),
  ];
}
