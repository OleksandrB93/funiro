import { useState, useEffect } from "react";
import SunIcon from "./icons/SunIcon";
import MoonIcon from "./icons/MoonIcon";

const ThemeMode = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="">
      <button className="theme-toggle-button" onClick={toggleTheme}>
        {theme === "light" ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  );
};

export default ThemeMode;

// import React, { useState, useEffect } from "react";
// import SunIcon from "./icons/SunIcon";
// import MoonIcon from "./icons/MoonIcon";
// import DesktopIcon from "./icons/DesctopIcon";
// import { motion } from "framer-motion";
// import ArrowDown from "./icons/ArrowDown";
// import { useRef } from "react";
// import { listVAriatns } from "../configs/configMotion";

// const ThemeMode = () => {
//   const [theme, setTheme] = useState("light");
//   const [systemTheme, setSystemTheme] = useState("light");

//   const ref = useRef(null);

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");
//     const currentSystemTheme = window.matchMedia("(prefers-color-scheme: dark)")
//       .matches
//       ? "dark"
//       : "light";
//     setTheme(savedTheme || currentSystemTheme);
//     setSystemTheme(currentSystemTheme);

//     // following theme system
//     const systemThemeChangeHandler = (event: any) => {
//       const newSystemTheme = event.matches ? "dark" : "light";
//       setSystemTheme(newSystemTheme);

//       if (newSystemTheme !== theme) {
//         setTheme(newSystemTheme);
//         document.documentElement.setAttribute("data-theme", newSystemTheme);
//         localStorage.setItem("theme", newSystemTheme);
//       }
//     };

//     const systemThemeMediaQuery = window.matchMedia(
//       "(prefers-color-scheme: dark)"
//     );
//     systemThemeMediaQuery.addListener(systemThemeChangeHandler);

//     return () => {
//       systemThemeMediaQuery.removeListener(systemThemeChangeHandler);
//     };
//   }, []);

//   // const toggleTheme = () => {
//   //   const newTheme = theme === "light" ? "dark" : "light";
//   //   setTheme(newTheme);
//   //   document.documentElement.setAttribute("data-theme", newTheme);
//   //   localStorage.setItem("theme", newTheme);
//   // };

//   const setThemeAndLocalStorage = (newTheme: any) => {
//     setTheme(newTheme);
//     document.documentElement.setAttribute("data-theme", newTheme);
//     localStorage.setItem("theme", newTheme);
//   };

//   const setSystemThemeMode = () => {
//     const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
//       .matches
//       ? "dark"
//       : "light";
//     setThemeAndLocalStorage(systemTheme);
//   };

//   const iconData = [
//     {
//       id: "light",
//       icon: <SunIcon />,
//       action: () => setThemeAndLocalStorage("light"),
//       animation: { rotate: 360 },
//     },
//     {
//       id: "dark",
//       icon: <MoonIcon />,
//       action: () => setThemeAndLocalStorage("dark"),
//       animation: { rotate: 360 },
//     },
//     {
//       id: "system",
//       icon: <DesktopIcon />,
//       action: setSystemThemeMode,
//       animation: { scale: 1.1 },
//     },
//   ];

//   return (
//     <div className="">
//       <div className="">
//         <ArrowDown />
//       </div>
//       <div className="flex flex-col gap-y-1 bg-zinc-400 p-1 rounded-md">
//         {iconData.map(({ id, icon, action, animation },i) => (
//           <motion.button
//             variants={listVAriatns}
//             initial="hidden"
//             animate="visible"
//             custom={i}
//             className="p-1 hover:shadow-md rounded-md hover:bg-primary"
//             key={id}
//             whileTap={animation}
//             onClick={action}
//           >
//             {icon}
//           </motion.button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ThemeMode;
