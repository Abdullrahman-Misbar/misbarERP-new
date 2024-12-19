import { Grid } from "@mui/material";

import { useFormikContext } from "formik";
import BaseInputDatepicker from "../../../../atoms/formik/BaseInputDatepicker";
import BaseInputField from "../../../../atoms/formik/BaseInputField";
import LayoutMainData from "../../../../molecules/LayoutMainData";
import SelectDepartment from "../../../../molecules/Selects/SelectDepartment";
import SelectDirectManager from "../../../../molecules/Selects/SelectDirectManager";
import SelectJobPosition from "../../../../molecules/Selects/SelectJobPosition";
import MainCopyComp from "./toolbarComponents/MainCopyComp";
import { Values_TP } from "./Types&Validation";
import ChildrenLayout from "../../../../molecules/ChildrenLayout";
import InputGetCode from "../../../../molecules/InputGetCode";

function MainData() {
  const { values } = useFormikContext<Values_TP>();
  const newValues = {
    empCode: values?.copValue?.empCode || "",
    empName: values?.copValue?.empName || "",
    phone: values?.copValue?.phone || "",
    email: values?.copValue?.email || "",
    address: values?.copValue?.address || "",
    generalDataNote: values?.copValue?.generalDataNote || "",
    hireDate: values?.copValue?.hireDate || "",
    deptId: values?.copValue?.deptId || 0,
    jobPositionId: values?.copValue?.jobPositionId || 0,
    managerId: values?.copValue?.managerId || 0,
    workRecord: values?.copValue?.workRecord || "",
    workDataNote: values?.copValue?.workDataNote || "",
    note: values?.copValue?.note || "",
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
        <div>
          <Grid item xs={12}>
            <h4
              style={{ fontSize: "1.5rem", margin: "0 0 8px", color: "#333" }}
            >
              البيانات العامة
            </h4>
          </Grid>

          <Grid container rowSpacing={4} columnSpacing={4}>
            {/* <Grid item xs={12} sm={4}>
              <BaseInputField
                name="empCode"
                placeholder="الرقم المرجعي"
                type="text"
                disabled
                label="الرقم المرجعي"
              />
            </Grid> */}
            <Grid item xs={12} sm={4}>
              <InputGetCode
                name="empCode"
                placeholder="الرقم المرجعي"
                label="الرقم المرجعي"
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <BaseInputField
                name="email"
                placeholder="البريد الالكتروني"
                type="email"
                label="البريد الالكتروني"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <BaseInputField
                name="empName"
                placeholder="أسم مندوب المبيعات"
                type="text"
                label="أسم مندوب المبيعات"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <BaseInputField
                name="address"
                placeholder="العنوان"
                type="text"
                label="العنوان"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <BaseInputField
                name="phone"
                placeholder="الهاتف"
                type="text"
                label="الهاتف"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <BaseInputField
                name="generalDataNote"
                placeholder="الملاحظات"
                type="text"
                label="الملاحظات"
              />
            </Grid>
          </Grid>
          <Grid item xs={12} mt={3}>
            <h4
              style={{
                fontSize: "1.5rem",
                margin: "10px 0 20px",
                color: "#333",
              }}
            >
              بيانات العمل
            </h4>
          </Grid>
          <Grid container rowSpacing={4} columnSpacing={4}>
            <Grid item xs={12} sm={4}>
              <BaseInputDatepicker
                name="hireDate"
                placeholder="تاريخ الانضمام الى العمل"
                label="تاريخ الانضمام الى العمل"
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <SelectDirectManager name="managerId" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <SelectDepartment name="deptId" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <BaseInputField
                name="workRecord"
                placeholder="سجل العمل"
                type="text"
                label="سجل العمل"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <SelectJobPosition name="jobPositionId" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <BaseInputField
                name="workDataNote"
                placeholder="ملاحظات العمل"
                type="text"
                label="ملاحظات العمل"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <BaseInputField
                name="note"
                placeholder="الملاحظات"
                type="text"
                label="الملاحظات"
              />
            </Grid>
          </Grid>
        </div>
      </ChildrenLayout>
    </LayoutMainData>
  );
}

export default MainData;
