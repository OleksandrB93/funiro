import { NavlinksProps } from "../types";

const Navlinks = ({ links }: NavlinksProps) => {
  return (
    <ul
      className="flex justify-center items-center 
                   lg:gap-x-10 lg:mr-[43px]"
    >
      {links.map((link, index) => (
        <li
          className="flex justify-center items-center text-gray1
                      lg:gap-x-2"
          key={index}
        >
          <button type="button">{link.pathname}</button>
          {link.icon}
        </li>
      ))}
    </ul>
  );
};

export default Navlinks;
