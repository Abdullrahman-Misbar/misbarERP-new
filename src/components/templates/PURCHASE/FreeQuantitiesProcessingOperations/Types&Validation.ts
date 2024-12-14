
import * as Yup from "yup";

export type RowData = {
  id: string
  operationCode: string
  operationDate: string
  ProcessingType: number
  userName: string
  warehouseName: string
  note: string
  isApproved: boolean
  isCanceled?:boolean
  actions?: unknown 
}
export const validationSchema = () =>
  Yup.object({
    username: Yup.string().trim().required('اسم المستخدم مطلوب'),
    password: Yup.string().trim().required('كلمة المرور مطلوبة'),
  })
