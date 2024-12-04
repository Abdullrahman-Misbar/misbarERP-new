import CreateByIcon from "../../assets/icon/CreateByIcon";
import DateIcon from "../../assets/icon/DateIcon";
import FileIcon from "../../assets/icon/FileIcon";
import PersonIcon from "../../assets/icon/personIcon";
import PhoneIcon from "../../assets/icon/PhoneIcon";

function HistoricalDrawerCard() {
  return (
    <div className="flex items-start  my-4  border-b-2 pb-1">
      <div className=" border-l border-gray-300 min-h-[150px] px-2">
        <img src="/src/assets/person.png" alt="person" className="size-14" />
      </div>
      <div className="px-2">
        {/* item */}
        <div className="flex items-center justify-start gap-2 1">
          <span className="mt-1">
            <CreateByIcon />
          </span>
          <span className="text-light text-[14px]">تم الانشاء بواسطة :</span>
          <span className="text-primary text-[14px]">مدير النظام </span>
        </div>
        <div className="flex items-center justify-start gap-2 1">
          <span className="mt-1">
            <PhoneIcon />
          </span>
          <span className="text-light text-[14px]">نوع النشاط : :</span>
          <span className="text-primary text-[14px]">اتصال </span>
        </div>

        <div className="flex items-center justify-start gap-2 1">
          <span className="mt-1">
            <DateIcon />
          </span>
          <span className="text-light text-[14px]">في تاريخ :</span>
          <span className="text-primary text-[14px]"> 13/07/2024 </span>
        </div>

        <div className="flex items-center justify-start gap-2 1">
          <span className="mt-1">
            <PersonIcon />
          </span>
          <span className="text-light text-[14px]">تم الاسناد الي :</span>
          <span className="text-primary text-[14px]"> مستخدم ١ </span>
        </div>
        <div className="flex items-center justify-start gap-2 my-2">
          <span>
            <FileIcon />
          </span>
          <span className="text-light text-[14px]"> الوصف :</span>
          <span className="text-primary text-[14px]">
            {" "}
            يتم الاتصال بالمورد للتذكير بإرسال عرض السعر{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default HistoricalDrawerCard;
