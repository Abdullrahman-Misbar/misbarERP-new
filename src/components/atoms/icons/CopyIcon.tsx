type CopyIcon_TP = {
  disabled?: boolean;
  action: () => void;
};
function CopyIcon({ disabled, action }: CopyIcon_TP) {
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
          d="M9.875 18C9.325 18 8.85417 17.8042 8.4625 17.4125C8.07083 17.0208 7.875 16.55 7.875 16V4C7.875 3.45 8.07083 2.97917 8.4625 2.5875C8.85417 2.19583 9.325 2 9.875 2H18.875C19.425 2 19.8958 2.19583 20.2875 2.5875C20.6792 2.97917 20.875 3.45 20.875 4V16C20.875 16.55 20.6792 17.0208 20.2875 17.4125C19.8958 17.8042 19.425 18 18.875 18H9.875ZM9.875 16H18.875V4H9.875V16ZM5.875 22C5.325 22 4.85417 21.8042 4.4625 21.4125C4.07083 21.0208 3.875 20.55 3.875 20V6H5.875V20H16.875V22H5.875Z"
          fill={fillColor}
          fillOpacity="1"
        />
      </svg>
    </button>
  );
}

export default CopyIcon;
