// import BaseInputRepeater from "../../../atoms/formik/BaseInputRepeater";

//   const headers: RecieptHeader[] = [
//     {
//       name: "debitAmount",
//       label: "المبلغ",
//       placeholder: "المبلغ",
//       component: BaseInputRepeater,
//       type: "number",
//     },
//     {
//       name: "accountId",
//       label: "الحساب",
//       component: SelectAccount,
//       type: "text",
//       onChange: (e) => {
//         const rowIndex = values[moduleName]?.length - 1;

//         const accountId = e.value;

//         setFieldValue(`${moduleName}[${rowIndex}].accountId`, accountId);
//       },
//     },

//     {
//       name: "note",
//       label: "البيان",
//       placeholder: "البيان",
//       component: BaseInputRepeater,
//       type: "text",
//     },

//     {
//       name: "currencyId",
//       label: "العمله",
//       component: SelectCurrency,
//       type: "text",
//       onChange: (e) => {
//         const rowIndex = values[moduleName]?.length - 1;

//         setFieldValue(`${moduleName}[${rowIndex}].currencyId`, e.value);
//       },
//     },
//     {
//       name: "convertionRate",
//       label: "التعادل",
//       placeholder: "التعادل",
//       component: BaseInputRepeater,
//       type: "number",
//     },

//     {
//       name: "equivalent",
//       label: "المكافي",
//       placeholder: "المكافي",
//       component: BaseInputRepeater,
//       type: "number",
//     },

//     {
//       name: "costCenterId",
//       label: "مركز التكلفه",
//       component: CostCenter,
//       type: "text",
//       onChange: (e) => {
//         const rowIndex = values[moduleName]?.length - 1;

//         setFieldValue(`${moduleName}[${rowIndex}].costCenterId`, e.value);
//       },
//     },

//     {
//       name: "vatAccountId",
//       label: "حساب الضريبه",
//       component: SelectAccount,
//       type: "text",
//       onChange: (e) => {
//         const rowIndex = values[moduleName]?.length - 1;

//         const accountId = e.value;

//         setFieldValue(`${moduleName}[${rowIndex}].vatAccountId`, accountId);
//       },
//     },
//     {
//       name: "vatValue",
//       label: "ضريبة القيمة المضافة",
//       placeholder: "ضريبة القيمة المضافة",
//       component: BaseInputRepeater,
//       type: "number",
//     },
//   ];