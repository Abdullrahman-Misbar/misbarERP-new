import { Divider, Grid } from "@mui/material";
import { useFormikContext } from "formik";
import { Label } from "../../../../atoms/formik/Label";
import RadioButtons from "../../../../atoms/formik/RadioComp";
import BaseInputDatepicker from "../../../../atoms/formik/BaseInputDatepicker";

function OptionPeriod() {
    const { values,setFieldValue } = useFormikContext<any>();

   
  return (
    <>
    <Divider orientation="horizontal"  flexItem />
   <Grid item xs={12} sm={12}>
        <Label htmlFor="">  الفترة       </Label>
</Grid>
<Grid item xs={12} sm={6}>
                       <div>
                          <RadioButtons
                           name="period"
                           label=" يومي "
                           checked={values?.period===1}
                           onChange={() => setFieldValue("period", 1)}
                         />
                         
                       </div>
                     </Grid>

                     {
                            values?.period===1 &&    <Grid item xs={12} sm={6}>
                       <div>
                         
                            <BaseInputDatepicker
                            name="endDate"
                            placeholder="  تاريخ    "
                            label=" تاريخ    "
                          />
                        
                       </div>
                     </Grid>
                      }
                     <Grid item xs={12} sm={12}>
                     <div>
                         <RadioButtons
                           name="period"
                           label="شهري "
                           checked={values?.period === 2}
                           onChange={() => setFieldValue("period",2)}
                         />
                         
                       </div>
                     </Grid>
                     <Grid item xs={12} sm={12}>
                     <div>
                         <RadioButtons
                           name="period"
                           label="مخصص  "
                           checked={values?.period === 3}
                           onChange={() => setFieldValue("period", 3)}
                         />
                          {
                            values?.period===3 &&
                            <BaseInputDatepicker
                            name="startDate"
                            placeholder="  من تاريخ    "
                            label="  من تاريخ    "
                          />
                         }
                         {
                            values?.period===3 &&
                            <BaseInputDatepicker
                            name="endDate"
                            placeholder="  الى تاريخ    "
                            label=" الى تاريخ    "
                          />
                         }
                       </div>
                     </Grid>

  </>
  )
}

export default OptionPeriod;