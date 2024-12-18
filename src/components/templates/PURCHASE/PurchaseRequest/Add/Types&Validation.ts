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
    requestDate: Yup.string().trim().required("تاريخ الطلب مطلوب"),
    approvalDate: Yup.string().trim().required("تاريخ اعتماد الطلب"),
    warehouseId: Yup.string().trim().required("المستودع مطلوب"),
    purchaseAgreementId: Yup.string().trim().required("اتفاقية الشراء مطلوب"),
    vendorId: Yup.string().trim().required("المورد مطلوب"),
    currencyId: Yup.string().trim().required("العملة مطلوب"),
    total: Yup.string().trim().required("الإجمالي مطلوب"),
    referenceDocument: Yup.string().trim().required("الإجمالي مطلوب"),
    // purchaseRequestDetailsDto: Yup.array()
    // .of(
    //   Yup.object().shape({
    //     uomId: Yup.string().required("اسم العنصر مطلوب"),
    //     quantity: Yup.number()
    //       .required("الكمية مطلوبة")
    //       .min(1, "الكمية يجب أن تكون على الأقل 1"),
    //     price: Yup.number()
    //       .required("السعر مطلوب")
    //       .min(0, "السعر يجب أن يكون قيمة موجبة"),
    //   })
    // )
    // .min(1, "يجب إضافة عنصر واحد على الأقل"),
  });

export type Values_TP = {
  code: string;
  expectedReceiptDate: string;
  editable: boolean;
  total: string;
  priceIncludeTax: boolean;
  cancelRequestEndPoint: string;
  controlButtonEndPoint: string;
  creationDate: string;
  deleteEndPoint: string;
  referenceDocument: string;
  currency: string;
  supplier: string;
  purchaseAgreement: string;
  notes: string;
  deliverdConfirmation: boolean;
  confirmationDayes: string;
  IndexMainPath: string;
  mainENdPoint: string;
  ApproveOrDisApproveEndPoint: string;
  purchaseRequestDetailsDto: string[];
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
    purchaseRequestDetailsDto: string[];
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
