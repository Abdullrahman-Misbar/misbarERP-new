import React from "react";
import AddBar from "../../AddBar";
import UndoBar from "../../UndoBar";
import DeleteBar from "../../DeleteBar";
import SaveBar from "../../SaveBar";
import CancelBar from "../../CancelBar";
import CloseBar from "../../CloseBar";
import OperationLogsBar from "../../OperationLogsBar";
import ScheduledActivities from "../../ScheduledActivities";
import { Grid } from "@mui/material";
import SelectActivityType from "../../../Selects/SelectActivityType";
import BaseInputField from "../../../../atoms/formik/BaseInputField";
import BaseInputDatepicker from "../../../../atoms/formik/BaseInputDatepicker";

function MainData() {
  return (
    <div>
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
            <SelectActivityType name="activityTypeId" />
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
            {/* <SelectAttributionTo name="assignedToId" /> */}
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
    </div>
  );
}

export default MainData;
