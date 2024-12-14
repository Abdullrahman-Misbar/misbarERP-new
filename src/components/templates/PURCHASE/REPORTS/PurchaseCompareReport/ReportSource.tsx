import {   FormControlLabel, Grid } from "@mui/material";
import { SwitchComp } from "../../../../atoms/formik/SwitchComp";
  import { useFormikContext } from "formik";
import TemplateInvoice from "./TemplateInvoice";
import TemplateItem from "./TemplateItem";

function ReportSource() {
        const { values } = useFormikContext<any>();
    
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

       {values?.reportTypesEnum<=6 && 
       
       
   <TemplateInvoice/>
       }  
       
       {values?.reportTypesEnum>=7 && 
       
       
       <TemplateItem/>
           }  
      </div>
       
     
    </Grid>
  );
}

export default ReportSource;
