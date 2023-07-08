const Logo = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
    {...{ className }}
    fill="none"
    viewBox="0 0 48 48"
  >
    <g clipPath="url(#clip0_1_98)">
      <mask
        id="mask0_1_98"
        style={{ maskType: "luminance" }}
        width="48"
        height="48"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path
          fill="#fff"
          d="M48 24C48 10.745 37.255 0 24 0S0 10.745 0 24s10.745 24 24 24 24-10.745 24-24z"
        ></path>
      </mask>
      <g mask="url(#mask0_1_98)">
        <path fill="#FFA02E" d="M48 0H0v48h48V0z"></path>
        <g filter="url(#filter0_f_1_98)">
          <path
            fill="#E80560"
            d="M-1.65 35.88l-5.19 18.306 5.488 19.14 61.425-17.613-9.618-33.543-13.802-2.81-18.7 23.205L-1.65 35.88z"
          ></path>
        </g>
        <g style={{ mixBlendMode: "overlay" }} filter="url(#filter1_f_1_98)">
          <path
            fill="#331D4A"
            d="M31.876 25.32L19.926-.683l-36.587-.444-21.549 53.322 50.799 16.53 3.853-20.095-21.145 4.389-15.487-28.455 52.066.756z"
          ></path>
        </g>
      </g>
    </g>
    <defs>
      <filter
        id="filter0_f_1_98"
        width="134.113"
        height="121.166"
        x="-40.44"
        y="-14.24"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feBlend
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        ></feBlend>
        <feGaussianBlur
          result="effect1_foregroundBlur_1_98"
          stdDeviation="16.8"
        ></feGaussianBlur>
      </filter>
      <filter
        id="filter1_f_1_98"
        width="137.286"
        height="137.052"
        x="-71.81"
        y="-34.727"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feBlend
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        ></feBlend>
        <feGaussianBlur
          result="effect1_foregroundBlur_1_98"
          stdDeviation="16.8"
        ></feGaussianBlur>
      </filter>
      <clipPath id="clip0_1_98">
        <path fill="#fff" d="M0 0H48V48H0z"></path>
      </clipPath>
    </defs>
  </svg>
)

export default Logo
