import { Box, Grid } from "@mui/material";
import SelectMultiBranch from "../../../../molecules/SelectMulti/SelectMultiBranch";
import SelectMultiWarehouse from "../../../../molecules/SelectMulti/SelectMultiWarehouse";
import SelectMultiAccount from "../../../../molecules/SelectMulti/SelectMultiAccount";
import SelectMultiPartnerGroup from "../../../../molecules/SelectMulti/SelectMultiPartnerGroup";
import SelectMultiPartner from "../../../../molecules/SelectMulti/SelectMultiPartner";
import SelectMultiCostCenter from "../../../../molecules/SelectMulti/SelectMultiCostCenter";
import SelectMultiCurrency from "../../../../molecules/SelectMulti/SelectMultiCurrency";
import BaseInputDatepicker from "../../../../atoms/formik/BaseInputDatepicker";
import { Label } from "../../../../atoms/formik/Label";
import RadioButtons from "../../../../atoms/formik/RadioComp";
import { SwitchComp } from "../../../../atoms/formik/SwitchComp";
import { useFormikContext } from "formik";
import ItemReportOption from "./ItemReportOption";

function ReportOptions() {
    const { values, setFieldValue } = useFormikContext<any>();
  
  return (
    <Grid container >
      <Grid item xs={12} sm={12}  >
        <span className="text-m font-somarBold ">خيارات التقرير </span>
      </Grid>

       
        <Grid item xs={12} sm={12}>
                    <div className="flex items-center gap-4 mt-8">
                      <Label htmlFor=""> نوع التقرير    </Label>
                      <RadioButtons
                        name="reportTypesEnum"
                        label="فواتير "
                        checked={values?.reportTypesEnum>=1 && values?.reportTypesEnum<3}
                        onChange={() => setFieldValue("reportTypesEnum", 1)}
                      />
                      <RadioButtons
                        name="reportTypesEnum"
                        label=" اصناف  "
                        checked={values?.reportTypesEnum === 3}
                        onChange={() => setFieldValue("reportTypesEnum", 3)}
                      />
                    </div>
                  </Grid>
       

       {
values?.reportTypesEnum===3 &&
         <ItemReportOption />
       
      
       }

      <Grid item xs={12} sm={12}>
        <SelectMultiBranch name={"branchIds"} />
      </Grid>
      <Grid item xs={6} sm={12}>
        <SelectMultiWarehouse name={"warehouseIds"} />
      </Grid>
      <Grid item xs={6} sm={12}>
        <SelectMultiAccount name={"accountIds"} labelName={"الحساب"} />
      </Grid>
      <Grid item xs={6} sm={12}>
        <SelectMultiPartnerGroup name={"groupPartnerIds"} />
      </Grid>
      <Grid item xs={6} sm={12}>
        <SelectMultiPartner name={"partnerIds"} />
      </Grid>
      <Grid item xs={6} sm={12}>
        <SelectMultiCostCenter name={"costCenterIds"} />
      </Grid>
      <Grid item xs={6} sm={12}>
        <SelectMultiCurrency name={"currencyIds"} labelName={" العملة"} />
      </Grid>
      <Grid item xs={12} sm={12}>
            <BaseInputDatepicker
              name="startDate"
              placeholder=" من تاريخ  "
              label="من تاريخ  "
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <BaseInputDatepicker
              name="endDate"
              placeholder=" الى تاريخ  "
              label="الى  تاريخ  "
            />
          </Grid>

            <Grid item xs={12} sm={12}>
                       <div className="flex items-center gap-4 mt-3">
                         <Label htmlFor=""> نوع المشتريات     </Label>
                         <SwitchComp
                           name="isLocalPurchase"
                           defaultChecked={true}
                           label={'محلية'}
                          
                         />
                         <SwitchComp
                           name="isForeignPurchase"
                           defaultChecked={true}
                           label={'خارجية'}
                          
                         />
                       </div>
                     </Grid>
                     <Grid item xs={12} sm={8}>
                       <div className="flex items-center gap-4 mt-3">
                         <Label htmlFor="">  التجميع بحسب النوع       </Label>
                         <SwitchComp
                           name="groupByType"
                          //  defaultChecked={true}
                          //  label={'محلية'}
                          
                         />
                       </div>
                     </Grid>
                     <Grid item xs={12} sm={6}>
                       <div className="flex items-center gap-3 mt-3">
                         <Label htmlFor="">   معالجة الفواتير الغير معتمدة           </Label>
                         <SwitchComp
                           name="unApprovedInvoices"
                          //  defaultChecked={true}
                          //  label={'محلية'}
                          
                         />
                       </div>
                     </Grid>

    </Grid>
  );
}

export default ReportOptions;
