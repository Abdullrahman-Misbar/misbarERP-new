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
    username: Yup.string().trim().required("اسم المستخدم مطلوب"),
    password: Yup.string().trim().required("كلمة المرور مطلوبة"),
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
  costCenterId: number;
  status: any;
  accountId: number;
  billingStatus: any;
  inDate: string;
  convertionRate: number;
  receiptDetailsModal: string[];
  cancelRequestEndPoint: string;
  deleteEndPoint: string;
  controlButtonEndPoint: string;
  IndexMainPath: string;
  mainENdPoint: string;
  ApproveOrDisApproveEndPoint: string;
  copValue: {
    editable: boolean;
    costCenterId: number;
    status: any;
    accountId: number;
    billingStatus: any;
    inDate: string;
    convertionRate: number;
    code: string;
    expectedReceiptDate: string;
    total: string;
    creationDate: string;
    referenceDocument: string;
    currency: string;
    supplier: string;
    purchaseAgreement: string;
    notes: string;
    receiptDetailsModal: string[];
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
