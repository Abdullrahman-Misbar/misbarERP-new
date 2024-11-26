import { Grid } from "@mui/material"
import BaseInputField from '../../../../atoms/formik/BaseInputField'
import LayoutMainData from '../../../../molecules/LayoutMainData'

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
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <BaseInputField
            name="expectedReceiptDate"
            placeholder="تاريخ الاستلام المتوقع"
            type="date"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <BaseInputField name="total" placeholder="الإجمالي" type="text" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <BaseInputField
            name="createDate"
            placeholder="تاريخ إنشاء الأمر"
            type="date"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <BaseInputField
            name="referenceDocument"
            placeholder="المستند المرجعي"
            type="text"
          />
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <SelectCurrency name="currencyId" />
        </Grid> */}
        {/* <Grid item xs={12} sm={6}>
          <SelectPurchaseAgreement name="purchaseAgreementId" />
        </Grid> */}
        {/* <Grid item xs={12} sm={6}>
          <SelectStatus name="status" />
        </Grid> */}
        {/* <Grid item xs={12} sm={6}>
          <SelectVendor name="vendorId" />
        </Grid> */}
        <Grid item xs={12} sm={6}>
          <BaseInputField
            name="approvalDate"
            placeholder="تاريخ الاعتماد"
            type="date"
          />
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <SelectWarehouse name="warehouseId" />
        </Grid> */}
        <Grid item xs={6}>
          <BaseInputField name="note" placeholder="ملاحظات" type="textarea" />
        </Grid>
      </Grid>
    
    </div>
    </LayoutMainData>
  )
}

export default MainData