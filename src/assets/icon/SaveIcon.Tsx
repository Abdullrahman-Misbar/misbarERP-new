import React from "react";

type SaveIcon_TP = {
  disabled?: boolean;
  action: () => void;
};

function SaveIcon({ disabled = false, action }: SaveIcon_TP) {
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
          d="M21.875 7V19C21.875 19.55 21.6792 20.0208 21.2875 20.4125C20.8958 20.8042 20.425 21 19.875 21H5.875C5.325 21 4.85417 20.8042 4.4625 20.4125C4.07083 20.0208 3.875 19.55 3.875 19V5C3.875 4.45 4.07083 3.97917 4.4625 3.5875C4.85417 3.19583 5.325 3 5.875 3H17.875L21.875 7ZM19.875 7.85L17.025 5H5.875V19H19.875V7.85ZM12.875 18C13.7083 18 14.4167 17.7083 15 17.125C15.5833 16.5417 15.875 15.8333 15.875 15C15.875 14.1667 15.5833 13.4583 15 12.875C14.4167 12.2917 13.7083 12 12.875 12C12.0417 12 11.3333 12.2917 10.75 12.875C10.1667 13.4583 9.875 14.1667 9.875 15C9.875 15.8333 10.1667 16.5417 10.75 17.125C11.3333 17.7083 12.0417 18 12.875 18ZM6.875 10H15.875V6H6.875V10ZM5.875 7.85V19V5V7.85Z"
          fill={fillColor}
        />
      </svg>
    </button>
  );
}

export default SaveIcon;
