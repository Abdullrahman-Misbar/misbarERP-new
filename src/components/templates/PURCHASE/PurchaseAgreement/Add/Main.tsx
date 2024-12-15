import { Form, Formik } from "formik";
import { useParams } from "react-router-dom";
import { useFetch, useMutate } from "../../../../../hooks";
import { notify } from "../../../../../utils/toast";
import AddLayoutSkeleton from "../../../../molecules/Skeleton/AddLayoutSkeleton";
import {
  cancelRequestEndPoint,
  controlButtonEndPoint,
  deleteEndPoint,
  IndexMainPath,
  mainENdPoint,
} from "../const";
import MainData from "./MainData";
import { Item_TP, Values_TP } from "./Types&Validation";

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
    ? `${mainENdPoint}/UpdateAgreement/${id}`
    : `${mainENdPoint}`;
  const { mutate } = useMutate({
    mutationKey: [postEndPoint],
    endpoint: postEndPoint,
    onSuccess: () => {
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
    agreementCode: response?.code || "",
    vendorId: response?.vendorId || "",
    editable: editable ? true : false,
    orderDate: response?.orderDate || "",
    agreementDeadline: response?.agreementDeadline || "",
    receiptDate: response?.receiptDate || "",
    referenceDocument: response?.referenceDocument || "",
    purchaseAgreementId: response?.purchaseAgreementId || "",
    responsibleId: response?.responsibleId || "",
    aggreementTypeId: response?.aggreementTypeId || "",
    agrementStatuId: response?.agrementStatuId || 0,
    note: response?.note || "",

    cancelRequestEndPoint: cancelRequestEndPoint,
    deleteEndPoint: deleteEndPoint,
    controlButtonEndPoint: controlButtonEndPoint,
    IndexMainPath: IndexMainPath,
    mainENdPoint: mainENdPoint,
    SourceActivityType: 1,
    agreementDetailesModel: response?.agreementDetailesModel?.length
      ? response?.agreementDetailesModel?.map((item: Item_TP) => ({
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
      agreementCode: "",
      purchaseAgreementId: "",
      vendorId: "",
      createDate: "",
      receiptDate: "",
      referenceDocument: "",
      note: "",
      agreementDeadline: "",
      agrementStatuId: 0,
      aggreementTypeId: "",
      agreementDetailesModel: [],
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
