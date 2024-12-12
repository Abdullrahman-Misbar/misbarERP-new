import { t } from "i18next";
import { useState } from "react";
import { useMutate } from "../../../../hooks";
import { notify } from "../../../../utils/toast";
import { Delete } from "../../../atoms/icons/Delete";
import showAlert from "../../../molecules/ShowAlert";


type DeleteMain_TP = {
  refetch: () => void;
  info: any;
};
function DeleteMain({ refetch, info }: DeleteMain_TP) {
  const [id, setID] = useState("");
  const { mutate } = useMutate({
    mutationKey: ["api/PurchasReceipt"],
    endpoint: `api/PurchasReceipt/${id}`,
    onSuccess: () => {
      refetch();
      notify("success");
    },
    Module:"PURCHASE",
    onError: (err) => {
      notify("error", err?.response?.data?.message);
    },
    formData: true,
    method: "delete",
  });
  return (
    <div>
      <span>
        <Delete
          action={() => {
            showAlert(
              `${t("Are you sure?")}`,
              `${t("You cannot go back in this process")}`,
              false,
              t("Ok"),
              true,
              "warning",
              () => {
                mutate({});
              }
            );
            setID(info?.row?.original?.id);
          }}
        />
      </span>
    </div>
  );
}

export default DeleteMain;
