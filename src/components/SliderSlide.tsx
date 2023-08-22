import { SliderSlideProps } from "../types";
import ArrowRightExplainsIcon from "./icons/ArrowRightExplainsIcon";
import ArrowRightIcon from "./icons/ArrowRightIcon";

const SliderSlide = ({
  img,
  name,
  description,
  price,
  explainsSliderBoll,
  title,
  heroSlides,
  tipsSliderBool,
  date,
}: SliderSlideProps) => {
  return (
    <div>
      {heroSlides && (
        <div
          className={`relative flex justify-center items-start max-h-[533px] mt-[80px]`}
        >
          <div>
            <img className={``} src={process.env.PUBLIC_URL + img} alt="name" />
            <div className="absolute bottom-[7%] right-[4%] bg-white glass-effect py-6 pl-6 maxSm:py-2 maxSm:pl-2  maxSm:w-[200px]">
              <p className="text-[28px] font-semibold text-gray1 mb-1 maxSm:text-xl">
                {name}
              </p>
              <p className="text-[16px] text-gray2 mb-2  maxSm:text-xs">{description}</p>
              <div className="flex items-center">
                <p className="text-[20px] font-semibold text-gray1  maxSm:text-sm">{price}</p>
                <button type="button" className="">
                  <ArrowRightIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {explainsSliderBoll && (
        <div className={`relative flex justify-center items-start mt-[80px] `}>
          <img
            className={`min-w-[372px] max-h-[486px] object-fill maxSm:min-w-[362px]`}
            src={process.env.PUBLIC_URL + img}
            alt="name"
            width={380}
          />
          <div className="absolute bottom-[5%] right-[12%] flex items-end maxSm:right-[20%]">
            <div className={`bg-white glass-effect p-5`}>
              <p className="text-[16px] text-gray2 mb-2">{description}</p>
              <p className="text-[28px] font-bold text-gray1 mb-2 whitespace-nowrap">
                {title}
              </p>
            </div>
            <button className="bg-primary p-3" type="button">
              <ArrowRightExplainsIcon />
            </button>
          </div>
        </div>
      )}

      {tipsSliderBool && (
        <div
          className={`flex flex-col w-[391px] justify-center items-start mt-[40px] pl-[30px] pr-[5px] h-[370px] 
                    hover:drop-shadow-xl transition duration-300
                    maxSm:pl-0`}
        >
          <img
            className={` object-fill`}
            src={process.env.PUBLIC_URL + img}
            alt="name"
          />
          <div className="">
            <div className={`bg-white p-5`}>
              <p className="text-[24px] font-semibold text-gray1 mb-4">
                {description}
              </p>
              <p className="text-[14px] text-gray3">{date}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SliderSlide;
