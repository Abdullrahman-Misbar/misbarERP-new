import { FieldArray, useFormikContext } from "formik";
import BaseInputRepeater from "../../atoms/formik/BaseInputRepeater";
import DeleteIcon from "../../atoms/icons/DeleteIcon";
import SelectAccount from "../Selects/SelectAccount";
import CostCenter from "../Selects/SelectCostCenter";
import SelectCurrency from "../Selects/SelectCurrency";
import TableDynamic from "../table/TableDynamic";
import {
  FormValues,
  receiptTableProps,
  ReceiptHeader
} from "./Types&Validation";

export default function ReceiptTable({ moduleName }: receiptTableProps) {
  const { setFieldValue, values } = useFormikContext<FormValues>();


  const headers: ReceiptHeader[] = [
    {
      name: "debitAmount",
      label: "المبلغ",
      placeholder: "المبلغ",
      component: BaseInputRepeater,
      type: "number",
    },
    {
      name: "accountId",
      label: "الحساب",
      component: SelectAccount,
      type: "text",
      onChange: (e) => {
        const rowIndex = values[moduleName]?.length - 1;

        const accountId = e.value;

        setFieldValue(`${moduleName}[${rowIndex}].accountId`, accountId);
      },
    },

    {
      name: "note",
      label: "البيان",
      placeholder: "البيان",
      component: BaseInputRepeater,
      type: "text",
    },

    {
      name: "currencyId",
      label: "العمله",
      component: SelectCurrency,
      type: "text",
      onChange: (e) => {
        const rowIndex = values[moduleName]?.length - 1;

        setFieldValue(`${moduleName}[${rowIndex}].currencyId`, e.value);
        setFieldValue(`${moduleName}[${rowIndex}].convertionRate`, e.convertionFactor);

      },
    },
    {
      name: "convertionRate",
      label: "التعادل",
      placeholder: "التعادل",
      component: BaseInputRepeater,
      type: "number",
      disabled:true
    },

    {
      name: "equivalent",
      label: "المكافي",
      placeholder: "المكافي",
      component: BaseInputRepeater,
      type: "number",
    },

    {
      name: "costCenterId",
      label: "مركز التكلفه",
      component: CostCenter,
      type: "text",
      onChange: (e) => {
        const rowIndex = values[moduleName]?.length - 1;
        setFieldValue(`${moduleName}[${rowIndex}].costCenterId`, e.value);
      },
    },

    {
      name: "vatAccountId",
      label: "حساب الضريبه",
      component: SelectAccount,
      type: "text",
      onChange: (e) => {
        const rowIndex = values[moduleName]?.length - 1;

        const accountId = e.value;

        setFieldValue(`${moduleName}[${rowIndex}].vatAccountId`, accountId);
      },
    },
    {
      name: "vatValue",
      label: "ضريبة القيمة المضافة",
      placeholder: "ضريبة القيمة المضافة",
      component: BaseInputRepeater,
      type: "number",
    },
  ];
  const handleTabPress = (
    e: React.KeyboardEvent,
    index: number,
    push: Function
  ) => {
    if (e.key === "Tab") {
      const lastIndex = values[moduleName]?.length - 1;
      const currentRow = values[moduleName]?.[index];

      if (index === lastIndex && currentRow?.note !== undefined) {
        push({
          itemId: "",
          description: "",
          quantity: 0,
          uomId: "",
          price: 0,
          total: 0,
          id: 0,
          warehouseId: "",
          note: "",
          isDeleted: false,
        });
      }
    }
  };

  return (
    <div>
      <FieldArray name={moduleName}>
        {({ push, remove }) => (
          <div className="relative">
            <div>
              <button
                type="button"
                onClick={() =>
                  push({
                    itemId: "",
                    description: "",
                    quantity: 0,
                    uomId: "",
                    price: 0,
                    total: 0,
                    id: 0,
                    warehouseId: "",
                    note: "",
                    isDeleted: false,
                  })
                }
                className="px-4 py-2 mt-4 mb-2 text-white bg-blue-500 rounded"
              >
                إضافة سطر جديد
              </button>
            </div>
            <div className="relative">
              <TableDynamic
                //@ts-ignore
                headers={headers}
                moduleName={moduleName}
                //@ts-ignore
                remove={remove}
                actions={(index: number) => (
                  <button
                    type="button"
                    onClick={() => {
                      setFieldValue(`${moduleName}[${index}].isDeleted`, true);
                    }}
                    className=""
                  >
                    <DeleteIcon
                      action={() => {
                        setFieldValue(
                          `${moduleName}[${index}].isDeleted`,
                          true
                        );
                      }}
                      fillCustom="red"
                    />
                  </button>
                )}
                //@ts-ignore
                handleTabPress={handleTabPress}
                //@ts-ignore

                push={push}
              />
            </div>
          </div>
        )}
      </FieldArray>
    </div>
  );
}
