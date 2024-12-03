
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

export type newValues_TP = {
  copValue:{

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
    purchaseAgreementId:string
    vendorId:string
    createDate:string
    note:string
    approvalDate:string
    confirmationDayes:string
    warehouseId:string
    purchaseRepresentativeId:string
    currencyId:string
  }
}

export type PurchaseOrderData = {
  code: string;
  vendorId: string;
  requestDate: string;
  requestEndDate: string;
  approvalDate: string;
  expectedReceiptDate: string;
  deliverdDate: string;
  referenceDocument: string;
  deliverdConfirmation: string;
  purchaseAgreementId: string;
  confirmationDayes: string;
  currencyId: string;
  warehouseId: string;
  total: string;
  priceIncludeTax: string;
  isApproved: string;
  note: string;
  purchaseRequestDetailsDto: Array<{
    itemId: string;
    description: string;
    quantity: string;
    uomId: string;
    price: string;
    total: string;
    warehouseId: string;
    note: string;
  }>;
  copValue: {
    code: string;
    purchaseAgreementId: string;
    vendorId: string;
    createDate: string;
    expectedReceiptDate: string;
    total: string;
    referenceDocument: string;
    note: string;
    approvalDate: string;
    confirmationDayes: string;
    warehouseId: string;
    purchaseRepresentativeId: string;
    currencyId: string;
  };
};
export type FetchResponse<T> = {
  data: T;
  status: string;
  error?: string;
};
