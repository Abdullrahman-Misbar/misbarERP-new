import { Tooltip } from "@mui/material";
import { useFormikContext } from "formik";
import { t } from "i18next";
import { useNavigate, useParams } from "react-router-dom";
import DeleteIcon from "../../atoms/icons/DeleteIcon";
import { useMutate } from "../../../hooks";
import { notify } from "../../../utils/toast";
import showAlert from "../ShowAlert";

type DeleteBar_TP = {
  deleteEndPoint?: string;
};

function DeleteBar({ deleteEndPoint }: DeleteBar_TP) {
  const { values } = useFormikContext<any>();
  const { id } = useParams();
  const navigate = useNavigate();

  const { mutate } = useMutate({
    mutationKey: [`${deleteEndPoint}`],
    endpoint: `${deleteEndPoint}/${id}`,
    onSuccess: () => {
      // refetch();
      notify("success");
      navigate(-1);
    },
    Module: "PURCHASE",
    onError: (err) => {
      notify("error", err?.response?.data?.message);
    },
    formData: true,
    method: "delete",
  });
  const handleDelete = () => {
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
  };

  return (
    <div>
      <Tooltip title="حذف">
        <div className="flex items-center ">
          <DeleteIcon disabled={!values?.editable} action={handleDelete} />
          <div className="w-px h-12 bg-gray-200 mx-4"></div>
        </div>
      </Tooltip>
    </div>
  );
}

export default DeleteBar;
