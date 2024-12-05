import { Tooltip } from "@mui/material";
import React from "react";
import PrintIcon from "../../../assets/icon/PrintIcon";

function PrintBar() {
  const handlePrint = () => {
    window.print();
  };
  return (
    <div>
      <Tooltip title="طباعة">
        <div className="flex items-center ">
          <PrintIcon disabled={false} action={handlePrint} />
          <div className="w-px h-12 bg-gray-200 mx-4"></div>
        </div>
      </Tooltip>
    </div>
  );
}

export default PrintBar;
