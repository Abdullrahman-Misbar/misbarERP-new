import DeleteIcon from "@mui/icons-material/Delete";
import { Typography } from "@mui/material";
import { t } from "i18next";
import { useMutate } from "../../../../../hooks";
import { MultiDeleteEndPoint } from "./const";

type MultiDelete_TP = {
  refetch: () => void;
  info: any;
  selectedIds: number[];
};
function MultiDelete({ refetch, selectedIds }: MultiDelete_TP) {
  const { mutate } = useMutate({
    mutationKey: [MultiDeleteEndPoint],
    endpoint: `${MultiDeleteEndPoint}`,
    onSuccess: (data) => {
      refetch();
      if (data?.data?.status == "1") {
        notify("success", data?.data?.data);
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
