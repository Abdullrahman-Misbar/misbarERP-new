import { Tooltip } from "@mui/material";
import { useState } from "react";
import FileClock from "../../../assets/icon/FileClock";
import ScheduledActivitiesDrawer from "./ScheduledActivitiesDrawer";

function OperationLogsBar() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleFileClock = () => {
    setOpenDrawer(true);
  };

  return (
    <div>
      <Tooltip title="سجل العمليات">
        <div className="flex items-center p-3">
          <FileClock action={handleFileClock} />
        </div>
      </Tooltip>

      <ScheduledActivitiesDrawer
        open={openDrawer}
        setOpen={setOpenDrawer}
      />
    </div>
  );
}

export default OperationLogsBar;
