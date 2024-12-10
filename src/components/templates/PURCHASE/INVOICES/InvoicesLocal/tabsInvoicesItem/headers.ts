// headers.ts
import { Header } from "./Types&Validation";
import BaseInputRepeater from "../../../../../atoms/formik/BaseInputRepeater";
import SelectItem from "../../../../../molecules/Selects/SelectItem";
import SelectUoms from "../../../../../molecules/Selects/SelectUoms";
import SelectAccount from "../../../../../molecules/Selects/SelectAccount";
import SelectCurrency from "../../../../../molecules/Selects/SelectCurrency";
import BaseInputDatepicker from "../../../../../atoms/formik/BaseInputDatepicker";
import SelectPaymentMethod from "../../../../../molecules/Selects/SelectPaymentMethod";
import SelectPurchasePaymentTerm from "../../../../../molecules/Selects/SelectPurchasePaymentTerm";


export const headersDetailsInvoice = (handleFieldChange , values) =>[
  {
    name: "itemId",
    label: "الصنف",
    component: SelectItem,
    type: "number",
    //@ts-ignore

    onChange: (e, setFieldValue, values, moduleName) => {
      const moduleIndex = values[moduleName]?.length - 1;
      setFieldValue(`${moduleName}[${moduleIndex}].itemId`, e.value);
      setFieldValue(`${moduleName}[${moduleIndex}].uoms`, e.uoms);
    },
    width: "100px",
  },
  {
    name: "quantity",
    label: "الكمية",
    placeholder: "الكمية",
    component: BaseInputRepeater,
    type: "number",
    onChange: (e, setFieldValue, values, moduleNam) => {
      const moduleIndex = values[moduleNam]?.length - 1;
      const value = +e.target.value || 0;
      handleFieldChange("quantity", value, moduleIndex);
    },
  },
  {
    name: "uomId",
    label: "وحدة القياس",
    component: SelectUoms,
    type: "number",

    //@ts-ignore

    onChange: (e, setFieldValue, values, moduleName) => {
      setFieldValue(
        `${moduleName}[${values[moduleName]?.length - 1}].uomId`,
        e.value
      );
    },
    width: "150px",
  },
  {
    name: "price",
    label: "التكلفة",
    placeholder: "التكلفة",
    component: BaseInputRepeater,
    type: "number",
    onChange: (e,  setFieldValue, values, moduleNam) => {
      const moduleIndex = values[moduleNam]?.length - 1;
      const value = +e.target.value || 0;
      handleFieldChange("price", value, moduleIndex);
    },
  },
  {
    name: "total",
    label: "الاجمالي",
    placeholder: "الاجمالي",
    component: BaseInputRepeater,
    type: "number",
    // value:+values?.price * +values?.quantity
  },
  {
    name: "discountRate",
    label: "الخصم%",
    placeholder: "الخصم%",
    component: BaseInputRepeater,
    type: "number",
    onChange: (e, setFieldValue, values, moduleNam) => {
      const moduleIndex = values[moduleNam]?.length - 1;

      const value = +e.target.value || 0;
      handleFieldChange("discountRate", value, moduleIndex);
    },
  },
  {
    name: "discountValue",
    label: "الخصم",
    placeholder: "الخصم",
    component: BaseInputRepeater,
    type: "number",
    onChange: (e, setFieldValue, values, moduleNam) => {
      const moduleIndex = values[moduleNam]?.length - 1;
      const value = +e.target.value || 0;
      handleFieldChange("discountValue", value, moduleIndex);
    },
  },
  {
    name: "totalAfterDiscount",
    label: "الإجمالي بعد الخصم",
    placeholder: "الإجمالي بعد الخصم",
    component: BaseInputRepeater,
    type: "number",
    width: "180px",
  },
  {
    name: "extraRate",
    label: "الاضافة%",
    placeholder: "الاضافة%",
    component: BaseInputRepeater,
    type: "number",
    onChange: (e, setFieldValue, values, moduleNam) => {
      const moduleIndex = values[moduleNam]?.length - 1;
      const value = +e.target.value || 0;
      handleFieldChange("extraRate", value, moduleIndex);
    },
  },
  {
    name: "extraValue",
    label: "الاضافة",
    placeholder: "الاضافة",
    component: BaseInputRepeater,
    type: "number",
    onChange: (e, setFieldValue, values, moduleNam) => {
      const moduleIndex = values[moduleNam]?.length - 1;
      const value = +e.target.value || 0;
      handleFieldChange("extraValue", value, moduleIndex);
    },
  },
  {
    name: "totalAfterExtra",
    label: "الإجمالي بعد الاضافة",
    placeholder: "الإجمالي بعد الاضافة",
    component: BaseInputRepeater,
    type: "number",
    width: "190px",
  },
  {
    name: "taxRate",
    label: "معدل الضريبة",
    placeholder: "معدل الضريبة",
    component: BaseInputRepeater,
    type: "number",
    width: "130px",
    onChange: (e, setFieldValue, values, moduleNam) => {
      const moduleIndex = values[moduleNam]?.length - 1;
      const value = +e.target.value || 0;
      handleFieldChange("taxRate", value, moduleIndex);
    },
    value:15
  },
  {
    name: "vat",
    label: "ضريبة القيمة المضافة",
    placeholder: "ضريبة القيمة المضافة",
    component: BaseInputRepeater,
    type: "number",
    width: "190px",
    onChange: (e, setFieldValue, values, moduleNam) => {
      const moduleIndex = values[moduleNam]?.length - 1;
      const value = +e.target.value || 0;
      handleFieldChange("vat", value, moduleIndex);
    },
  },
  {
    name: "totalAfterTax",
    label: "الإجمالي بعد الضريبة",
    placeholder: "الإجمالي بعد الضريبة",
    component: BaseInputRepeater,
    type: "number",
  },
  {
    name: "freeQuantities",
    label: "الكميات المجانية",
    placeholder: "الكميات المجانية",
    component: BaseInputRepeater,
    type: "number",
  },
  {
    name: "note",
    label: "الملاحظات",
    placeholder: "الملاحظات",
    component: BaseInputRepeater,
    type: "text",
  },
];

