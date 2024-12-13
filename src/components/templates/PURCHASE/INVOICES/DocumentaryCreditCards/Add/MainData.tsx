import { Grid } from "@mui/material";
import BaseInputField from "../../../../../atoms/formik/BaseInputField";
import LayoutMainData from "../../../../../molecules/LayoutMainData";
import SelectCards from "../../../../../molecules/Selects/SelectCards";
import MainCopyComp from "./toolbarComponents/MainCopyComp";

function MainData() {
  return (
    <LayoutMainData
      componentCopy={<MainCopyComp />}
      //@ts-ignore
      className="overflow-hidden"
      visibility={{
        undoBar: false,
        deleteBar: false,
        addBar: false,
        printBar: false,
        uploadFileBar: false,
        approvedBar: false,
        cancelBar: false,
        settingBar: false,
        closeBar: false,
      }}
    >
      <div>
        <Grid
          container
          rowSpacing={4}
          columnSpacing={4}
          p={3}
          className="overflow-hidden"
        >
          <Grid item xs={12} sm={6}>
            <BaseInputField
              name="cardCode"
              placeholder=" رمز البطاقة"
              type="text"
              label=" رمز البطاقة"
              disabled
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BaseInputField
              name="cardName"
              placeholder=" اسم البطاقة"
              type="text"
              label=" اسم البطاقة"
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <SelectCards name="mainCardId" />
          </Grid>
          <Grid item xs={12} sm={12}>
            <BaseInputField
              name="note"
              placeholder=" ملاحظات"
              type="text"
              label=" ملاحظات"
            />
          </Grid>
        </Grid>
      </div>
    </LayoutMainData>
  );
}

export default MainData;
