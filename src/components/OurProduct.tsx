import { OurProductProps } from "../types";
import OurProductsCard from "./OurProductCard";

const OurProduct = ({ ourProduct }: OurProductProps) => {
  return (
    <>
      <h2 className="text-center text-[40px] font-bold mb-8">Our Product</h2>
      <ul className=" grid grid-cols-4 gap-8 w-[1236px] mx-auto
      maxSm:grid-cols-2 maxSm:w-[370px] maxSm:gap-2 maxSm:mx-auto">
        {ourProduct.map((product) => (
          <OurProductsCard key={product.id} ourProduct={product} />
        ))}
      </ul>
      <button
        className="border border-primary py-4 px-[82px] block mx-auto mt-8 mb-[44px] 
                         hover:bg-primary hover:text-white transition-all duration-300 hover:rounded-md hover:shadow-lg"
      >
        Show More
      </button>
    </>
  );
};

export default OurProduct;
