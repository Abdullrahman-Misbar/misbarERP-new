import { Tooltip } from "@mui/material";
import React from "react";
import CloseIcon from "../../atoms/icons/CloseIcon";
import { useNavigate } from "react-router-dom";
import { useFormikContext } from "formik";

function CloseBar() {
  const navigate = useNavigate();
  const { values } = useFormikContext<any>();
  const handleClose = () => {
    navigate(values?.IndexMainPath);
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
