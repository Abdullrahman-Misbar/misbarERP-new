import BaseInputField from "../../../atoms/formik/BaseInputField";
import { SwitchComp } from "../../../atoms/formik/SwitchComp";

function Orders() {
  return (
    <>
      <span className="text-xl font-bold">الطلبات</span>
      <div className="flex items-center justify-center gap-12 w-full ">
        <div className="flex flex-col gap-12 w-[50%]">
          <div className="flex items-center justify-start gap-3 ">
            <SwitchComp name="" />
            <div className="text-right">
              <p className="m-1">اعتماد امر الشراء في حال كانت قيمته دون</p>
              <p className="font-[12px] text-light font-somarLight my-1">
                يمكن للموظف اعتماد امر الشراء دون الحاجة للرجوع الى الموظف
                المسؤول في حال عدم تجاوزه القيمة المحددة
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
          <div className="flex items-center justify-start gap-3 ">
            <SwitchComp name="" />
            <div className="text-right">
              <p className="m-1">اعتماد امر الشراء في حال كانت قيمته دون</p>
              <p className="font-[12px] text-light font-somarLight my-1">
                يمكن للموظف اعتماد امر الشراء دون الحاجة للرجوع الى الموظف
                المسؤول في حال عدم تجاوزه القيمة المحددة
              </p>
            </div>
            <BaseInputField
              name="ff"
              label="ايام"
              type="text"
              placeholder="5"
              disabled
              className="px-3   !border-none !outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col gap-12 w-[50%]">
          <div className="flex items-center justify-start gap-3 ">
            <SwitchComp name="" />
            <div className="text-right">
              <p className="m-1"> مقارنة عروض الاسعار </p>
              <p className="font-[12px] text-light font-somarLight my-1">
                تفعيل مقارنة عروض الأسعار المرتبطة بطلب الشراء
              </p>
            </div>
          </div>
          <div className="flex items-center justify-start gap-3 ">
            <SwitchComp name="" />
            <div className="text-right">
              <p className="m-1"> اتفاقيات الشراء </p>
              <p className="font-[12px] text-light font-somarLight my-1">
                تفعيل اتفاقيات الشراء
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Orders;
