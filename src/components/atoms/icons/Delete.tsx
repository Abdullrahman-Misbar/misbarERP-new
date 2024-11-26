import { t } from "i18next";
import { AiFillDelete } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
type DeleteProps_TP = {
  className?: string;
  action?: () => void;
  size?: number;
};
export const Delete = ({
  className,
  action,
  size,
  ...props
}: DeleteProps_TP) => {
  return (
    <div className="flex items-center gap-2" onClick={action}>
      <div className="bg-[#F3F6F9] p-1 rounded-md">
       
        <MdDelete className="text-[18px] text-[#B5B5C3]" />
      </div>
      <div className="text-[14px] text-[#70707e]"> {t("Delete")}</div>
    </div>
  );
};
