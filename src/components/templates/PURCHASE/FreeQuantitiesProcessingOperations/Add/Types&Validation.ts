import * as Yup from "yup";

export type RowData = {
  id: string;
  operationCode: string;
  referenceDocument: string;
  approvalDate: string;
  confirmationDayes: string;
  vendorName: string;
  operationDate: string;
  note: string;
  status: number;
  actions?: unknown;
};
export const validationSchema = () =>
  Yup.object({
    vendorName: Yup.string().trim().required("اسم المورد مطلوب"),
     
  });

export type Values_TP = {
  operationCode: string;
  operationDate: string;
  editable: boolean;
  cancelRequestEndPoint:string
  controlButtonEndPoint:string
  creationDate: string;
  deleteEndPoint:string
  referenceDocument: string;
  warehouseId: string;
  uerId: string;
  purchaseAgreement: string;
  notes: string;
   
  IndexMainPath:string
  mainENdPoint:string
  ApproveOrDisApproveEndPoint:string
  freeQuantitiesDetailesModel: string[];
  copValue: {
    operationCode: string;
    operationDate: string;
    creationDate: string;
    uerId: string;
    notes: string;
    freeQuantitiesDetailesModel: string[];
    OperationId: string;
    createDate: string;
    note: string;
    warehouseId: string;
    purchaseRepresentativeId: string;
    isApproved: string;
    isCanceled: string;
  };
  uoms: string;
};

export type PurchaseOrderData = {
  operationCode: string;
  vendorId: string;
  requestDate: string;
  requestEndDate: string;
  approvalDate: string;
  operationDate: string;
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
  freeQuantitiesDetailesModel: Array<{
    itemId: string;
    description: string;
    availableFreeQuantities: string;
    uomId: string;
    price: string;
    total: string;
    warehouseId: string;
    note: string;
  }>;
  copValue: {
    operationCode: string;
    purchaseAgreementId: string;
    vendorId: string;
    createDate: string;
    operationDate: string;
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
  availableFreeQuantities: number;
  quantitiesToBeProcessed: number;
  uomId: string;
  warehouseId: string;
  description: string;
  product: {
    uoms: string;
  };
};
