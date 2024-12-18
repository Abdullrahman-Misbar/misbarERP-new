import { Form, Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
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
import { Item_TP, validationSchema, Values_TP } from "./Types&Validation";

type Main_TP = {
  editable?: boolean;
};
function Main({ editable }: Main_TP) {
  const { id } = useParams();
  const navigate = useNavigate()

  const endpoint = `api/PurchasRequest/Get/${id}`;
  const { data, isLoading } = useFetch({
    endpoint: endpoint,
    queryKey: [endpoint],
    Module: "PURCHASE",
    enabled: !!id && !!editable,
  });

  const postEndPoint = id
    ? `${postENdPoint}/UpdateRequest/${id}`
    : `${postENdPoint}`;
  const { mutate } = useMutate({
    mutationKey: [postEndPoint],
    endpoint: postEndPoint,
    onSuccess: (data) => {
      navigate('/purchase/PurchaseRequest')
      notify("success"  , "");
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
    vendorId: response?.vendorId || "",
    editable: editable ? true : false,
    requestDate: response?.requestDate || new Date(),
    requestEndDate: response?.requestEndDate || new Date(),
    approvalDate: response?.approvalDate || new Date(),
    expectedReceiptDate: response?.expectedReceiptDate || new Date(),
    deliverdDate: response?.deliverdDate || new Date(),
    referenceDocument: response?.referenceDocument || "",
    deliverdConfirmation: response?.deliverdConfirmation || false,
    purchaseAgreementId: response?.purchaseAgreementId || "",
    confirmationDayes: response?.confirmationDayes || 0,
    currencyId: response?.currencyId || "",
    warehouseId: response?.warehouseId || "",
    total: response?.total || 0,
    priceIncludeTax: response?.priceIncludeTax || false,
    isApproved: response?.isApproved || false,
    note: response?.note || "",

    cancelRequestEndPoint: cancelRequestEndPoint,
    deleteEndPoint: deleteEndPoint,
    controlButtonEndPoint: controlButtonEndPoint,
    IndexMainPath: IndexMainPath,
    mainENdPoint: mainENdPoint,
    ApproveOrDisApproveEndPoint: ApproveOrDisApproveEndPoint,
    newCodeEndpoint: newCodeEndpoint,

    
    SourceActivityType: 1,
    purchaseRequestDetailsDto: response?.purchaseRequestDetailsDto?.length
      ? response?.purchaseRequestDetailsDto?.map((item: Item_TP) => ({
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
      purchaseAgreementId: "",
      vendorId: "",
      createDate: "",
      expectedReceiptDate: "",
      total: "",
      referenceDocument: "",
      note: "",
      approvalDate: "",
      confirmationDayes: 0,
      warehouseId: "",
      purchaseRepresentativeId: "",
      currencyId: "",
      purchaseRequestDetailsDto: [],
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
