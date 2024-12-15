import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { useMutate } from "../../../../../../hooks";
import { notify } from "../../../../../../utils/toast";
import AddLayoutSkeleton from "../../../../../molecules/Skeleton/AddLayoutSkeleton";
import { mainPostENdPoint, UpdateENdPoint } from "../const";
import MainData from "./MainData";
import { Values_TP } from "./Types&Validation";

type MainAdd_TP = {
  editable?: boolean;
  mainData: any;
  refetch: (options?: RefetchOptions) => Promise<QueryObserverResult>;
};
function MainAdd({ editable, mainData }: MainAdd_TP) {
  console.log("🚀 ~ MainAdd ~ mainData:", mainData);

  const postEndPoint = mainData?.id
    ? `${UpdateENdPoint}/${mainData?.id}`
    : `${mainPostENdPoint}`;
  const { mutate } = useMutate({
    mutationKey: [postEndPoint],
    endpoint: postEndPoint,
    onSuccess: () => {
      notify("success");
    },
    Module: "PURCHASE",
    method: mainData?.id ? "PUT" : "post",
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
  const initialValues = {
    id: mainData?.id ? mainData?.id : 0,
    expenseType: mainData?.expenseType || "",
    distributionMethod: mainData?.distributionMethod || "",
    expenseAccountId: mainData?.expenseAccountId || "",
    note: mainData?.note || "",
  };

  if (editable)
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
