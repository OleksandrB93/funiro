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
  name?: string;
  description: string;
  price?: string;
  title?: string;
  heroSlides?: boolean;
  isActive?: boolean;
  explainsSliderBoll?: boolean;
  tipsSliderBool?: boolean;
  date?: string;
};

export interface SliderProps {
  slides: SliderSlideProps[];
  effect?: string;
  heroSlides?: boolean;
  explainsSliderBoll?: boolean;
  tipsSliderBool?: boolean;
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

export type OurProductProps = {
  ourProduct: {
    id: string;
    img: string;
    title: string;
    description: string;
    price: string;
    sale: string;
    bage: string;
  }[];
};

export type TipsSliderProps = {
  tipsTricks: {
    id: string;
    img: string;
    description: string;
    date: string;
  };
};
