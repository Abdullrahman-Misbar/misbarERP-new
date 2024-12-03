import React from "react";

type SaveFileIcon_TP = {
  disabled?: boolean;
  action: () => void;
};

function SaveFileIcon({ disabled = false, action }: SaveFileIcon_TP) {
  const fillColor = disabled ? "#B0B0B0" : "#3F51B5";

  return (
    <button disabled={disabled} onClick={action} type="button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
      >
        <path
          d="M11.825 18L17.475 12.35L16.025 10.9L11.8 15.125L9.7 13.025L8.275 14.45L11.825 18ZM6.875 22C6.325 22 5.85417 21.8042 5.4625 21.4125C5.07083 21.0208 4.875 20.55 4.875 20V4C4.875 3.45 5.07083 2.97917 5.4625 2.5875C5.85417 2.19583 6.325 2 6.875 2H14.875L20.875 8V20C20.875 20.55 20.6792 21.0208 20.2875 21.4125C19.8958 21.8042 19.425 22 18.875 22H6.875ZM13.875 9V4H6.875V20H18.875V9H13.875Z"
          fill={fillColor}
        />
      </svg>
    </button>
  );
}

export default SaveFileIcon;
