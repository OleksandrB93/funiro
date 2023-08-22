const Explains = () => {
  return (
    <div className="w-[564px] flex justify-center items-center maxSm:w-[390px] maxSm:text-center maxSm:mt-[50px]">
      <div className="w-[378px]">
        <div className="text-[40px] font-bold mb-2 maxSm:text-2xl">
          <p className="whitespace-nowrap">50+ Beautiful rooms</p> inspiration
        </div>
        <p className="text-[16px] mb-6 maxSm:text-sm">
          Our designer already made a lot of beautiful <br /> prototipe of rooms
          that inspire you
        </p>
        <button
          className="text-[16px] bg-primary text-white py-3 px-10 
          hover:bg-white hover:text-black border border-primary hover:border-black hover:rounded-md transition-all duration-300"
          type="button"
        >
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Explains;
