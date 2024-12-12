import { Form, Formik } from "formik";
import { useParams } from "react-router-dom";
import { useFetch, useMutate } from "../../../../../../hooks";
import { notify } from "../../../../../../utils/toast";
import AddLayoutSkeleton from "../../../../../molecules/Skeleton/AddLayoutSkeleton";
import MainData from "./MainData";
import { Item_TP, Values_TP } from "./Types&Validation";

type Main_TP = {
  editable?: boolean;
};
function Main({ editable }: Main_TP) {
  const { id } = useParams();

  const endpoint = `api/Notics/Get/${id}`;
  const { data, isLoading } = useFetch({
    endpoint: endpoint,
    queryKey: [endpoint],
    Module: "PURCHASE",
    enabled: !!id && !!editable,
  });

  const postEndPoint = id ? `api/Notics/Update/${id}` : `api/Notics/Create`;
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
    const { copValue, uoms, editable, ...valuesWithoutCopValue } = values;
    const jsonData = JSON.stringify(valuesWithoutCopValue);
    mutate(jsonData);
  };
  //@ts-ignore
  const response = data?.data;

  const initialValues = {
    id: id ? +id : 0,
    noticeCode: response?.noticeCode || "",
    tax: response?.tax || "",
    noticeDate: response?.noticeDate || "",
    sourceDocument: response?.sourceDocument || "",
    note: response?.note || "",
    accountId: response?.accountId || "",
    sourceDocumentDate: response?.sourceDocumentDate || "",
    description: response?.description || "",
    displayMethod: response?.displayMethod || 0,
    noticDetailsModal: response?.noticDetailsModal?.length
      ? response?.noticDetailsModal?.map((item: Item_TP) => ({
          itemId: item?.itemId,
          id: item?.id,
          note: item?.note,
          price: item?.price,
          quantity: item?.quantity,
          total: item?.total,
          uomId: item?.uomId,
          warehouseId: item?.warehouseId,
          isDeleted: false,
          description: item?.description,
          uoms: item?.product?.uoms,
        }))
      : [],
    copValue: {
      noticeCode: "",
      tax: "",
      noticeDate: "",
      sourceDocument: "",
      note: "",
      accountId: "",
      sourceDocumentDate: "",
      description: "",
      displayMethod: "",
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
