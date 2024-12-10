import { Grid } from "@mui/material";
import RadioButtons from "../../../atoms/formik/RadioComp";
import CloseOrder from "./closeOrder";
import Invoices from "./Invoices";

function Main() {
  return (
    <>
      <div className="bg-white rounded-lg  p-5">
        <Invoices />
      </div>

      <div className="!my-5 w-full">
        <Grid container spacing={4}>
          {/* Left Column */}
          <Grid item xs={12} sm={6}>
            <div className="bg-white rounded-lg p-6 my-4">
              <span className="text-xl font-semibold">سياسة الفوترة</span>
              <div className="flex items-center gap-4 mt-6 flex-wrap">
                <RadioButtons
                  name="priceIncludeTax"
                  label="الكميات المطلوبة"
                  onChange={() => {}}
                />
                <RadioButtons
                  name="priceIncludeTax"
                  label="الكميات المستلمة"
                  onChange={() => {}}
                />
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 my-4">
              <span className="text-xl font-semibold">الكميات المجانية</span>
              <div className="mt-6">
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12} sm={6}>
                    <RadioButtons
                      name="priceIncludeTax"
                      label="لاتؤثر على الفاتورة"
                      onChange={() => {}}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <RadioButtons
                      name="priceIncludeTax"
                      label="ايراد للشركة"
                      onChange={() => {}}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <RadioButtons
                      name="priceIncludeTax"
                      label="تخفض تكلفة الأصناف"
                      onChange={() => {}}
                    />
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} sm={6}>
            <div className="bg-white w-full rounded-lg p-6 pb-16 my-4">
              <span className="text-xl font-semibold">مصاريف الشراء</span>
              <div className="mt-6 flex flex-col gap-4">
                <RadioButtons
                  name="priceIncludeTax"
                  label="توزع على الأصناف نسبة وتناسب حسب القيمة"
                  onChange={() => {}}
                />
                <RadioButtons
                  name="priceIncludeTax"
                  label="توزع على الأصناف يدويا"
                  onChange={() => {}}
                />
                <RadioButtons
                  name="priceIncludeTax"
                  label="توزع على الأصناف بالتساوي"
                  onChange={() => {}}
                />
                <RadioButtons
                  name="priceIncludeTax"
                  label="لا تؤثر على التكلفة"
                  onChange={() => {}}
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      {/* Close orders  */}
      <CloseOrder />
    </>
  );
}
export default Main;
