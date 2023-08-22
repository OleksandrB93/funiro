import { useEffect, useState } from "react";
import { navlinks } from "../data/navlinks";
import HeaderTools from "./HeaderTools";
import Logo from "./Logo";
import Navlinks from "./Navlinks";
import SearchIcon from "./icons/SearchIcon";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scroll = window.scrollY;
    if (scroll > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-20 maxSm:max-w-[390px] ${
        isScrolled ? "maxSm:py-1 shadow-lg" : "maxSm:py-5 py-10"
      }   backdrop-blur-lg transition-all ease-in-out duration-300`}
    >
      <div
        className="flex justify-center items-center mx-[100px]
      maxSm:flex-col ma"
      >
        <div className="flex">
          <Logo />
          <Navlinks links={navlinks} />
        </div>
        <div className="flex">
          <div className="relative">
            <input
              className="w-[473px] pl-[44px] py-3 maxSm:w-[200px] maxSm:text-sm maxSm:pl-8"
              type="text"
              placeholder="Search for minimalist chair"
            />
            <SearchIcon />
          </div>
          <HeaderTools />
        </div>
      </div>
    </header>
  );
};

export default Header;
