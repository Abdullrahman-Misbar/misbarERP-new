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
    vendorId: Yup.string().trim().required("المورد  مطلوب"),
    referenceDocument: Yup.string().trim().required(" المستند المرجعي مطلوبة"),
    total: Yup.string().trim().required("  الإجمالي مطلوبة"),
    quotationDeadLine: Yup.string()
      .trim()
      .required("  تاريخ انتهاء العرض مطلوبة"),
    currencyId: Yup.string().trim().required("    العملة مطلوبة"),
    
  });

export type Values_TP = {
  qCode: string;
  quotationDate: string;
  quotationDeadLine: string;
  duration: number;
  newCodeEndpoint: string;
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
  qutationDetailsModal: string[];
  copValue: {
    qCode: string;
    expectedReceiptDate: string;
    total: string;
    creationDate: string;
    referenceDocument: string;
    quotationDate: string;
    quotationDeadLine: string;
    duration: number;
    currency: string;
    supplier: string;
    purchaseAgreement: string;
    notes: string;
    qutationDetailsModal: string[];
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

export type Item_TP = {
  id: number;
  itemId: number;
  barcode: string;
  description: string;
  quantity: number;
  uomId: number;
  price: number;
  total: number;
  warehouseId: number;
  note: string;
  purchaseRequestId: number;
  isDeleted: boolean;
  itemName: string;
  isChoosen: boolean;
  product: string;
};
