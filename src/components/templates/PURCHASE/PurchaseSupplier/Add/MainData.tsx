import { Grid, Tabs, Tab } from "@mui/material";
import { useState } from "react";

import { useFormikContext } from "formik";
import BaseInputField from "../../../../atoms/formik/BaseInputField";
import SelectComp from "../../../../atoms/formik/SelectComp";
import SelectPartnerGroup from "../../../../molecules/Selects/SelectPartnerGroup";
import { SwitchComp } from "../../../../atoms/formik/SwitchComp";
import LayoutMainData from "../../../../molecules/LayoutMainData";
import MainCopyComp from "./toolbarComponents/MainCopyComp";
import { Values_TP } from "./Types&Validation";
import { Label } from "../../../../atoms/formik/Label";
import RadioButtons from "../../../../atoms/formik/RadioComp";
import PartnerContact from "./partnertable/PartnerContact";
import PartnerAddress from "./partnertable/PartnerAddress";
import BankAccountsTable from "./partnertable/PartnerBankAccount";

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
  const [tabIndex, setTabIndex] = useState(0);

  // Tab Change handler
  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };


  const suffixOptions = [
    { label: "السيد", value: 1 },
    { label: "السيدة", value: 2 },
    { label: "المهندس", value: 3 },
    { label: "الدكتور", value: 4 },
  ];

  const languageOptions = [
    { label: "العربية", value: "ar" },
    { label: "English", value: "en" },
    
  ];

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
            <SelectPartnerGroup name="partnerGroupId" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BaseInputField
              name="partnerCode"
              placeholder="الرقم المرجعي"
              type="text"
              disabled
              label="الرقم المرجعي"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BaseInputField
              name="partnerName"
              placeholder="أسم المورد"
              type="text"
              
              label="أسم المورد"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BaseInputField
              name="foreignPartnerName"
              placeholder="الاسم بالاجنبي"
              type="text"
              
              label="الاسم بالاجنبي"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
  <div className="flex items-center gap-4 mt-8">
    <Label htmlFor="">نوع المورد</Label>
    <RadioButtons
      name="vendorType"
      label="شركة"
      checked={values?.vendorType === 0}
      onChange={() => setFieldValue("vendorType", 0)}
    />
    <RadioButtons
      name="vendorType"
      label="فرد"
      checked={values?.vendorType === 1}
      onChange={() => setFieldValue("vendorType", 1)}
    />
  </div>
</Grid>
<Grid item xs={12} sm={6}>
            <BaseInputField
              name="companyName"
              placeholder="أسم الشركة"
              type="text"
              
              label="أسم الشركة"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
<SelectComp
            name="suffixId"
            label="اللقب"
            placeholder="اللقب"
            options={suffixOptions}
            onChange={(selectedOption: any) =>
              setFieldValue("suffixId", selectedOption?.value)
            }
           
          />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BaseInputField
              name="barcode"
              placeholder="الباركود"
              type="text"
              
              label="الباركود"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <BaseInputField
              name="taxNumber"
              placeholder="الرقم الضريبي"
              type="number"
              
              label="الرقم الضريبي"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <BaseInputField
              name="accountId"
              placeholder="السجل التجاري"
              type="text"
              
              label="السجل التجاري"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <BaseInputField
              name="jobPosition"
              placeholder="المنصب الوظيفي"
              type="text"
              
              label="المنصب الوظيفي"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <BaseInputField
              name="phone"
              placeholder="رقم الهاتف"
              type="text"
              
              label="رقم الهاتف"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <BaseInputField
              name="mobile"
              placeholder="الهاتف المحمول"
              type="text"
              
              label="الهاتف المحمول"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <BaseInputField
              name="fax"
              placeholder="الفاكس"
              type="text"
              
              label="الفاكس"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BaseInputField
              name="email"
              placeholder="البريد الالكتروني"
              type="email"
              
              label="البريد الالكتروني"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BaseInputField
              name="website"
              placeholder="الموقع الالكتروني"
              type="text"
              
              label="الموقع الالكتروني"
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
<SelectComp
            name="language"
            label="اللغة"
            placeholder="اللغة"
            options={languageOptions}
            onChange={(selectedOption: any) =>
              setFieldValue("language", selectedOption?.value)
            }
           
          />
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="flex items-center gap-4 mt-6">
              <Label htmlFor="">حالة المورد</Label>
              <SwitchComp
                name="isActive"
                defaultChecked={values?.isActive == true}
              />
             
             
            </div>
          </Grid>
          <Grid item xs={12} sm={12}>
            <BaseInputField
              name="note"
              placeholder="الملاحظات"
              type="textarea"
              
              label="الملاحظات"
            />
          </Grid>
        </Grid>
        <Grid item xs={12} mt={5}>
        {/* Tabs Component */}
        <Tabs value={tabIndex} onChange={handleTabChange} aria-label="Partner Details Tabs">
          <Tab label="جهات اتصال المورد" />
          <Tab label="عناوين المورد" />
          <Tab label="حساب المورد" />
        </Tabs>

        {/* Tab Panels */}
        {tabIndex === 0 && (
          <Grid item xs={12} mt={5}>
            <PartnerContact moduleName="partnerContactsesDto" />
          </Grid>
        )}
        {tabIndex === 1 && (
          <Grid item xs={12} mt={5}>
            <PartnerAddress moduleName="partnerAddressesesDto" />
          </Grid>
        )}
        {tabIndex === 2 && (
          <Grid item xs={12} mt={5}>
            <BankAccountsTable moduleName="partnerBankAccountsesDto" />
          </Grid>
        )}
        </Grid>
      </div>
    </LayoutMainData>
  );
}

export default MainData;
