
import * as Yup from "yup";

export type RowData = {
  id: string
  operationCode: string
  referenceDocument: string
  approvalDate: string
  confirmationDayes: string
  userName: string
  expectedReceiptDate: string
  note: string
  status: number
  actions?: unknown 
}
export const validationSchema = () =>
  Yup.object({
    username: Yup.string().trim().required('اسم المستخدم مطلوب'),
  })
