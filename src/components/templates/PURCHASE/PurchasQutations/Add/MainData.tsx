import { Grid } from "@mui/material";
import { useFormikContext } from "formik";
import BaseInputDatepicker from "../../../../atoms/formik/BaseInputDatepicker";
import BaseInputField from "../../../../atoms/formik/BaseInputField";
import { Label } from "../../../../atoms/formik/Label";
import ApprovedStatus from "../../../../molecules/ApprovedStatus";
import LayoutMainData from "../../../../molecules/LayoutMainData";
import MainSelectChoseModule from "../../../../molecules/MainSelectChoseModule";
import SelectCurrency from "../../../../molecules/Selects/SelectCurrency";
import SelectVendor from "../../../../molecules/Selects/SelectVendor";
import ItemsTable from "../../../../molecules/tablesDynamic/ItemsTable";
import MainCopyComp from "./toolbarComponents/MainCopyComp";
import { Values_TP } from "./Types&Validation";
import ChildrenLayout from "../../../../molecules/ChildrenLayout";
import InputGetCode from "../../../../molecules/InputGetCode";

function MainData() {
  const { values } = useFormikContext<Values_TP>();
  const newValues = {
    // qCode: values?.copValue?.qCode || "",
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
        <ChildrenLayout>
          <Grid container rowSpacing={4} columnSpacing={4}>
            <Grid item xs={12} sm={4}>
              <InputGetCode
                name="qCode"
                placeholder="الرقم المرجعي"
                label="الرقم المرجعي"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <BaseInputDatepicker
                name="approvalDate"
                placeholder="تاريخ اعتماد العرض"
                label="تاريخ اعتماد العرض"
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <SelectVendor name="vendorId" />
            </Grid>

            <Grid item xs={12} sm={4}>
              <BaseInputField
                name="referenceDocument"
                placeholder="المستند المرجعي"
                type="text"
                label="المستند المرجعي"
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <BaseInputDatepicker
                name="quotationDate"
                placeholder="تاريخ العرض"
                label="تاريخ العرض"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <BaseInputField
                name="total"
                placeholder="الإجمالي"
                type="number"
                label="الإجمالي"
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <BaseInputDatepicker
                name="quotationDeadLine"
                placeholder="تاريخ انتهاء العرض"
                label="تاريخ انتهاء العرض"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <SelectCurrency name="currencyId" labelName="العملة" />
            </Grid>

            <Grid item xs={12} sm={4} className="flex items-end gap-3">
              <BaseInputField
                name="duration"
                placeholder="مدة العرض"
                type="number"
                label="مدة العرض"
              />
              <span> يوم</span>
            </Grid>
            <Grid item xs={12} sm={4} mt={4}>
              <div className="flex items-center gap-5">
                <Label htmlFor="">الحالة</Label>

                <ApprovedStatus />
              </div>
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
          <Grid item xs={12} my={5}>
            <MainSelectChoseModule moduleName="qutationDetailsModal" />
            <ItemsTable moduleName="qutationDetailsModal" />
          </Grid>
        </ChildrenLayout>
      </div>
    </LayoutMainData>
  );
}

export default MainData;
