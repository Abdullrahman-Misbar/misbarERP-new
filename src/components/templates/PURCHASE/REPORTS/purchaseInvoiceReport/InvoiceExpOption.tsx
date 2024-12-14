import { FormControlLabel, Grid, Switch } from "@mui/material";
import { SwitchComp } from "../../../../atoms/formik/SwitchComp";

function InvoiceExpOption() {
      return (
            <Grid container  >
                
              <Grid item xs={12} sm={12}  >
                <span className="text-m font-somarBold "> خيارات الاستعراض </span>
              </Grid>
             
              <div className="flex flex-col gap-1 ">
                {[
                  " تسلسل   ",
                  " التاريخ  ",
                  "  الرقم المرجعي",
                  " نوع العملية ",
                  " المورد",
                  " مجموعة المورد  ",
                  "اجمالي الفاتورة",
                  "الخصم ",
                  " الاضافة",
                  " الاجمالي بعد الخصم والاضافة ",
                  "الضريبة ",
                  "صافي الفاتورة ",
                  " حالة الاستلام    ",
                  " حالة الفوترة    ",
                  " حالة  الدفع    ",
                  "  الرصيد       ",
                  "  تاريخ الاستحقاق       ",
                  "   المتسودع ",
                  "   الفرع ",
                  "   مركز التكلفة ",
                  "    نسبة السحب من المورد من اجمالي المشتريات   ",
                  "   الرقم الضريبي للمورد ",
                  "   منطقة المورد ",
                  "  المستخدم       ",
                  "  ملاحظات       ",















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

export default InvoiceExpOption;
