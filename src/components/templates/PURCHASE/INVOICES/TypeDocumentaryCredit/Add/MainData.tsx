import { Grid } from "@mui/material";
import { useFormikContext } from "formik";
import BaseInputDatepicker from "../../../../atoms/formik/BaseInputDatepicker";
import BaseInputField from "../../../../atoms/formik/BaseInputField";
import { Label } from "../../../../atoms/formik/Label";
import LayoutMainData from "../../../../molecules/LayoutMainData";
import MainSelectChoseModule from "../../../../molecules/MainSelectChoseModule";
import SelectCurrency from "../../../../molecules/Selects/SelectCurrency";
import SelectPurchaseAgreement from "../../../../molecules/Selects/SelectPurchasAgreement";
import SelectVendor from "../../../../molecules/Selects/SelectVendor";
import SelectWarehouse from "../../../../molecules/Selects/SelectWarehouse";
import ItemsTable from "../../../../molecules/tablesDynamic/ItemsTable";
import MainCopyComp from "./toolbarComponents/MainCopyComp";
import { Values_TP } from "./Types&Validation";
import SelectEmployee from "../../../../molecules/Selects/SelectEmployee";
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
    status: values?.copValue?.status || "",
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
                name="code"
                placeholder="الرقم المرجعي"
                type="text"
                disabled
                label="الرقم المرجعي"
              />
            </Grid>

            {/* 1 */}
            <Grid item xs={12} sm={4}>
              <BaseInputField
                name="total"
                placeholder=" الأجمالى"
                type="number"
                label=" الأجمالى"
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <BaseInputDatepicker
                name="expectedReceiptDate"
                placeholder=" تاريخ الاستلام المتوقع"
                label=" تاريخ الاستلام المتوقع"
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <BaseInputDatepicker
                name="createDate"
                placeholder="تاريخ انشاء الامر"
                label="تاريخ انشاء الامر"
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
              <SelectCurrency name="currencyId" labelName="العملة" />
            </Grid>

            <Grid item xs={12} sm={4}>
              <SelectVendor name="vendorId" />
            </Grid>

            <Grid item xs={12} sm={4}>
              <SelectPurchaseAgreement name="purchaseAgreementId" />
            </Grid>

            <Grid item xs={12} sm={4} mt={4}>
              <div className="flex items-center gap-5">
                <Label htmlFor="">الحالة</Label>
                <div>
                  <span className="status-text">
                    {/* {values?.status === 0
                    ? "لم يتم الاستلام"
                    : values?.status === 1
                    ? "استلام جزئي"
                    : values?.status === 2
                    ? "استلام كلي"
                    : ""} */}
                    {values?.status == 1 ? (
                      <p className="text-orange-500">استلام جزئي</p>
                    ) : values?.status == 2 ? (
                      <p className="text-green-400">استلم كلي</p>
                    ) : (
                      <p className="text-black">لم يتم الاستلام </p>
                    )}
                  </span>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} sm={4}>
              {/* <BaseInputField
              name="purchaseRepresentativeId"
              placeholder=" مندوب المشتريات"
              type="text"
              label=" مندوب المشتريات"
            /> */}
              <SelectEmployee name="purchaseRepresentativeId" />
            </Grid>

            <Grid item xs={12} sm={4}>
              <SelectWarehouse name="warehouseId" label="اختر المستودع" />
            </Grid>

            <Grid item xs={12} sm={4}>
              <BaseInputDatepicker
                name="approvalDate"
                placeholder="تاريخ الاعتماد"
                label="تاريخ الاعتماد"
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
        </ChildrenLayout>
        <ChildrenLayout>
          <Grid item xs={12} mt={5}>
            <MainSelectChoseModule moduleName="orderDetailsModal" />
            <ItemsTable moduleName="orderDetailsModal" />
          </Grid>
        </ChildrenLayout>
      </div>
    </LayoutMainData>
  );
}

export default MainData;
