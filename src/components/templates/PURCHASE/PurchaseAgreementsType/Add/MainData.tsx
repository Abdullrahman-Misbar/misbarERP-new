import { Grid } from "@mui/material";
import { useFormikContext } from "formik";
import BaseInputDatepicker from "../../../../atoms/formik/BaseInputDatepicker";
import BaseInputField from "../../../../atoms/formik/BaseInputField";
import { Label } from "../../../../atoms/formik/Label";
import RadioButtons from "../../../../atoms/formik/RadioComp";
import LayoutMainData from "../../../../molecules/LayoutMainData";
import MainCopyComp from "./toolbarComponents/MainCopyComp";
import { Values_TP } from "./Types&Validation";
import ChildrenLayout from "../../../../molecules/ChildrenLayout";

function MainData() {
  const { values, setFieldValue } = useFormikContext<Values_TP>();
  console.log("🚀 ~ MainData ~ values:", values);
  const newValues = {
    typeName: values?.copValue?.typeName || "",
    quotationsSelectionMethod:
      values?.copValue?.quotationsSelectionMethod || "",
    itemsSelectionMethod: values?.copValue?.itemsSelectionMethod || "",
    createDate: values?.copValue?.createDate || "",
    note: values?.copValue?.note || "",
    quantityDetermineMethod: values?.copValue?.quantityDetermineMethod || "",
  };

  return (
    <LayoutMainData
      componentCopy={<MainCopyComp />}
      //@ts-ignore
      newValues={newValues}
      visibility={{
        approvedBar:false ,
        operationLogsBar:false,
        settingBar:false ,
        cancelBar:false,
        
      }}
    >
      <ChildrenLayout>
        <Grid container rowSpacing={2}>
          <Grid item xs={12} sm={12}>
            <BaseInputField
              name="typeName"
              placeholder="اسم النوع"
              type="text"
              // disabled
              label="اسم النوع"
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Label htmlFor="">الية ادخال الاصناف </Label>
            <div className="flex items-center gap-4 mt-8">
              <RadioButtons
                name="itemsSelectionMethod"
                label="اختيار الاصناف الية كما هي في الاتفاقية"
                checked={values?.itemsSelectionMethod == 1}
                onChange={() => {
                  setFieldValue("itemsSelectionMethod", 1);
                }}
              />
              <RadioButtons
                name="itemsSelectionMethod"
                label="ادخالها بشكل يدوي"
                checked={values?.itemsSelectionMethod == 2}
                onChange={() => {
                  setFieldValue("itemsSelectionMethod", 2);
                }}
              />
            </div>
          </Grid>

          <Grid item xs={12} sm={12}>
            {" "}
            جلب الاصناف التي تم ادخالها عند اتفاقية الشراءمع امكانية التعديل
            عليهاحسب الرغبة أو ادخال الاصناف بشكل يدوي حسب الحاجة{" "}
          </Grid>

          <Grid item xs={12} sm={12}>
            <Label htmlFor="">الية اختيار العروض </Label>
            <div className="flex items-center gap-4 mt-8">
              <RadioButtons
                name="quotationsSelectionMethod"
                label="اختيار عرض واحد فقط"
                checked={values?.quotationsSelectionMethod == 1}
                onChange={() => setFieldValue("quotationsSelectionMethod", 1)}
              />

              <RadioButtons
                name="QuotationsSelectionMethodsecounf"
                label="اختيار اكثر من عرض"
                checked={values?.quotationsSelectionMethod == 2}
                onChange={() => setFieldValue("quotationsSelectionMethod", 2)}
              />
            </div>
          </Grid>

          <Grid item xs={12} sm={12}>
            اعتماد افضل عرض سعر والغاء باقي العروض او اعتماد اكثر من عرض
            وبالتالي يمكن شراء كميات معينه من اكثر من مورد
          </Grid>

          <Grid item xs={12} sm={12}>
            <Label htmlFor="">الية تحديد الكميات </Label>
            <div className="flex items-center gap-4 mt-8">
              <RadioButtons
                name="quantityDetermineMethod"
                label="اعتماد الكميات الموجوده في الاتفاقية"
                checked={values?.quantityDetermineMethod == 1}
                onChange={() => setFieldValue("quantityDetermineMethod", 1)}
              />

              <RadioButtons
                name="quantityDetermineMethod"
                label="تحديد الكميات بشكل يدوي  "
                checked={values?.quantityDetermineMethod == 2}
                onChange={() => setFieldValue("quantityDetermineMethod", 2)}
              />
            </div>
          </Grid>

          <Grid item xs={12} sm={12}>
            {" "}
            جلب كميات الاصناف التي تم تحديدها عند انشاء اتفاقية الشراء أو تحديد
            كمات الاصناف يدويا
          </Grid>
          <Grid item xs={12} sm={12}>
            <BaseInputField
              name="note"
              placeholder="ملاحظات"
              type="textarea"
              label="ملاحظات"
            />
          </Grid>
        </Grid>
      </ChildrenLayout>
    </LayoutMainData>
  );
}

export default MainData;
