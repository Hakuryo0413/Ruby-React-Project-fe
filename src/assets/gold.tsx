import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="-3.5 0 32 32"
    {...props}
  >
    <path
      fill="#CE4444"
      d="m9.738 18.844 3.213 1.855L6.426 32l-1.873-4.177 5.185-8.98Z"
    />
    <path
      fill="#983535"
      d="m9.738 18.844-3.213-1.856L0 28.29l4.553-.467 5.185-8.98ZM14.322 18.844l-3.213 1.855L17.634 32l1.872-4.177-5.184-8.98Z"
    />
    <path
      fill="#CE4444"
      d="m14.322 18.844 3.213-1.856L24.06 28.29l-4.554-.467-5.184-8.98Z"
    />
    <path
      fill="url(#a)"
      d="M22.994 11.062c0 6.11-4.953 11.062-11.063 11.062S.87 17.172.87 11.062C.87 4.952 5.822 0 11.931 0c6.11 0 11.063 4.953 11.063 11.062Z"
    />
    <path
      fill="#A88300"
      d="M20.567 11.062a8.635 8.635 0 1 1-17.27 0 8.635 8.635 0 0 1 17.27 0Z"
    />
    <path
      fill="#C28B37"
      d="M21.048 11.984a8.655 8.655 0 1 1-17.31 0 8.655 8.655 0 0 1 17.31 0Z"
    />
    <path
      fill="#C09525"
      d="M20.587 11.062a8.655 8.655 0 1 1-17.31 0 8.655 8.655 0 0 1 17.31 0Z"
    />
    <path
      fill="url(#b)"
      d="m11.978 5.041 1.867 3.734 3.734.467-2.564 2.875.697 4.126-3.734-1.867-3.734 1.867.703-4.126-2.57-2.875 3.734-.467 1.867-3.734Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={11.18}
        x2={12.681}
        y1={4.032}
        y2={31.965}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFC600" />
        <stop offset={1} stopColor="#FFDE69" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={11.978}
        x2={11.978}
        y1={5.041}
        y2={16.243}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFCDD" />
        <stop offset={1} stopColor="#FFE896" />
      </linearGradient>
    </defs>
  </svg>
)
export default SvgComponent
