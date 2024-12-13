import { Form, Formik } from "formik";
import { useParams } from "react-router-dom";
import { useFetch, useMutate } from "../../../../../../hooks";
import { notify } from "../../../../../../utils/toast";
import AddLayoutSkeleton from "../../../../../molecules/Skeleton/AddLayoutSkeleton";
import { postENdPoint } from "../const";
import MainData from "./MainData";
import { Values_TP } from "./Types&Validation";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";

type MainAdd_TP = {
  editable?: boolean;
  refetch:(options?: RefetchOptions) => Promise<QueryObserverResult>
};
function MainAdd({ editable  ,refetch }: MainAdd_TP) {
  const { id } = useParams();

  const endpoint = `${postENdPoint}/Get/${id}`;
  const { data, isLoading } = useFetch({
    endpoint: endpoint,
    queryKey: [endpoint],
    Module: "PURCHASE",
    enabled: !!id && !!editable,
  });

  const postEndPoint = id ? `${postENdPoint}/Update/${id}` : `${postENdPoint}`;
  const { mutate } = useMutate({
    mutationKey: [postEndPoint],
    endpoint: postEndPoint,
    onSuccess: () => {
      notify("success");
      refetch()
    },
    Module: "PURCHASE",
    method: id ? "PUT" : "post",
    onError: (err) => {
      notify("error", err?.response?.data?.message);
    },
  });

  const handleSubmit = (values: Values_TP) => {
    const {
      copValue,
      uoms,
      editable,
      cancelRequestEndPoint,
      deleteEndPoint,
      ...valuesWithoutCopValue
    } = values;

    const jsonData = JSON.stringify(valuesWithoutCopValue);
    mutate(jsonData);
  };
  //@ts-ignore
  const response = data?.data;

  const initialValues = {
    cardCode: response?.cardCode ||  "",
    cardName: response?.cardName || "",
    mainCardId: response?.cardName ||  0,
    note:  response?.cardName  || "",
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
        enableReinitialize
      >
        <Form>
          <MainData />
        </Form>
      </Formik>
    </div>
  );
}

export default MainAdd;
