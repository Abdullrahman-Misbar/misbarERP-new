import React from "react";

function InvoicesIcon() {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_2382_107400)">
          <path
            d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19"
            stroke="#3F51B5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H14L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21Z"
            stroke="#3F51B5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9 7H10"
            stroke="#3F51B5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9 13H15"
            stroke="#3F51B5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <g filter="url(#filter0_d_2382_107400)">
            <path
              d="M13 17H15"
              stroke="#3F51B5"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              shape-rendering="crispEdges"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_d_2382_107400"
            x="8"
            y="16"
            width="12"
            height="10"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_2382_107400"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_2382_107400"
              result="shape"
            />
          </filter>
          <clipPath id="clip0_2382_107400">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}

export default InvoicesIcon;
