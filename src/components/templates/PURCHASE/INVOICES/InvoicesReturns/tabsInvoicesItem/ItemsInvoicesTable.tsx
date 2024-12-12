import { FieldArray, useFormikContext } from "formik";
import React from "react";
import DeleteIcon from "../../../../../atoms/icons/DeleteIcon";
import TableDynamic from "../../../../../molecules/table/TableDynamic";
import { FormValues, ItemsTableProps } from "./Types&Validation";
import TableDynamicInvoices from "../../../../../molecules/table/TableDynamicInvoices";

export default function ItemsInvoicesTable({
  moduleName,
  headers,
  children,
}: ItemsTableProps & { children?: React.ReactNode }) {
  const { setFieldValue, values } = useFormikContext<FormValues>();
  console.log("🚀 ~ values:", values);
  // const headers = [
  //   {
  //     label: " الصنف",
  //   },
  //   {
  //     label: " الكمية",
  //   },
  //   {
  //     label: " الوحدة",
  //   },
  //   {
  //     label: " التكلفة",
  //   },
  //   {
  //     label: " الاجمالي",
  //   },
  //   {
  //     label: " الخصم%",
  //   },
  //   {
  //     label: " الخصم",
  //   },
  //   {
  //     label: "الإجمالي بعد الخصم",
  //   },
  //   {
  //     label: "الاضافة%",
  //   },
  //   {
  //     label: "الاضافة",
  //   },
  //   {
  //     label: "الإجمالي بعد الاضافة",
  //   },
  //   {
  //     label: "معدل الضريبة",
  //   },
  //   {
  //     label: " ضريبة القيمة المضافة",
  //   },
  //   {
  //     label: "الإجمالي بعد الضريبة",
  //   },
  //   {
  //     label: "الكميات المجانية",
  //   },
  //   {
  //     label: "ملاحظات",
  //   },
  // ];

  const handleTabPress = (
    e: React.KeyboardEvent,
    index: number,
    push: Function
  ) => {
    if (e.key === "Tab") {
      const lastIndex = values[moduleName]?.length - 1;
      const currentRow = values[moduleName]?.[index];

      if (index === lastIndex && currentRow?.note !== undefined) {
        push(generateDefaultRow());
      }
    }
  };
  const generateDefaultRow = () => {
    const defaultRow: { [key: string]: any } = {};
    headers?.forEach((header) => {
      if (header.type == "number") {
        defaultRow[header.name] = 0;
      } else {
        defaultRow[header.name] = "";
      }
    });
    return {
      ...defaultRow,
      isDeleted: false,
      id: 0,
      tempId: `${Date.now()}-${Math.random()}`,
      // ...newItem,
    };
  };

  return (
    <div>
      <FieldArray name={moduleName}>
        {({ push, remove }) => (
          <div className="relative">
            <div>
              <button
                type="button"
                onClick={() => push(generateDefaultRow())}
                className="px-4 py-2 mt-4 mb-2 text-white bg-blue-500 rounded"
              >
                إضافة سطر جديد
              </button>
            </div>
            <div className="relative">
             
              <TableDynamicInvoices
                moduleName={moduleName}
                actions={(index) => (
                  <button
                    type="button"
                    onClick={() => {
                      setFieldValue(`${moduleName}[${index}].isDeleted`, true);
                    }}
                  >
                    <DeleteIcon fillCustom="red"  action={()=>{}}/>
                  </button>
                )}
                handleTabPress={handleTabPress}
                headers={headers}
              >
                {/* <DetailsInvoiceItem moduleName={moduleName} /> */}
                {children}
              </TableDynamicInvoices>
            </div>
          </div>
        )}
      </FieldArray>
    </div>
  );
}
