
import * as Yup from "yup";

export type RowData = {
  id: string;
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
  birthDate: string;
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
  partnerContactsesDto: Array<{
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
  }>;
  partnerAddressesesDto: Array<{
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
  }>;
  partnerPaymentTerrmsesDto: Array<{
    forSalesOrPurchase: number;
    paymentTermTemplateId: number;
    partnerId: number;
    id: number;
    isDeleted: boolean;
  }>;
  partnerBankAccountsesDto: Array<{
    bankName: string;
    accountNumber: string;
    partnerId: number;
    note: string;
    isDeleted: boolean;
    id: number;
  }>;
};

export const validationSchema = () =>
  Yup.object({
    username: Yup.string().trim().required('اسم المستخدم مطلوب'),
    password: Yup.string().trim().required('كلمة المرور مطلوبة'),
  })
