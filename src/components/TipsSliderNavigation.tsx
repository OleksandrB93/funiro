import ArrowNavExplains from "./icons/ArrowNavExplains";

type SliderNavigationProps = {
  canGoPrev: boolean;
  canGoNext: boolean;
};

const TipsSliderNavigation = ({
  canGoNext,
  canGoPrev,
}: SliderNavigationProps) => {
  return (
    <div className="maxSm:hidden">
      <div
        className={`absolute -left-[-0.5%] top-[48%] rotate-180 swiper-prev z-[100] `}
      >
        {canGoPrev ? (
          <ArrowNavExplains />
        ) : (
          <div className="rotate-180 z-[100]">
            <ArrowNavExplains />
          </div>
        )}
      </div>
      <div className={`absolute -right-[0%] top-[40%] swiper-next z-50`}>
        {canGoNext ? (
          <ArrowNavExplains />
        ) : (
          <div className="rotate-180 ">
            <ArrowNavExplains />
          </div>
        )}
      </div>
    </div>
  );
};

export default TipsSliderNavigation;
