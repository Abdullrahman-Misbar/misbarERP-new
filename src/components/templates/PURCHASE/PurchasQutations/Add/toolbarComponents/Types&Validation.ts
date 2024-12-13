import * as Yup from "yup";

export type RowData = {
  id: string;
  code: string;
  referenceDocument: string;
  approvalDate: string;
  confirmationDayes: string;
  vendorName: string;
  expectedReceiptDate: string;
  note: string;
  status: number;
  actions?: unknown;
  quotationDate: string;
  quotationDeadLine: string;
  total: number;
};
export const validationSchema = () =>
  Yup.object({
    username: Yup.string().trim().required("اسم المستخدم مطلوب"),
    password: Yup.string().trim().required("كلمة المرور مطلوبة"),
  });
