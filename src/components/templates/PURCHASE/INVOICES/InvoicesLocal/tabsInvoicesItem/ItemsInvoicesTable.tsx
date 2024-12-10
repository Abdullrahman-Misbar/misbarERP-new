import { FieldArray, useFormikContext } from "formik";
import DeleteIcon from "../../../../../atoms/icons/DeleteIcon";
import TableDynamic from "../../../../../molecules/table/TableDynamic";
import { FormValues, ItemsTableProps } from "./Types&Validation";

export default function ItemsInvoicesTable({ moduleName , headers }: ItemsTableProps) {
  const { setFieldValue, values } = useFormikContext<FormValues>();
  console.log("🚀 ~ ItemsInvoicesTable ~ values:", values)

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
    headers.forEach((header) => {
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
