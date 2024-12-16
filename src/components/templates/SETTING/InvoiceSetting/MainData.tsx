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

      <div className="!mt-5 w-full">
        <Grid container spacing={4}>
          {/* Left Column */}
          <Grid item xs={12} sm={6}>
            <div className="bg-white rounded-lg px-4 py-5 my-6">
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

            <div className="bg-white rounded-lg px-4 py-5 my-6">
              <span className="text-xl font-semibold">الكميات المجانية</span>
              <div className="mt-3">
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
            <div className="bg-white w-full rounded-lg px-4 py-5 pb-[42PX] my-6">
              <span className="text-xl font-semibold">مصاريف الشراء</span>
              <div className="mt-6 flex flex-col gap-2">
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
