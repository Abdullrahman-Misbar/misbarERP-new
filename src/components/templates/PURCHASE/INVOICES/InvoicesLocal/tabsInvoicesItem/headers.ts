// headers.ts
import BaseInputDatepicker from "../../../../../atoms/formik/BaseInputDatepicker";
import BaseInputRepeater from "../../../../../atoms/formik/BaseInputRepeater";
import SelectPaymentMethod from "../../../../../molecules/Selects/SelectPaymentMethod";
import { Header } from "./Types&Validation";

export const headersDetailsInvoice = [
  {
    label: " الصنف",
  },
  {
    label: " الكمية",
  },
  {
    label: " الوحدة",
  },
  {
    label: " التكلفة",
  },
  {
    label: " الاجمالي",
  },
  {
    label: " الخصم%",
  },
  {
    label: " الخصم",
  },
  {
    label: "الإجمالي بعد الخصم",
  },
  {
    label: "الاضافة%",
  },
  {
    label: "الاضافة",
  },
  {
    label: "الإجمالي بعد الاضافة",
  },
  {
    label: "معدل الضريبة",
  },
  {
    label: " ضريبة القيمة المضافة",
  },
  {
    label: "الإجمالي بعد الضريبة",
  },
  {
    label: "الكميات المجانية",
  },
  {
    label: "ملاحظات",
  },
];

export const headersDiscountsAndExtras = [
  {
    label: " الحساب",
  },
  {
    label: " التأثير على التكلفة",
  },
  {
    label: " نسبة الحسم",
  },
  {
    label: " قيمة الحسم",
  },
  {
    label: " نسبة الاضافي",
  },
  {
    label: " قيمة الاضافي",
  },
  {
    label: " العملة",
  },
  {
    label: "التعادل",
  },
  {
    label: "المكافئ",
  },

  {
    label: "ملاحظات",
  },
];

export const headerInvoicesPaymentsSchedulingRequest = [
  {
    label: "شرط السداد",
  },
  {
    label: "نسبة الفاتورة",
  },
  {
    label: "المبلغ المستحق",
  },
  {
    label: "أيام الائتمان ",
  },
  {
    label: "تاريخ الاستحقاق",
  },
  {
    label: "لديه خصم؟",
  },
  {
    label: "مبلغ الخصم",
  },
  {
    label: "المبلغ المستحق بعد الخصم",
  },
  {
    label: "تاريخ السداد للحصول على الخصم",
  },
  {
    label: "الحالة",
  },
  {
    label: "دفع",
  },

  {
    label: "ملاحظات",
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
