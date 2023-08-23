import { NavlinksProps } from "../types";

const Navlinks = ({ links }: NavlinksProps) => {
  const handleLinkClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <ul
      className="flex justify-center items-center 
                 maxSm:gap-x-3  lg:gap-x-10 lg:mr-[43px]"
    >
      {links.map((link, index) => (
        <li
          className="flex justify-center items-center text-gray1
          hover:text-primary transition all duration-300
          gap-x-2"
          key={index}
        >
          <button className="" type="button" onClick={() => handleLinkClick(link.id)}>
            {link.pathname}
          </button>
          {link.icon}
        </li>
      ))}
    </ul>
  );
};

export default Navlinks;
