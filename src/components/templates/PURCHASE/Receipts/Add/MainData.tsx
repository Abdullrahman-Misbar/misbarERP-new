import { Grid } from "@mui/material";
import { useFormikContext } from "formik";
import BaseInputDatepicker from "../../../../atoms/formik/BaseInputDatepicker";
import BaseInputField from "../../../../atoms/formik/BaseInputField";
import LayoutMainData from "../../../../molecules/LayoutMainData";
import SelectCurrency from "../../../../molecules/Selects/SelectCurrency";
import SelectAccount from "../../../../molecules/Selects/SelectAccount";
import SelectCostCenter from "../../../../molecules/Selects/SelectCostCenter";
import ReceiptTable from "../../../../molecules/tablesDynamic/ReceiptTable";
import { Values_TP } from "./Types&Validation";
import MainCopyComp from "./toolbarComponents/MainCopyComp";
import ChildrenLayout from "../../../../molecules/ChildrenLayout";

type Main_TP = {
  editable?: boolean;
  VoucherType: number;
};
function MainData({ VoucherType }: Main_TP) {
  console.log(VoucherType);
  const { values } = useFormikContext<Values_TP>();
  console.log("🚀 ~ MainData ~ values:", values);
  const newValues = {
    voucherType: values?.copValue?.voucherType || VoucherType,
    id: 0,

    voucherCode: values?.copValue?.voucherCode || "",
    currencyId: values?.copValue?.currencyId || 0,
    otherAccountId: values?.copValue?.otherAccountId || 0,
    voucherDate: values?.copValue?.voucherDate || "",
    convertionRate: values?.copValue?.convertionRate || 0,
    costCenterId: values?.copValue?.costCenterId || 0,
    sourceDocument: values?.copValue?.sourceDocument || "",
    note: values?.copValue?.note || "",
    voucherDetailsRequest:
      values?.copValue?.voucherDetailsRequest
        .filter((item: any) => {
          if (item.voucherType === 0) {
            // cash-receipts
            return item.debitAmount !== 0;
          } else if (item.voucherType === 1 || item.voucherType === 2) {
            // cash-payments or transfer-receipts
            return item.creditAmount !== 0;
          }
          return item;
        })
        .map((item: any) => {
          const { id, ...rest } = item; // Destructure the id
          return { ...rest, id: 0 }; // Set id to 0 and return the modified item
        }) || [],
  };

  return (
    <LayoutMainData
      componentCopy={<MainCopyComp />}
      //@ts-ignore
      newValues={newValues}
    >
      <div>
        <ChildrenLayout>
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
              <SelectCurrency name="currencyId" labelName="العملة" />
            </Grid>

            <Grid item xs={12} sm={4}>
              <BaseInputDatepicker
                name="voucherDate"
                placeholder="التاريخ"
                label="التاريخ"
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <BaseInputField
                name="convertionRate"
                placeholder="التعادل"
                type="number"
                label="التعادل"
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <BaseInputField
                name="sourceDocument"
                placeholder="المستند المرجعي"
                type="text"
                label="المستند المرجعي"
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <SelectCostCenter
                name="costCenterId"
                labelName={"مركز التكلفة"}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <SelectAccount name="otherAccountId" labelName={"الحساب"} />
            </Grid>

            <Grid item xs={8}>
              <BaseInputField
                name="note"
                placeholder="البيان"
                type="textarea"
                label="البيان"
              />
            </Grid>
          </Grid>
        </ChildrenLayout>
        <ChildrenLayout>
          <Grid item xs={12} mt={5}>
            <ReceiptTable moduleName="voucherDetailsRequest" />
            {/* <ItemsTable
          
          /> */}
          </Grid>
        </ChildrenLayout>
      </div>
    </LayoutMainData>
  );
}

export default MainData;
