import { Grid } from "@mui/material";
import { SetStateAction, useState } from "react";

import { useFormikContext } from "formik";
import BaseInputField from "../../../../atoms/formik/BaseInputField";
import LayoutMainData from "../../../../molecules/LayoutMainData";
import SelectPartnerGroup from "../../../../molecules/Selects/SelectPartnerGroup";
import SelectAccount from "../../../../molecules/Selects/SelectAccount";
import SelectMultiCostCenter from "../../../../molecules/SelectMulti/SelectMultiCostCenter";
import SelectMultiPartnerGroup from "../../../../molecules/SelectMulti/SelectMultiPartnerGroup";
import SelectMultiTags from "../../../../molecules/SelectMulti/SelectMultiTags";

import MainCopyComp from "./toolbarComponents/MainCopyComp";
import { Values_TP } from "./Types&Validation";

function MainData() {
  const { values, setFieldValue } = useFormikContext<Values_TP>();
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
            <BaseInputField
              name="categoryCode"
              placeholder="الرقم المرجعي"
              type="text"
             
              label="الرقم المرجعي"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectAccount name="accountId" labelName={"الحساب"} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BaseInputField
              name="categoryName"
              placeholder="أسم المجموعة"
              type="text"
              label="أسم المجموعة"
            />
          </Grid>

          
          <Grid item xs={12} sm={6}>
            <SelectMultiCostCenter name="costCenterId" labelName={"مركز التكلفة"} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectPartnerGroup name="mainCategoryId" labelName={"المجموعة الرئيسية"}  />
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