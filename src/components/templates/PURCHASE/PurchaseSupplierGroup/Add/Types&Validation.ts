import * as Yup from "yup";

export type RowData = {
  id: number;
  categoryCode: string;
  categoryName: string;
  mainCategoryId: number;
  accountId: number;
  costCenterId: number;
  note: string;
  accountName: string;
  costCenterName: string;
  mainCategoryName: string;
  tags: Array<{
    tagId: number;
    partnerId: string;
    tagName: string;
    isDeleted: boolean;
  }>;
  actions?: unknown;
};
export const validationSchema = () =>
  Yup.object({
    categoryCode: Yup.string().trim().required("رمز المجموعة مطلوب"),
    categoryName: Yup.string().trim().required("أسم المجموعة مطلوب"),
   

  });

export type Values_TP = {
  id: number;
  categoryCode: string;
  categoryName: string;
  mainCategoryId: number;
  newCodeEndpoint:string
  accountId: number;
  costCenterId: number;
  editable:boolean
  controlButtonEndPoint:string
  IndexMainPath:string
  cancelRequestEndPoint:string
  deleteEndPoint:string
  mainENdPoint:string
  ApproveOrDisApproveEndPoint:string
  note: string;
  accountName: string;
  costCenterName: string;
  mainCategoryName: string;
  tags: Array<{
    tagId: number;
    partnerId: string;
    tagName: string;
    isDeleted: boolean;
  }>;
  copValue: {
    id: number;
    categoryCode: string;
    categoryName: string;
    mainCategoryId: number;
    accountId: number;
    costCenterId: number;
    note: string;
    accountName: string;
    costCenterName: string;
    mainCategoryName: string;
    tags: Array<{
      tagId: number;
      partnerId: string;
      tagName: string;
      isDeleted: boolean;
    }>;
  };
};

export type PurchaseOrderData = {
  id: number;
  categoryCode: string;
  categoryName: string;
  mainCategoryId: number;
  accountId: number;
  costCenterId: number;
  note: string;
  accountName: string;
  costCenterName: string;
  mainCategoryName: string;
  tags: Array<{
    tagId: number;
    partnerId: string;
    tagName: string;
    isDeleted: boolean;
  }>;

  copValue: {
    id: number;
    categoryCode: string;
    categoryName: string;
    mainCategoryId: number;
    accountId: number;
    costCenterId: number;
    note: string;
    accountName: string;
    costCenterName: string;
    mainCategoryName: string;
    tags: Array<{
      tagId: number;
      partnerId: string;
      tagName: string;
      isDeleted: boolean;
    }>;
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
