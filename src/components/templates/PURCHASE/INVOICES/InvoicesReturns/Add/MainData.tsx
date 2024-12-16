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
import PaymentAccount from "../../../../../molecules/Selects/PaymentAccount";
import ChildrenLayout from "../../../../../molecules/ChildrenLayout";

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
        <ChildrenLayout>
          <Grid container rowSpacing={4} columnSpacing={4} p={3}>
            <Grid item xs={12} sm={4}>
              <BaseInputField
                name="invoiceCode"
                placeholder="الرقم المرجعي"
                type="text"
                disabled
                label="الرقم المرجعي"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <BaseInputField
                name="referenceDocument"
                placeholder=" المستند المرجعي"
                type="text"
                label=" المستند المرجعي"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <PaymentAccount name="paymentAccountId" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <SelectVendor name="vendorId" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <SelectEmployee name="purchaseRepresentativeId" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className="flex items-center gap-4 mt-8">
                <Label htmlFor=""> طبيعة الاسعار</Label>
                <RadioButtons
                  name="priceNature"
                  label="باستثناء الضريبة"
                  checked={values?.priceNature == 1}
                  onChange={() => setFieldValue("priceNature", 1)}
                />

                <RadioButtons
                  name="priceNature"
                  label="شاملة الضريبة"
                  checked={values?.priceNature == 0}
                  onChange={() => setFieldValue("priceNature", 0)}
                />
              </div>
            </Grid>

            <Grid item xs={12} sm={4}>
              <BaseInputDatepicker
                name="invoiceDate"
                placeholder="تاريخ الفاتورة "
                label="تاريخ الفاتورة"
              />
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
                name="vendorInvoiceCode"
                placeholder=" رقم فاتورة المورد"
                type="text"
                label=" رقم فاتورة المورد"
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <SelectPaymentMethod name="paymentMethod" />
            </Grid>
            <Grid item xs={12} sm={4} mt={4}>
              <div className="flex items-center gap-5">
                <Label htmlFor=""> حالة الفوترة</Label>
                {values?.invoiceStatus == 0 && (
                  <p className="bg-gray-300 rounded-full p-3">مسودة</p>
                )}
              </div>
            </Grid>

            <Grid item xs={12} sm={4}>
              <BaseInputField
                name="vendorTaxNumber"
                placeholder="الرقم الضريبي"
                type="text"
                label=" الرقم الضريبي"
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <SelectCurrency name="currencyId" labelName="العملة" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <BaseInputDatepicker
                name="ا"
                placeholder=" تاريخ الاستحقاق"
                label="تاريخ الاستحقاق"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <SelectBranch name="branchId" />
            </Grid>

            <Grid item xs={12} sm={4}>
              <BaseInputField
                name="convertionRate"
                placeholder=" معدل التحويل"
                type="text"
                label="معدل التحويل"
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <BaseInputDatepicker
                name="approvalDate"
                placeholder="  تاريخ الاعتماد"
                label=" تاريخ الاعتماد"
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <SelectWarehouse name="warehouseId" label="اختر المستودع" />
            </Grid>

            <Grid item xs={12} sm={6}>
              <SelectCostCenter name="costCenterId" />
            </Grid>

            <Grid item xs={6}>
              <BaseInputField
                name="notes"
                placeholder="البيان"
                type="textarea"
                label="البيان"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Label htmlFor="">آلية معالجة الكميات المجانية</Label>
              <div className="flex items-start flex-col gap-4">
                <RadioButtons
                  name="freeQuantitiesPolicy"
                  label="اعتبارها ايراد للشركة"
                  checked={values?.freeQuantitiesPolicy === 0}
                  onChange={() => setFieldValue("freeQuantitiesPolicy", 0)}
                />

                <RadioButtons
                  name="freeQuantitiesPolicy"
                  label="تخفيض التكاليف"
                  checked={values?.freeQuantitiesPolicy === 1}
                  onChange={() => setFieldValue("freeQuantitiesPolicy", 1)}
                />

                <RadioButtons
                  name="freeQuantitiesPolicy"
                  label="معلقة (غير معالجة)"
                  checked={values?.freeQuantitiesPolicy === 2}
                  onChange={() => setFieldValue("freeQuantitiesPolicy", 2)}
                />
              </div>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Label htmlFor=""> سعر المرتجع</Label>
              <div className="flex items-start flex-col gap-4 gap-4">
                <RadioButtons
                  name="priceIncludeTax"
                  label=" متوسط أسعار الشراء من المورد"
                  checked={values?.priceIncludeTax == false}
                  onChange={() => setFieldValue("priceIncludeTax", false)}
                />
                <RadioButtons
                  name="priceIncludeTax"
                  label=" متوسط آخر سعر شراء من المورد"
                  checked={values?.priceIncludeTax == true}
                  onChange={() => setFieldValue("priceIncludeTax", true)}
                />
              </div>
            </Grid>
          </Grid>
        </ChildrenLayout>
        <div className="bg-[#f6f8ff] w-100 h-10"></div>
        <ChildrenLayout>
          <Grid item xs={12} mt={1}>
            {/* <MainSelectChoseModule moduleName="orderDetailsModal" /> */}
            {/* <ItemsTable moduleName="orderDetailsModal" /> */}
            <TabsInvoicesItem />
          </Grid>
        </ChildrenLayout>
        <hr />
        <ChildrenLayout>
          <Grid container rowSpacing={4} columnSpacing={4} mt={3} p={3}>
            <Grid item xs={12} sm={3}>
              <BaseInputField
                name="total"
                placeholder="0.00"
                type="number"
                label="إجمالي قيمة الفاتورة"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <BaseInputField
                name="totalDiscount"
                placeholder="0.00"
                type="number"
                label="الخصم"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <BaseInputField
                name="totalAdditionalValue"
                placeholder="0.00"
                type="number"
                label="الاضافة"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <BaseInputField
                name="totalAfterDiscountAndAdditional"
                placeholder="0.00"
                type="number"
                label="الإجمالي بعد الخصم والاضافة"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <BaseInputField
                name="TaxAdditionalValue"
                placeholder="0.00"
                type="number"
                label="ضريبة القيمة المضافة"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <BaseInputField
                name="TotalInvoicesValueByTax"
                placeholder="0.00"
                type="number"
                label="اجمالي قيمة الفاتورة شامل للضريبة"
              />
            </Grid>
          </Grid>
        </ChildrenLayout>
      </div>
    </LayoutMainData>
  );
}

export default MainData;
