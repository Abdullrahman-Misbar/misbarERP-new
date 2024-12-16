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
    partnerCode: Yup.string().trim().required("رمز المورد مطلوب"),
    partnerName: Yup.string().trim().required("أسم المورد مطلوب"),
    vendorType: Yup.string().trim().required("نوع المورد مطلوب"),
    companyName: Yup.string().trim().required("أسم الشركة مطلوب"),
    taxNumber: Yup.string().trim().required("الرقم الضريبي مطلوب"),
    partnerGroupId: Yup.string().trim().required("مجموعة المورد مطلوب"),

  });

export type Values_TP = {
  id: number;
  partnerCode: string;
  foreignPartnerName: string;
  editable:boolean
  partnerName: string;
  accountId: number;
  partnerTypeId: number;
  vendorType: number;
  companyName: string;
  suffixId: number;
  barcode: string;
  taxNumber: string;
  jobPosition: string;
  partnerGroupId: number;
  phone: string;
  mobile: string;
  email: string;
  website: string;
  fax: string;
  language: string;
  isActive: boolean;
  generalDataNote: string;
  nationality: string;
  work: string;
  workType: string;
  sex: string;
  birthDate: string; // ISO date string
  country: string;
  city: string;
  area: string;
  street: string;
  postCode: string;
  consideredAsVendorAndCustomer: boolean;
  salesRepresentative: string;
  pricesList: number;
  purchaseRepresentativeId: number;
  reminderingBeforeReceiptDate: boolean;
  note: string;
  partnerContactsesDto: PartnerContact[];
  partnerAddressesesDto: PartnerAddress[];
  partnerPaymentTerrmsesDto: PartnerPaymentTerm[];
  partnerBankAccountsesDto: PartnerBankAccount[];
  copValue: {
    partnerContactsesDto: PartnerContact[];
  partnerAddressesesDto: PartnerAddress[];
  partnerPaymentTerrmsesDto: PartnerPaymentTerm[];
  partnerBankAccountsesDto: PartnerBankAccount[];
    partnerCode: string;
    foreignPartnerName: string;
    partnerName: string;
    accountId: number;
    partnerTypeId: number;
    vendorType: number;
    companyName: string;
    suffixId: number;
    barcode: string;
    taxNumber: string;
    jobPosition: string;
    partnerGroupId: number;
    phone: string;
    mobile: string;
    email: string;
    website: string;
    fax: string;
    language: string;
    isActive: boolean;
    generalDataNote: string;
    nationality: string;
    work: string;
    workType: string;
    sex: string;
    birthDate: string; // ISO date string
    country: string;
    city: string;
    area: string;
    street: string;
    postCode: string;
    consideredAsVendorAndCustomer: boolean;
    salesRepresentative: string;
    pricesList: number;
    purchaseRepresentativeId: number;
    reminderingBeforeReceiptDate: boolean;
    note: string;
  };
};

export type PartnerContact = {
  contactName: string;
  id: number;
  address: string;
  jobTitle: string;
  email: string;
  mobile: string;
  phone: string;
  partnerId: number;
  note: string;
  isDeleted: boolean;
};

export type PartnerAddress = {
  contactName: string;
  addressType: string;
  country: string;
  city: string;
  area: string;
  street: string;
  postCode: string;
  email: string;
  phone: string;
  mobile: string;
  partnerId: number;
  note: string;
  id: number;
  isDeleted: boolean;
};

export type PartnerPaymentTerm = {
  forSalesOrPurchase: number;
  paymentTermTemplateId: number;
  partnerId: number;
  id: number;
  isDeleted: boolean;
};

export type PartnerBankAccount = {
  bankName: string;
  accountNumber: string;
  partnerId: number;
  note: string;
  isDeleted: boolean;
  id: number;
};


export type PartnerDetails = {
  id: number;
  partnerCode: string;
  foreignPartnerName: string;
  partnerName: string;
  accountId: number;
  partnerTypeId: number;
  vendorType: number;
  companyName: string;
  suffixId: number;
  barcode: string;
  taxNumber: string;
  jobPosition: string;
  partnerGroupId: number;
  phone: string;
  mobile: string;
  email: string;
  website: string;
  fax: string;
  language: string;
  isActive: boolean;
  generalDataNote: string;
  nationality: string;
  work: string;
  workType: string;
  sex: string;
  birthDate: string; // ISO date string
  country: string;
  city: string;
  area: string;
  street: string;
  postCode: string;
  consideredAsVendorAndCustomer: boolean;
  salesRepresentative: string;
  pricesList: number;
  purchaseRepresentativeId: number;
  reminderingBeforeReceiptDate: boolean;
  note: string;
  partnerContactsesDto: Array<PartnerContact>;
  partnerAddressesesDto: Array<PartnerAddress>;
  partnerPaymentTerrmsesDto: Array<PartnerPaymentTerm>;
  partnerBankAccountsesDto: Array<PartnerBankAccount>;
  copValue: {
    partnerCode: string;
    foreignPartnerName: string;
    partnerName: string;
    accountId: number;
    partnerTypeId: number;
    vendorType: number;
    companyName: string;
    suffixId: number;
    barcode: string;
    taxNumber: string;
    jobPosition: string;
    partnerGroupId: number;
    phone: string;
    mobile: string;
    email: string;
    website: string;
    fax: string;
    language: string;
    isActive: boolean;
    generalDataNote: string;
    nationality: string;
    work: string;
    workType: string;
    sex: string;
    birthDate: string; // ISO date string
    country: string;
    city: string;
    area: string;
    street: string;
    postCode: string;
    consideredAsVendorAndCustomer: boolean;
    salesRepresentative: string;
    pricesList: number;
    purchaseRepresentativeId: number;
    reminderingBeforeReceiptDate: boolean;
    note: string;
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

export interface ContactsTableProps {
  moduleName: string;
}