import { FieldArray, useFormikContext } from "formik"
import BaseInputRepeater from "../atoms/formik/BaseInputRepeater"
import SelectItem from "./Selects/SelectItem"
import TableDynamic from "./table/TabelDynamic"

type ItemsTable_TP = {
  moduleName: string
}

export default function ItemsTable({ moduleName }: ItemsTable_TP) {
  const headers = [
    {
      name: "barcode",
      label: "رمز الصنف",
      component: BaseInputRepeater,
      type: "text",
    },
    {
      name: "itemId",
      label: "اسم الصنف",
      component: SelectItem,
      type: "text",
    },
    {
      name: "uomId",
      label: "وحدة القياس",
      component: BaseInputRepeater,
      type: "text",
    },
    {
      name: "warehouseId",
      label: "المخزن",
      component: BaseInputRepeater,
      type: "text",
    },
    {
      name: "quantity",
      label: "الكمية",
      component: BaseInputRepeater,
      type: "text",
    },
    {
      name: "price",
      label: "التكلفة",
      component: BaseInputRepeater,
      type: "text",
    },
    {
      name: "debit",
      label: "تاريخ الصلاحية",
      component: BaseInputRepeater,
      type: "number",
    },
    {
      name: "credit",
      label: "المجموع",
      component: BaseInputRepeater,
      type: "number",
    },
  ]

  const { values } = useFormikContext<any>()
  return (
    <div>
      <FieldArray name={moduleName}>
        {({ push, remove }) => (
          <div className="relative">
            <div>
              <button
                type="button"
                onClick={() => push({ code: "", itemId: "", barcode: "", description: "", quantity: "", uomId: "", price: "", total: "" })}
                className="px-4 py-2 mt-4 mb-2 text-white bg-blue-500 rounded"
              >
                إضافة سطر جديد
              </button>
            </div>
            <div className="relative">
              <TableDynamic
                //@ts-ignore
                headers={headers} items={values[moduleName]} moduleName={moduleName} 
                remove={remove}
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
  )
}
