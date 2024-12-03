import React from "react";

type AddIcon_TP = {
  disabled?: boolean;
  action: () => void;
};

function AddIcon({ disabled = false, action }: AddIcon_TP) {
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
          d="M11.875 13H5.875V11H11.875V5H13.875V11H19.875V13H13.875V19H11.875V13Z"
          fill={fillColor}
        />
      </svg>
    </button>
  );
}

export default AddIcon;
