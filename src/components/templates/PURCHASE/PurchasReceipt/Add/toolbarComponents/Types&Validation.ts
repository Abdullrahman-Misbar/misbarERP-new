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
  responsibleId: number;
  purchaseRepresentativeId: number;
  billingStatus: any;
  inDate: string;
  parterName: string;
};
export const validationSchema = () =>
  Yup.object({
    username: Yup.string().trim().required("اسم المستخدم مطلوب"),
    password: Yup.string().trim().required("كلمة المرور مطلوبة"),
  });
