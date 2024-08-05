import { getProjects } from '@/server/actions/project';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getProjects();

  return [
    {
      url: 'https://www.inmobiliariahuertas.com',
      lastModified: new Date().toISOString(),
    },
    // {
    //   url: 'https://www.inmobiliariahuertas.com/proyectos-inmobiliaria-huertas',
    //   lastModified: new Date().toISOString(),
    // },
    // {
    //   url: 'https://www.inmobiliariahuertas.com/nosotros',
    //   lastModified: new Date().toISOString(),
    // },
    // {
    //   url: 'https://www.inmobiliariahuertas.com/contactanos',
    //   lastModified: new Date().toISOString(),
    // },
    // {
    //   url: 'https://www.inmobiliariahuertas.com/politica-de-privacidad',
    //   lastModified: new Date().toISOString(),
    // },
    // {
    //   url: 'https://www.inmobiliariahuertas.com/terminos-y-condiciones',
    //   lastModified: new Date().toISOString(),
    // },
    // {
    //   url: 'https://www.inmobiliariahuertas.com/paga-aqui',
    //   lastModified: new Date().toISOString(),
    // },

    // ...projects.map((project) => ({
    //   url: `https://www.inmobiliariahuertas.com/proyectos-inmobiliaria-huertas/${project.slug}`,
    //   lastModified: new Date().toISOString(),
    // })),
  ];
}
