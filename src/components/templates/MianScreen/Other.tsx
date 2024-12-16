import { Grid, Switch } from "@mui/material";
import React from "react";

function Other() {
  return (
    <div className="bg-white rounded-lg h-full pb-4 p-6 my-4">
      <p className="text-xl font-bold !mb-12 ">اخرى</p>
      <Grid container spacing={2} className="mt-4">
  
        <Grid item xs={12} className="flex tems-center gap-4">
          <Switch defaultChecked />
          <span>متوسط قيمة الطلب</span>
        </Grid>

        <Grid item xs={12} className="flex items-center gap-4">
          <Switch />
          <span>المهلة للشراء</span>
        </Grid>
      </Grid>
    </div>
  );
}

export default Other;
