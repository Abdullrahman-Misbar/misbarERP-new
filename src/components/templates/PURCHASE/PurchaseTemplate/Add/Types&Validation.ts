import * as Yup from "yup";

export type RowData = {
  id: string
  templateName: string
  foreignTemplateName: string
  discerption: string
  isActive: boolean
  actions?: unknown 
  isCanceled?:boolean
}
export const validationSchema = () =>
  Yup.object({
    templateName: Yup.string().trim().required("أسم القالب  مطلوب"),
  

  });

  export type Values_TP = {
    templateName: string;
    foreignTemplateName: string;
    discerption: string;
    isActive: boolean;
    paymentTermses: Array<{
      paymentTermName: string;
      foreignPaymentTermName: string;
      invoicePortion: number;
      dueDateBasedOn: number;
      creditDays: number;
      hasDiscount: boolean;
      isDiscountValueOrRatio: number;
      discount: number;
      discountIfPaidWithIn: number;
      paymentTemplateId: number; 
      isDeleted: boolean;
    }>;

    id: number;
    copValue: {
      templateName: string;
    foreignTemplateName: string;
    discerption: string;
    isActive: boolean;
    paymentTermses: Array<{
      paymentTermName: string;
      foreignPaymentTermName: string;
      invoicePortion: number;
      dueDateBasedOn: number;
      creditDays: number;
      hasDiscount: boolean;
      isDiscountValueOrRatio: number;
      discount: number;
      discountIfPaidWithIn: number;
      paymentTemplateId: number; 
      isDeleted: boolean;
    }>;

    id: number;
    }
  };
  

  export type PurchaseOrderData = {
    templateName: string;
    foreignTemplateName: string;
    discerption: string;
    isActive: boolean;
    paymentTermses: Array<{
      paymentTermName: string;
      foreignPaymentTermName: string;
      invoicePortion: number;
      dueDateBasedOn: number;
      creditDays: number;
      hasDiscount: boolean;
      isDiscountValueOrRatio: number;
      discount: number;
      discountIfPaidWithIn: number;
      paymentTemplateId: number; 
      isDeleted: boolean;
    }>;
    id: number;
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

export interface FormValues {
  [moduleName: string]: any[];
}

export interface Header {
  name: keyof any;
  label: string;
  component: React.ElementType;
  type: string;
  placeholder?: string;
  value?: any;
  onChange?: (e: any) => void;
}

export interface TermsTableProps {
  moduleName: string;
}