import { Grid } from "@mui/material";
import { useFormikContext } from "formik";
import BaseInputDatepicker from "../../../../../atoms/formik/BaseInputDatepicker";
import BaseInputField from "../../../../../atoms/formik/BaseInputField";
import { Label } from "../../../../../atoms/formik/Label";
import LayoutMainData from "../../../../../molecules/LayoutMainData";
import MainSelectChoseModule from "../../../../../molecules/MainSelectChoseModule";
import SelectCurrency from "../../../../../molecules/Selects/SelectCurrency";
import SelectPurchaseAgreement from "../../../../../molecules/Selects/SelectPurchasAgreement";
import SelectVendor from "../../../../../molecules/Selects/SelectVendor";
import SelectWarehouse from "../../../../../molecules/Selects/SelectWarehouse";
import ItemsTable from "../../../../../molecules/tablesDynamic/ItemsTable";
import MainCopyComp from "./toolbarComponents/MainCopyComp";
import { Values_TP } from "./Types&Validation";
import SelectAccount from "../../../../../molecules/Selects/SelectAccount";
import ApprovedStatus from "../../../../../molecules/ApprovedStatus";
import RadioButtons from "../../../../../atoms/formik/RadioComp";
import SelectNotification from "../../../../../molecules/Selects/SelectNotification";
import ChildrenLayout from "../../../../../molecules/ChildrenLayout";

function MainData() {
  const { values, setFieldValue } = useFormikContext<Values_TP>();
  const newValues = {
    noticeCode: values?.copValue?.noticeCode || "",
    tax: values?.copValue?.tax || "",
    noticeDate: values?.copValue?.noticeDate || "",
    accountId: values?.copValue?.accountId || "",
    sourceDocument: values?.copValue?.sourceDocument || "",
    sourceDocumentDate: values?.copValue?.sourceDocumentDate || "",
    description: values?.copValue?.description || "",
    note: values?.copValue?.note || "",
    displayMethod: values?.copValue?.displayMethod || 0,
  };

  return (
    <LayoutMainData
      componentCopy={<MainCopyComp />}
      //@ts-ignore
      newValues={newValues}
      deleteEndPoint="/api/Notics/Delete"
    >
      <div>
        <ChildrenLayout>
          <Grid container rowSpacing={4} columnSpacing={3}>
            <Grid container item sm={10} rowSpacing={4} columnSpacing={3}>
              <Grid item xs={12} sm={6}>
                <BaseInputField
                  name="noticeCode"
                  placeholder="الرقم المرجعي"
                  type="text"
                  disabled
                  label="الرقم المرجعي"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <BaseInputField
                  name="tax"
                  placeholder=" الضريبة"
                  type="number"
                  label=" الضريبة"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <BaseInputDatepicker
                  name="noticeDate"
                  placeholder=" التاريخ  "
                  label=" التاريخ"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <SelectAccount name="accountId" labelName="الحساب" />
              </Grid>

              <Grid item xs={12} sm={6}>
                <BaseInputField
                  name="sourceDocument"
                  placeholder=" المستند المرجعي"
                  type="text"
                  label=" المستند المرجعي"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <BaseInputDatepicker
                  name="sourceDocumentDate"
                  placeholder=" تاريخ المستند المرجعي  "
                  label="   تاريخ المستند المرجعي"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <BaseInputField
                  name="description"
                  placeholder="  البيان"
                  type="text"
                  label="  البيان"
                />
              </Grid>

              <Grid item xs={12} sm={6} mt={4}>
                <div className="flex items-center gap-5">
                  <Label htmlFor="">الحالة</Label>

                  <ApprovedStatus />
                </div>
              </Grid>

              <Grid item xs={12} sm={6}>
                <BaseInputField
                  name=" "
                  placeholder="  قيمة الاشعار"
                  type="text"
                  label="  قيمة الاشعار"
                />
              </Grid>

              <Grid item xs={12} sm={4}>
                <SelectNotification name="d" />
              </Grid>

              <Grid item xs={12} sm={4}>
                <div className="flex items-center gap-4 mt-8">
                  <Label htmlFor=""> طريقة العرض </Label>
                  <RadioButtons
                    name="displayMethod"
                    label=" عادي"
                    checked={values?.displayMethod == 0}
                    onChange={() => setFieldValue("displayMethod", 0)}
                  />

                  <RadioButtons
                    name="displayMethod"
                    label=" تفصيلي"
                    checked={values?.displayMethod == 1}
                    onChange={() => setFieldValue("displayMethod", 1)}
                  />
                </div>
              </Grid>

              <Grid item xs={12}>
                <BaseInputField
                  name="note"
                  placeholder="تفاصيل الفاتورة"
                  type="textarea"
                  label="تفاصيل الفاتورة"
                />
              </Grid>
            </Grid>
            <Grid item sm={2}>
              <div className="flex items-center flex-col justify-center">
                <div className="size-[168px] bg-[#EEE] mt-8"></div>
                <p className="my-3">QR CODE</p>
              </div>
            </Grid>
          </Grid>
        </ChildrenLayout>
        <ChildrenLayout>
          <Grid item xs={12} mt={5}>
            <MainSelectChoseModule moduleName="noticDetailsModal" />
            <ItemsTable moduleName="noticDetailsModal" />
          </Grid>
        </ChildrenLayout>
      </div>
    </LayoutMainData>
  );
}

export default MainData;
