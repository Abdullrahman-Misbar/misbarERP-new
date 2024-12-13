
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
  isApproved: boolean
  requestDate:string
  actions?: unknown 
  requestEndDate:string
  isCanceled?:boolean
}
