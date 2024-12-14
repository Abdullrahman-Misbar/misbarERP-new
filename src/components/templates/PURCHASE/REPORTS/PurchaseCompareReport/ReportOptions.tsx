import {  Grid } from "@mui/material";
import SelectMultiBranch from "../../../../molecules/SelectMulti/SelectMultiBranch";
import SelectMultiWarehouse from "../../../../molecules/SelectMulti/SelectMultiWarehouse";
import SelectMultiAccount from "../../../../molecules/SelectMulti/SelectMultiAccount";
import SelectMultiPartnerGroup from "../../../../molecules/SelectMulti/SelectMultiPartnerGroup";
import SelectMultiPartner from "../../../../molecules/SelectMulti/SelectMultiPartner";
import SelectMultiCostCenter from "../../../../molecules/SelectMulti/SelectMultiCostCenter";
import SelectMultiCurrency from "../../../../molecules/SelectMulti/SelectMultiCurrency";
 import { Label } from "../../../../atoms/formik/Label";
import RadioButtons from "../../../../atoms/formik/RadioComp";
 import { useFormikContext } from "formik";
import ItemReportOption from "./ItemReportOption";
import OptionPeriod from "./OptionPeriod";
import OptionCompare from "./OptionCompare";

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
                        checked={values?.reportTypesEnum<=6}
                        onChange={() => setFieldValue("reportTypesEnum", 1)}
                      />
                      <RadioButtons
                        name="reportTypesEnum"
                        label=" اصناف  "
                        checked={values?.reportTypesEnum >= 7}
                        onChange={() => setFieldValue("reportTypesEnum", 7)}
                      />
                    </div>
                  </Grid>
       {
values?.reportTypesEnum>=7 &&
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
          <OptionPeriod/>
          <OptionCompare/>
    </Grid>
  );
}

export default ReportOptions;
