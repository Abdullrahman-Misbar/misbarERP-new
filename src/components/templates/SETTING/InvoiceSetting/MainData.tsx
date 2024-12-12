import { Grid } from "@mui/material";
import RadioButtons from "../../../atoms/formik/RadioComp";
import CloseOrder from "./closeOrder";
import Invoices from "./Invoices";
import { useFormikContext } from "formik";

function MainData() {
  const { values, setFieldValue } = useFormikContext();

  const handleRadioChange = (id: number, checked: boolean) => {
    const updatedSettings = values?.settings?.map((item) =>
      item.id === id ? { ...item, isDisabled: checked } : item
    );
    setFieldValue("settings", updatedSettings);
    
  };

  return (
    <>
      <div className="bg-white rounded-lg  p-5">
        <Invoices />
      </div>


      <RadioButtons
                name="withTax"
                label="باستثناء الضريبة"
                checked={values?.withTax == 1}
                onChange={() => setFieldValue("withTax", 1)}
              />

              <RadioButtons
                name="withTax"
                label="شاملة الضريبة"
                checked={values?.withTax == 0}
                onChange={() => setFieldValue("withTax", 0)}
              />



      <div className="!my-5 w-full">
        <Grid container spacing={4}>
          {/* Left Column */}
          <Grid item xs={12} sm={6}>
            <div className="bg-white rounded-lg p-6 my-4">
              <span className="text-xl font-semibold">سياسة الفوترة</span>

              <div className="flex items-center gap-4 mt-6 flex-wrap">
                <RadioButtons
                  label="الكميات المطلوبة"
                  name="priceIncludeTax"
                  checked={!values?.settings[2]?.isDisabled}
                  onChange={(e) => handleRadioChange(18, !e.target.checked)}
                />
                <RadioButtons
                  name="priceIncludeTax"
                  label="الكميات المستلمة"
                  checked={!values?.settings[3]?.isDisabled}
                  onChange={(e) => handleRadioChange(19, !e.target.checked)}
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

export default MainData;
