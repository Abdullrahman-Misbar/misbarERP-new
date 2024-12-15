import { Grid } from "@mui/material";
import { useFormikContext } from "formik";
import BaseInputField from "../../../../../atoms/formik/BaseInputField";
import LayoutMainData from "../../../../../molecules/LayoutMainData";
import DistributionMethod from "../../../../../molecules/Selects/SelectDistributionMethod";
import MainCopyComp from "./toolbarComponents/MainCopyComp";
import { Values_TP } from "./Types&Validation";
import SelectDistributionMethod from "../../../../../molecules/Selects/SelectDistributionMethod";

function MainData() {
  const { values, setFieldValue } = useFormikContext<Values_TP>();

  return (
    <LayoutMainData
      componentCopy={<MainCopyComp />}
      className="p-0 overflow-hidden"
    >
      <div>
        <Grid container rowSpacing={2} columnSpacing={4} p={3}>
          <Grid item xs={12} sm={6}>
            <BaseInputField
              name="expenseType"
              placeholder="نوع المصاريف"
              type="text"
              label="نوع المصاريف"
            />
          </Grid>

          {/* Distribution Method */}
          <Grid item xs={12} sm={6}>
            <SelectDistributionMethod name="distributionMethod" />
          </Grid>

          {/* Expense Account */}
          <Grid item xs={12} sm={12}>
            <BaseInputField
              name="expenseAccountId"
              placeholder="حساب المصروف"
              type="number"
              label="حساب المصروف"
            />
          </Grid>

          {/* Notes */}
          <Grid item xs={12} sm={12}>
            <BaseInputField
              name="note"
              placeholder="ملاحظات"
              type="text"
              label="ملاحظات"
            />
          </Grid>
        </Grid>
      </div>
    </LayoutMainData>
  );
}

export default MainData;
