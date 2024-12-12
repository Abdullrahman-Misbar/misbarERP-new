import { useFormikContext } from "formik";
import { SwitchComp } from "../../../atoms/formik/SwitchComp";

function Warnings() {
  const { values, setFieldValue } = useFormikContext();

  const handleSwitchChange = (id: number, checked: boolean) => {
    const updatedSettings = values?.settings?.map((item) =>
      item.id === id ? { ...item, isDisabled: checked } : item
    );
    setFieldValue("settings", updatedSettings);
  };

  return (
    <div className="py-4">
      <span className="text-xl font-bold">التحذيرات</span>
      <div className="flex items-center justify-center gap-12 w-full">
        <div className="flex flex-col gap-2 w-[50%]">
          <div className="flex items-center justify-start gap-3">
            <SwitchComp
              name="approveOrderBelowValue"
              defaultChecked={!values?.settings[4]?.isDisabled}
              onChange={(e) => handleSwitchChange(5, !e.target.checked)}
            />
            <div className="text-right">
              <p className="m-1">
                التحذير عند وجود طلب شراء لصنف كميته لم تصل إلى حد الطلب -أعلى
                من حد الطلب
              </p>
            </div>
          </div>
          <div className="flex items-center justify-start gap-3">
            <SwitchComp
              name="approveOrderBelowValue"
              defaultChecked={!values?.settings[5]?.isDisabled}
              onChange={(e) => handleSwitchChange(6, !e.target.checked)}
            />
            <div className="text-right">
              <p className="m-1">
                التحذير عند وجود طلب شراء لكمية من صنف ستؤدي إلى تجاوز الحد
                الأعلى للصنف
              </p>
            </div>
          </div>
          <div className="flex items-center justify-start gap-3">
            <SwitchComp
              name="approveOrderBelowValue"
              defaultChecked={!values?.settings[6]?.isDisabled}
              onChange={(e) => handleSwitchChange(7, !e.target.checked)}
            />
            <div className="text-right">
              <p className="m-1">
                التحذير عند وجود أمر شراء لصنف كميته لم تصل إلى حد الطلب أعلى من
                حد الطلب
              </p>
            </div>
          </div>
          <div className="flex items-center justify-start gap-3">
            <SwitchComp
              name="approveOrderBelowValue"
              defaultChecked={!values?.settings[7]?.isDisabled}
              onChange={(e) => handleSwitchChange(8, !e.target.checked)}
            />
            <div className="text-right">
              <p className="m-1">
                التحذير عند وجود أمر شراء لكمية من صنف ستؤدي إلى تجاوز الحد
                الأعلى للصنف
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-[50%]">
          <div className="flex items-center justify-start gap-3">
            <SwitchComp
              name="unfulfilledPurchaseWarning"
              name="approveOrderBelowValue"
              defaultChecked={!values?.settings[8]?.isDisabled}
              onChange={(e) => handleSwitchChange(9, !e.target.checked)}
            />
            <div className="text-right">
              <p className="m-1">التحذير عند وجود طلب شراء لصنف سابق لم ينفذ</p>
            </div>
          </div>
          <div className="flex items-center justify-start gap-3">
            <SwitchComp
              name="approveOrderBelowValue"
              defaultChecked={!values?.settings[9]?.isDisabled}
              onChange={(e) => handleSwitchChange(10, !e.target.checked)}
            />
            <div className="text-right">
              <p className="m-1">
                التحذير عند وجود طلب شراء لصنف سابق لنفس المورد لم ينفذ
              </p>
            </div>
          </div>
          <div className="flex items-center justify-start gap-3">
            <SwitchComp
              name="approveOrderBelowValue"
              defaultChecked={!values?.settings[10]?.isDisabled}
              onChange={(e) => handleSwitchChange(11, !e.target.checked)}
            />
            <div className="text-right">
              <p className="m-1">التحذير عند وجود أمر شراء لصنف سابق لم ينفذ</p>
            </div>
          </div>
          <div className="flex items-center justify-start gap-3">
            <SwitchComp
              name="approveOrderBelowValue"
              defaultChecked={!values?.settings[11]?.isDisabled}
              onChange={(e) => handleSwitchChange(12, !e.target.checked)}
            />
            <div className="text-right">
              <p className="m-1">
                التحذير عند وجود أمر شراء لصنف سابق لنفس المورد لم ينفذ
              </p>
            </div>
          </div>
          <div className="flex items-center justify-start gap-3">
            <SwitchComp
              name="approveOrderBelowValue"
              defaultChecked={!values?.settings[12]?.isDisabled}
              onChange={(e) => handleSwitchChange(13, !e.target.checked)}
            />
            <div className="text-right">
              <p className="m-1">
                التحذير عند تجاوز القيمة الحد المسموح به لأمر الشراء
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Warnings;
