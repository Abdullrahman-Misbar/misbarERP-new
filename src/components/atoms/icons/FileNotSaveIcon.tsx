import React from "react";

function FileNotSaveIcon({ disabled = false }) {
  const fillColor = disabled ? "#B0B0B0" : "#3F51B5"; //
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
    >
      <path
        d="M6.875 22C6.325 22 5.85417 21.8042 5.4625 21.4125C5.07083 21.0208 4.875 20.55 4.875 20V4C4.875 3.45 5.07083 2.97917 5.4625 2.5875C5.85417 2.19583 6.325 2 6.875 2H14.875L20.875 8V12.35C20.5583 12.2333 20.2333 12.1458 19.9 12.0875C19.5667 12.0292 19.225 12 18.875 12V9H13.875V4H6.875V20H13.225C13.3583 20.3833 13.525 20.7417 13.725 21.075C13.925 21.4083 14.1583 21.7167 14.425 22H6.875ZM16.775 21.5L15.375 20.1L17.475 18L15.375 15.9L16.775 14.5L18.875 16.6L20.975 14.5L22.375 15.9L20.3 18L22.375 20.1L20.975 21.5L18.875 19.425L16.775 21.5Z"
        fill={fillColor}
        fill-opacity="1"
      />
    </svg>
  );
}

export default FileNotSaveIcon;
