import { Form, Formik, FormikHelpers } from "formik"
import MainData from "./MainData"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../../context/auth-and-perm/AuthProvider"
import { useMutate } from "../../../hooks"
import { notify } from "../../../utils/toast"
import Cookies from "js-cookie"
import {
  initialValues,
  LoginValues,
  validationSchema,
} from "./Types&Validation"

interface API_Data {
  data: {
    access_token: string
  }
}
const Main: React.FC = () => {
  const navigate = useNavigate()
  const { login } = useAuth()

  const { isPending, mutate } = useMutate({
    endpoint: "connect/token",
    formData: true,
    mutationKey: ["/connect/token"],
    onSuccess: (data: API_Data) => {
      const token = data?.data?.access_token
      Cookies.set("token", token, { expires: 7 })

      notify("success", `تم عملية تسجيل الدخول بنجاح`)
      login(null, token)
      navigate("/")
    },
    onError: (err) => {
      console.log(err)
      notify("error", `${err?.response?.data?.message}`)
    },
  })

  const handleSubmit = (
    values: LoginValues,
    actions: FormikHelpers<LoginValues>
  ) => {
    mutate(values)
    actions.setSubmitting(false)
  }

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <MainData isPending={isPending} />
        </Form>
      </Formik>
    </div>
  )
}

export default Main
