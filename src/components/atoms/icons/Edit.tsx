import { t } from "i18next";
import { FaRegEdit } from "react-icons/fa";
type EditProps_TP = {
  className?: string;
  action?: () => void;
  size?: number;
};
export const Edit = ({ className, action, size }: EditProps_TP) => {
  return (
    <div onClick={action} className="flex items-center  gap-2">
      <div className="bg-[#F3F6F9] p-1 rounded-md">
        <FaRegEdit className="text-[18px] text-[#B5B5C3]" />
      </div>
      <div className="text-[14px] text-[#70707e] ">{t("Edit")}</div>
    </div>
  );
};
