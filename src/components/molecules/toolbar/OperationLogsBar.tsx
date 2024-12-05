

import { Tooltip } from "@mui/material";
import FileClock from "../../../assets/icon/FileClock";
import { useState } from "react";
import HistoricalDrawer from "../HistoricalDrawer";

function OperationLogsBar() {
  const [openHistoricalDrawer, setOpenHistoricalDrawer] = useState(false);

  const handleFileClock = () => {
    setOpenHistoricalDrawer(true);
  };

  return (
    <div>
      <Tooltip title="سجل العمليات">
        <div className="flex items-center p-3">
          <FileClock action={handleFileClock} />
        </div>
      </Tooltip>
      <HistoricalDrawer
        open={openHistoricalDrawer}
        setOpen={setOpenHistoricalDrawer}
      />
    </div>
  );
}

export default OperationLogsBar;
