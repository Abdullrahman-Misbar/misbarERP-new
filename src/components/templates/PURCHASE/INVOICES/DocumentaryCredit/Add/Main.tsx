import { Form, Formik } from "formik";
import { useParams } from "react-router-dom";
import { useFetch, useMutate } from "../../../../../../hooks";
import { notify } from "../../../../../../utils/toast";
import AddLayoutSkeleton from "../../../../../molecules/Skeleton/AddLayoutSkeleton";
import {
  ApproveOrDisApproveEndPoint,
  cancelRequestEndPoint,
  controlButtonEndPoint,
  deleteEndPoint,
  IndexMainPath,
  mainENdPoint,
  postEndPont
} from "../const";
import MainData from "./MainData";
import { Values_TP } from "./Types&Validation";

type Main_TP = {
  editable?: boolean;
};
function Main({ editable }: Main_TP) {
  const { id } = useParams();

  const endpoint = `api/LetterOfCredit/GetLettersOfCredit/${id}`;
  const { data, isLoading } = useFetch({
    endpoint: endpoint,
    queryKey: [endpoint],
    Module: "PURCHASE",
    enabled: !!id && !!editable,
  });

  const postEndPoint = id ? `api/LetterOfCredit/UpdateLettersOfCredit/${id}` : `${postEndPont}`;
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
    id: id ? +id : 0,
    editable: editable,
    letterOfCreditCode: response?.letterOfCreditCode || "",
    letterOfCreditName: response?.letterOfCreditName || "",
    accountName: response?.accountName || "",
    openingDate: response?.openingDate || "",
    expectedClosingDate: response?.expectedClosingDate || "",
    closingDate: response?.closingDate || "",
    letterStatus: response?.letterStatus || 0,
    letterOfCreditCardId: response?.letterOfCreditCardId || 0,
    foreignName: response?.foreignName || 0,


    note: response?.note || "",

    cancelRequestEndPoint: cancelRequestEndPoint,
    deleteEndPoint: deleteEndPoint,
    controlButtonEndPoint: controlButtonEndPoint,
    IndexMainPath: IndexMainPath,
    mainENdPoint: mainENdPoint,
    ApproveOrDisApproveEndPoint: ApproveOrDisApproveEndPoint,

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
