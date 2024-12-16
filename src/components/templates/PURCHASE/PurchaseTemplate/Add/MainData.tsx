import { Grid } from "@mui/material";
import { useFormikContext } from "formik";
import BaseInputField from "../../../../atoms/formik/BaseInputField";
import LayoutMainData from "../../../../molecules/LayoutMainData";
import PaymentTermsTable from "./PaymentTermsTable";
import MainCopyComp from "./toolbarComponents/MainCopyComp";
import { Values_TP } from "./Types&Validation";

import { Label } from "../../../../atoms/formik/Label";
import { SwitchComp } from "../../../../atoms/formik/SwitchComp";
import ChildrenLayout from "../../../../molecules/ChildrenLayout";

function MainData() {
  const { values, setFieldValue } = useFormikContext<Values_TP>();
  const newValues = {
    templateName: values?.copValue?.templateName || "",
    foreignTemplateName: values?.copValue?.foreignTemplateName || "",
    discerption: values?.copValue?.discerption || "",
    isActive:
      values?.copValue?.isActive !== undefined
        ? values?.copValue?.isActive
        : true,

    paymentTermses: values?.copValue?.paymentTermses || [],
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
                name="templateName"
                placeholder="أسم الفالب"
                type="text"
                label="أسم القالب"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <BaseInputField
                name="foreignTemplateName"
                placeholder="الاسم بالاجنبي"
                type="text"
                label="الاسم بالاجنبي"
              />
            </Grid>

            <Grid item xs={6}>
              <BaseInputField
                name="discerption"
                placeholder="الوصف"
                type="textarea"
                label="الوصف"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Label htmlFor="">الحالة</Label>
              <SwitchComp
                name="isActive"
                defaultChecked={values?.isActive == true}
                //@ts-ignore
                onChange={(e: any) => {
                  setFieldValue("isActive", e.target.checked ? true : false);
                }}
              />
            </Grid>
          </Grid>
        </ChildrenLayout>
        <ChildrenLayout>
          <Grid item xs={12} mt={5}>
            <PaymentTermsTable moduleName="paymentTermses" />
          </Grid>
        </ChildrenLayout>
      </div>
    </LayoutMainData>
  );
}

export default MainData;
