import { Grid } from "@mui/material";
import { useFormikContext } from "formik";
import BaseInputDatepicker from "../../../../atoms/formik/BaseInputDatepicker";
import BaseInputField from "../../../../atoms/formik/BaseInputField";

import LayoutMainData from "../../../../molecules/LayoutMainData";
import SelectCurrency from "../../../../molecules/Selects/SelectCurrency";

import SelectAccount from "../../../../molecules/Selects/SelectAccount";
import SelectCostCenter from "../../../../molecules/Selects/SelectCostCenter";
import ReceiptTable from "../../../../molecules/tablesDynamic/ReceiptTable";
import MainCopyComp from "./toolbarComponents/MainCopyComp";
import { Values_TP } from "./Types&Validation";

type Main_TP = {
  VoucherType: number;
};
function MainData({ VoucherType }: Main_TP) {
  const { values, setFieldValue } = useFormikContext<Values_TP>();
  const newValues = {
    voucherCode: values?.copValue?.voucherCode || "",
    currencyId: values?.copValue?.currencyId || 0,
    otherAccountId: values?.copValue?.otherAccountId || 0,
    voucherDate: values?.copValue?.voucherDate || "",
    convertionRate: values?.copValue?.convertionRate || 0,
    costCenterId: values?.copValue?.costCenterId || 0,
    sourceDocument: values?.copValue?.sourceDocument || "",
    note: values?.copValue?.note || "",

    voucherDetailsRequest: values?.copValue?.voucherDetailsRequest || [],
  };

  return (
    <LayoutMainData
      componentCopy={<MainCopyComp />}
      //@ts-ignore
      newValues={newValues}
      deleteEndPoint="api/PurchasRequest"
    >
      <div>
        <Grid container rowSpacing={4} columnSpacing={4}>
          <Grid item xs={12} sm={4}>
            <BaseInputField
              name="voucherCode"
              placeholder="الرقم المرجعي"
              type="text"
              disabled
              label="الرقم المرجعي"
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <SelectCurrency name="currencyId"  labelName="العملة"/>
          </Grid>

          <Grid item xs={12} sm={4}>
            <BaseInputDatepicker
              name="voucherDate"
              placeholder="التاريخ"
              label="التاريخ"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <BaseInputField
              name="convertionRate"
              placeholder="التعادل"
              type="number"
              label="التعادل"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <BaseInputField
              name="sourceDocument"
              placeholder="المستند المرجعي"
              type="text"
              label="المستند المرجعي"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <SelectCostCenter name="costCenterId" labelName={"مركز التكلفة"} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectAccount name="otherAccountId" labelName={"الحساب"} />
          </Grid>

          <Grid item xs={12}>
            <BaseInputField
              name="note"
              placeholder="البيان"
              type="textarea"
              label="البيان"
            />
          </Grid>
        </Grid>
        <Grid item xs={12} mt={5}>

          <ReceiptTable moduleName="voucherDetailsRequest" />
        </Grid>
      </div>
    </LayoutMainData>
  );
}

export default MainData;
