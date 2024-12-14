import { FormControlLabel, Grid, Switch } from "@mui/material";
import { SwitchComp } from "../../../../atoms/formik/SwitchComp";

function ItemExpOption() {
      return (
            <Grid container  >
                
              <Grid item xs={12} sm={12}  >
                <span className="text-m font-somarBold "> خيارات الاستعراض </span>
              </Grid>
             
              <div className="flex flex-col gap-1 ">
                {[
                  "تسلسل ",
                  "مجموعة الموردين",
                  "   المورد  ",
                  "   مجموعة الصنف  ",
                  "   اسم الصنف  ",
                  "   الكمية   ",
                  "   الوحدة  ",
                


                  "الرصيد السابق لمشتريات الصنف",
                  "الرصيد الحالي لمشتريات الصنف",
                  "   صافي قيمة مشتريات الصنف   ",
                  
                  "نسبة سحب الصنف من المورد من اجمالي المشتريات",
                  "الاجمالي ",
                  















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
              </div>
               
             
            </Grid>
          );
}

export default ItemExpOption;
