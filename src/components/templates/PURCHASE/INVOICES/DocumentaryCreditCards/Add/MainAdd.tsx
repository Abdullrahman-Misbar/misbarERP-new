import { Form, Formik } from "formik";
import { useParams } from "react-router-dom";
import { useFetch, useMutate } from "../../../../../../hooks";
import { InvoiceLocalType } from "../../../../../../utils/globalConst";
import { notify } from "../../../../../../utils/toast";
import AddLayoutSkeleton from "../../../../../molecules/Skeleton/AddLayoutSkeleton";
import { cancelRequestEndPoint, deleteEndPoint, mainENdPoint } from "../const";
import MainData from "./MainData";
import { Values_TP } from "./Types&Validation";

type MainAdd_TP = {
  editable?: boolean;
};
function MainAdd({ editable }: MainAdd_TP) {
  const { id } = useParams();

  const endpoint = `${mainENdPoint}/Get/${id}`;
  const { data, isLoading } = useFetch({
    endpoint: endpoint,
    queryKey: [endpoint],
    Module: "PURCHASE",
    enabled: !!id && !!editable,
  });

  const postEndPoint = id ? `${mainENdPoint}/Update/${id}` : `${mainENdPoint}`;
  const { mutate } = useMutate({
    mutationKey: [postEndPoint],
    endpoint: postEndPoint,
    onSuccess: () => {
      notify("success");
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
