
import * as Yup from "yup";

export type RowData = {
  id: string
  code: string
  invoiceDate:string
  referenceDocument: string
  
  approvalDate: string
  confirmationDayes: string
  vendorName: string
  expectedReceiptDate: string
  note: string
  isApproved: boolean
  requestDate:string
  actions?: unknown 
  requestEndDate:string
  isCanceled?:boolean
  invoiceStatus?:number
}
export const validationSchema = () =>
  Yup.object({
    username: Yup.string().trim().required('اسم المستخدم مطلوب'),
    password: Yup.string().trim().required('كلمة المرور مطلوبة'),
  })
