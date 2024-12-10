import { Form, Formik } from "formik";
import { useParams } from "react-router-dom";
import { useFetch, useMutate } from "../../../../../hooks";
import { notify } from "../../../../../utils/toast";
import AddLayoutSkeleton from "../../../../molecules/Skeleton/AddLayoutSkeleton";
import MainData from "./MainData";
import { Item_TP, Values_TP } from "./Types&Validation";

type Main_TP = {
  editable?: boolean;
};
function Main({ editable }: Main_TP) {
  const { id } = useParams();

  const endpoint = `api/PurchasQutations/Get/${id}`;
  const { data, refetch, isLoading } = useFetch({
    endpoint: endpoint,
    queryKey: [endpoint],
    Module: "PURCHASE",
    enabled: !!id && !!editable,
  });
  const postEndPoint = id
    ? `api/PurchasQutations/Update/${id}`
    : `api/PurchasQutations`;
  const { mutate } = useMutate({
    mutationKey: [postEndPoint],
    method: id ? "PUT" : "post",
    endpoint: postEndPoint,
    onSuccess: () => {
      // refetch();
      notify("success");
    },
    Module: "PURCHASE",
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
    qCode: response?.qCode || "",
    purchaseRequestId: response?.purchaseRequestId || null,
    vendorId: response?.vendorId || 0,
    vendorName: response?.vendorName || "",
    quotationDate: response?.quotationDate || "",
    quotationDeadLine: response?.quotationDeadLine || "",
    duration: response?.duration || 0,
    approvalDate: response?.approvalDate || "",
    referenceDocument: response?.referenceDocument || "",
    status: response?.status || 0,
    currencyId: response?.currencyId || 0,
    total: response?.total || 0.0,
    note: response?.note || "",
    purchaseRequestDetailstId: response?.purchaseRequestDetailstId || null,
    quotationDetailsId: response?.quotationDetailsId || 0,
    editable: editable ? true : false,

    SourceActivityType: 1,
    qutationDetailsModal: response?.qutationDetailsModal?.length
      ? response?.qutationDetailsModal?.map((item: Item_TP) => ({
          id: item?.id || 0,
          itemId: item?.itemId || 0,
          barcode: item?.barcode || "string",
          description: item?.description || "string",
          quantity: item?.quantity || 0,
          uomId: item?.uomId || 0,
          price: item?.price || 0,
          total: item?.total || 0,
          warehouseId: item?.warehouseId || 0,
          note: item?.note || "string",
          purchaseRequestId: item?.purchaseRequestId || 0,
          isDeleted: item?.isDeleted || false,
          itemName: item?.itemName || "string",
          isChoosen: item?.isChoosen || false,
        }))
      : [],
    copValue: {
      qCode: "",
      purchaseRequestId: null,
      vendorId: 0,
      vendorName: "",
      quotationDate: "",
      quotationDeadLine: "",
      duration: 0,
      approvalDate: "",
      referenceDocument: "",
      status: 0,
      currencyId: 0,
      total: 0,
      note: "",
      purchaseRequestDetailstId: null,
      quotationDetailsId: 0,
      qutationDetailsModal: [],
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
