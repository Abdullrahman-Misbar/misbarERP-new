import { FieldArray, useFormikContext } from "formik";
import DeleteIcon from "../../atoms/icons/DeleteIcon";
import BaseInputRepeater from "../../atoms/formik/BaseInputRepeater";
import SelectItem from "../Selects/SelectItem";
import SelectUoms from "../Selects/SelectUoms";
import SelectWarehouse from "../Selects/SelectWarehouse";
import TableDynamic from "../table/TableDynamic";
import { FormValues, Header, recieptTableProps } from "./Types&Validation";
import SelectAccount from "../Selects/SelectAccount";
import SelectCurrency from "../Selects/SelectCurrency";

export default function RecieptTable({ moduleName }: recieptTableProps) {
  const { setFieldValue, values } = useFormikContext<FormValues>();

  console.log(moduleName, values);

  const headers: Header[] = [
    {
      name: "currencyId",
      label: "الحساب",
      component: SelectCurrency,
      type: "text",
      onChange: (e) => {
    
        setFieldValue(`${moduleName}.currencyId`, e.value);
      },
    },
    {
      name: "description",
      label: "الوصف",
      placeholder: "الوصف",
      component: BaseInputRepeater,
      type: "text",
    },
    {
      name: "uomId",
      label: "وحدة القياس",
      component: SelectUoms,
      type: "text",
      onChange: (e) => {
        setFieldValue(
          `${moduleName}[${values[moduleName]?.length - 1}].uomId`,
          e.value
        );
      },
    },
    {
      name: "warehouseId",
      label: "المخزن",
      component: SelectWarehouse,
      type: "text",
      onChange: (e) => {
        setFieldValue(
          `${moduleName}[${values[moduleName]?.length - 1}].warehouseId`,
          e.value
        );
      },
    },
    {
      name: "quantity",
      label: "الكمية",
      placeholder: "الكمية",
      component: BaseInputRepeater,
      type: "number",
      onChange: (e) => {
        const rowIndex = values[moduleName]?.length - 1;
        const quantity = +e.target.value;
        const price = values[moduleName]?.[rowIndex]?.price || 0;
        const total = price * quantity;
        setFieldValue(`${moduleName}[${rowIndex}].quantity`, quantity);
        setFieldValue(`${moduleName}[${rowIndex}].total`, total);
      },
    },
    {
      name: "price",
      label: "التكلفة",
      placeholder: "التكلفة",
      component: BaseInputRepeater,
      type: "number",
      onChange: (e) => {
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
      label: "المجموع",
      placeholder: "المجموع",
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
