const Logo = () => {
  return (
    <div className="">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="font-bold text-black text-2xl mr-[41px] cursor-pointer
                    hover:text-primary transition all duration-300
                    maxSm:text-xl maxSm:mr-4"
      >
        Funiro.
      </button>
    </div>
  );
};

export default Logo;
