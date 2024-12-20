import { Form, Formik } from "formik";
import { useParams } from "react-router-dom";
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
  newCodeEndpoint,
} from "../const";
type Main_TP = {
  editable?: boolean;
};
function Main({ editable }: Main_TP) {
  const { id } = useParams();

  const endpoint = `${mainENdPoint}/Get/${id}`;
  const { data, refetch, isLoading } = useFetch({
    endpoint: endpoint,
    queryKey: [endpoint],
    Module: "PURCHASE",
    enabled: !!id && !!editable,
  });
  const postEndPoint = id ? `${mainENdPoint}/Update/${id}` : `${mainENdPoint}`;
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
    const {
      copValue,
      uoms,
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

    mutate(jsonData);
  };
  //@ts-ignore
  const response = data?.data;

  const initialValues = {
    id: id ? +id : 0,
    code: response?.code || "",
    purchaseRepresentativeId: response?.purchaseRepresentativeId || "",
    currencyId: response?.currencyId || "",
    vendorId: response?.partnerId || "",
    warehouseId: response?.warehouseId || "",
    convertionRate: response?.convertionRate || 0,
    inDate: response?.inDate || new Date(),
    billingStatus: response?.billingStatus || "",
    accountId: response?.accountId || "",
    referenceDocument: response?.referenceDocument || "",
    status: response?.status || 0,
    costCenterId: response?.costCenterId || "",
    note: response?.note || "",
    partnerId: 8,
    editable: editable ? true : false,
    SourceActivityType: 1,

    cancelRequestEndPoint: cancelRequestEndPoint,
    deleteEndPoint: deleteEndPoint,
    controlButtonEndPoint: controlButtonEndPoint,
    IndexMainPath: IndexMainPath,
    mainENdPoint: mainENdPoint,
    ApproveOrDisApproveEndPoint: ApproveOrDisApproveEndPoint,
    newCodeEndpoint:newCodeEndpoint,

    
    receiptDetailsModal: response?.receiptDetailsModal?.length
      ? response?.receiptDetailsModal?.map((item: Item_TP) => ({
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
          product: item?.product,
        }))
      : [],
    copValue: {
      code: "",
      purchaseRepresentativeId: 0,
      currencyId: 0,
      vendorId: 0,
      warehouseId: 0,
      convertionRate: 0,
      inDate: "",
      billingStatus: "",
      accountId: 0,
      partnerId: 8,
      referenceDocument: "",
      status: 0,
      costCenterId: 0,
      note: "",
      receiptDetailsModal: [],
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
        validationSchema={validationSchema}
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
