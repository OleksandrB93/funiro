export interface NavLink {
  pathname: string;
  icon?: any;
}

export type NavlinksProps = {
  links: NavLink[];
};

export type SliderSlideProps = {
  id: string;
  img: string;
  img2x?: string;
  imgLG?: string;
  imgLG2x?: string;
  name: string;
  discription: string;
  price: string;
};

export interface SliderProps {
  slides: SliderSlideProps[];
  effect?: string;
  heroSlides?: boolean;
  title: string;
  breackpoints: any;
  autoplay: any;
  navigation: any;
  arrowNavigation: boolean;
  pagination: any;
}

export type FeaturesProps = {
  features: {
    id: string;
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
};