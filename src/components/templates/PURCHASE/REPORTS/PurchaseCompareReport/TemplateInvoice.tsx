import { Divider, Grid } from "@mui/material";
import { useFormikContext } from "formik";
import { Label } from "../../../../atoms/formik/Label";
import RadioButtons from "../../../../atoms/formik/RadioComp";

function TemplateInvoice() {
    const { values,setFieldValue } = useFormikContext<any>();

  return (
    <>
    <Divider orientation="horizontal"  flexItem />
   <Grid item xs={12} sm={12}>
        <Label htmlFor=""> نماذج التقرير    </Label>
</Grid>
<Grid item xs={12} sm={12}>
                       <div  >
                          <RadioButtons
                           name="reportTypesEnum"
                           label="    المقارنة على مستوى  المستودعات "
                           checked={values?.reportTypesEnum===1}
                           onChange={() => setFieldValue("reportTypesEnum", 1)}
                         />
                        
                       </div>
                     </Grid>
                     <Grid item xs={12} sm={12}>
                     <div  >
                         <RadioButtons
                           name="reportTypesEnum"
                           label="    المقارنة على مستوى مجموعة الموردين    "
                           checked={values?.reportTypesEnum === 2}
                           onChange={() => setFieldValue("reportTypesEnum", 2)}
                         />
                       </div>
                     </Grid>
                     <Grid item xs={12} sm={12}>
                     <div  >
                         <RadioButtons
                           name="reportTypesEnum"
                           label="    المقارنة على مستوى  الفرع      "
                           checked={values?.reportTypesEnum === 3}
                           onChange={() => setFieldValue("reportTypesEnum", 3)}
                         />
                       </div>
                     </Grid>
                     <Grid item xs={12} sm={12}>
                     <div  >
                         <RadioButtons
                           name="reportTypesEnum"
                           label="المقانة على مستوى الفرع والتجميع حسب مجموعة الموردين عمودي "
                           checked={values?.reportTypesEnum === 4}
                           onChange={() => setFieldValue("reportTypesEnum",4)}
                         />
                       </div>
                     </Grid>
                     <Grid item xs={12} sm={12}>
                     <div  >
                         <RadioButtons
                           name="reportTypesEnum"
                           label="المقانة على مستوى الفرع والتجميع حسب مجموعة الموردين  افقي "
                           checked={values?.reportTypesEnum ===5}
                           onChange={() => setFieldValue("reportTypesEnum", 5)}
                         />
                       </div>
                     </Grid>
                     <Grid item xs={12} sm={12}>
                     <div  >
                         <RadioButtons
                           name="reportTypesEnum"
                           label="    المقارنة على مستوى  الموردين "
                           
                           checked={values?.reportTypesEnum ===6}
                           onChange={() => setFieldValue("reportTypesEnum", 6)}
                         />
                       </div>
                     </Grid>
  </>
  )
}

export default TemplateInvoice;