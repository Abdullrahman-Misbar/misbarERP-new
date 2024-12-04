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