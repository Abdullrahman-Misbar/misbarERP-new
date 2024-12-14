import { Divider, Grid } from "@mui/material";
import { useFormikContext } from "formik";
import { Label } from "../../../../atoms/formik/Label";
import RadioButtons from "../../../../atoms/formik/RadioComp";

function TemplateItem() {
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
                           label="مقارنة الاصناف على مسستوى الفرع ومجموعتين من مجموعات الموردين "
                           checked={values?.reportTypesEnum===7}
                           onChange={() => setFieldValue("reportTypesEnum", 7)}
                         />
                        
                       </div>
                     </Grid>
                     <Grid item xs={12} sm={12}>
                     <div  >
                         <RadioButtons
                           name="reportTypesEnum"
                           label="مقارنة الاصناف على مستوى فرع محدد ومجموعة محددة وموردين محددين "
                           checked={values?.reportTypesEnum === 8}
                           onChange={() => setFieldValue("reportTypesEnum", 8)}
                         />
                       </div>
                     </Grid>
                     <Grid item xs={12} sm={12}>
                     <div  >
                         <RadioButtons
                           name="reportTypesEnum"
                           label="مقارنة الاصناف مع 3 سنوات سابقة لنفس الشهر "
                           checked={values?.reportTypesEnum === 9}
                           onChange={() => setFieldValue("reportTypesEnum", 9)}
                         />
                       </div>
                     </Grid>
                     <Grid item xs={12} sm={12}>
                     <div  >
                         <RadioButtons
                           name="reportTypesEnum"
                           label="مقارنة الاصناف مع 3 سنوات سابقة واظهار اعمدةالرصيد السابق والرصيد الحالي "
                           checked={values?.reportTypesEnum === 10}
                           onChange={() => setFieldValue("reportTypesEnum",10)}
                         />
                       </div>
                     </Grid>
                     <Grid item xs={12} sm={12}>
                     <div  >
                         <RadioButtons
                           name="reportTypesEnum"
                           label="مقارنة الاصناف مع 3 سنوات واظهار الرصيد السابق والحالي ونسبة السحب للصنف من المورد من اجمالي  المشتريات"
                           checked={values?.reportTypesEnum ===11}
                           onChange={() => setFieldValue("reportTypesEnum", 11)}
                         />
                       </div>
                     </Grid>
                     
  </>
  )
}

export default TemplateItem;