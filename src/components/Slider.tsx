import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { SliderProps } from "../types";
import SliderSlide from "./SliderSlide";
import { useRef, useState } from "react";
import SliderNavigation from "./SliderNavigation";
import ShopNow from "./ShopNow";

const Slider = ({
  slides,
  title,
  breackpoints,
  effect,
  arrowNavigation,
  autoplay,
  heroSlides,
  navigation,
  pagination,
}: SliderProps) => {
  const [canGoNext, setCanGoNext] = useState(true);
  const [canGoPrev, setCanGoPrev] = useState(false);

  const handleSlideChange = (swiper: { isEnd: any; isBeginning: any }) => {
    setCanGoNext(!swiper.isEnd);
    setCanGoPrev(!swiper.isBeginning);
  };
  const swiperRef = useRef(null);

  return (
    <div className="relative  bg-gradient-to-r from-[#F9F1E7] from-60% to-[#FCF8F3] to-40% pt-[151px] ">
      <h2 className="visually-hidden">{title}</h2>

      <Swiper
        className=" w-full relative"
        modules={[Pagination, Autoplay, Navigation, Pagination]}
        autoplay={autoplay}
        effect={effect}
        breakpoints={breackpoints}
        navigation={arrowNavigation ? navigation : false}
        onSlideChange={handleSlideChange}
        pagination={{
          el: ".swiper-pagination2",
          bulletClass: `swiper-pagination-bullet`,
          bulletActiveClass: "swiper-pagination-bullet-active",
          clickable: true,
        }}
      >
        {heroSlides && <ShopNow />}
        {heroSlides && (
          <div className="swiper-pagination2 min-w-full  translate-y-[-1850%] lg:translate-y-[-2190%] flex justify-center items-center gap-1"></div>
        )}

        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <SliderSlide {...slide} />
          </SwiperSlide>
        ))}
        {arrowNavigation && (
          <SliderNavigation canGoPrev={canGoPrev} canGoNext={canGoNext} />
        )}
      </Swiper>
    </div>
  );
};

export default Slider;
