// headers.ts
import { Header } from './Types&Validation';
import BaseInputRepeater from '../../../../../atoms/formik/BaseInputRepeater';
import SelectItem from '../../../../../molecules/Selects/SelectItem';
import SelectUoms from '../../../../../molecules/Selects/SelectUoms';
export const headersDetailsInvoice: Header[] = [
  // {
  //   name: "invoiceId",
  //   label: "رمز الصنف",
  //   placeholder: "رمز الصنف",
  //   component: BaseInputRepeater,
  //   type: "text",
  //   width: "100px",
  // },
  {
    name: "itemId",
    label: "الصنف",
    component: SelectItem,
    type: "text",
    onChange: (e, setFieldValue, values, moduleName) => {
      const moduleIndex = values[moduleName]?.length - 1;
      setFieldValue(`${moduleName}[${moduleIndex}].itemId`, e.value);
      setFieldValue(`${moduleName}[${moduleIndex}].uoms`, e.uoms);
    },
    width: "100px",
  },
  // {
  //   name: "barcode",
  //   label: "الباركود",
  //   placeholder: "الباركود",
  //   component: BaseInputRepeater,
  //   type: "text",
  // },
  {
    name: "quantity",
    label: "الكمية",
    placeholder: "الكمية",
    component: BaseInputRepeater,
    type: "number",
    onChange: (e, setFieldValue, values, moduleName) => {
      const rowIndex = values[moduleName]?.length - 1;
      const quantity = +e.target.value;
      const price = values[moduleName]?.[rowIndex]?.price || 0;
      const total = price * quantity;
      setFieldValue(`${moduleName}[${rowIndex}].quantity`, quantity);
      setFieldValue(`${moduleName}[${rowIndex}].total`, total);
    },
  },
  {
    name: "uomId",
    label: "وحدة القياس",
    component: SelectUoms,
    type: "text",
    onChange: (e, setFieldValue, values, moduleName) => {
      setFieldValue(`${moduleName}[${values[moduleName]?.length - 1}].uomId`, e.value);
    },
    width: "150px",
  },
  {
    name: "price",
    label: "التكلفة",
    placeholder: "التكلفة",
    component: BaseInputRepeater,
    type: "number",
    onChange: (e, setFieldValue, values, moduleName) => {
      const rowIndex = values[moduleName]?.length - 1;
      const price = +e.target.value;
      const quantity = values[moduleName]?.[rowIndex]?.quantity || 0;
      const total = price * quantity;
      setFieldValue(`${moduleName}[${rowIndex}].price`, price);
      setFieldValue(`${moduleName}[${rowIndex}].total`, total);
    },
  },
  {
    name: "total",
    label: "الاجمالي",
    placeholder: "الاجمالي",
    component: BaseInputRepeater,
    type: "number",
  },
  {
    name: "discountRate",
    label: "الخصم%",
    placeholder: "الخصم%",
    component: BaseInputRepeater,
    type: "number",
  },
  {
    name: "discountValue",
    label: "الخصم",
    placeholder: "الخصم",
    component: BaseInputRepeater,
    type: "number",
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
  },
  {
    name: "extraValue",
    label: "الاضافة",
    placeholder: "الاضافة",
    component: BaseInputRepeater,
    type: "number",
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
  },
  {
    name: "vat",
    label: "ضريبة القيمة المضافة",
    placeholder: "ضريبة القيمة المضافة",
    component: BaseInputRepeater,
    type: "number",
    width: "190px",
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