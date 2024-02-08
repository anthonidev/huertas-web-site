import {
  BarMoneyIcon,
  FocusIdeaIcon,
  HandFamilyIcon,
  HandMoneyIcon,
  StepBuyIcon,
  StepGetIcon,
  StepSepIcon,
} from '@/components/icons/Icons';

const howtopay = [
  {
    paragraph: [
      {
        bold: false,
        text: 'Mayor',
      },
      {
        bold: true,
        text: ' rentabilidad',
      },
    ],
    icon: BarMoneyIcon,
  },
  {
    paragraph: [
      {
        bold: true,
        text: 'Ideal para forjar',
      },
      {
        bold: false,
        text: ' un patrimonio familiar',
      },
    ],
    icon: HandFamilyIcon,
  },
  {
    paragraph: [
      {
        bold: true,
        text: 'Alta',
      },
      {
        bold: false,
        text: ' revalorización',
      },
    ],
    icon: HandMoneyIcon,
  },
  {
    paragraph: [
      {
        bold: true,
        text: 'Inversión',
      },
      {
        bold: false,
        text: ' Segura',
      },
    ],
    icon: FocusIdeaIcon,
  },
];

const stats = [
  {
    icon: BarMoneyIcon,
    title: '+ 6 AÑOS',
    description: 'de experiencia en el mercado.',
  },
  {
    icon: HandFamilyIcon,
    title: '+ DE 7 PROYECTOS',
    description: 'con la mejor eficiencia de construcción.',
  },
  {
    icon: HandFamilyIcon,
    title: '+ DE 3,000',
    description: 'Lotes vendidos en nuestros proyectos.',
  },
  {
    icon: HandFamilyIcon,
    title: '+ DE 3,000',
    description: 'Áreas verdes entregadas.',
  },
];

const stepsgetland = [
  {
    icon: StepSepIcon,
    title: 'Elígelo',
    description:
      'Selecciona el lote según nuestro plano del proyecto de tu interés.',
  },
  {
    icon: StepGetIcon,
    title: 'Visitanos',
    description: 'En nuestras oficinas para conocer nuestros proyectos',
  },
  {
    icon: StepBuyIcon,
    title: 'Compralo',
    description:
      'Accede al mejor precio ya sea al contado o con iniciales bajas.',
  },
];

export { howtopay, stats, stepsgetland };
