import { useEffect, useState } from "react";
import Masonry from "react-layout-masonry";

interface MasonryListProps {
  masonryList: {
    id: string;
    img: string;
  }[];
}

const MasonryList = ({ masonryList }: MasonryListProps) => {
  const [columns, setColumns] = useState(5);
  const [gap, setGap] = useState(16);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setColumns(windowWidth >= 1440 ? 5 : 3);
      setGap(windowWidth >= 1440 ? 16 : 3)
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="max-w-[1440px] m-auto pb-[87px] maxSm:pb-10">
      <Masonry columns={columns} gap={gap}>
        {masonryList.map(({ id, img }) => (
          <div
            key={id}
            className="masonry-item flex justify-centetr items-center gap-4 m-auto 
                                   lg:hover:scale-105 hover:drop-shadow-xl transition duration-300"
          >
            <img src={process.env.PUBLIC_URL + img} alt="cart"/>
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default MasonryList;
