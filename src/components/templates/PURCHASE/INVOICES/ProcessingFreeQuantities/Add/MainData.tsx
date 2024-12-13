import { Grid } from "@mui/material";
import { useFormikContext } from "formik";
import { useEffect } from "react";
import BaseInputDatepicker from "../../../../../atoms/formik/BaseInputDatepicker";
import BaseInputField from "../../../../../atoms/formik/BaseInputField";
import { Label } from "../../../../../atoms/formik/Label";
import RadioButtons from "../../../../../atoms/formik/RadioComp";
import LayoutMainData from "../../../../../molecules/LayoutMainData";
import SelectWarehouse from "../../../../../molecules/Selects/SelectWarehouse";
import TabsInvoicesItem from "../tabsInvoicesItem/TabsInvoicesItem";
import MainCopyComp from "./toolbarComponents/MainCopyComp";
import { Values_TP } from "./Types&Validation";

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
  useEffect(() => {
    if (values.invoiceDetailsRequest) {
      const totalInvoiceValue = values.invoiceDetailsRequest.reduce(
        (sum, item) => sum + (+item.total || 0),
        0
      );
      const totalDiscountValue = values.invoiceDetailsRequest.reduce(
        (sum, item) => sum + (+item.discountValue || 0), // إجمالي الخصم
        0
      );
      const totalAdditionalValue = values.invoiceDetailsRequest.reduce(
        (sum, item) => sum + (+item.extraValue || 0), // إجمالي الخصم
        0
      );
      const totalAfterDiscountAndAdditional =
        values.invoiceDetailsRequest.reduce(
          (sum, item) => sum + (+item.totalAfterExtra || 0), // الإجمالي بعد الخصم والاضافة

          0
        );
      const TaxAdditionalValue = values.invoiceDetailsRequest.reduce(
        (sum, item) => sum + (+item.vat || 0), // الإجمالي بعد الخصم والاضافة

        0
      );
      const TotalInvoicesValueByTax = values.invoiceDetailsRequest.reduce(
        (sum, item) => sum + (+item.totalAfterTax || 0), // الإجمالي بعد الخصم والاضافة

        0
      );
      setFieldValue("total", totalInvoiceValue, false);
      setFieldValue("totalDiscount", totalDiscountValue, false);
      setFieldValue("totalAdditionalValue", totalAdditionalValue, false);
      setFieldValue(
        "totalAfterDiscountAndAdditional",
        totalAfterDiscountAndAdditional,
        false
      );
      setFieldValue("TaxAdditionalValue", TaxAdditionalValue, false);
      setFieldValue("TotalInvoicesValueByTax", TotalInvoicesValueByTax, false);
    }
  }, [values.invoiceDetailsRequest, setFieldValue]);
  return (
    <LayoutMainData
      componentCopy={<MainCopyComp />}
      //@ts-ignore
      newValues={newValues}
      className="p-0"
    >
      <div>
        <Grid container rowSpacing={4} columnSpacing={4} p={3}>
          <Grid item xs={12} sm={6}>
            <BaseInputField
              name="invoiceCode"
              placeholder="الرقم المرجعي"
              type="text"
              disabled
              label="الرقم المرجعي"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <BaseInputField
              name="USER"
              placeholder="  المستخدم "
              type="text"
              label=" المستخدم  "
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <BaseInputDatepicker
              name="invoiceDate"
              placeholder=" التاريخ "
              label="التاريخ "
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <SelectWarehouse name="warehouseId" label="اختر المستودع" />
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
        <div className="bg-[#f6f8ff] w-100 h-10"></div>
        <Grid item xs={12} mt={1}>
          <Grid item xs={12} sm={6}>
            <Label htmlFor=""> نوع المعالجة</Label>
            <div className="flex items-start  gap-4 gap-4">
              <RadioButtons
                name="priceIncludeTax"
                label=" هدية مجانية لعميل  "
                checked={values?.priceIncludeTax == true}
                onChange={() => setFieldValue("priceIncludeTax", true)}
              />
              <RadioButtons
                name="priceIncludeTax"
                label=" تخفيض التكلفة"
                checked={values?.priceIncludeTax == true}
                onChange={() => setFieldValue("priceIncludeTax", true)}
              />
              <RadioButtons
                name="priceIncludeTax"
                label="  ايراد للشركة"
                checked={values?.priceIncludeTax == true}
                onChange={() => setFieldValue("priceIncludeTax", true)}
              />
            </div>
          </Grid>
          <TabsInvoicesItem />
        </Grid>
      </div>
    </LayoutMainData>
  );
}

export default MainData;
