import { SwitchComp } from "../../../atoms/formik/SwitchComp";

function CloseOrder() {
  return (
    <>
      <span className="text-xl font-bold">اقفال الأوامر</span>
      <div className="flex items-center justify-center gap-12 w-full ">
        <div className="flex flex-col gap-12 w-[50%]">
          <div className="flex items-center justify-start gap-3 ">
            <SwitchComp name="" />
            <div className="text-right">
              <p className="m-1"> المكتملة </p>
              <p className="font-[12px] text-light font-somarLight my-1">
                منع التعديل على طلب الشراء امر الشراء بعد الانتهاء واستلام
                البضاعة تلافيا للتعديل عن طريق الخطأ
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-12 w-[50%]">
          <div className="flex items-center justify-start gap-3 ">
            <SwitchComp name="" />
            <div className="text-right">
              <p className="m-1"> المكتملة </p>
              <p className="font-[12px] text-light font-somarLight my-1">
                منع التعديل على طلب الشراء امر الشراء بعد الانتهاء واستلام
                البضاعة تلافيا للتعديل عن طريق الخطأ
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CloseOrder;
