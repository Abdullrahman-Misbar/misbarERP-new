
import * as Yup from "yup";

export type RowData = {
  id: string
  agreementCode: string
  referenceDocument: string
  orderDate: string
  aggreementTypeId: string
  vendorName: string
  receiptDate: string
  note: string
  agrementStatuId: string
  agreementDeadline:string
  actions?: unknown 
}
export const validationSchema = () =>
  Yup.object({
    username: Yup.string().trim().required('اسم المستخدم مطلوب'),
    password: Yup.string().trim().required('كلمة المرور مطلوبة'),
  })
