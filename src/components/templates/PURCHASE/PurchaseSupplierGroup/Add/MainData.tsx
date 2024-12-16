import { Grid } from "@mui/material";

import { useFormikContext } from "formik";
import BaseInputField from "../../../../atoms/formik/BaseInputField";
import LayoutMainData from "../../../../molecules/LayoutMainData";
import SelectMultiTags from "../../../../molecules/SelectMulti/SelectMultiTags";
import SelectAccount from "../../../../molecules/Selects/SelectAccount";
import SelectPartnerGroup from "../../../../molecules/Selects/SelectPartnerGroup";

import SelectCostCenter from "../../../../molecules/Selects/SelectCostCenter";
import MainCopyComp from "./toolbarComponents/MainCopyComp";
import { Values_TP } from "./Types&Validation";
import InputGetCode from "../../../../molecules/InputGetCode";

function MainData() {
  const { values } = useFormikContext<Values_TP>();
  const newValues = {
    categoryCode: values?.copValue?.categoryCode || "",
    categoryName: values?.copValue?.categoryName || "",
    mainCategoryId: values?.copValue?.mainCategoryId || 0,
    accountId: values?.copValue?.accountId || 0,
    costCenterId: values?.copValue?.costCenterId || 0,
    note: values?.copValue?.note || "",
    accountName: values?.copValue?.accountName || "",
    costCenterName: values?.copValue?.costCenterName || "",
    mainCategoryName: values?.copValue?.mainCategoryName || "",
    tags: values?.copValue?.tags || [],
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
            <InputGetCode
              name="categoryCode"
              placeholder="الرقم المرجعي"
              label="الرقم المرجعي"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectAccount name="accountId" labelName={"الحساب"} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BaseInputField
              name="ctaegoryName"
              placeholder="أسم المجموعة"
              type="text"
              label="أسم المجموعة"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <SelectCostCenter name="costCenterId" labelName={"مركز التكلفة"} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectPartnerGroup
              name="mainCategoryId"
              label="المجموعة الرئيسية "
              placeholder="أختر المجموعة الرئيسية"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectMultiTags name="tags" labelName={"الوسوم"} />
          </Grid>
          <Grid item xs={12} sm={12}>
            <BaseInputField
              name="note"
              placeholder="الملاحظات"
              type="textarea"
              label="الملاحظات"
            />
          </Grid>
        </Grid>
      </div>
    </LayoutMainData>
  );
}

export default MainData;
