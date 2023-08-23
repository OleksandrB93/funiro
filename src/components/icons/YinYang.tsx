const YinYang = ({ theme }: any) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M53.2 10.8c11.7 11.7 11.7 30.7 0 42.4c-5.9 5.9-15.4 5.9-21.2 0S26.1 37.9 32 32c5.9-5.9 5.9-15.4 0-21.2s-15.4-5.9-21.2 0C22.5-.9 41.5-.9 53.2 10.8"
        fill={theme === "dark" ? "#292929" : "#e89f71"}
      ></path>

      <g fill={theme === "dark" ? "#e89f71" : "#000000"}>
        <path d="M10.8 53.2C-.9 41.5-.9 22.5 10.8 10.8c5.9-5.9 15.4-5.9 21.2 0c5.9 5.9 5.9 15.4 0 21.2s-5.9 15.4 0 21.2s15.4 5.9 21.2 0c-11.7 11.7-30.7 11.7-42.4 0"></path>

        <circle cx="42.6" cy="42.6" r="5.6"></circle>
      </g>

      <circle
        cx="21.4"
        cy="21.4"
        r="5.6"
        fill={theme === "dark" ? "#292929" : "#e89f71"}
      ></circle>
    </svg>
  );
};

export default YinYang;
