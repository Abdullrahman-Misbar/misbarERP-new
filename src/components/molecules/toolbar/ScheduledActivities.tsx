import { Tooltip } from "@mui/material";
import { useState } from "react";
import CalenderIcon from "../../../assets/icon/CalenderIcon";
import HistoricalDrawer from "../HistoricalDrawer";

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
    
        <HistoricalDrawer
        open={openHistoricalDrawer}
        setOpen={setOpenHistoricalDrawer}
      />
    </div>
  );
}

export default ScheduledActivities;