
type DeleteIcon_TP = {
  disabled?: boolean;
  action?: () => void;
  fillCustom?:string
};

function DeleteIcon({ disabled = false, action , fillCustom }: DeleteIcon_TP) {
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
          d="M6.875 19C6.875 20.1 7.775 21 8.875 21H16.875C17.975 21 18.875 20.1 18.875 19V7H6.875V19ZM19.875 4H16.375L15.375 3H10.375L9.375 4H5.875V6H19.875V4Z"
          fill={fillCustom || fillColor}
          fillOpacity="1" 
        />
      </svg>
    </button>
  );
}

export default DeleteIcon;
