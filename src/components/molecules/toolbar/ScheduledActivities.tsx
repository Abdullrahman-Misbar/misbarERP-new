import { Tooltip } from "@mui/material";
import { useState } from "react";
import CalenderIcon from "../../atoms/icons/CalenderIcon";
import HistoricalDrawer from "./Histroical/HistoricalDrawer";
import { useFormikContext } from "formik";

function ScheduledActivities() {
  const [openHistoricalDrawer, setOpenHistoricalDrawer] = useState(false);
  const handleCalendar = () => {
    setOpenHistoricalDrawer(true);
  };
  const { values } = useFormikContext();
  return (
    <div>
      <Tooltip title="الانشطة المجدولة">
        <div className="flex items-center p-3">
          <CalenderIcon action={handleCalendar} disabled={!values?.editable} />
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
