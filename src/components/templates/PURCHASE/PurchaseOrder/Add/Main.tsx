import { Form, Formik } from "formik";
import { useParams } from "react-router-dom";
import { useFetch, useMutate } from "../../../../../hooks";
import { notify } from "../../../../../utils/toast";
import AddLayoutSkeleton from "../../../../molecules/Skeleton/AddLayoutSkeleton";
import MainData from "./MainData";
import { Item_TP, Values_TP } from "./Types&Validation";
import { ApproveOrDisApproveEndPoint, cancelRequestEndPoint, controlButtonEndPoint, deleteEndPoint, IndexMainPath, mainENdPoint } from "../const";

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

  const postEndPoint = id
    ? `${mainENdPoint}/Update/${id}`
    : `${mainENdPoint}`;
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
    code: response?.code || "",
    editable:editable,
    total: response?.total || "",
    expectedReceiptDate: response?.expectedReceiptDate || "",
    createDate: response?.createDate || "",
    referenceDocument: response?.referenceDocument || "",
    currencyId: response?.currencyId || "",
    purchaseAgreementId: response?.purchaseAgreementId || "",
    note: response?.note || "",
    purchaseRepresentativeId: response?.purchaseRepresentativeId || "",
    warehouseId: response?.warehouseId || "",
    vendorId: response?.vendorId || "",
    // purchaseAgreementId: response?.purchaseAgreementId || "",


    approvalDate: response?.approvalDate || "",
    status: response?.status || 0,
    cancelRequestEndPoint: cancelRequestEndPoint,
    deleteEndPoint: deleteEndPoint,
    controlButtonEndPoint: controlButtonEndPoint,
    IndexMainPath: IndexMainPath,
    mainENdPoint: mainENdPoint,
    ApproveOrDisApproveEndPoint: ApproveOrDisApproveEndPoint,


    orderDetailsModal: response?.orderDetailsModal?.length
    
      ? response?.orderDetailsModal?.map((item: Item_TP) => ({
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
      code: "",
      total: "",
      expectedReceiptDate: "",
      createDate: "",
      referenceDocument: "",
      currencyId: "",
      vendorId: "",
      purchaseAgreementId: "",
      note: "",
      purchaseRepresentativeId: "",
      warehouseId: "",
      status: "",
      approvalDate: "",
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
