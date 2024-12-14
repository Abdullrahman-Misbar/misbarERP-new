import { Divider, Grid } from "@mui/material";
import { useFormikContext } from "formik";
import { Label } from "../../../../atoms/formik/Label";
import RadioButtons from "../../../../atoms/formik/RadioComp";
import BaseInputDatepicker from "../../../../atoms/formik/BaseInputDatepicker";
import BaseInputField from "../../../../atoms/formik/BaseInputField";
import { SwitchComp } from "../../../../atoms/formik/SwitchComp";

function OptionCompare() {
    const { values,setFieldValue } = useFormikContext<any>();

     

  return (
    <>
    <Divider orientation="horizontal"  flexItem />
   <Grid item xs={12} sm={12}>
        <Label htmlFor="">  المقارنة        </Label>
</Grid>
<Grid item xs={12} sm={12}>
                       <div>
                          <RadioButtons
                           name="compareWithPreviousYear"
                           label=" مع الفترة السابقة لنفس العام "
                           checked={values?.compareWithPreviousYear===true}
                           onChange={() => setFieldValue("compareWithPreviousYear", true)}
                         />
                         {
                            values?.compareWithPreviousYear===true &&
                              
                            <BaseInputField
                          name="NumberOfPeriods"
                          placeholder="  عدد الفترات    "
                          label=" فترة     " 
                          type={"number"}                          />
                         }
                       </div>
                     </Grid>
                     <Grid item xs={12} sm={12}>
                     <div>
                         <RadioButtons
                           name="compareWithPreviousYear"
                           label="مع السنوات السابقة "
                           checked={values?.compareWithPreviousYear === false}
                           onChange={() => setFieldValue("compareWithPreviousYear", false)}
                         />
                           {
                            values?.compareWithPreviousYear===false &&
                              
                            <BaseInputField
                          name="NumberOfPreviousYears"
                          placeholder="  عدد السنوات    "
                          label=" سنة      " 
                          type={"number"}                          />
                         }
                       </div>
                     </Grid>
                     <Grid item xs={12} sm={12}>
                     <div>
                          <div className="flex items-center gap-3 mt-3">
                                                  <Label htmlFor="">    الرصيد السابق للمشتريات       </Label>
                                                  <SwitchComp
                                                    name="PreviousPurchaseBalance"
                                                   //  defaultChecked={true}
                                                   //  label={'محلية'}
                                                   
                                                  />
                                                </div>
                         {
                            values?.PreviousPurchaseBalance===true &&
                            <BaseInputDatepicker
                            name="startDate"
                            placeholder="  من  تاريخ    "
                            label=" من  تاريخ    "
                          />
                         }
                       </div>
                     </Grid>

  </>
  )
}

export default OptionCompare;