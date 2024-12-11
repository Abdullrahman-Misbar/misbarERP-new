import { Grid } from "@mui/material";
import { useFormikContext } from "formik";
import BaseInputDatepicker from "../../../../atoms/formik/BaseInputDatepicker";
import BaseInputField from "../../../../atoms/formik/BaseInputField";
import { Label } from "../../../../atoms/formik/Label";
import RadioButtons from "../../../../atoms/formik/RadioComp";
import { SwitchComp } from "../../../../atoms/formik/SwitchComp";
import ApprovedStatus from "../../../../molecules/ApprovedStatus";
import ItemsTable from "../../../../molecules/tablesDynamic/ItemsTable";
import LayoutMainData from "../../../../molecules/LayoutMainData";
import SelectCurrency from "../../../../molecules/Selects/SelectCurrency";
import SelectPurchaseAgreement from "../../../../molecules/Selects/SelectPurchasAgreement";
import SelectVendor from "../../../../molecules/Selects/SelectVendor";
import SelectWarehouse from "../../../../molecules/Selects/SelectWarehouse";
import MainCopyComp from "./toolbarComponents/MainCopyComp";
import { Values_TP } from "./Types&Validation";
import MainSelectChoseModule from "../../../../molecules/MainSelectChoseModule";

function MainData() {
  const { values, setFieldValue } = useFormikContext<Values_TP>();
  console.log("🚀 ~ MainData ~ values:", values)
  const newValues = {
    partnerCode: values?.copValue?.partnerCode || "",
    foreignPartnerName: values?.copValue?.foreignPartnerName || "",
    partnerName: values?.copValue?.partnerName || "",
    accountId: values?.copValue?.accountId || 0,
    partnerTypeId: values?.copValue?.partnerTypeId || 0,
    vendorType: values?.copValue?.vendorType || 0,
    companyName: values?.copValue?.companyName || "",
    suffixId: values?.copValue?.suffixId || 0,
    barcode: values?.copValue?.barcode || "",
    taxNumber: values?.copValue?.taxNumber || "",
    jobPosition: values?.copValue?.jobPosition || "",
    partnerGroupId: values?.copValue?.partnerGroupId || 0,
    phone: values?.copValue?.phone || "",
    mobile: values?.copValue?.mobile || "",
    email: values?.copValue?.email || "",
    website: values?.copValue?.website || "",
    fax: values?.copValue?.fax || "",
    language: values?.copValue?.language || "",
    isActive: values?.copValue?.isActive || false,
    generalDataNote: values?.copValue?.generalDataNote || "",
    nationality: values?.copValue?.nationality || "",
    work: values?.copValue?.work || "",
    workType: values?.copValue?.workType || "",
    sex: values?.copValue?.sex || "",
    birthDate: values?.copValue?.birthDate || "",
    country: values?.copValue?.country || "",
    city: values?.copValue?.city || "",
    area: values?.copValue?.area || "",
    street: values?.copValue?.street || "",
    postCode: values?.copValue?.postCode || "",
    consideredAsVendorAndCustomer: values?.copValue?.consideredAsVendorAndCustomer || false,
    salesRepresentative: values?.copValue?.salesRepresentative || "",
    pricesList: values?.copValue?.pricesList || 0,
    purchaseRepresentativeId: values?.copValue?.purchaseRepresentativeId || 0,
    reminderingBeforeReceiptDate: values?.copValue?.reminderingBeforeReceiptDate || false,
    note: values?.copValue?.note || "",
    partnerContactsesDto: values?.copValue?.partnerContactsesDto || [],
    partnerAddressesesDto: values?.copValue?.partnerAddressesesDto || [],
    partnerPaymentTerrmsesDto: values?.copValue?.partnerPaymentTerrmsesDto || [],
    partnerBankAccountsesDto: values?.copValue?.partnerBankAccountsesDto || [],
  
  };


  return (
    <LayoutMainData
      componentCopy={<MainCopyComp />}
      //@ts-ignore
      newValues={newValues}
      deleteEndPoint="api/PurchasRequest"
    >
      <div>
        <Grid container rowSpacing={4} columnSpacing={4}>
          <Grid item xs={12} sm={6}>
            <BaseInputField
              name="partnerCode"
              placeholder="الرقم المرجعي"
              type="text"
              disabled
              label="الرقم المرجعي"
            />
          </Grid>


          <Grid item xs={6}>
            <BaseInputField
              name="note"
              placeholder="ملاحظات"
              type="textarea"
              label="ملاحظات"
            />
          </Grid>
        </Grid>
        <Grid item xs={12} mt={5}>
          <MainSelectChoseModule moduleName="purchaseRequestDetailsDto" />
          <ItemsTable moduleName="purchaseRequestDetailsDto" />
        </Grid>
      </div>
    </LayoutMainData>
  );
}

export default MainData;
