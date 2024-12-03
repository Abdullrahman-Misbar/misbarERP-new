import { FieldArray, useFormikContext } from "formik";
import BaseInputRepeater from "../atoms/formik/BaseInputRepeater";
import SelectItem from "./Selects/SelectItem";
import TableDynamic from "./table/TabelDynamic";
import SelectUoms from "./Selects/SelectUoms";
import SelectWarehouse from "./Selects/SelectWarehouse";

type ItemsTable_TP = {
  moduleName: string;
};

export default function ItemsTable({ moduleName }: ItemsTable_TP) {
  const { setFieldValue } = useFormikContext();
  const headers = [
    // {
    //   name: "barcode",
    //   placeholder: "رمز الصنف",
    //   label: "رمز الصنف",
    //   component: BaseInputRepeater,
    //   type: "text",
    // },
    {
      name: "itemId",
      label: "اسم الصنف",
      component: SelectItem,
      type: "text",
      onChange: (e) => {
        setFieldValue(
          `${moduleName}[${values[moduleName]?.length - 1}].itemId`,
          e.value
        );
        setFieldValue(`uoms`, e.uoms);
        console.log(e);
      },
    },
    {
      name: "uomId",
      label: "وحدة القياس",
      component: SelectUoms,
      type: "text",
    },
    {
      name: "warehouseId",
      label: "المخزن",
      component: SelectWarehouse,
      type: "text",
    },
    {
      name: "quantity",
      label: "الكمية",
      placeholder: "الكمية",

      component: BaseInputRepeater,
      type: "number",
    },
    {
      name: "price",
      label: "التكلفة",
      placeholder: "التكلفة",
      component: BaseInputRepeater,
      type: "text",
    },
    {
      name: "debit",
      label: "تاريخ الصلاحية",
      placeholder: "تاريخ الصلاحية",

      component: BaseInputRepeater,
      type: "date",
    },
    {
      name: "credit",
      label: "المجموع",
      placeholder: "المجموع",
      component: BaseInputRepeater,
      type: "number",
    },
  ];

  const { values } = useFormikContext<any>();
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
                    code: "",
                    itemId: "",
                    barcode: "",
                    description: "",
                    quantity: "",
                    uomId: "",
                    price: "",
                    total: "",
                  })
                }
                className="px-4 py-2 mt-4 mb-2 text-white bg-blue-500 rounded"
              >
                إضافة سطر جديد
              </button>
            </div>
            <div className="relative">
              <TableDynamic
                headers={headers}
                items={values[moduleName]}
                moduleName={moduleName}
                remove={remove}
                actions={(index, remove) => (
                  <button
                    type="button"
                    onClick={() => remove(index)} // حذف السطر بناءً على الـ index
                    className="px-4 py-2 text-white bg-red-500 rounded"
                  >
                    حذف
                  </button>
                )}
              />
              <div>
                {/* {values[moduleName]?.map((_: any, index: number) => (
                  <div key={index} className="flex gap-2 mt-4">
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className="px-4 py-2 text-white bg-red-500 rounded"
                    >
                      حذف
                    </button>
                  </div>
                ))} */}
              </div>
            </div>
          </div>
        )}
      </FieldArray>
    </div>
  );
}
