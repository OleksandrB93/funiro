import ThemeMode from "./ThemeMode";
import CartIcon from "./icons/CartIcon";
import HeartIcon from "./icons/HeartIcon";

const HeaderTools = () => {
  return (
    <div className="flex gap-x-8 justify-center items-center ml-[121px] maxSm:ml-4 maxSm:gap-x-6">
      <HeartIcon />
      <CartIcon />
      <ThemeMode />
      <div>
        <img
          className=" hover:drop-shadow-lg transition duration-300"
          src={process.env.PUBLIC_URL + "/imgs/Avatar.png"}
          alt=""
        />
      </div>
    </div>
  );
};

export default HeaderTools;
