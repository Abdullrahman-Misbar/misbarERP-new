
import * as Yup from "yup";

export type RowData = {
  id: string
  openingDate:string
  expectedClosingDate:string
  closingDate:string
}
export const validationSchema = () =>
  Yup.object({
    username: Yup.string().trim().required('اسم المستخدم مطلوب'),
    password: Yup.string().trim().required('كلمة المرور مطلوبة'),
  })
