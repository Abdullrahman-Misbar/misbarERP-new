import { SwitchComp } from "../../../atoms/formik/SwitchComp";
import InformationFrom from "./InformationFrom";
import ShownInformation from "./ShownInformation";

function InformationWindowSetting() {
  return (
    <>
      <div className="bg-white rounded-lg p-6 ">
        <span className="text-xl font-somarBold">تفعيل نافذة المعلومات</span>
        <div className="mt-4 flex items-center justify-start gap-3">
          <SwitchComp name="enableShipping" />
          <span className="text-lg"> تفعيل نافذة المعلومات</span>
        </div>
      </div>
      <ShownInformation />
      <InformationFrom />
    </>
  );
}

export default InformationWindowSetting;
