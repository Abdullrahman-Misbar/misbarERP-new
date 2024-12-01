
import * as Yup from "yup";

export type RowData = {
  id: string
  code: string
  referenceDocument: string
  approvalDate: string
  confirmationDayes: string
  vendorName: string
  expectedReceiptDate: string
  note: string
  status: number
  actions?: unknown
}
export const validationSchema = () =>
  Yup.object({
    username: Yup.string().trim().required('اسم المستخدم مطلوب'),
    password: Yup.string().trim().required('كلمة المرور مطلوبة'),
  })


export type Values_TP = {
  code: string,
  expectedReceiptDate: string,
  total: string,
  creationDate: string,
  referenceDocument: string,
  currency: string,
  supplier: string,
  purchaseAgreement: string,
  notes: string,
  orderDetailsModal: string[]
}