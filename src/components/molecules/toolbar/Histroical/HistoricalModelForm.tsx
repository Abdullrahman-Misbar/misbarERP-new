import { Grid } from "@mui/material";
import BaseInputDatepicker from "../../../atoms/formik/BaseInputDatepicker";
import BaseInputField from "../../../atoms/formik/BaseInputField";
import SelectActivityType from "../../Selects/SelectActivityType";
import AddBar from "../AddBar";
import CancelBar from "../CancelBar";
import CloseBar from "../CloseBar";
import DeleteBar from "../DeleteBar";
import OperationLogsBar from "../OperationLogsBar";
import SaveBar from "../SaveBar";
import ScheduledActivities from "../ScheduledActivities";
import UndoBar from "../UndoBar";
import SelectAttributionTo from "../../Selects/SelectAttributionTo";

function HistoricalModelForm() {
  return (
    <div className="min-h-[400px] overflow-hidden ">
      <div className="flex items-center justify-between ">
        <div className="flex items-center justify-start ">
          <AddBar />
          <UndoBar />
          <DeleteBar />
          <SaveBar />
          <CancelBar />
          <CloseBar />
        </div>
        <div className="flex items-center justify-start ">
          <OperationLogsBar />
          <ScheduledActivities />
        </div>
      </div>
      <Grid container spacing={2} className="!my-2">
        {/* Each input takes 6 columns */}
        <Grid item xs={12} sm={6}>
          <SelectActivityType name="activityType" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <BaseInputField
            type="text"
            name="activitySubject"
            placeholder="موضوع النشاط"
            label="موضوع النشاط"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <BaseInputDatepicker
            name="activityDate"
            placeholder="تاريخ النشاط"
            label="تاريخ النشاط"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* <SelectAttributionTo name="ddd" /> */}
          
        </Grid>
        <Grid item xs={12}>
          <BaseInputField
            type="text"
            name="activityDescription"
            placeholder="وصف النشاط"
            label="وصف النشاط"
          />
        </Grid>
        <Grid item xs={12}>
          <BaseInputField
            name="notes"
            placeholder="ملاحظات"
            label="ملاحظات"
            type="text"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default HistoricalModelForm;
