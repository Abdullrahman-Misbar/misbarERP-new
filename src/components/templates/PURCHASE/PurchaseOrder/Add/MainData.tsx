import { Grid } from "@mui/material";
import { useFormikContext } from "formik";
import BaseInputDatepicker from "../../../../atoms/formik/BaseInputDatepicker";
import BaseInputField from "../../../../atoms/formik/BaseInputField";
import { Label } from "../../../../atoms/formik/Label";
import RadioButtons from "../../../../atoms/formik/RadioComp";
import { SwitchComp } from "../../../../atoms/formik/SwitchComp";
import ItemsTable from "../../../../molecules/ItemsTable";
import LayoutMainData from "../../../../molecules/LayoutMainData";
import SelectCurrency from "../../../../molecules/Selects/SelectCurrency";
import SelectPurchaseAgreement from "../../../../molecules/Selects/SelectPurchasAgreement";
import SelectStatus from "../../../../molecules/Selects/SelectStatus";
import SelectVendor from "../../../../molecules/Selects/SelectVendor";
import SelectWarehouse from "../../../../molecules/Selects/SelectWarehouse";
import MainCopyComp from "./toolbarComponents/MainCopyComp";
import { newValues_TP } from "./Types&Validation";
type Main_TP = {};
function MainData({}: Main_TP) {
  const { values } = useFormikContext<newValues_TP>();
  const newValues = {
    code: values?.copValue?.code || "",
    purchaseAgreementId: values?.copValue?.purchaseAgreementId || "",
    vendorId: values?.copValue?.vendorId || "",
    createDate: values?.copValue?.createDate || "",
    expectedReceiptDate: values?.copValue?.expectedReceiptDate || "",
    total: values?.copValue?.total || "",
    referenceDocument: values?.copValue?.referenceDocument || "",
    note: values?.copValue?.note || "",
    approvalDate: values?.copValue?.approvalDate || "",
    confirmationDayes: values?.copValue?.confirmationDayes || "",
    warehouseId: values?.copValue?.warehouseId || "",
    purchaseRepresentativeId: values?.copValue?.purchaseRepresentativeId || "",
    currencyId: values?.copValue?.currencyId || "",
  };

  return (
    <LayoutMainData
      componentCopy={<MainCopyComp />}
      newValues={newValues}
      deleteEndPoint="api/PurchasOrder"
    >
      <div>
        <Grid container rowSpacing={4} columnSpacing={4}>
          <Grid item xs={12} sm={6}>
            <BaseInputField
              name="code"
              placeholder="الرقم المرجعي"
              type="text"
              disabled
              label="الرقم المرجعي"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectPurchaseAgreement name="purchaseAgreementId" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectVendor name="vendorId" />
          </Grid>

          <Grid item xs={12} sm={6}>
            <div className="flex items-center gap-4 mt-6">
              <Label htmlFor="">تأكيد موعد الاستلام</Label>
              <SwitchComp name="deliverdConfirmation" />
              <div className="flex-1">
                <BaseInputField
                  name="confirmationDayes"
                  placeholder="التأكيد قبل"
                  type="number"
                />
              </div>
              <p>ايام</p>
            </div>
          </Grid>

          <Grid item xs={12} sm={6}>
            <BaseInputDatepicker
              name="requestDate"
              placeholder="تاريخ الطلب"
              label="تاريخ الطلب"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectCurrency name="currencyId" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BaseInputDatepicker
              name="requestEndDate"
              placeholder="تاريخ انتهاء الطلب"
              label="تاريخ انتهاء الطلب"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectWarehouse name="warehouseId" label="اختر المستودع" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BaseInputDatepicker
              name="approvalDate"
              placeholder="تاريخ اعتماد الطلب"
              label="تاريخ اعتماد الطلب"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectStatus name="status" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BaseInputDatepicker
              name="expectedReceiptDate"
              placeholder="الحد الاقصى للاستلام"
              label="الحد الاقصى للاستلام"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BaseInputField
              name="total"
              placeholder="الإجمالي"
              type="text"
              label="الإجمالي"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BaseInputDatepicker
              name="deliverdDate"
              placeholder="تاريخ الاستلام"
              label="تاريخ الاستلام"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <div className="flex items-center gap-4 mt-8" >
              <Label htmlFor="">الحصول على الأسعار</Label>
              <RadioButtons
                name="priceIncludeTax"
                label="باستثناء الضريبة"
                onChange={() => {}}
              />
              <RadioButtons
                name="priceIncludeTax"
                label="شاملة الضريبة"
                onChange={() => {}}
              />
            </div>
          </Grid>

          <Grid item xs={12} sm={6}>
            <BaseInputField
              name="referenceDocument"
              placeholder="المستند المرجعي"
              type="text"
              label="المستند المرجعي"
            />
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
          <ItemsTable moduleName="purchaseRequestDetailsDto" />
        </Grid>
      </div>
    </LayoutMainData>
  );
}

export default MainData;
