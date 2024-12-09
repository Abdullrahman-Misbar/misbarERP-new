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

function MainData() {
  const { values, setFieldValue } = useFormikContext<Values_TP>();
  const newValues = {
    qCode: values?.copValue?.qCode || "",
    approvalDate: values?.copValue?.approvalDate || "",
    vendorId: values?.copValue?.vendorId || "",
    referenceDocument: values?.copValue?.referenceDocument || "",
    quotationDate: values?.copValue?.quotationDate || "",
    total: values?.copValue?.total || "",
    quotationDeadLine: values?.copValue?.quotationDeadLine || "",
    currencyId: values?.copValue?.currencyId || "",
    duration: values?.copValue?.duration || "",
    qutationDetailsModal: values?.copValue?.qutationDetailsModal || [],
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
              name="qCode"
              placeholder="الرقم المرجعي"
              type="text"
              disabled
              label="الرقم المرجعي"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BaseInputDatepicker
              name="approvalDate"
              placeholder="تاريخ اعتماد العرض"
              label="تاريخ اعتماد العرض"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <SelectVendor name="vendorId" />
          </Grid>

          <Grid item xs={12} sm={6}>
            <BaseInputField
              name="referenceDocument"
              placeholder="المستند المرجعي"
              type="text"
              label="المستند المرجعي"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <BaseInputDatepicker
              name="quotationDate"
              placeholder="تاريخ العرض"
              label="تاريخ العرض"
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
              name="quotationDeadLine"
              placeholder="تاريخ انتهاء العرض"
              label="تاريخ انتهاء العرض"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectCurrency name="currencyId" />
          </Grid>

          <Grid item xs={12} sm={6} className="flex items-end gap-3">
            <BaseInputField
              name="duration"
              placeholder="مدة العرض"
              type="number"
              label="مدة العرض"
            />
            <span> يوم</span>
          </Grid>
          <Grid item xs={12} sm={6} mt={4}>
            <div className="flex items-center gap-5">
              <Label htmlFor="">الحالة</Label>

              <ApprovedStatus />
            </div>
          </Grid>

          <Grid item xs={12}>
            <BaseInputField
              name="note"
              placeholder="ملاحظات"
              type="textarea"
              label="ملاحظات"
            />
          </Grid>
        </Grid>
        <Grid item xs={12} mt={5}>
          <MainSelectChoseModule moduleName="qutationDetailsModal" />
          <ItemsTable moduleName="qutationDetailsModal" />
        </Grid>
      </div>
    </LayoutMainData>
  );
}

export default MainData;
