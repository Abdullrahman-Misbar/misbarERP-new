import { Tooltip } from "@mui/material";
import React from "react";
import CloseIcon from "../../../assets/icon/CloseIcon";
import { useNavigate } from "react-router-dom";

function CloseBar() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };
  return (
    <div>
      <Tooltip title="إغلاق">
        <button
          className="flex items-center "
          type="button"
          onClick={handleClose}
        >
          <CloseIcon />
        </button>
      </Tooltip>
    </div>
  );
}

export default CloseBar;
