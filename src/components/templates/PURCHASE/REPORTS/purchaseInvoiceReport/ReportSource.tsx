import { Box, Divider, FormControlLabel, Grid, Switch } from "@mui/material";
import { SwitchComp } from "../../../../atoms/formik/SwitchComp";
import { Label } from "../../../../atoms/formik/Label";
import RadioButtons from "../../../../atoms/formik/RadioComp";
import { useFormikContext } from "formik";

function ReportSource() {
        const { values, setFieldValue } = useFormikContext<any>();
    
  return (
    <Grid container  >
        
      <Grid item xs={12} sm={12}  >
        <span className="text-m font-somarBold ">  مصادر التقارير   </span>
      </Grid>
     
      <div className="flex flex-col gap-1 ">
        {[
          " المشتريات  ",
          "مرتجع المشتريات ",
          " الاشعارات الدائنة  ",
          "الاشعارات المدينة",
          
        ].map((option) => (
            <Grid item xs={6} sm={12}>
             
         
          <FormControlLabel
// className="font-somarBold"
            key={option}
              disabled={true}
            control={<SwitchComp   name={option}  defaultChecked={true} />}
            label={option}
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: "16px",
                margin:"10px 0"
              },
            }}
          />
           </Grid>
        ))}

       {values?.reportTypesEnum<=2 && 
       <>
         <Divider orientation="horizontal"  flexItem />
        <Grid item xs={12} sm={12}>
             <Label htmlFor=""> نماذج التقرير    </Label>
</Grid>
<Grid item xs={12} sm={12}>
                            <div  >
                               <RadioButtons
                                name="reportTypesEnum"
                                label="الشكل  القياسي "
                                checked={values?.reportTypesEnum===1}
                                onChange={() => setFieldValue("reportTypesEnum", 1)}
                              />
                             
                            </div>
                          </Grid>
                          <Grid item xs={12} sm={12}>
                          <div  >
                              <RadioButtons
                                name="reportTypesEnum"
                                label=" التجميع بحسب المورد  "
                                checked={values?.reportTypesEnum === 2}
                                onChange={() => setFieldValue("reportTypesEnum", 2)}
                              />
                            </div>
                          </Grid>
       </>
       

       }  
      </div>
       
     
    </Grid>
  );
}

export default ReportSource;
