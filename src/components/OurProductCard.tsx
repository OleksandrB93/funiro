import HeartWhite from "./icons/HearWhite";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { listVAriatns } from "../configs/configMotion";

interface OurProductCardProps {
  ourProduct: {
    id: string;
    img: string;
    bage: string;
    title: string;
    description: string;
    price: string;
    sale: string;
  };
  i: number;
}
const OurProductsCard = ({ ourProduct,i }: OurProductCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.li
      ref={ref}
      variants={listVAriatns}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={i}
      key={ourProduct.id}
      className="bg-lightBG hover:drop-shadow-md relative group
      maxSm:w-[180px]"
    >
      <div className="relative">
        <img
          className=""
          src={process.env.PUBLIC_URL + ourProduct.img}
          alt="title"
        />
        <div
          className={`absolute top-6 right-6 flex justify-center items-center rounded-full ${
            ourProduct.bage === "New" && "bg-greenAccent text-white"
          }
                    ${ourProduct.bage.includes("%") && "bg-redAccent"}
                     ${ourProduct.bage === "" && ""}
                      w-12 h-12`}
        >
          {ourProduct.bage}
        </div>
      </div>
      <div className="pt-4 pl-4 pb-[30px]">
        <div className="mb-2">
          <p className="text-2xl text-gray1 font-semibold mb-2 maxSm:text-base">
            {ourProduct.title}
          </p>
          <p className="text-[16px] text-gray3 maxSm:text-xs">
            {ourProduct.description}
          </p>
        </div>
        <div className="flex justify-start items-center gap-x-4">
          <p className="text-xl text-gray1 font-semibold maxSm:text-xs">
            {ourProduct.price}
          </p>
          <p className="text-[16px] text-gray4 line-through maxSm:text-xs">
            {ourProduct.sale}
          </p>
        </div>
      </div>
      <div
        className="absolute bottom-[0%] right-0 w-full h-full bg-gray1 text-white opacity-0 transition-all duration-300 
                     hover:opacity-80"
      >
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center opacity-100">
          <button
            className="mb-6 px-[58px] py-3 bg-white text-primary text-[16px] font-semibold whitespace-nowrap
                             hover:bg-primary hover:text-white transition-all duration-300
                             maxSm:px-[20px]"
            type="button"
          >
            Add to cart
          </button>
          <div className="flex gap-x-12 maxSm:gap-x-4">
            <div className="flex gap-2 cursor-pointer">
              <HeartWhite />
              <button type="button">Share</button>
            </div>
            <div className="flex gap-2 cursor-pointer">
              <HeartWhite />
              <button type="button">Like</button>
            </div>
          </div>
        </div>
      </div>
    </motion.li>
  );
};

export default OurProductsCard;
