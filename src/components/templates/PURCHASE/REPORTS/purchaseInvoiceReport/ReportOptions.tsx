import RadioButtons from "../../../../atoms/formik/RadioComp";

function ReportOptions() {
    return (
      <div className="bg-white w-full rounded-lg p-6 pb-16 my-4">
        <span className="text-xl font-semibold">المعلومات معروضة من</span>
        <div className="mt-6 flex flex-col gap-4">
          <RadioButtons
            name="warehouseInfo"
            label="الكمية في المستودعات"
            onChange={() => {}}
          />
          <RadioButtons
            name="warehouseInfo"
            label="مستودع محدد"
            onChange={() => {}}
          />
          <RadioButtons
            name="warehouseInfo"
            label="مستودعات مختلفة"
            onChange={() => {}}
          />
        </div>
      </div>
    );
  }
  
  export default ReportOptions;
