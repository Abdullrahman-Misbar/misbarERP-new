import { useFormikContext } from "formik";
import { SwitchComp } from "../../../atoms/formik/SwitchComp";

function CloseOrder() {
  const { values, setFieldValue } = useFormikContext();

  const handleSwitchChange = (id: number, checked: boolean) => {
    const updatedSettings = values?.settings?.map((item) =>
      item.id === id ? { ...item, isDisabled: checked } : item
    );
    setFieldValue("settings", updatedSettings);
  };

  return (
    <>
      <span className="text-xl font-bold">اقفال الأوامر</span>
      <div className="flex items-center justify-center gap-12 w-full ">
        <div className="flex flex-col gap-12 w-[50%]">
          <div className="flex items-center justify-start gap-3 ">
            <SwitchComp
              name="approveOrderBelowValue"
              defaultChecked={!values?.settings[13]?.isDisabled}
              onChange={(e) => handleSwitchChange(14, !e.target.checked)}
            />
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
            <SwitchComp
              name="approveOrderBelowValue"
              defaultChecked={!values?.settings[14]?.isDisabled}
              onChange={(e) => handleSwitchChange(15, !e.target.checked)}
            />
            <div className="text-right">
              <p className="m-1"> المعتمدة </p>
              <p className="font-[12px] text-light font-somarLight my-1">
                بعد اعتماد طلب الشراء والعرض وارسال امر الشراء يمنع التعديل عليه
                لو كان الأمر غير مكتمل
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CloseOrder;
