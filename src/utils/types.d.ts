interface Project {
  id: string;
  banner_card: string;
  logo: string;
  currency: 'USD' | 'PEN';
  title: string;
  location: string;
  km: string;
  initial: number;
  price: number;
  min_area: string;
  slug: string;
  year_launch_image: string;
}

interface ProjectDetail extends Project {
  areas: Area[];
  primary_banner: string;
  secondary_banner: string;
  photo_map: string;
  primary_color: string;
  secondary_color: string;
  tertiary_color: string;
  slogan: string;
  separate: number;
  gallery: Gallery[];
  lng: string;
  lat: string;
}
interface Area {
  id: string;
  icon: string;
  alt: string;
}

interface Gallery {
  id: number;
  image: string;
}

interface FormContact {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
  project?: string;
}

interface Comment {
  id: number;
  name: string;
  comment: string;
  occupation: string;
  photo: string;
}

interface FormPayHere {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  policy: boolean;
  amount: number;

  country: string;
  department: string;
  province: string;
  district: string;
}
