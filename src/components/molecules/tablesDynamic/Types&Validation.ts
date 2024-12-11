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
}

export interface ItemsTableProps {
  moduleName: string;
}

export interface recieptTableProps {
  moduleName: string;
}

export interface RecieptItems {
  debitAmount: number;
  accountId: number;
  note: string;
  currencyId: number;
  convertionRate: number;
  equivalent: number;
  costCenterId: number;
  vatAccountId: number;
  vatValue: number;
}

export interface RecieptHeader {
  name: keyof RecieptItems;
  label: string;
  component: React.ElementType;
  type: string;
  placeholder?: string;
  value?: any;
  onChange?: (e: any) => void;
}
