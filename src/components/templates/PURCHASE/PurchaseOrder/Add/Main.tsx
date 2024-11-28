import { Form, Formik } from "formik"
import { useFetch } from "../../../../../hooks"
import MainData from "./MainData"

function Main() {
  const queryParams = {
    // page: page,
    // term: word,
  }
  // const searchParams = new URLSearchParams(queryParams as any)
  const endpoint = `api/PurchasOrder?Take=50`
  const { data, refetch, isSuccess, isFetching, isLoading } = useFetch({
    endpoint: endpoint,
    queryKey: [endpoint],
    Module: "PURCHASE",
  })

  return (
    <div>
      <Formik
        initialValues={{
          items:[]
        }}
        onSubmit={() => {}}
      >
        <Form>
          <MainData />
        </Form>
      </Formik>
    </div>
  )
}

export default Main
