import { Tooltip } from "@mui/material";
import FileNotSaveIcon from "../../../assets/icon/FileNotSaveIcon";
import showAlert from "../ShowAlert";
import { useFormikContext } from "formik";
import { t } from "i18next";
import { useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useMutate } from "../../../hooks";
import { notify } from "../../../utils/toast";

function CancelBar() {
  const { values } = useFormikContext<any>();
  const { id } = useParams();
  const queryClient = useQueryClient();
  const postEndPoint = `api/PurchasRequest/CancleRequest/${id}`;
  const { mutate: updateApproved } = useMutate({
    mutationKey: [postEndPoint],
    endpoint: postEndPoint,
    onSuccess: () => {
      notify("success");
      //@ts-ignore
      queryClient.invalidateQueries(["api", id]);
    },
    Module: "PURCHASE",
    onError: (err) => {
      notify("error", err?.response?.data?.message);
    },
  });

  const handelApproved = () => {
    showAlert(
      `${t("Are you sure cancel Request?")}`,
      `${t("After canceling the order, it cannot be restored again.")}`,
      false,
      t("Ok"),
      true,
      "warning",
      () => {
        updateApproved({});
      }
    );
  };
  return (
    <div>
      <Tooltip title="الغاء الطلب">
        <div
          className="flex items-center  cursor-pointer"
          onClick={handelApproved}
        >
          <FileNotSaveIcon disabled={!values?.editable} />
          <div className="w-px h-12 bg-gray-200 mx-4"></div>
        </div>
      </Tooltip>
    </div>
  );
}

export default CancelBar;
