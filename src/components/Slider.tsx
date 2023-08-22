import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { SliderProps } from "../types";
import SliderSlide from "./SliderSlide";
import { useState } from "react";
import SliderNavigation from "./SliderNavigation";
import ShopNow from "./ShopNow";
import ArrowNavExplains from "./icons/ArrowNavExplains";
import TipsSliderNavigation from "./TipsSliderNavigation";

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
  explainsSliderBoll,
  tipsSliderBool,
}: SliderProps) => {
  const [canGoNext, setCanGoNext] = useState(true);
  const [canGoPrev, setCanGoPrev] = useState(false);

  const handleSlideChange = (swiper: { isEnd: any; isBeginning: any }) => {
    setCanGoNext(!swiper.isEnd);
    setCanGoPrev(!swiper.isBeginning);
  };

  return (
    <div
      className={`relative ${
        heroSlides &&
        " pt-[151px] bg-gradient-to-r from-gradientStart from-60% to-gradientEnd to-40% maxSm:pt-10"
      }
      ${explainsSliderBoll && "pb-[20px]"} 
      ${tipsSliderBool && "pt-[0px]"}`}
    >
      <h2 className="visually-hidden">{title}</h2>
      {tipsSliderBool && (
        <h2 className="text-center  text-[40px] font-bold mt-[44px]">
          Tips & Tricks
        </h2>
      )}

      <Swiper
        className={` w-full relative ${
          heroSlides && "max-w-[1440px] max-h-[582px]"
        }
        ${explainsSliderBoll && "max-w-[875px] maxSm:max-w-[390px]"}
        ${tipsSliderBool && "max-w-[1285px] maxSm:w-[390px]"}`}
        modules={[Pagination, Autoplay, Navigation, Pagination]}
        autoplay={autoplay}
        effect={effect}
        breakpoints={breackpoints}
        navigation={arrowNavigation ? navigation : false}
        onSlideChange={handleSlideChange}
        pagination={pagination}
      >
        {heroSlides && <ShopNow />}
        {heroSlides && (
          <div className="swiper-pagination2 transform translate-y-[-475px]  flex justify-center items-center gap-1"></div>
        )}
        {explainsSliderBoll && (
          <div className="swiper-pagination2 flex ml-[428px] mt-2 items-center gap-2"></div>
        )}
        {tipsSliderBool && (
          <div className="swiper-pagination2 flex pb-[40px] mt-4 justify-center items-center gap-4"></div>
        )}
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <SliderSlide
              {...slide}
              explainsSliderBoll={explainsSliderBoll}
              heroSlides={heroSlides}
              tipsSliderBool={tipsSliderBool}
            />
          </SwiperSlide>
        ))}
        {arrowNavigation && heroSlides && (
          <SliderNavigation canGoPrev={canGoPrev} canGoNext={canGoNext} />
        )}
        {arrowNavigation && explainsSliderBoll && <ArrowNavExplains />}
        {arrowNavigation && tipsSliderBool && (
          <TipsSliderNavigation canGoPrev={canGoPrev} canGoNext={canGoNext} />
        )}
      </Swiper>
    </div>
  );
};

export default Slider;
