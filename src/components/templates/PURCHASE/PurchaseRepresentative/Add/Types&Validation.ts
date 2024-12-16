import * as Yup from "yup";

export type RowData = {
  id: number;
  empCode: string;
  empName: string;
  phone: string;
  email: string;
  address: string;
  generalDataNote: string;
  hireDate: string; 
  deptId: number;
  jobPositionId: number;
  managerId: number;
  workRecord: string;
  workDataNote: string;
  isActive: boolean;
  note: string;
  actions?: unknown;
};
export const validationSchema = () =>
  Yup.object({
    empCode: Yup.string().trim().required("رمز المندوب مطلوب"),
    empName: Yup.string().trim().required("أسم المندوب مطلوب"),
    hireDate: Yup.string().trim().required("تاريخ العمل مطلوب"),
   

  });

export type Values_TP = {
  id: number;
  empCode: string;
  empName: string;
  phone: string;
  email: string;
  address: string;
  generalDataNote: string;
  hireDate: string; 
  deptId: number;
  jobPositionId: number;
  managerId: number;
  workRecord: string;
  workDataNote: string;
 
  note: string;
  copValue: {
    id: number;
  empCode: string;
  empName: string;
  phone: string;
  email: string;
  address: string;
  generalDataNote: string;
  hireDate: string; 
  deptId: number;
  jobPositionId: number;
  managerId: number;
  workRecord: string;
  workDataNote: string;
 
  note: string;
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
