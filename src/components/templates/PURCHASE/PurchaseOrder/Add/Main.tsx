import { Form, Formik } from "formik"
import { useFetch, useMutate } from "../../../../../hooks"
import MainData from "./MainData"
import { notify } from "../../../../../utils/toast"
import { Values_TP } from "./Types&Validation"

function Main() {
  const queryParams = {
    // page: page,
    // term: word,
  }
  // const searchParams = new URLSearchParams(queryParams as any)
  const endpoint = `api/PurchasOrder?Take=50`
  const { refetch, } = useFetch({
    endpoint: endpoint,
    queryKey: [endpoint],
    Module: "PURCHASE",
  })
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

    mutate(jsonData)
  }
  const initialValues = {
    code: '',
    expectedReceiptDate: '',
    total: '',
    createDate: '',
    referenceDocument: '',
    currency: '',
    supplier: '',
    purchaseAgreement: '',
    notes: '',
    orderDetailsModal: []
  }
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleSubmit(values)}
      >
        <Form>
          <MainData />
        </Form>
      </Formik>
    </div>
  )
}

export default Main
