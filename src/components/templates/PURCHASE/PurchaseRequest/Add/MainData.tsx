import { Grid } from "@mui/material";
import { useFormikContext } from "formik";
import BaseInputDatepicker from "../../../../atoms/formik/BaseInputDatepicker";
import BaseInputField from "../../../../atoms/formik/BaseInputField";
import { Label } from "../../../../atoms/formik/Label";
import RadioButtons from "../../../../atoms/formik/RadioComp";
import { SwitchComp } from "../../../../atoms/formik/SwitchComp";
import ApprovedStatus from "../../../../molecules/ApprovedStatus";
import ItemsTable from "../../../../molecules/tablesDynamic/ItemsTable";
import LayoutMainData from "../../../../molecules/LayoutMainData";
import SelectCurrency from "../../../../molecules/Selects/SelectCurrency";
import SelectPurchaseAgreement from "../../../../molecules/Selects/SelectPurchasAgreement";
import SelectVendor from "../../../../molecules/Selects/SelectVendor";
import SelectWarehouse from "../../../../molecules/Selects/SelectWarehouse";
import MainCopyComp from "./toolbarComponents/MainCopyComp";
import { Values_TP } from "./Types&Validation";
import MainSelectChoseModule from "../../../../molecules/MainSelectChoseModule";
import { useEffect } from "react";

function MainData() {
  const { values, setFieldValue } = useFormikContext<Values_TP>();
  console.log("🚀 ~ MainData ~ values:", values)
  const newValues = {
    code: values?.copValue?.code || "",
    purchaseAgreementId: values?.copValue?.purchaseAgreementId || "",
    vendorId: values?.copValue?.vendorId || "",
    createDate: values?.copValue?.createDate || "",
    total: values?.copValue?.total || "",
    referenceDocument: values?.copValue?.referenceDocument || "",
    note: values?.copValue?.note || "",
    approvalDate: values?.copValue?.approvalDate || "",
    confirmationDayes: values?.copValue?.confirmationDayes || 0,
    warehouseId: values?.copValue?.warehouseId || "",
    currencyId: values?.copValue?.currencyId || "",
    requestDate: values?.copValue?.requestDate || "",
    expectedReceiptDate: values?.copValue?.expectedReceiptDate || "",
    requestEndDate: values?.copValue?.requestEndDate || "",
    deliverdDate: values?.copValue?.deliverdDate || "",
    priceIncludeTax: values?.copValue?.priceIncludeTax || null,
    isApproved: values?.copValue?.isApproved || null,
    deliverdConfirmation: values?.copValue?.deliverdConfirmation || null,
    purchaseRequestDetailsDto: values?.copValue?.purchaseRequestDetailsDto || [],
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
              <SwitchComp
                name="deliverdConfirmation"
                defaultChecked={values?.deliverdConfirmation == true}
              />
              <div className="flex-1">
                <BaseInputField
                  name="confirmationDayes"
                  placeholder="التأكيد قبل"
                  type="number"
                  disabled={!values?.deliverdConfirmation}
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

          <Grid item xs={12} sm={6} mt={4}>
            <div className="flex items-center gap-5">
              <Label htmlFor="">الحالة</Label>

              <ApprovedStatus />
            </div>
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
              type="number"
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
            <div className="flex items-center gap-4 mt-8">
              <Label htmlFor="">الحصول على الأسعار</Label>
              <RadioButtons
                name="priceIncludeTax"
                label="باستثناء الضريبة"
                checked={values?.priceIncludeTax == false}
                onChange={() => setFieldValue("priceIncludeTax", false)}
              />

              <RadioButtons
                name="priceIncludeTax"
                label="شاملة الضريبة"
                checked={values?.priceIncludeTax == true}
                onChange={() => setFieldValue("priceIncludeTax", true)}
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
          <MainSelectChoseModule moduleName="purchaseRequestDetailsDto" />
          <ItemsTable moduleName="purchaseRequestDetailsDto" />
        </Grid>
      </div>
    </LayoutMainData>
  );
}

export default MainData;
