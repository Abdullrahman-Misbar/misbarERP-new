import { SwitchComp } from "../../../atoms/formik/SwitchComp";

function CloseOrder() {
  return (
    <>
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <span className="text-xl font-bold block mb-4">إقفال الأوامر</span>
        <div className="flex items-center justify-between gap-12 w-full">
          {/* Approved Section */}
          <div className="flex items-center justify-start gap-4">
            <SwitchComp name="approved" />
            <div className="text-right">
              <p className="font-semibold mb-1">المعتمدة</p>
              <p className="text-gray-500 text-sm font-somarLight">
                بعد اعتماد طلب الشراء والعرض وإرسال أمر الشراء، يمنع التعديل
                عليه في حال كان الأمر غير مكتمل
              </p>
            </div>
          </div>

          {/* Completed Section */}
          <div className="flex items-center justify-start gap-4">
            <SwitchComp name="completed" />
            <div className="text-right">
              <p className="font-semibold mb-1">المكتملة</p>
              <p className="text-gray-500 text-sm font-somarLight">
                منع التعديل على طلب الشراء أو أمر الشراء بعد التحقق واستلام
                البضاعة نهائيًا للتعديل عن طريق الخطأ
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CloseOrder;
