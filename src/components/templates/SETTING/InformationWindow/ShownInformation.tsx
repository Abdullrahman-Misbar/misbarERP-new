import { Grid } from "@mui/material";
import { SwitchComp } from "../../../atoms/formik/SwitchComp";

function ShownInformation() {
  return (
    <div className="bg-white rounded-lg p-6 my-4">
      <span className="text-xl font-bold">تحديد المعلومات الظاهرة في النافذة</span>
      <Grid container spacing={4} className="mt-4">
        {/* Each Switch Item */}
        <Grid item xs={4}>
          <div className="flex items-center gap-3">
            <SwitchComp name="highestPurchasePrice" />
            <span>أعلى سعر شراء</span>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="flex items-center gap-3">
            <SwitchComp name="lastInvoiceDate" />
            <span>تاريخ آخر فاتورة للمورد</span>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="flex items-center gap-3">
            <SwitchComp name="lastPurchasePrice" />
            <span>آخر سعر شراء من المورد المحدد في الفاتورة</span>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="flex items-center gap-3">
            <SwitchComp name="averageItemCost" />
            <span>متوسط تكلفة الصنف</span>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="flex items-center gap-3">
            <SwitchComp name="stockBalance" />
            <span>رصيد المورد</span>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="flex items-center gap-3">
            <SwitchComp name="averagePurchasePrice" />
            <span>متوسط أسعار الشراء</span>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="flex items-center gap-3">
            <SwitchComp name="quantityInStock" />
            <span>الكمية في المستودعات</span>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="flex items-center gap-3">
            <SwitchComp name="quantityPending" />
            <span>الكمية قيد التعامل</span>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="flex items-center gap-3">
            <SwitchComp name="lastPurchasePriceForSupplier" />
            <span>آخر سعر شراء</span>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default ShownInformation;
