import { t } from "i18next";
import { useState } from "react";
import { useMutate } from "../../../../hooks";
import { notify } from "../../../../utils/toast";
import showAlert from "../../../molecules/ShowAlert";
import { MultiDeleteEndPoint } from "./const";
import { Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

type MultiDelete_TP = {
  refetch: () => void;
  info: any;
  selectedIds:number[]
};
function MultiDelete({ refetch, selectedIds }: MultiDelete_TP) {
  const [id, setID] = useState("");
  const { mutate } = useMutate({
    mutationKey: [MultiDeleteEndPoint],
    endpoint: `${MultiDeleteEndPoint}`,
    onSuccess: (data) => {
      refetch()
      if (data?.data?.status == "1"){
        notify("success" , data?.data?.data);
      }
    },
    Module: "PURCHASE",
    onError: (err) => {
      notify("error", err?.response?.data?.message);
    },
 
  });
  return (
    <div
      onClick={() => {
        showAlert(
          `${t("Are you sure?")}`,
          `${t("You cannot go back in this process")}`,
          false,
          t("Ok"),
          true,
          "warning",
          () => {
            mutate(selectedIds);
          }
        );
        // setID(info?.row?.original?.id);
      }}
      className="flex gap-2 items-center"
    >
      <DeleteIcon className="text-[#D32F2F]" />
      <Typography
        className="!m-0"
        style={{
          fontFamily: "Somar-Medium",
          fontSize: "14px",
          marginTop: "10px",
          padding: "0px",
        }}
      >
        حذف
      </Typography>
    </div>
  );
}

export default MultiDelete;