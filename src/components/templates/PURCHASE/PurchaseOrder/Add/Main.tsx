import { Form, Formik } from "formik";
import { useParams } from "react-router-dom";
import { useFetch, useMutate } from "../../../../../hooks";
import { notify } from "../../../../../utils/toast";
import AddLayoutSkeleton from "../../../../molecules/Skeleton/AddLayoutSkeleton";
import MainData from "./MainData";
import {
  Values_TP
} from "./Types&Validation";

type Main_TP = {
  editable?: boolean;
};
function Main({ editable }: Main_TP) {
  const { id } = useParams();
  const queryParams = {
    // page: page,
    // term: word,
  };
  // const searchParams = new URLSearchParams(queryParams as any)
  const endpoint = `api/PurchasOrder/Get/${id}`;
  const { data, refetch, isLoading } = useFetch({
    endpoint: endpoint,
    queryKey: [endpoint],
    Module: "PURCHASE",
  });
  const { mutate } = useMutate({
    mutationKey: ["api/PurchasOrder"],
    endpoint: `api/PurchasOrder`,
    onSuccess: () => {
      refetch();
      notify("success");
    },
    Module: "PURCHASE",
    onError: (err) => {
      notify("error", err?.response?.data?.message);
    },
    formData: true,
  });

  const handleSubmit = (values: Values_TP) => {
    const jsonData = JSON.stringify(values);

    mutate(jsonData);
  };
  const response = data?.data;

  const initialValues = {
    code: response?.code || "",
    vendorId: response?.vendorId || "",
    editable: editable ? true : false,
    requestDate: response?.requestDate || "",
    requestEndDate: response?.requestEndDate || "",
    approvalDate: response?.approvalDate || "",
    expectedReceiptDate: response?.expectedReceiptDate || "",
    deliverdDate: response?.deliverdDate || "",
    referenceDocument: response?.referenceDocument || "",
    deliverdConfirmation: response?.deliverdConfirmation || "",
    purchaseAgreementId: response?.purchaseAgreementId || "",
    confirmationDayes: response?.confirmationDayes || "",
    currencyId: response?.currencyId || "",
    warehouseId: response?.warehouseId || "",
    total: response?.total || "",
    priceIncludeTax: response?.priceIncludeTax || "",
    isApproved: response?.isApproved || "",
    note: response?.note || "",
    purchaseRequestDetailsDto: [
      {
        itemId: "",
        description: "",
        quantity: "",
        uomId: "",
        price: "",
        total: "",
        warehouseId: "",
        note: "",
      },
    ],
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
      confirmationDayes: "",
      warehouseId: "",
      purchaseRepresentativeId: "",
      currencyId: "",
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
        onSubmit={(values) => handleSubmit(values)}
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
