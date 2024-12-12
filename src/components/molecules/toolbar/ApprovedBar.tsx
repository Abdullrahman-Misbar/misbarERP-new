import { Tooltip } from "@mui/material";
import { useFormikContext } from "formik";
import { t } from "i18next";
import { useParams } from "react-router-dom";
import { useMutate } from "../../../hooks";
import { notify } from "../../../utils/toast";
import ApprovedIcon from "../../atoms/icons/ApprovedIcon";
import UnApprovedIcon from "../../atoms/icons/UnApprovedIcon";
import showAlert from "../ShowAlert";
import { useQueryClient } from "@tanstack/react-query";

function ApprovedBar() {
  const { values, setFieldValue } = useFormikContext<any>();
  const { id } = useParams();
  const queryClient = useQueryClient();
  const statusApproved = values.isApproved ? false : true;
  const postEndPoint = `${values?.ApproveOrDisApproveEndPoint}/${id}?value=${statusApproved}`;
  const { mutate: updateApproved } = useMutate({
    mutationKey: [postEndPoint],
    endpoint: postEndPoint,
    onSuccess: () => {
      notify("success");
      //@ts-ignore
      queryClient.invalidateQueries(['api', id]); 
    },
    Module: "PURCHASE",
    onError: (err) => {
      notify("error", err?.response?.data?.message);
    },
  });

  const handelApproved = () => {
    if (values?.editable) {
      showAlert(
        `${
          values?.isApproved
            ? t("Are you sure cancel Approved this order?")
            : t("Are you sure Approved this order?")
        }`,
        `${t("You cannot go back in this process")}`,
        false,
        t("Ok"),
        true,
        "warning",
        () => {
          updateApproved({});
        }
      );
    } else if (values?.isApproved) {
      setFieldValue("isApproved", false);
    } else {
      setFieldValue("isApproved", true);
    }
  };
  return (
    <div>
      {values?.isApproved == null || values?.isApproved == false ? (
        <Tooltip title="اعتماد">
          <div className="flex items-center p-3">
            <ApprovedIcon disabled={false} action={handelApproved} />
            <div className="w-px h-12 bg-gray-200 mx-4"></div>
          </div>
        </Tooltip>
      ) : (
        <Tooltip title="الغاء الاعتماد">
          <div className="flex items-center ">
            <UnApprovedIcon disabled={false} action={handelApproved} />
            <div className="w-px h-12 bg-gray-200 mx-4"></div>
          </div>
        </Tooltip>
      )}
    </div>
  );
}

export default ApprovedBar;
