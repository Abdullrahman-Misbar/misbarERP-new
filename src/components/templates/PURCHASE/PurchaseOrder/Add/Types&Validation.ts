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
};
export const validationSchema = () =>
  Yup.object({
    total: Yup.string().trim().required("  الأجمالى مطلوب"),
    expectedReceiptDate: Yup.string()
      .trim()
      .required("تاريخ الاستلام المتوقع مطلوب"),
    createDate: Yup.string().trim().required(" تاريخ انشاء الامر مطلوب"),
    referenceDocument: Yup.string().trim().required(" المستند المرجعي مطلوب"),
    currencyId: Yup.string().trim().required(" العملة مطلوب"),
    vendorId: Yup.string().trim().required(" المورد مطلوب"),
    purchaseAgreementId: Yup.string().trim().required(" اتفاقية الشراء مطلوب"),
    purchaseRepresentativeId: Yup.string()
      .trim()
      .required("  مندوب المشتريات مطلوب"),
    warehouseId: Yup.string().trim().required("   المستودع مطلوب"),
    approvalDate: Yup.string().trim().required("   تاريخ الاعتماد مطلوب"),
  });

export type Values_TP = {
  code: string;
  expectedReceiptDate: string;
  editable: boolean;
  total: string;
  priceIncludeTax: boolean;
  creationDate: string;
  referenceDocument: string;
  currency: string;
  supplier: string;
  purchaseAgreement: string;
  notes: string;
  deliverdConfirmation: boolean;
  orderDetailsModal: string[];
  copValue: {
    code: string;
    expectedReceiptDate: string;
    total: string;
    creationDate: string;
    referenceDocument: string;
    currency: string;
    supplier: string;
    purchaseAgreement: string;
    notes: string;
    orderDetailsModal: string[];
    purchaseAgreementId: string;
    vendorId: string;
    createDate: string;
    deliverdConfirmation: boolean;
    note: string;
    approvalDate: string;
    confirmationDayes: string;
    warehouseId: string;
    purchaseRepresentativeId: string;
    currencyId: string;
    requestDate: string;
    requestEndDate: string;
    deliverdDate: string;
    priceIncludeTax: string;
    isApproved: string;
  };
  uoms: string;
};

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
  orderDetailsModal: Array<{
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

export type Item_TP = {
  itemId: string;
  note: string;
  id: string;
  price: number;
  quantity: number;
  total: number;
  uomId: string;
  warehouseId: string;
  description: string;
  product: {
    uoms: string;
  };
};
