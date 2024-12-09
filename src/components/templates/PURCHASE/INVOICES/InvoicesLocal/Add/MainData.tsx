import { Grid } from "@mui/material";
import { useFormikContext } from "formik";
import BaseInputDatepicker from "../../../../../atoms/formik/BaseInputDatepicker";
import BaseInputField from "../../../../../atoms/formik/BaseInputField";
import { Label } from "../../../../../atoms/formik/Label";
import RadioButtons from "../../../../../atoms/formik/RadioComp";
import LayoutMainData from "../../../../../molecules/LayoutMainData";
import MainSelectChoseModule from "../../../../../molecules/MainSelectChoseModule";
import SelectBranch from "../../../../../molecules/Selects/SelectBranch";
import SelectCostCenter from "../../../../../molecules/Selects/SelectCostCenter";
import SelectCurrency from "../../../../../molecules/Selects/SelectCurrency";
import SelectEmployee from "../../../../../molecules/Selects/SelectEmployee";
import SelectPaymentMethod from "../../../../../molecules/Selects/SelectPaymentMethod";
import SelectPaymentStatus from "../../../../../molecules/Selects/SelectPaymentStatus";
import SelectVendor from "../../../../../molecules/Selects/SelectVendor";
import SelectWarehouse from "../../../../../molecules/Selects/SelectWarehouse";
import ItemsTable from "../../../../../molecules/tablesDynamic/ItemsTable";
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

  return (
    <LayoutMainData
      componentCopy={<MainCopyComp />}
      //@ts-ignore
      newValues={newValues}
      deleteEndPoint="api/PurchasOrder"
    >
      <div>
        <Grid container rowSpacing={4} columnSpacing={4}>
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
            <SelectPaymentStatus name="paymentAccountId" />
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
                name="withTax"
                label="باستثناء الضريبة"
                checked={values?.withTax == 1}
                onChange={() => setFieldValue("withTax", 1)}
              />

              <RadioButtons
                name="withTax"
                label="شاملة الضريبة"
                checked={values?.withTax == 0}
                onChange={() => setFieldValue("withTax", 0)}
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
            <SelectCurrency name="currencyId" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <BaseInputDatepicker
              name="expectedReceiptDate"
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
              name="note"
              placeholder="البيان"
              type="textarea"
              label="البيان"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Label htmlFor=""> آلية معالجة الكميات المجانية</Label>
            <div className="flex items-center gap-4">
              <RadioButtons
                name="priceIncludeTax"
                label="اعتبارها ايراد للشركة"
                checked={values?.priceIncludeTax == false}
                onChange={() => setFieldValue("priceIncludeTax", false)}
              />

              <RadioButtons
                name="priceIncludeTax"
                label=" تخفيض التكاليف"
                checked={values?.priceIncludeTax == true}
                onChange={() => setFieldValue("priceIncludeTax", true)}
              />
              <RadioButtons
                name="priceIncludeTax"
                label="معلقة (غير معالجة)"
                checked={values?.priceIncludeTax == true}
                onChange={() => setFieldValue("priceIncludeTax", true)}
              />
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12} mt={5}>
          <MainSelectChoseModule moduleName="orderDetailsModal" />
          <ItemsTable moduleName="orderDetailsModal" />
        </Grid>
        <hr />
        <Grid container rowSpacing={4} columnSpacing={4} mt={3}>
          <Grid item xs={12} sm={3}>
            <BaseInputField
              name="referenceDocument"
              placeholder="0.00"
              type="number"
              label="إجمالي قيمة الفاتورة"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <BaseInputField
              name="referenceDocument"
              placeholder="0.00"
              type="number"
              label="الخصم"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <BaseInputField
              name="referenceDocument"
              placeholder="0.00"
              type="number"
              label="الاضافة"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <BaseInputField
              name="total"
              placeholder="0.00"
              type="number"
              label="الإجمالي بعد الخصم والاضافة"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <BaseInputField
              name="referenceDocument"
              placeholder="0.00"
              type="number"
              label="ضريبة القيمة المضافة"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <BaseInputField
              name="referenceDocument"
              placeholder="0.00"
              type="number"
              label="اجمالي قيمة الفاتورة شامل للضريبة"
            />
          </Grid>
        </Grid>
      </div>
    </LayoutMainData>
  );
}

export default MainData;
