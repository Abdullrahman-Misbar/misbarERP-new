import React from "react";
type Export_TP = {
  disabled?: boolean;
};
function ExportIcon({ disabled }: Export_TP) {
  const fillColor = disabled ? "#B0B0B0" : "#3F51B5";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none"
    >
      <path
        d="M10 0H2C0.9 0 0.0100002 0.9 0.0100002 2L0 18C0 19.1 0.89 20 1.99 20H14C15.1 20 16 19.1 16 18V6L10 0ZM14 18H2V2H9V7H14V18ZM4 13.01L5.41 14.42L7 12.84V17H9V12.84L10.59 14.43L12 13.01L8.01 9L4 13.01Z"
        fill={fillColor}
        fill-opacity="1"
      />
    </svg>
  );
}

export default ExportIcon;