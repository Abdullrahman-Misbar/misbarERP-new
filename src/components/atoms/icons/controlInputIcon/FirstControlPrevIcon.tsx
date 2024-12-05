import { Tooltip } from "@mui/material";
import React from "react";

function FirstControlPrevIcon() {
  return (
    <Tooltip title="السابق">
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 11 10"
          fill="none"
        >
          <g clip-path="url(#clip0_2744_59126)">
            <path d="M9.94629 11V-1L0.946289 5L9.94629 11Z" fill="#3F51B5" />
          </g>
          <defs>
            <clipPath id="clip0_2744_59126">
              <rect
                width="10"
                height="10"
                fill="white"
                transform="translate(0.446289)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
    </Tooltip>
  );
}

export default FirstControlPrevIcon;
