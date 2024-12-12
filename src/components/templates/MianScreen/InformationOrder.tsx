import { Grid, Switch } from "@mui/material";

function InformationOrder() {
  return (
    <div className="bg-white rounded-lg p-6 my-4">
      <span className="text-xl font-bold">معلومات طلبات الشراء</span>
      <Grid container spacing={2} className="mt-4">
        {/* Draft */}
        <Grid item xs={12} className="flex items-center gap-4">
          <Switch defaultChecked />
          <span>مسودة</span>
        </Grid>

        {/* Pending */}
        <Grid item xs={12} className="flex items-center gap-4">
          <Switch />
          <span>قيد الانتظار</span>
        </Grid>

        {/* Delayed */}
        <Grid item xs={12} className="flex items-center gap-4">
          <Switch defaultChecked />
          <span>متأخرة</span>
        </Grid>

        {/* Operation List */}
        <Grid item xs={12} className="flex items-center gap-4">
          <Switch defaultChecked />
          <span>قائمة العمليات</span>
        </Grid>
      </Grid>
    </div>
  );
}

export default InformationOrder;
