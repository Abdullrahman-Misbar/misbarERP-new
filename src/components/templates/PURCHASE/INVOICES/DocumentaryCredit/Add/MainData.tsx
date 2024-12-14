import { Grid } from "@mui/material";
import { useFormikContext } from "formik";
import BaseInputDatepicker from "../../../../../atoms/formik/BaseInputDatepicker";
import BaseInputField from "../../../../../atoms/formik/BaseInputField";
import { Label } from "../../../../../atoms/formik/Label";
import RadioButtons from "../../../../../atoms/formik/RadioComp";
import LayoutMainData from "../../../../../molecules/LayoutMainData";
import SelectBranch from "../../../../../molecules/Selects/SelectBranch";
import SelectCostCenter from "../../../../../molecules/Selects/SelectCostCenter";
import SelectCurrency from "../../../../../molecules/Selects/SelectCurrency";
import SelectEmployee from "../../../../../molecules/Selects/SelectEmployee";
import SelectPaymentMethod from "../../../../../molecules/Selects/SelectPaymentMethod";
import SelectPaymentStatus from "../../../../../molecules/Selects/SelectPaymentStatus";
import SelectVendor from "../../../../../molecules/Selects/SelectVendor";
import SelectWarehouse from "../../../../../molecules/Selects/SelectWarehouse";
import TabsInvoicesItem from "../tabsInvoicesItem/TabsInvoicesItem";
import MainCopyComp from "./toolbarComponents/MainCopyComp";
import { Values_TP } from "./Types&Validation";
import { useEffect } from "react";
import SelectLetterOfCreditCard from "../../../../../molecules/Selects/SelectLetterOfCreditCard";

function MainData() {
  const { values, setFieldValue } = useFormikContext<Values_TP>();
  const newValues = {
    code: values?.copValue?.code || "",
    total: values?.copValue?.total || "",
    expectedReceiptDate: values?.copValue?.expectedReceiptDate || "",
    createDate: values?.copValue?.createDate || "",
    referenceDocument: values?.copValue?.referenceDocument || "",
    currencyId: values?.copValue?.currencyId || "",
    vendorId: values?.copValue?.vendorId || "",
    purchaseAgreementId: values?.copValue?.purchaseAgreementId || "",
    note: values?.copValue?.note || "",
    purchaseRepresentativeId: values?.copValue?.purchaseRepresentativeId || "",
    warehouseId: values?.copValue?.warehouseId || "",
    approvalDate: values?.copValue?.approvalDate || "",
  };

  return (
    <LayoutMainData
      componentCopy={<MainCopyComp />}
      //@ts-ignore
      newValues={newValues}
      className="p-0"
    >
      <div>
        <Grid container rowSpacing={4} columnSpacing={4} p={3}>
          <Grid item xs={12} sm={4}>
            <BaseInputField
              name="letterOfCreditCode"
              placeholder=" رمز الاعتماد المستندي"
              type="text"
              disabled
              label=" رمز الاعتماد المستندي"
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <BaseInputDatepicker
              name="openingDate"
              placeholder="تاريخ فتح الاعتماد"
              label="تاريخ فتح الاعتماد"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <BaseInputField
              name="letterOfCreditName"
              placeholder="اسم الاعتماد المستندي"
              type="text"
              
              label="اسم الاعتماد المستندي"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <BaseInputDatepicker
              name="expectedClosingDate"
              placeholder="تاريخ الاقفال المتوقع"
              label="تاريخ الاقفال المتوقع"
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <BaseInputField
              name="foreignName"
              placeholder="الاسم الاجنبي"
              type="text"
              label="الاسم الاجنبي"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <BaseInputDatepicker
              name="closingDate"
              placeholder="تاريخ الاقفال"
              label="تاريخ الاقفال"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <SelectLetterOfCreditCard name="letterOfCreditCardId" />
          </Grid>
          <Grid item xs={12} sm={4} mt={4}>
            <div className="flex items-center gap-5">
              <Label htmlFor="">حالة الدفع</Label>
              {values?.paymentStatus == 0 ? (
                <p className="bg-gray-300 rounded-full p-3">غير مدفوعة</p>
              ) : (
                <p className="bg-gray-300 rounded-full p-3"> مدفوعة</p>
              )}
            </div>
          </Grid>

          <Grid item xs={12} sm={4}>
            <BaseInputField
              name="accountName"
              placeholder="الحساب"
              type="text"
              label="الحساب"
            />
          </Grid>
          <Grid item xs={8}>
            <BaseInputField
              name="note"
              placeholder="ملاحظات"
              type="textarea"
              label="ملاحظات"
            />
          </Grid>
        </Grid>
        <div className="bg-[#f6f8ff] w-100 h-10"></div>
        <Grid item xs={12} mt={1}>
          {/* <MainSelectChoseModule moduleName="orderDetailsModal" /> */}
          {/* <ItemsTable moduleName="orderDetailsModal" /> */}
          {/* <TabsInvoicesItem /> */}
        </Grid>
      </div>
    </LayoutMainData>
  );
}

export default MainData;
