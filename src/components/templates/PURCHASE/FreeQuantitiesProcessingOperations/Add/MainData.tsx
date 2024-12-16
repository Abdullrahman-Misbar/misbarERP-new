import { Grid } from "@mui/material";
import { useFormikContext } from "formik";
import BaseInputDatepicker from "../../../../atoms/formik/BaseInputDatepicker";
import BaseInputField from "../../../../atoms/formik/BaseInputField";
import { Label } from "../../../../atoms/formik/Label";
import RadioButtons from "../../../../atoms/formik/RadioComp";
import { SwitchComp } from "../../../../atoms/formik/SwitchComp";
import ApprovedStatus from "../../../../molecules/ApprovedStatus";
import LayoutMainData from "../../../../molecules/LayoutMainData";
import SelectCurrency from "../../../../molecules/Selects/SelectCurrency";
import SelectPurchaseAgreement from "../../../../molecules/Selects/SelectPurchasAgreement";
import SelectVendor from "../../../../molecules/Selects/SelectVendor";
import SelectWarehouse from "../../../../molecules/Selects/SelectWarehouse";
import ItemsfreequantityTable from "../../../../molecules/tablesDynamic/ItemsfreequantityTable";
import MainCopyComp from "./toolbarComponents/MainCopyComp";
import { Values_TP } from "./Types&Validation";
import MainSelectChoseModule from "../../../../molecules/MainSelectChoseModule";
import ChildrenLayout from "../../../../molecules/ChildrenLayout";

function MainData() {
  const { values, setFieldValue } = useFormikContext<Values_TP>();
  console.log("🚀 ~ MainData ~ values:", values);
  const newValues = {
    operationCode: values?.copValue?.operationCode || "",
    OperationId: values?.copValue?.OperationId || "",
    userId: values?.copValue?.userId || "",
    createDate: values?.copValue?.createDate || "",
    note: values?.copValue?.note || "",
    operationDate: values?.copValue?.operationDate || "",
    warehouseId: values?.copValue?.warehouseId || "",
    processingType: values?.copValue?.processingType || "",
    isApproved: values?.copValue?.isApproved || null,
    isCanceled: values?.copValue?.isCanceled || null,

    freeQuantitiesDetailesModel:
      values?.copValue?.freeQuantitiesDetailesModel || [],
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
            <Grid item xs={12} sm={6}>
              <BaseInputField
                name="operationCode"
                placeholder="الرقم المرجعي"
                type="text"
                disabled
                label="الرقم المرجعي"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <SelectVendor name="userId" />
            </Grid>

            <Grid item xs={12} sm={6}>
              <BaseInputDatepicker
                name="operationDate"
                placeholder="التاريخ "
                label="التاريخ "
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <SelectWarehouse name="warehouseId" label="مستودع الادخال" />
            </Grid>

            <Grid item xs={6}>
              <BaseInputField
                name="note"
                placeholder="ملاحظات"
                type="textarea"
                label="ملاحظات"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <SelectPurchaseAgreement name="ProcessingType" />
            </Grid>

            <Label htmlFor="">طريقة معالجة الكميات المجانية </Label>

            <Grid item xs={12} sm={6}>
              <div className="flex items-center gap-4 mt-8">
                <RadioButtons
                  name="free"
                  label="هدية مجانية"
                  checked={values?.priceIncludeTax == false}
                  onChange={() => setFieldValue("priceIncludeTax", false)}
                />
                <RadioButtons
                  name="discountcost"
                  label="تخفيض التكلفة"
                  checked={values?.priceIncludeTax == true}
                  onChange={() => setFieldValue("priceIncludeTax", true)}
                />

                <RadioButtons
                  name="inconforcompany"
                  label="ايراد الشركة  "
                  checked={values?.priceIncludeTax == true}
                  onChange={() => setFieldValue("priceIncludeTax", true)}
                />
              </div>
            </Grid>
          </Grid>
        </ChildrenLayout>
        <ChildrenLayout>
          <Grid item xs={12} mt={5}>
            <MainSelectChoseModule moduleName="freeQuantitiesDetailesModel" />
            <ItemsfreequantityTable moduleName="freeQuantitiesDetailesModel" />
          </Grid>
        </ChildrenLayout>
      </div>
    </LayoutMainData>
  );
}

export default MainData;
