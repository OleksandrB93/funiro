import { motion } from "framer-motion";
import { slideInFromLeft } from "../configs/configMotion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const ShopNow = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      className="maxSm:hidden absolute bg-white/70 z-[10] top-[0%] left-[9.5%] p-[60px] max-w-[494px] flex flex-col glass-effect"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={slideInFromLeft}
      transition={{ duration: 0.7 }}
    >
      <h1 className="font-bold text-[55px] text-gray1 mb-4">
        High-Quality Furniture Just For You
      </h1>
      <p className="text-[20px] text-gray3 mb-12">
        Our furniture is made from selected <br /> and best quality materials
        that are suitable for your dream home
      </p>
      <button
        className="w-full py-6 bg-primary text-white text-[20px] border-2 border-transparent
      hover:bg-primary/20 hover:rounded-lg hover:text-black hover:font-bold hover:border-primary hover:shadow-xl transition-all duration-300"
      >
        Shop Now
      </button>
    </motion.div>
  );
};

export default ShopNow;
