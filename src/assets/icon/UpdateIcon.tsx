import { Dispatch, SetStateAction } from "react";
import { Edit } from "../atoms/icons/Edit";

type UpdateIcon_TP = {
  refetch: () => void;
  setModel: Dispatch<SetStateAction<boolean>>;
  setData: Dispatch<SetStateAction<{}>>;
  info: any;
};
function UpdateIcon({
  refetch,
  setModel,
  setData,
  info,
}: UpdateIcon_TP) {
  return (
    <div>
      <span>
        <Edit
          action={() => {
            setData(info?.row?.original);
            setModel(true);
          }}
        />
      </span>
    </div>
  );
}

export default UpdateIcon;
