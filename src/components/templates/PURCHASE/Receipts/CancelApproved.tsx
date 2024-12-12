import { t } from "i18next";
import { useState } from "react";
import { useMutate } from "../../../../hooks";
import { notify } from "../../../../utils/toast";
import showAlert from "../../../molecules/ShowAlert";

type CancelApproved_TP = {
  refetch: () => void;
  info: any;
};
function CancelApproved({ refetch, info }: CancelApproved_TP) {
  const [id, setID] = useState("");
  const statusApproved = info?.row?.original?.isApproved ? false : true;
  const { mutate } = useMutate({
    mutationKey: [
      `api/PurchasRequest/ApproveOrDisApprove/${id}?value=${statusApproved}`,
    ],
    endpoint: `api/PurchasRequest/ApproveOrDisApprove/${id}?value=${statusApproved}`,
    onSuccess: () => {
      refetch();
      notify(
        "success",
        info?.row?.original?.isApproved
          ? "تم الغاء اعتماد الطلب بنجاح"
          : "تم اعتماد الطلب بنجاح"
      );
    },
    Module: "PURCHASE",
    onError: (err) => {
      notify("error", err?.response?.data?.message);
    },
    // formData: true,
    // method: "delete",
  });
  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        showAlert(
          `${
            info?.row?.original?.isApproved
              ? t("Are you sure cancel Approved this order?")
              : t("Are you sure Approved this order?")
          }`,
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
    >
      <div
        className="w-[100px] rounded-md p-2 text-white"
        style={{
          backgroundColor: info?.row?.original?.isApproved ? "green" : "red",
        }}
      >
        {info?.row?.original?.isApproved ? t("Approved") : t("Not Approved")}
      </div>
    </div>
  );
}

export default CancelApproved;
