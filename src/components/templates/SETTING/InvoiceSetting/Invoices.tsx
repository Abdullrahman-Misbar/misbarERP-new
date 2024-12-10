import BaseInputField from "../../../atoms/formik/BaseInputField";
import { SwitchComp } from "../../../atoms/formik/SwitchComp";

function Invoices() {
  return (
    <>
      <span className="text-xl font-bold">الفوترة</span>
      <div className="flex items-center justify-center gap-12 w-full ">
        <div className="flex items-center justify-start gap-3 ">
          <SwitchComp name="" />
          <div className="text-right">
            <p className="m-1">
              انشاء فاتورة شراء مباشرة في حال كانت قيمتها دون{" "}
            </p>
            <p className="font-[12px] text-light font-somarLight my-1">
              السماح للموظف بالشراء مباشرة طالما كانت قيمة الفاتورة ضمن الحد
              المسموح به
            </p>
          </div>

          <BaseInputField
            name="ff"
            label="دولار"
            type="text"
            placeholder="100"
            disabled
            className="px-3   !border-none !outline-none"
          />
        </div>

        <div className="flex flex-col gap-12 w-[50%]">
          <div className="flex items-center justify-start gap-3 ">
            <SwitchComp name="" />
            <div className="text-right">
              <p className="m-1"> تفعيل المطابقة </p>
              <p className="font-[12px] text-light font-somarLight my-1">
                وعند تفعيل هذا الخيار يتم إضافة حقل المطابقة في كل من امر
                الاستلام وفاتورة الشراء بحيث يتم التحقق من ان الكمية المفوترة هي
                ففلا الكمية التي تم استلامها
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Invoices;
