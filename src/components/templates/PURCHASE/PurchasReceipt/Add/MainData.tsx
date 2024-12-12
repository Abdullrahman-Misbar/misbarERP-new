import { Grid } from "@mui/material";
import { useFormikContext } from "formik";
import BaseInputDatepicker from "../../../../atoms/formik/BaseInputDatepicker";
import BaseInputField from "../../../../atoms/formik/BaseInputField";
import { Label } from "../../../../atoms/formik/Label";
import ApprovedStatus from "../../../../molecules/ApprovedStatus";
import LayoutMainData from "../../../../molecules/LayoutMainData";
import MainSelectChoseModule from "../../../../molecules/MainSelectChoseModule";
import SelectAccount from "../../../../molecules/Selects/SelectAccount";
import SelectCostCenter from "../../../../molecules/Selects/SelectCostCenter";
import SelectCurrency from "../../../../molecules/Selects/SelectCurrency";
import SelectEmployee from "../../../../molecules/Selects/SelectEmployee";
import SelectVendor from "../../../../molecules/Selects/SelectVendor";
import SelectWarehouse from "../../../../molecules/Selects/SelectWarehouse";
import ItemsTable from "../../../../molecules/tablesDynamic/ItemsTable";
import MainCopyComp from "./toolbarComponents/MainCopyComp";
import { Values_TP } from "./Types&Validation";

function MainData() {
  const { values, setFieldValue } = useFormikContext<Values_TP>();
  const newValues = {
    code: values?.copValue?.code || "",
    purchaseRepresentativeId: values?.copValue?.purchaseRepresentativeId || "",
    currencyId: values?.copValue?.currencyId || 0,
    vendorId: values?.copValue?.vendorId || 0,
    partnerId: 8,

    warehouseId: values?.copValue?.warehouseId || 0,
    convertionRate: values?.copValue?.convertionRate || 0,
    inDate: values?.copValue?.inDate || "",
    billingStatus: values?.copValue?.billingStatus || "",
    accountId: values?.copValue?.accountId || 0,
    referenceDocument: values?.copValue?.referenceDocument || "",
    status: values?.copValue?.status || 0,
    costCenterId: values?.copValue?.costCenterId || 0,
    note: values?.copValue?.note || "",
    receiptDetailsModal: values?.copValue?.receiptDetailsModal || [],
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
              name="code"
              placeholder="الرقم المرجعي"
              type="text"
              disabled
              label="الرقم المرجعي"
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <SelectEmployee name="purchaseRepresentativeId" />
          </Grid>

          <Grid item xs={12} sm={4}>
            <SelectCurrency name="currencyId"  labelName="العملة"/>
          </Grid>

          <Grid item xs={12} sm={4}>
            <SelectVendor name="vendorId" />
          </Grid>

          <Grid item xs={12} sm={4}>
            <SelectWarehouse name="warehouseId" label="اختر المستودع" />
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
            <BaseInputDatepicker
              name="inDate"
              placeholder="تاريخ الاستلام"
              label="تاريخ الاستلام"
            />
          </Grid>

          <Grid item xs={12} sm={4} mt={4}>
            <div className="flex items-center gap-5">
              <Label htmlFor="billingStatus">حالة الفوترة</Label>

              <ApprovedStatus />
            </div>
          </Grid>

          <Grid item xs={12} sm={4}>
            <SelectAccount name="accountId" labelName={"الحساب"} />
          </Grid>

          <Grid item xs={12} sm={4}>
            <BaseInputField
              name="referenceDocument"
              placeholder="المستند المرجعي"
              type="text"
              label="المستند المرجعي"
            />
          </Grid>
          <Grid item xs={12} sm={4} mt={4}>
            <div className="flex items-center gap-5">
              <Label htmlFor="">حالة</Label>

              <ApprovedStatus />
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <SelectCostCenter name="costCenterId" labelName={"مركز التكلفة"} />
          </Grid>

         

          <Grid item xs={6}>
            <BaseInputField
              name="note"
              placeholder="ملاحظات"
              type="textarea"
              label="ملاحظات"
            />
          </Grid>
        </Grid>
        <Grid item xs={12} mt={5}>
          <MainSelectChoseModule moduleName="receiptDetailsModal" />
          <ItemsTable moduleName="receiptDetailsModal" />
        </Grid>
      </div>
    </LayoutMainData>
  );
}

export default MainData;
