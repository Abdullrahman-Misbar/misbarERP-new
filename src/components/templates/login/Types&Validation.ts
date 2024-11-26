
import * as Yup from "yup";

export interface LoginValues {
  username: string
  password: string
  client_id: string
  client_secret: string
  scope: string
  grant_type: string
}

const client_id = import.meta.env.VITE_CLIENT_ID
const client_secret = import.meta.env.VITE_CLIENT_SECRET

export const initialValues: LoginValues = {
  username: "",
  password: "",
  client_id: client_id || "misbar_client_user_id",
  client_secret: client_secret || "secret_misbar_erp_api",
  scope: "apiscope IdentityServerApi",
  grant_type: "password",
}
export const validationSchema = () =>
  Yup.object({
    username: Yup.string().trim().required('اسم المستخدم مطلوب'),
    password: Yup.string().trim().required('كلمة المرور مطلوبة'),
  })
