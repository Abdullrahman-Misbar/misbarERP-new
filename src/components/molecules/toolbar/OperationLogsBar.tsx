import { Tooltip } from "@mui/material";
import FileClock from "../../atoms/icons/FileClock";
import { useState } from "react";
import ScheduledActivitiesDrawer from "./ScheduledActivitiesDrawer";
import { useFormikContext } from "formik";

function OperationLogsBar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { values } = useFormikContext();

  const handleFileClock = () => {
    setOpenDrawer(true);
  };

  return (
    <div>
      <Tooltip title="سجل العمليات">
        <button type="button" className="flex items-center p-3">
          <FileClock action={handleFileClock} disabled={!values?.editable} />
        </button>
      </Tooltip>
      <ScheduledActivitiesDrawer open={openDrawer} setOpen={setOpenDrawer} />
    </div>
  );
}

export default OperationLogsBar;
