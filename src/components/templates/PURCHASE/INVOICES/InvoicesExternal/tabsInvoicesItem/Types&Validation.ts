export interface ItemRow {
  code: string;
  itemId: string;
  description: string;
  quantity: number;
  uomId: string;
  price: number;
  total: number;
  warehouseId: string;
  note: string;
  discountRate:string
  discountValue:string
  totalAfterDiscount:string
  extraRate:string
  extraValue:string
  totalAfterExtra:string
  taxRate:string
  vat:string
  totalAfterTax:string
  freeQuantities:string
  accountId?:string
  influencingOnCost?:string
  additionRate:number
  additionValue:number
  currencyId?:string
  equivalent:number
  convertionRate:number
  paymentDate:string
  paymentAmount:number
  paymentMethod:number
  paymentTermId:number
  invoicePortion:number
  dueAmount:number
  creditDays:number
  dueDate:string
  hasDiscount:string
  discountAmount:number
  dueAmountAfterDiscount:number
  discountDueDate:string
  status:string
}

export interface FormValues {
  [moduleName: string]: ItemRow[];
}

export interface Header {
  name: keyof ItemRow;
  label: string;
  component: React.ElementType;
  type: string;
  placeholder?: string;
  value?: any;
  onChange?: (e: any) => void;
  width?:string
}

export interface ItemsTableProps {
  moduleName: string;
  headers:string[]
}