import { FeaturesProps } from "../types";

const Features = ({ features }: FeaturesProps) => {
  return (
    <div className="flex justify-center items-center gap-x-[92px] py-[88px]">
      {features.map((feature) => (
        <div
          key={feature.id}
          className="flex items-center justify-center gap-x-4"
        >
          <div className="px-[22px]">{feature.icon}</div>
          <div>
            <h2 className="font-semibold text-gray1">{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
