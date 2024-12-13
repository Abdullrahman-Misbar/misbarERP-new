import { Grid } from "@mui/material";
import { useFormikContext } from "formik";
import BaseInputDatepicker from "../../../../../atoms/formik/BaseInputDatepicker";
import BaseInputField from "../../../../../atoms/formik/BaseInputField";
import LayoutMainData from "../../../../../molecules/LayoutMainData";
import SelectWarehouse from "../../../../../molecules/Selects/SelectWarehouse";
import MainCopyComp from "./toolbarComponents/MainCopyComp";
import { Values_TP } from "./Types&Validation";

function MainData() {
  const { values, setFieldValue } = useFormikContext<Values_TP>();

  return (
    <LayoutMainData
      componentCopy={<MainCopyComp />}
      //@ts-ignore
      // newValues={newValues}
      className="p-0 overflow-hidden"
    >
      <div>
        <Grid container rowSpacing={4} columnSpacing={4} p={3}>
          <Grid item xs={12} sm={6}>
            <BaseInputField
              name="invoiceCode"
              placeholder="نوع المصاريف"
              type="text"
              
              label="نوع المصاريف"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BaseInputField
              name="invoiceCode"
              placeholder="حساب المصروف"
              type="text"
              
              label="حساب المصروف"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <BaseInputField
              name="note"
              placeholder="  ملاحظات "
              type="text"
              label=" ملاحظات  "
            />
          </Grid>
        </Grid>
      </div>
    </LayoutMainData>
  );
}

export default MainData;
