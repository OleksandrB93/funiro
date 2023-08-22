import { FeaturesProps } from "../types";

const Features = ({ features }: FeaturesProps) => {
  return (
    <ul className="w-[1440px] flex mx-auto justify-center items-center gap-x-[92px] py-[88px]
    maxSm:flex-col maxSm:items-start maxSm: maxSm:justify-center  maxSm:gap-y-4 maxSm:w-[390px]">
      {features.map((feature) => (
        <li
          key={feature.id}
          className="flex items-center justify-center gap-x-4 pr-4 border-2 border-transparent
           hover:border-primary hover:rounded-md transition-all duration-300 hover:shadow-md maxSm:w-[300px] maxSm:justify-start maxSm:ml-10"
        >
          <div className="px-[22px]">{feature.icon}</div>
          <div className="py-4">
            <h2 className="font-semibold text-gray1 mb-[2px]">{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Features;
