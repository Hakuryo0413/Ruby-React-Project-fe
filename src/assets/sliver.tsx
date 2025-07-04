import * as React from "react";
const Sliver = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="-3.5 0 32 32"
    {...props}
  >
    <path
      fill="#418ED6"
      d="m9.738 18.844 3.213 1.855L6.426 32l-1.873-4.177 5.185-8.98Z"
    />
    <path
      fill="#2B63A6"
      d="m9.738 18.844-3.213-1.856L0 28.29l4.553-.467 5.185-8.98ZM14.322 18.844l-3.213 1.855L17.634 32l1.872-4.177-5.184-8.98Z"
    />
    <path
      fill="#418ED6"
      d="m14.322 18.844 3.213-1.856L24.06 28.29l-4.554-.467-5.184-8.98Z"
    />
    <circle cx={12.025} cy={11.062} r={11.062} fill="#E3E3E3" />
    <circle cx={12.025} cy={11.062} r={8.635} fill="#595959" />
    <mask
      id="a"
      width={19}
      height={18}
      x={3}
      y={3}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <circle cx={12.486} cy={11.984} r={8.655} fill="#C28B37" />
    </mask>
    <g mask="url(#a)">
      <circle cx={12.025} cy={11.062} r={8.655} fill="url(#b)" />
    </g>
    <path
      fill="url(#c)"
      d="m12.071 5.041 1.867 3.734 3.734.467-2.564 2.875.697 4.126-3.734-1.867-3.734 1.867.703-4.126-2.57-2.875 3.734-.467 1.867-3.734Z"
    />
    <defs>
      <linearGradient
        id="b"
        x1={12.025}
        x2={12.025}
        y1={2.407}
        y2={19.717}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#9CA1A3" />
        <stop offset={1} stopColor="#9CA1A3" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="c"
        x1={12.071}
        x2={12.071}
        y1={5.041}
        y2={16.243}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F1F5F5" />
        <stop offset={0} stopColor="#fff" />
        <stop offset={1} stopColor="#F1F5F5" />
      </linearGradient>
    </defs>
  </svg>
);
export default Sliver;
