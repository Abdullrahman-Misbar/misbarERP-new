import { Form, Formik } from "formik";
import { useParams } from "react-router-dom";
import { useFetch, useMutate } from "../../../../../hooks";
import { notify } from "../../../../../utils/toast";
import AddLayoutSkeleton from "../../../../molecules/Skeleton/AddLayoutSkeleton";
import {
  ApproveOrDisApproveEndPoint,
  cancelRequestEndPoint,
  controlButtonEndPoint,
  deleteEndPoint,
  IndexMainPath,
  mainENdPoint,
  newCodeEndpoint,
  postENdPoint,
} from "../const";
import MainData from "./MainData";
import { Values_TP } from "./Types&Validation";

type Main_TP = {
  editable?: boolean;
};
function Main({ editable }: Main_TP) {
  const { id } = useParams();

  const endpoint = `${mainENdPoint}/Get/${id}`;
  const { data, isLoading } = useFetch({
    endpoint: endpoint,
    queryKey: [endpoint],
    Module: "PURCHASE",
    enabled: !!id && !!editable,
  });

  const { data: newCode } = useFetch({
    endpoint: `${newCodeEndpoint}`,
    queryKey: [`${newCodeEndpoint}`],
    Module: "PURCHASE",
    enabled: !id && !editable,
  });

  const postEndPoint = id ? `${postENdPoint}/${id}` : `${postENdPoint}`;
  const { mutate } = useMutate({
    mutationKey: [postEndPoint],
    endpoint: postEndPoint,
    method: id ? "PUT" : "post",
    onSuccess: (data: any) => {
      if (data?.data.status === "1") notify("success");
      else notify("error", data?.data.message);
    },
    Module: "PURCHASE",
    onError: (err) => {
      console.log(err);
      notify("error", err.response?.data.message);
    },
  });

  const handleSubmit = (values: Values_TP) => {
    const {
      copValue,

      editable,
      cancelRequestEndPoint,
      deleteEndPoint,
      controlButtonEndPoint,
      IndexMainPath,
      mainENdPoint,
      ApproveOrDisApproveEndPoint,
      ...valuesWithoutCopValue
    } = values;
    const jsonData = JSON.stringify(valuesWithoutCopValue);
    console.log(jsonData);
    mutate(jsonData);
  };
  //@ts-ignore
  const response = data?.data;
  const code = newCode?.data;

  const initialValues = {
    id: id ? +id : 0,
    categoryCode: response?.categoryCode || code || "",
    ctaegoryName: response?.ctaegoryName || "",
    editable: editable ? true : false,
    mainCategoryId: response?.mainCategoryId || 0,
    accountId: response?.accountId || 0,
    costCenterId: response?.costCenterId || 0,
    note: response?.note || "",
    accountName: response?.accountName || "",
    costCenterName: response?.costCenterName || "",
    mainCategoryName: response?.mainCategoryName || "",

    cancelRequestEndPoint: cancelRequestEndPoint,
    deleteEndPoint: deleteEndPoint,
    controlButtonEndPoint: controlButtonEndPoint,
    IndexMainPath: IndexMainPath,
    mainENdPoint: mainENdPoint,
    ApproveOrDisApproveEndPoint: ApproveOrDisApproveEndPoint,
    // SourceActivityType: 1,
    tags: response?.tagNos || [],
    // tags:   [],

    copValue: {
      categoryCode: "",
      categoryName: "",
      mainCategoryId: null,

      note: "",
      accountId: null,
      costCenterId: null,
      accountName: "",
      costCenterName: "",
      mainCategoryName: "",
      tags: [],
    },
  };

  if (editable && isLoading)
    return (
      <>
        <AddLayoutSkeleton />
      </>
    );
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values: any) => handleSubmit(values)}
        // validationSchema={validationSchema}
        enableReinitialize
      >
        <Form>
          <MainData />
        </Form>
      </Formik>
    </div>
  );
}

export default Main;
