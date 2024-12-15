import { Grid } from "@mui/material";
import { useFormikContext } from "formik";
import BaseInputDatepicker from "../../../../atoms/formik/BaseInputDatepicker";
import BaseInputField from "../../../../atoms/formik/BaseInputField";
import { Label } from "../../../../atoms/formik/Label";
 
import LayoutMainData from "../../../../molecules/LayoutMainData";
import SelectCurrency from "../../../../molecules/Selects/SelectCurrency";
import SelectPurchaseAgreement from "../../../../molecules/Selects/SelectPurchasAgreement";
import SelectVendor from "../../../../molecules/Selects/SelectVendor";
 
import ItemsTableagreement from "../../../../molecules/tablesDynamic/ItemsTableagreement";
import MainCopyComp from "./toolbarComponents/MainCopyComp";
import { Values_TP } from "./Types&Validation";
import MainSelectChoseModule from "../../../../molecules/MainSelectChoseModule";
import AgreementStatus from "../../../../molecules/AgreementStatus";

function MainData() {
  const { values, setFieldValue } = useFormikContext<Values_TP>();
  console.log("🚀 ~ MainData ~ values:", values);
  const newValues = {
    agreementCode: values?.copValue?.agreementCode || "",
    aggreementTypeId: values?.copValue?.aggreementTypeId || "",
    responsibleId: values?.copValue?.responsibleId || "",
    vendorId: values?.copValue?.vendorId || "",
    purchaseAgreementId: values?.copValue?.purchaseAgreementId || "",
    agrementStatuId: values?.copValue?.agrementStatuId || null,
    orderDate: values?.copValue?.orderDate || "",
    createDate: values?.copValue?.createDate || "",
    receiptDate: values?.copValue?.receiptDate || "",
    agreementDeadline: values?.copValue?.agreementDeadline || "",
    referenceDocument: values?.copValue?.referenceDocument || "",
    note: values?.copValue?.note || "",
    agreementDetailesModel:
      values?.copValue?.agreementDetailesModel || [],
  };

  return (
    <LayoutMainData
      componentCopy={<MainCopyComp />}
      //@ts-ignore
      newValues={newValues}
    >
      <div>
        <Grid container rowSpacing={4} columnSpacing={4}>
          <Grid item xs={12} sm={6}>
            <BaseInputField
              name="agreementCode"
              placeholder="الرقم المرجعي"
              type="text"
              disabled
              label="الرقم المرجعي"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <SelectPurchaseAgreement name="aggreementTypeId" />
          </Grid>

          <Grid item xs={12} sm={6}>
            <SelectVendor name="vendorId" />
          </Grid>

           
          <Grid item xs={12} sm={6}>
            <BaseInputDatepicker
              name="orderDate"
              placeholder="تاريخ الاتفاقية"
              label="تاريخ الاتفاقية"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <SelectCurrency name="responsibleId" labelName="المسئول" />
          </Grid>

          <Grid item xs={12} sm={6}>
            <BaseInputDatepicker
              name="agreementDeadline"
              placeholder="الموعد النهائي"
              label=" الموعد النهائي"
            />
          </Grid>

            

          <Grid item xs={12} sm={6} mt={4}>
            <div className="flex items-center gap-5">
              <Label htmlFor="">الحالة</Label>
              <AgreementStatus />
            </div>
          </Grid>

           

          <Grid item xs={12} sm={6}>
            <BaseInputDatepicker
              name="receiptDate"
              placeholder="تاريخ الاستلام"
              label="تاريخ الاستلام"
            />
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
          <MainSelectChoseModule moduleName="agreementDetailesModel" />

          <ItemsTableagreement moduleName="agreementDetailesModel" />
        </Grid>
      </div>
    </LayoutMainData>
  );
}

export default MainData;
