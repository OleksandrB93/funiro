const ArrowNavExplains = () => {
  return (
    <svg
      className="swiper-next absolute z-40 top-[60%] right-[26%] cursor-pointer transition-all duration-300 maxSm:hidden"
      width="48"
      height="48"
      viewBox="0 0 78 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_29_686)">
        <circle cx="39" cy="35" r="24" fill="white" />
      </g>
      <path
        d="M36.0001 28L43.0001 35L36.0001 42"
        stroke="#E89F71"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <filter
          id="filter0_d_29_686"
          x="0"
          y="0"
          width="78"
          height="78"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="1"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_29_686"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="7" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_29_686"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_29_686"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default ArrowNavExplains;
