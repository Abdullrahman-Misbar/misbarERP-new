import { Form, Formik } from "formik";
import { useFetch, useMutate } from "../../../../../hooks";
import MainData from "./MainData";
import { notify } from "../../../../../utils/toast";
import { Values_TP } from "./Types&Validation";
import { useParams } from "react-router-dom";
import AddLayoutSkeleton from "../../../../molecules/Skeleton/AddLayoutSkeleton";

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
  const { refetch, data , isLoading } = useFetch({
    endpoint: endpoint,
    queryKey: [endpoint],
    Module: "PURCHASE",
  });
  console.log("🚀 ~ Main ~ data:", data);
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
  const initialValues = {
    editable:editable ? true : false ,
    code:data?.data?.code || "",
    confirmationDayes:data?.data?.confirmationDayes || "",
    currencyId:data?.data?.currencyId || "",
    expectedReceiptDate:data?.data?.expectedReceiptDate || "",
    purchaseAgreementId:data?.data?.purchaseAgreementId || "",
    referenceDocument:data?.data?.referenceDocument || "",
    status:data?.data?.status || "",
    vendorId:data?.data?.vendorId || "",
    warehouseId:data?.data?.warehouseId || "",
    approvalDate: data?.data?.approvalDate || "",
    total: data?.data?.total || "",
    createDate: data?.data?.createDate || "",
    note: data?.data?.note || "",
    orderDetailsModal: [],
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
  if(editable && isLoading) return <>
  <AddLayoutSkeleton/>
  </>
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleSubmit(values)}
        enableReinitialize
      >
        <Form>
          <MainData  />
        </Form>
      </Formik>
    </div>
  );
}

export default Main;
