import { SliderSlideProps } from "../types";
import ArrowRightIcon from "./icons/ArrowRightIcon";

const SliderSlide = ({
  img,
  name,
  discription,
  price,
}: SliderSlideProps) => {
  return (
    <div className="relative flex justify-center items-center max-h-[533px] mt-[80px]">
      <img className="" src={img} alt="name" />
      <div className="absolute  bottom-[7%] right-[4%] bg-white glass-effect py-6 pl-6">
        <p className="text-[28px] font-semibold text-gray1 mb-1">{name}</p>
        <p className="text-[16px] text-gray2 mb-2">{discription}</p>
        <div className="flex items-center">
          <p className="text-[20px] font-semibold text-gray1">
            {price}
          </p>
          <ArrowRightIcon />
        </div>
      </div>
    </div>
  );
};

export default SliderSlide;
