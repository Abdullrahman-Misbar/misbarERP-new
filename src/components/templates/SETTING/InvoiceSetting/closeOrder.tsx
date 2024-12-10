import { Grid } from "@mui/material";
import RadioButtons from "../../../atoms/formik/RadioComp";

function CloseOrder() {
  return (
    <div className="bg-white rounded-lg p-6 my-4">
      <span className="text-xl font-semibold">الخصم المكتسب</span>
      <div className="mt-6">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6}>
            <RadioButtons
              name="earnedDiscount"
              label="يوزع على الأصناف يدوياً"
              onChange={() => {}}
              checked={true} // Add checked attribute for default selection
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <RadioButtons
              name="earnedDiscount"
              label="يوزع على الأصناف نسبة وتناسب حسب الخصم المكتسب قيمة"
              onChange={() => {}}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <RadioButtons
              name="earnedDiscount"
              label="لا يؤثر على التكلفة"
              onChange={() => {}}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <RadioButtons
              name="earnedDiscount"
              label="     يوزع على الأصناف بالتساوي "
              onChange={() => {}}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <RadioButtons
              name="earnedDiscount"
              label="  يوزع على الأصناف نسبة وتناسب حسب الكمية   "
              onChange={() => {}}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default CloseOrder;
