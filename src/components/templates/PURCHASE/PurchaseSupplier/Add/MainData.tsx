import { Grid, Tab, Tabs } from "@mui/material";
import { SetStateAction, useState } from "react";

import { useFormikContext } from "formik";
import BaseInputField from "../../../../atoms/formik/BaseInputField";
import { Label } from "../../../../atoms/formik/Label";
import RadioButtons from "../../../../atoms/formik/RadioComp";
import SelectComp from "../../../../atoms/formik/SelectComp";
import BaseInputDatepicker from "../../../../atoms/formik/BaseInputDatepicker";
import { SwitchComp } from "../../../../atoms/formik/SwitchComp";
import LayoutMainData from "../../../../molecules/LayoutMainData";
import SelectPartnerGroup from "../../../../molecules/Selects/SelectPartnerGroup";
import PartnerAddress from "./partnerTable/PartnerAddress";
import BankAccountsTable from "./partnerTable/PartnerBankAccount";
import PartnerContact from "./partnerTable/PartnerContact";
import PurchaseSaleSettings from "./partnertable/PurchaseSaleSettings";
import MainCopyComp from "./toolbarComponents/MainCopyComp";
import { Values_TP } from "./Types&Validation";

function MainData() {
  const { values, setFieldValue } = useFormikContext<Values_TP>();
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
    consideredAsVendorAndCustomer:
      values?.copValue?.consideredAsVendorAndCustomer || false,
    salesRepresentative: values?.copValue?.salesRepresentative || "",
    pricesList: values?.copValue?.pricesList || 0,
    purchaseRepresentativeId: values?.copValue?.purchaseRepresentativeId || 0,
    reminderingBeforeReceiptDate:
      values?.copValue?.reminderingBeforeReceiptDate || false,
    note: values?.copValue?.note || "",
    partnerContactsesDto: values?.copValue?.partnerContactsesDto || [],
    partnerAddressesesDto: values?.copValue?.partnerAddressesesDto || [],
    partnerPaymentTerrmsesDto: values?.copValue?.partnerPaymentTerrmsesDto || [
      {
        forSalesOrPurchase: 0,
        paymentTermTemplateId: 0,
        partnerId: 0,
        id: 0,
        isDeleted: false,
      },
    ],
  
    partnerBankAccountsesDto: values?.copValue?.partnerBankAccountsesDto || [],
  };
  const [tabIndex, setTabIndex] = useState(0);

  // Tab Change handler
  const handleTabChange = (event: any, newIndex: SetStateAction<number>) => {
    setTabIndex(newIndex);
  };

  const handlePartnerGroupChange = (selectedGroup: { value: number; label: string }) => {
    const categoryCode = `PG-${selectedGroup.value}`; 
    setFieldValue("partnerCode", categoryCode); 
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

  const sexOptions = [
    { label: "ذكر", value: "male" },
    { label: "انثى", value: "female" },
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
            <SelectPartnerGroup 
            name="partnerGroupId" 
            label="مجموعة المورد " 
            placeholder="أختر مجموعة المورد"
            onPartnerGroupChange={handlePartnerGroupChange} 
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BaseInputField
              name="partnerCode"
              placeholder="الرقم المرجعي"
              type="text"
              disabled
              value={values.partnerCode}
              label="الرقم المرجعي"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BaseInputField
              name="work"
              placeholder="عمل المورد"
              type="text"
              label="عمل المورد"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <BaseInputField
              name="workType"
              placeholder="طبيعة عمل المورد"
              type="text"
              label="طبيعة عمل المورد"
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
         
          <Grid item xs={12} sm={4}>
            <BaseInputField
              name="taxNumber"
              placeholder="الرقم الضريبي"
              type="text"
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
              name="barcode"
              placeholder="الباركود"
              type="text"
              label="الباركود"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <BaseInputField
              name="partnerName"
              placeholder="أسم المورد"
              type="text"
              label="أسم المورد"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <BaseInputField
              name="foreignPartnerName"
              placeholder="الاسم بالاجنبي"
              type="text"
              label="الاسم بالاجنبي"
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
          <Grid item xs={12} sm={4}>
            <SelectComp
              name="sex"
              label="الجنس"
              placeholder="الجنس"
              options={sexOptions}
              onChange={(selectedOption: any) =>
                setFieldValue("sex", selectedOption?.value)
              }
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <BaseInputDatepicker
              name="birthDate"
              placeholder="تاريخ الميلاد"
              label="تاريخ الميلاد"
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
          <Grid item xs={12} sm={4}>
            <BaseInputField
              name="email"
              placeholder="البريد الالكتروني"
              type="email"
              label="البريد الالكتروني"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <BaseInputField
              name="website"
              placeholder="الموقع الالكتروني"
              type="text"
              label="الموقع الالكتروني"
            />
          </Grid>

          <Grid item xs={12} sm={4}>
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
          <Grid item xs={12} sm={4}>
  <SelectComp
    name="nationality"
    label="الجنسية"
    placeholder="اختر الجنسية"
    options={[
      { label: "Nationality 1", value: "nationality1" },
      { label: "Nationality 2", value: "nationality2" },
      { label: "Nationality 3", value: "nationality3" },
    ]}
    onChange={(selectedOption: any) =>
      setFieldValue("nationality", selectedOption?.value)
    }
  />
</Grid>
          <Grid item xs={12} sm={4}>
  <SelectComp
    name="country"
    label="الدولة"
    placeholder="اختر الدولة"
    options={[
      { label: "Country 1", value: "country1" },
      { label: "Country 2", value: "country2" },
      { label: "Country 3", value: "country3" },
    ]}
    onChange={(selectedOption: any) =>
      setFieldValue("country", selectedOption?.value)
    }
  />
</Grid>

<Grid item xs={12} sm={4}>
  <SelectComp
    name="city"
    label="المدينة"
    placeholder="اختر المدينة"
    options={[
      { label: "City 1", value: "city1" },
      { label: "City 2", value: "city2" },
      { label: "City 3", value: "city3" },
    ]}
    onChange={(selectedOption: any) =>
      setFieldValue("city", selectedOption?.value)
    }
  />
</Grid>

<Grid item xs={12} sm={4}>
  <SelectComp
    name="area"
    label="المنطقة"
    placeholder="اختر المنطقة"
    options={[
      { label: "Area 1", value: "area1" },
      { label: "Area 2", value: "area2" },
      { label: "Area 3", value: "area3" },
    ]}
    onChange={(selectedOption: any) =>
      setFieldValue("area", selectedOption?.value)
    }
  />
</Grid>

<Grid item xs={12} sm={4}>
  <SelectComp
    name="street"
    label="الشارع"
    placeholder="اختر الشارع"
    options={[
      { label: "Street 1", value: "street1" },
      { label: "Street 2", value: "street2" },
      { label: "Street 3", value: "street3" },
    ]}
    onChange={(selectedOption: any) =>
      setFieldValue("street", selectedOption?.value)
    }
  />
</Grid>
<Grid item xs={12} sm={4}>
            <BaseInputField
              name="postCode"
              placeholder="الرمز البريدي"
              type="text"
              label="الرمز البريدي"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="flex items-center gap-4 mt-6">
              <Label htmlFor="">موقف (خيار)</Label>
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
          <Tabs
            value={tabIndex}
            onChange={handleTabChange}
            aria-label="Partner Details Tabs"
          >
            <Tab label="جهات اتصال المورد" className="!font-somarBold" />
            <Tab label="عناوين المورد" className="!font-somarBold" />
            <Tab label="حساب المورد" className="!font-somarBold" />
            <Tab label="اعدادات الشراء والبيع" className="!font-somarBold" />
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
          {tabIndex === 3 && (
            <Grid item xs={12} mt={5}>
              <PurchaseSaleSettings moduleName="partnerPaymentTerrmsesDto" />
              
            </Grid>
          )}
        </Grid>
      </div>
    </LayoutMainData>
  );
}

export default MainData;
