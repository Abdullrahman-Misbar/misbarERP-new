import { FieldArray, useFormikContext } from "formik";
import { Grid, Button, Switch, FormControlLabel } from "@mui/material";
import BaseInputField from "../../../../../atoms/formik/BaseInputField";
import { Label } from "../../../../../atoms/formik/Label";
import RadioButtons from "../../../../../atoms/formik/RadioComp";
import { SwitchComp } from "../../../../../atoms/formik/SwitchComp";
import SelectComp from "../../../../../atoms/formik/SelectComp";
import SelectMultiPaymentTemplate from "../../../../../molecules/SelectMulti/SelectMultiPaymentTemplate";

function PurchaseSaleSettings({ moduleName }: { moduleName: string }) {
  const { values, setFieldValue } = useFormikContext<any>();

  return (
    <div>
      <Grid container spacing={4}>
        {/* Purchase Settings Section */}
        <Grid item xs={12} md={6}>
          <div
            style={{
              border: "1px solid #ddd",
              padding: "16px",
              borderRadius: "8px",
            }}
          >
            <h4>إعدادات الشراء</h4>
            <div className="flex items-center gap-4 mt-6">
              <Label htmlFor="">التذكير قبل الموعد</Label>
              <SwitchComp
                name="reminderingBeforeReceiptDate"
                defaultChecked={values?.reminderingBeforeReceiptDate == true}
              />
            </div>
            
            <SelectComp
    name="purchaseRepresentativeId"
    label="مندوب المشتريات"
    placeholder="مندوب المشتريات"
    options={[
      { label: "test 1", value: "1" },
     
    ]}
    onChange={(selectedOption: any) =>
      setFieldValue("purchaseRepresentativeId", selectedOption?.value)
    }
  />
  
  <SelectMultiPaymentTemplate name="paymentTermTemplateId" labelName="شروط سداد الشراء" />

            
          </div>
        </Grid>

        {/* Sales Settings Section */}
        <Grid item xs={12} md={6}>
          <div
            style={{
              border: "1px solid #ddd",
              padding: "16px",
              borderRadius: "8px",
            }}
          >
            <h4>إعدادات البيع</h4>

            <div className="flex items-center gap-4 mt-8">
              <Label htmlFor="">اماكنية البيع للمورد</Label>
              <RadioButtons
                name="forSalesOrPurchase"
                label="لا"
                checked={values?.forSalesOrPurchase === 0}
                onChange={() => setFieldValue("forSalesOrPurchase", 0)}
              />
              <RadioButtons
                name="forSalesOrPurchase"
                label="نعم"
                checked={values?.forSalesOrPurchase === 1}
                onChange={() => setFieldValue("forSalesOrPurchase", 1)}
              />
            </div>
            <SelectComp
    name="salesRepresentative"
    label="المندوب"
    placeholder="المندوب"
    options={[
      { label: "test 1", value: "test1" },
     
    ]}
    onChange={(selectedOption: any) =>
      setFieldValue("nationality", selectedOption?.value)
    }
  />
 
  <SelectMultiPaymentTemplate name="paymentTermTemplateId" labelName="شروط سداد البيع" />
  <SelectComp
    name="priceList"
    label="قائمة الاسعار"
    placeholder="قائمة الاسعار"
    options={[
      { label: "12", value: "1" },
     
    ]}
    onChange={(selectedOption: any) =>
      setFieldValue("priceList", selectedOption?.value)
    }
  />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default PurchaseSaleSettings;
