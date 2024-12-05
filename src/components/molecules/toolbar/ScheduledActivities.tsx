import { Tooltip } from "@mui/material";
import React, { useState } from "react";
import CalenderIcon from "../../atoms/icons/CalenderIcon";
import ScheduledActivitiesDrawer from "./ScheduledActivitiesDrawer";

function ScheduledActivities() {
  const [openHistoricalDrawer, setOpenHistoricalDrawer] = useState(false);
  const handleCalendar = () => {
    setOpenHistoricalDrawer(true);
  };
  return (
    <div>
      <Tooltip title="الانشطة المجدولة">
        <div className="flex items-center p-3">
          <CalenderIcon action={handleCalendar} />
        </div>
      </Tooltip>
      <ScheduledActivitiesDrawer
        open={openHistoricalDrawer}
        setOpen={setOpenHistoricalDrawer}
      />
    </div>
  );
}

export default ScheduledActivities;
