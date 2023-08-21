import ArrowDisIcon from "./icons/ArrowDisIcon";
import ArrowNavIcon from "./icons/ArrowNavIcon";

type SliderNavigationProps = {
  canGoPrev: boolean;
  canGoNext: boolean;
};

const SliderNavigation = ({ canGoNext, canGoPrev }: SliderNavigationProps) => {
  return (
    <>
      <div
        className={`absolute right-[13%] top-2 rotate-180 swiper-prev z-10  `}
      >
        {canGoPrev ? (
          <ArrowNavIcon />
        ) : (
          <div className="rotate-180">
            <ArrowDisIcon />
          </div>
        )}
      </div>
      <div className={`absolute right-[9.5%] top-2 swiper-next z-10 `}>
        {canGoNext ? (
          <ArrowNavIcon />
        ) : (
          <div className="rotate-180">
            <ArrowDisIcon />
          </div>
        )}
      </div>
    </>
  );
};

export default SliderNavigation;
