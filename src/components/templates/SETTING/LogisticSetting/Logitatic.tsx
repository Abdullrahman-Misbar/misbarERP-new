import { SwitchComp } from "../../../atoms/formik/SwitchComp";

function Logitatic() {
  return (
    <>
      <div className="bg-white rounded-lg p-6 ">
      <span className="text-xl font-somarBold">  اللوجستيات</span>
        <div className="mt-4 flex items-start justify-start gap-3">      
            <SwitchComp name="enableShipping" />     
          <div className="flex flex-col items-start gap-3">
            <span className="text-lg">إحالة الشحن</span>
            <p className="text-right text-gray-500 text-sm">
              عند تفعيل هذا الخيار يضاف الى الفاتورة حقل إحالة الشحن بحيث يتم
              تحديد العنوان المراد ارسال البضاعة إليه.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Logitatic;
