import CloseIcon from "../../../assets/icon/CloseIcon";
import { formatTime } from "../../../utils/helpers";

function ScheduledActivitiesCard({ item }) {
  console.log("🚀 ~ ScheduledActivitiesCard ~ item:", item);
  return (
    <div className=" px-6">
      <div className="flex items-center justify-between p-3 ">
        <div className="flex flex-col items-start justify-between ">
          <div className="flex items-center gap-2">
            <img src="/src/assets/AnynmosPerson.png" alt="personName" />
            <span className="text-primary text-xl font-somarBold ">
              مدير النظام
            </span>
          </div>
          <p className="mt-6 pt-4">
            {item?.isApproved ? " تم اعتماد طلب الشراء" : ""}
          </p>
        </div>

        <div className="flex flex-col items-start justify-between ">
          <div className="flex items-center gap-2 justify-center">
            <img src="/src/assets/DateRangeFilled.png" alt="personName" />
            <span className="text-[#00000099]  font-somarBold ">
              {item?.approvalDate?.slice(0,10)}
            </span>
          </div>
          <span className="text-[#00000099] w-full text-end mt-5 ">
          
            {formatTime(item?.approvalDate?.slice(11))}
          </span>
        </div>
      </div>
      <hr className="w-full h-px bg-light" />
    </div>
  );
}

export default ScheduledActivitiesCard;
