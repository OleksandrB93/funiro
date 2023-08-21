import CartIcon from "./icons/CartIcon";
import HeartIcon from "./icons/HeartIcon";

const HeaderTools = () => {
  return (
    <div className="flex gap-x-8 justify-center items-center ml-[121px]">
      <HeartIcon />
      <CartIcon />
      <div>
        <img className="w-10 h-10" src="/imgs/Avatar.png" alt="" />
      </div>
    </div>
  );
};

export default HeaderTools;
