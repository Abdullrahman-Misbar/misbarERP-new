import DeleteIcon from "@mui/icons-material/Delete";
import { GrAdd, GrSubtract } from "react-icons/gr";
import BaseInputField from "../../atoms/formik/BaseInputField";

function ExportExcel() {
  return (
    <>
      <div className="px-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-start flex-col gap">
            <span className="font-somarLight text-[#4D4D4D] gap-2 my-1">
              الحقول المتوفرة
            </span>
            <div className="w-full border p-2 border-mainBorder rounded-[8px] h-[472px] flex items-start justify-start flex-col overflow-y-hidden">
              <div className="w-full flex item-center justify-between py-2 px-3">
                <span className="font-somar "> رمز المورد</span>
                <span className="text-[#000000DE]">
                  <GrAdd />
                </span>
              </div>
              <div className="w-full flex item-center justify-between py-2 px-3">
                <span className="font-somarLight font-semibold">
                  {" "}
                  نوع المورد
                </span>
                <span className="text-[#000000DE]">
                  {" "}
                  <GrSubtract />
                </span>
              </div>
            </div>
          </div>
          {/* second  */}
          <div className="flex items-start flex-col gap">
            <span className="font-somarLight text-[#4D4D4D] gap-2 my-1">
              الحقول المحددة
            </span>
            <div className="w-full border p-2 border-mainBorder rounded-[8px] h-[472px] flex items-start justify-start flex-col overflow-y-hidden">
              <div className="w-full flex item-center justify-between py-2 px-3">
                <span className="font-somarLight font-semibold ">
                  رمز المورد
                </span>
                <span className="text-[#D32F2F]">
                  <DeleteIcon />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-2">
          <div className="px-3 my-2 w-full flex item-center  justify-between">
            <span>مسار التصدير </span>
            <span>Export to</span>
          </div>
          <div className="w-full " dir="ltr">
            <BaseInputField
              className="w-full"
              name="name"
              placeholder="C:\Users\Shaker Ali Farhan\Documents"
              type="text"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ExportExcel;
