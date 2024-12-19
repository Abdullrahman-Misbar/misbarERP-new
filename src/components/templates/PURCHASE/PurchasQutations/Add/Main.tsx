import { Form, Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch, useMutate } from "../../../../../hooks";
import { notify } from "../../../../../utils/toast";
import AddLayoutSkeleton from "../../../../molecules/Skeleton/AddLayoutSkeleton";
import MainData from "./MainData";
import { Item_TP, validationSchema, Values_TP } from "./Types&Validation";
import {
  ApproveOrDisApproveEndPoint,
  cancelRequestEndPoint,
  controlButtonEndPoint,
  deleteEndPoint,
  IndexMainPath,
  mainENdPoint,
  MultiDeleteEndPoint,
  newCodeEndpoint,
} from "../const";

type Main_TP = {
  editable?: boolean;
};
function Main({ editable }: Main_TP) {
  const { id, purchaseRequestId } = useParams();
  const navigate = useNavigate();


  const endpoint = `api/PurchasQutations/Get/${id}`;
  const { data, refetch, isLoading } = useFetch({
    endpoint: endpoint,
    queryKey: [endpoint],
    Module: "PURCHASE",
    enabled: !!id && !!editable,
  });
  const postEndPoint = id ? `api/PurchasQutations/Update/${id}` : `api/PurchasQutations`;
  const { mutate } = useMutate({
    mutationKey: [postEndPoint],
    method: id ? "PUT" : "post",
    endpoint: postEndPoint,
    onSuccess: () => {
      // refetch();
      navigate('/purchase/PurchasQutations')
      notify("success");
    },
    Module: "PURCHASE",
    onError: (err) => {
      notify("error", err?.response?.data?.message);
    },
  });

  const handleSubmit = (values: Values_TP) => {
    const { copValue, uoms, editable,newCodeEndpoint , ...valuesWithoutCopValue } = values;
    const jsonData = JSON.stringify(valuesWithoutCopValue);

    mutate(jsonData);
  };
  //@ts-ignore
  const response = data?.data;

  const initialValues = {
    id: id ? +id : 0,
    qCode: response?.qCode || "",
    purchaseRequestId: response?.purchaseRequestId || purchaseRequestId,
    vendorId: response?.vendorId || 0,
    vendorName: response?.vendorName || "",
    quotationDate: response?.quotationDate || new Date(),
    quotationDeadLine: response?.quotationDeadLine || "",
    duration: response?.duration || 0,
    approvalDate: response?.approvalDate || new Date(),
    referenceDocument: response?.referenceDocument || "",
    status: response?.status || 0,
    currencyId: response?.currencyId || 0,
    total: response?.total || 0.0,
    note: response?.note || "",
    purchaseRequestDetailstId: response?.purchaseRequestDetailstId || null,
    quotationDetailsId: response?.quotationDetailsId || 0,
    editable: editable ? true : false,
    cancelRequestEndPoint: cancelRequestEndPoint,
    deleteEndPoint: deleteEndPoint,
    controlButtonEndPoint: controlButtonEndPoint,
    IndexMainPath: IndexMainPath,
    mainENdPoint: mainENdPoint,
    ApproveOrDisApproveEndPoint: ApproveOrDisApproveEndPoint,
    MultiDeleteEndPoint: MultiDeleteEndPoint,
    newCodeEndpoint:newCodeEndpoint,

    SourceActivityType: 1,
    qutationDetailsModal: response?.qutationDetailsModal?.length
      ? response?.qutationDetailsModal?.map((item: Item_TP) => ({
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
          product: item?.product,

          uoms: item?.product?.uoms,
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
        validationSchema={validationSchema}
      >
        <Form>
          <MainData />
        </Form>
      </Formik>
    </div>
  );
}

export default Main;
