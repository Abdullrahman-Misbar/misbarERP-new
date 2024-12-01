import { Grid } from "@mui/material";
import BaseInputField from "../../../../atoms/formik/BaseInputField";
import ItemsTable from "../../../../molecules/ItemsTable";
import LayoutMainData from "../../../../molecules/LayoutMainData";
import BaseInputDatepicker from "../../../../atoms/formik/BaseInputDatepicker";
import SelectPurchaseAgreement from "../../../../molecules/Selects/SelectPurchasAgreement";
import SelectVendor from "../../../../molecules/Selects/SelectVendor";
import SelectCurrency from "../../../../molecules/Selects/SelectCurrency";
import SelectWarehouse from "../../../../molecules/Selects/SelectWarehouse";

function MainData() {
  return (
    <LayoutMainData>
      <div>
        <Grid container rowSpacing={4} columnSpacing={4}>
          <Grid item xs={12} sm={6}>
            <BaseInputField
              name="code"
              placeholder="الرقم المرجعي"
              type="text"
              disabled
              label="الرقم المرجعي"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectPurchaseAgreement name="purchaseAgreementId" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectVendor name="vendorId" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BaseInputDatepicker
              name="createDate"
              placeholder="تاريخ الطلب"
              label="تاريخ الطلب"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectCurrency name="currencyId" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SelectWarehouse name="warehouseId" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BaseInputDatepicker
              name="approvalDate"
              placeholder="تاريخ الاعتماد"
              label="تاريخ الاعتماد"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BaseInputDatepicker
              name="expectedReceiptDate"
              placeholder="تاريخ الاستلام"
              label="تاريخ الاستلام"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BaseInputField
              name="total"
              placeholder="الإجمالي"
              type="text"
              label="الإجمالي"
            />
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <BaseInputDatepicker
              name="createDate"
              placeholder="تاريخ إنشاء الأمر"
              label="تاريخ إنشاء الأمر"
            />
          </Grid> */}
          <Grid item xs={12} sm={6}>
            <BaseInputField
              name="referenceDocument"
              placeholder="المستند المرجعي"
              type="text"
              label="المستند المرجعي"
            />
          </Grid>

 
          {/* <Grid item xs={12} sm={6}>
          <SelectWarehouse name="warehouseId" />
        </Grid> */}
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
          <ItemsTable moduleName="orderDetailsModal" />
        </Grid>
      </div>
    </LayoutMainData>
  );
}

export default MainData;
