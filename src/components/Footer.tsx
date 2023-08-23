import LoacalIcon from "./icons/LocalIcon";
import PhoneIcon from "./icons/PhoneIcon";
import TelegaIcon from "./icons/TelegaIcon";

const Footer = () => {
  const handleLinkClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex justify-center mx-auto gap-x-[80px] max-w-[1440px] py-[50px] relative maxSm:flex-col maxSm:py-2">
      <div className="before:absolute before:w-full before:h-[1px] before:bg-gray5 before:top-0 before:left-0 before:right-0" />
      <h2 className="text-2xl text-black font-bold mb-4 hover:text-primary transition-all duration-300 maxSm:text-sm maxSm:block hidden maxSm:text-center">
        Funiro.
      </h2>
      <div className="maxSm:text-sm maxSm:text-center maxSm:flex maxSm:gap-x-5 maxSm:mx-auto">
        <div className="maxSm:text-start">
          <h2 className="text-2xl text-black font-bold mb-4 hover:text-primary transition-all duration-300 maxSm:text-sm maxSm:hidden">
            Funiro.
          </h2>
          <p className="text-[16px] text-gray2 mb-4 hover:text-primary transition-all duration-300 maxSm:text-xs maxSm:mb-1">
            Worldwide furniture store since <br /> 2020. We sell over 1000+
            branded <br />
            products on our website
          </p>
        </div>
        <div className="maxSm:text-start">
          <div className="flex gap-y-4 mb-4 maxSm:justify-center maxSm:mb-1">
            <LoacalIcon />
            <p className="text-[16px] text-gray2 hover:text-primary transition-all duration-300 maxSm:text-xs">
              Sawojajar Malang, Indonesia
            </p>
          </div>

          <address className="flex mb-4 maxSm:justify-start maxSm:mb-1">
            <PhoneIcon />
            <a
              className="text-[16px] text-gray2 hover:text-primary transition-all duration-300 maxSm:text-xs"
              href="tel:+62894563455"
            >
              +6289 456 3455
            </a>
          </address>
          <p className="text-[16px] text-gray2 hover:text-primary transition-all duration-300 maxSm:text-xs maxSm:hidden">
            www.funiro.com
          </p>
        </div>
      </div>
      <p className="text-[16px] text-gray2 hover:text-primary transition-all duration-300 maxSm:text-xs maxSm:text-center maxSm:block hidden">
        www.funiro.com
      </p>
      <div className="maxSm:flex maxSm:justify-beetwen flex gap-x-[80px]">
        <div className="flex flex-col items-start gap-y-4 maxSm:items-center">
          <h2 className="text-2xl text-black font-bold maxSm:text-sm">Menu</h2>
          <button
            type="button"
            onClick={() => handleLinkClick("Products")}
            className=" text-[16px] text-gray2 hover:text-primary transition-all duration-300 maxSm:text-[10px]"
          >
            Products
          </button>
          <button
            onClick={() => handleLinkClick("Rooms")}
            className=" text-[16px] text-gray2 hover:text-primary transition-all duration-300 maxSm:text-[10px]"
          >
            Rooms
          </button>
          <button
            onClick={() => handleLinkClick("Inspirations")}
            className=" text-[16px] text-gray2 hover:text-primary transition-all duration-300 maxSm:text-[10px]"
          >
            Inspirations
          </button>
          <button
            onClick={() => handleLinkClick("About Us")}
            className=" text-[16px] text-gray2 hover:text-primary transition-all duration-300 maxSm:text-[10px]"
          >
            About Us
          </button>
          <button 
          onClick={() => handleLinkClick("")}
          className="text-[16px] text-gray2 hover:text-primary transition-all duration-300 maxSm:text-[10px]">
            Terms & Policy
          </button>
        </div>

        <div className="flex flex-col gap-y-4 maxSm:items-center">
          <h2 className="text-2xl text-black font-bold maxSm:text-sm">
            Account
          </h2>
          <a className=" text-[16px] text-gray2 hover:text-primary transition-all duration-300 maxSm:text-[10px]">
            My Account
          </a>
          <a className=" text-[16px] text-gray2 hover:text-primary transition-all duration-300 maxSm:text-[10px]">
            Checkout
          </a>
          <a className=" text-[16px] text-gray2 hover:text-primary transition-all duration-300 maxSm:text-[10px]">
            My Cart
          </a>
          <a className=" text-[16px] text-gray2 hover:text-primary transition-all duration-300 maxSm:text-[10px]">
            My catalog
          </a>
        </div>

        <div className="flex flex-col gap-y-4 maxSm:text-sm maxSm:items-center">
          <h2 className="text-2xl text-black font-bold maxSm:text-sm ">
            Stay Connected
          </h2>
          <a className=" text-[16px] text-gray2 hover:text-primary transition-all duration-300 maxSm:text-[10px]">
            Facebook
          </a>
          <a className=" text-[16px] text-gray2 hover:text-primary transition-all duration-300 maxSm:text-[10px]">
            Instagram
          </a>
          <a className=" text-[16px] text-gray2 hover:text-primary transition-all duration-300 maxSm:text-[10px]">
            Twitter
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-y-4 maxSm:items-center maxSm:mb-3">
        <h2 className="text-2xl text-black font-bold maxSm:text-sm">
          Stay Updated
        </h2>
        <div className="flex">
          <input
            className="bg-lightBG pl-4 pt-[10px] pb-[11px] mr-1 maxSm:text-xs maxSm:pt-2 maxSm:pb-2 maxSm:pl-2"
            type="text"
            placeholder="Enter your email"
          />
          <button
            className="bg-primary p-[13px] hover:rounded-md transition-all duration-300 maxSm:p-1"
            type="button"
          >
            <TelegaIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
