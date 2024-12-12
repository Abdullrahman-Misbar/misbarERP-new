import { Box, FormControlLabel, Grid, Switch } from "@mui/material";
import { SwitchComp } from "../../../../atoms/formik/SwitchComp";

function ReportSource() {
  return (
    <Grid container columnSpacing={1} rowSpacing={1}>
      <Grid item xs={12} sm={12} alignContent={"center"}>
        <span className="text-m font-somarBold "> خيارات الاستعراض </span>
      </Grid>
      <div className="flex flex-col gap-5 ">
        {[
          "رمز الصنف",
          "اسم الصنف",
          "باركود الصنف",
          "الكمية",
          "التكلفة",
          "التكلفة الإجمالية",
          "القيمة الإجمالية",
          "المجموعة",
          "المستودع",
        ].map((option) => (
          <FormControlLabel
            key={option}
            disabled={true}
            control={<SwitchComp name={option}  defaultChecked={true} />}
            label={option}
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: "14px",
                margin:"10px 0"
              },
            }}
          />
        ))}
      </div>
    </Grid>
  );
}

export default ReportSource;