export const headersDiscountsAndExtras: Header[] = [
  {
    name: "accountId",
    label: "الحساب",
    component: SelectAccount,
    type: "number",
    //@ts-ignore

    onChange: (e, setFieldValue, values, moduleName) => {
      const moduleIndex = values[moduleName]?.length - 1;
      setFieldValue(`${moduleName}[${moduleIndex}].accountId`, e.value);
    },
    width: "100px",
  },

  {
    name: "influencingOnCost",
    label: "التأثير على التكلفة",
    placeholder: "التأثير على التكلفة",
    component: BaseInputRepeater,
    type: "number",
  },
  {
    name: "discountRate",
    label: "نسبة الحسم",
    placeholder: "نسبة الحسم",
    component: BaseInputRepeater,
    type: "number",
  },
  {
    name: "discountValue",
    label: "قيمة الحسم",
    placeholder: "قيمة الحسم",
    component: BaseInputRepeater,
    type: "number",
  },
  {
    name: "additionRate",
    label: "نسبة الاضافي",
    placeholder: "نسبة الاضافي",
    component: BaseInputRepeater,
    type: "number",
    width: "180px",
  },
  {
    name: "additionValue",
    label: "قيمة الاضافي",
    placeholder: "قيمة الاضافي",
    component: BaseInputRepeater,
    type: "number",
  },
  {
    name: "currencyId",
    label: "العملة",
    placeholder: "العملة",
    component: SelectCurrency,
    //@ts-ignore
    onChange: (e, setFieldValue, values, moduleName) => {
      const moduleIndex = values[moduleName]?.length - 1;
      setFieldValue(`${moduleName}[${moduleIndex}].currencyId`, e.value);
    },
    type: "number",
  },
  {
    name: "convertionRate",
    label: "التعادل",
    placeholder: "التعادل",
    component: BaseInputRepeater,
    type: "number",
    width: "190px",
  },
  {
    name: "equivalent",
    label: "المكافئ",
    placeholder: "المكافئ",
    component: BaseInputRepeater,
    type: "number",
    width: "130px",
  },

  {
    name: "note",
    label: "الملاحظات",
    placeholder: "الملاحظات",
    component: BaseInputRepeater,
    type: "text",
  },
];
export const headerInvoicesPaymentsSchedulingRequest: Header[] = [
  {
    name: "paymentTermId",
    // label: "شرط السداد",
    component: SelectPurchasePaymentTerm,
    type: "number",
    //@ts-ignore

    onChange: (e, setFieldValue, values, moduleName) => {
      const moduleIndex = values[moduleName]?.length - 1;
      setFieldValue(`${moduleName}[${moduleIndex}].paymentTermId`, e.value);
    },
    width: "100px",
  },

  {
    name: "invoicePortion",
    label: "نسبة الفاتورة",
    placeholder: "نسبة الفاتورة",
    component: BaseInputRepeater,
    type: "number",
  },
  {
    name: "dueAmount",
    label: "المبلغ المستحق",
    placeholder: "المبلغ المستحق",
    component: BaseInputRepeater,
    type: "number",
  },
  {
    name: "creditDays",
    label: "أيام الائتمان ",
    placeholder: "أيام الائتمان ",
    component: BaseInputRepeater,
    type: "number",
  },
  {
    name: "dueDate",
    label: "تاريخ الاستحقاق",
    placeholder: "تاريخ الاستحقاق",
    component: BaseInputDatepicker,
    type: "Date",
    width: "180px",
  },
  {
    name: "hasDiscount",
    label: "لديه خصم؟",
    placeholder: "لديه خصم؟",
    component: BaseInputRepeater,
    type: "text",
    onChange: (e, setFieldValue, values, moduleName) => {
      const moduleIndex = values[moduleName]?.length - 1;
      setFieldValue(`${moduleName}[${moduleIndex}].hasDiscount`, true);
    },
  },

  {
    name: "discountAmount",
    label: "مبلغ الخصم",
    placeholder: "مبلغ الخصم",
    component: BaseInputRepeater,
    type: "test",
    width: "130px",
  },
  {
    name: "dueAmountAfterDiscount",
    label: "المبلغ المستحق بعد الخصم",
    placeholder: "المبلغ المستحق بعد الخصم",
    component: BaseInputRepeater,
    type: "number",
    // width: "250px",
  },
  {
    name: "discountDueDate",
    label: "تاريخ السداد للحصول على الخصم",
    placeholder: "تاريخ السداد للحصول على الخصم",
    component: BaseInputDatepicker,
    type: "Date",
    // width: "180px",
  },
  {
    name: "status",
    label: "الحالة",
    placeholder: "الحالة",
    component: BaseInputRepeater,
    type: "string",
    width: "180px",
  },
  {
    name: "additionRate",
    label: "دفع",
    placeholder: "دفع",
    component: BaseInputDatepicker,
    type: "Date",
    width: "180px",
  },
  {
    name: "note",
    label: "الملاحظات",
    placeholder: "الملاحظات",
    component: BaseInputRepeater,
    type: "text",
  },
];
export const headerInvoicePaymentsRequest: Header[] = [
  {
    name: "paymentDate",
    label: "التاريخ ",
    placeholder: "التاريخ ",
    component: BaseInputDatepicker,
    type: "Date",
    // width: "180px",
  },
  {
    name: "paymentAmount",
    label: "المبلغ المدفوع",
    placeholder: "المبلغ المدفوع",
    component: BaseInputRepeater,
    type: "text",
  },
  {
    name: "paymentMethod",
    label: "طريقة الدفع",
    component: SelectPaymentMethod,
    type: "number",
    //@ts-ignore

    onChange: (e, setFieldValue, values, moduleName) => {
      const moduleIndex = values[moduleName]?.length - 1;
      setFieldValue(`${moduleName}[${moduleIndex}].paymentMethod`, e.value);
    },
    // width: "100px",
  },
];
