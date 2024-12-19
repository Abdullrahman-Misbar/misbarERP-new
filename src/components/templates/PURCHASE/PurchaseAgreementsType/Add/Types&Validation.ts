import * as Yup from "yup";

export type RowData = {
  id: string;
  typeName: string;
  quotationsSelectionMethod: string;
  itemsSelectionMethod: string;
  quantityDetermineMethod: string;
  notes: string;
  actions?: unknown;
};
export const validationSchema = () =>
  Yup.object({
    vendorName: Yup.string().trim().required("اسم المورد مطلوب"),
     
  });

export type Values_TP = {
  typeName: string;
  quotationsSelectionMethod: string;
  itemsSelectionMethod: string;
  quantityDetermineMethod: string;
  notes: string;
  editable: boolean;
  creationDate: string;
  deleteEndPoint:string
  IndexMainPath:string
  mainENdPoint:string
   
   
    copValue: {
    typeName: string;
    quotationsSelectionMethod: string;
    itemsSelectionMethod: string;
    quantityDetermineMethod: string;
    notes: string;
    createDate: string;
    note: string;
  };
  
};

export type PurchaseOrderData = {
  typeName: string;
  vendorId: string;
  requestDate: string;
  requestEndDate: string;
  approvalDate: string;
  quotationsSelectionMethod: string;
  deliverdDate: string;
  itemsSelectionMethod: string;
  deliverdConfirmation: string;
  purchaseAgreementId: string;
  confirmationDayes: string;
  currencyId: string;
  quantityDetermineMethod: string;
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
    quantityDetermineMethod: string;
    note: string;
  }>;
  copValue: {
    typeName: string;
    purchaseAgreementId: string;
    vendorId: string;
    createDate: string;
    quotationsSelectionMethod: string;
    total: string;
    itemsSelectionMethod: string;
    note: string;
    approvalDate: string;
    confirmationDayes: string;
    quantityDetermineMethod: string;
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
  quantityDetermineMethod: string;
  description: string;
  product: {
    uoms: string;
  };
};
