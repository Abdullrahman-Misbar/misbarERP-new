import { useFormikContext } from "formik";
import BaseInputField from "../../../atoms/formik/BaseInputField";
import { SwitchComp } from "../../../atoms/formik/SwitchComp";

function Orders() {
  const { values, setFieldValue } = useFormikContext<any>();

  const handleSwitchChange = (id: number, checked: boolean) => {
    const updatedSettings = values?.settings?.map((item) =>
      item.id === id ? { ...item, isDisabled: checked } : item
    );
    setFieldValue("settings", updatedSettings);
  };

  const handleInputChange = (id: number, value: string) => {
    const updatedSettings = values?.settings?.map((item) =>
      item.id === id ? { ...item, settingValue: value } : item
    );
    setFieldValue("settings", updatedSettings);
  };

  return (
    <>
      <span className="text-xl font-bold">الطلبات</span>
      <div className="flex items-center justify-center gap-12 w-full">
        <div className="flex flex-col gap-12 w-[50%]">
          {/* First Switch and Input */}
          <div className="flex items-center justify-start gap-3">
            <SwitchComp
              name="approveOrderBelowValue"
              defaultChecked={!values?.settings[0]?.isDisabled}
              onChange={(e) => handleSwitchChange(1, !e.target.checked)}
            />
            <div className="text-right">
              <p className="m-1">اعتماد أمر الشراء في حال كانت قيمته دون</p>
              <p className="font-[12px] text-light font-somarLight my-1">
                يمكن للموظف اعتماد أمر الشراء دون الحاجة للرجوع إلى الموظف
                المسؤول في حال عدم تجاوزه القيمة المحددة
              </p>
            </div>
            <BaseInputField
              name="approveOrderBelowValueInput"
              // value={!values?.settings[0].settingValue}
              label="دولار"
              type="text"
              onChange={(e) => handleInputChange(1, e.target.value)}
              className="px-3 !border-none !outline-none !w-[150px]"
            />
          </div>

          {/* Second Switch and Input */}
          <div className="flex items-center justify-start gap-3">
            <SwitchComp
              name="approveOrderBelowDays"
              defaultChecked={!values?.settings[1]?.isDisabled}
              onChange={(e) => handleSwitchChange(2, !e.target.checked)}
            />
            <div className="text-right">
              <p className="m-1"> تذكير المورد قبل تاريخ الاستحقاق ب </p>
              <p className="font-[12px] text-light font-somarLight my-1">
                سيتم تذكير المورد عن طريق البريد الالكتروني قبل تاريخ الاستحقاق
                بعدد الأيام المحددة
              </p>
            </div>
            <BaseInputField
              name="approveOrderBelowDaysInput"
              // value={!values?.settings[1].settingValue}
              label="أيام"
              type="text"
              onChange={(e) => handleInputChange(2, e.target.value)}
              className="px-3 !border-none !outline-none !w-[150px]"
            />
          </div>
        </div>

        <div className="flex flex-col gap-12 w-[50%]">
          {/* Third Switch */}
          <div className="flex items-center justify-start gap-3">
            <SwitchComp
              name="comparePriceOffers"
              defaultChecked={!values?.settings[2]?.isDisabled}
              onChange={(e) => handleSwitchChange(3, !e.target.checked)}
            />
            <div className="text-right">
              <p className="m-1">مقارنة عروض الأسعار</p>
              <p className="font-[12px] text-light font-somarLight my-1">
                تفعيل مقارنة عروض الأسعار المرتبطة بطلب الشراء
              </p>
            </div>
          </div>

          {/* Fourth Switch */}
          <div className="flex items-center justify-start gap-3">
            <SwitchComp
              name="purchaseAgreements"
              defaultChecked={!values?.settings[3]?.isDisabled}
              onChange={(e) => handleSwitchChange(4, !e.target.checked)}
            />
            <div className="text-right">
              <p className="m-1">اتفاقيات الشراء</p>
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
