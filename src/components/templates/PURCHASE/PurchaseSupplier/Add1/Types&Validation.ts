


export type Values_TP = {
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
  partnerContactsesDto: PartnerContact[];
  partnerAddressesesDto: PartnerAddress[];
  partnerPaymentTerrmsesDto: PartnerPaymentTerm[];
  partnerBankAccountsesDto: PartnerBankAccount[];
  copValue: {
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
    partnerContactsesDto: PartnerContact[];
    partnerAddressesesDto: PartnerAddress[];
    partnerPaymentTerrmsesDto: PartnerPaymentTerm[];
    partnerBankAccountsesDto: PartnerBankAccount[];
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

export type PartnerData = {
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
  partnerContactsesDto: PartnerContact[];
  partnerAddressesesDto: PartnerAddress[];
  partnerPaymentTerrmsesDto: PartnerPaymentTerm[];
  partnerBankAccountsesDto: PartnerBankAccount[];
};
