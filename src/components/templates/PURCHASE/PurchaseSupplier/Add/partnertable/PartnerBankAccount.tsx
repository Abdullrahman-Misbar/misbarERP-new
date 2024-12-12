import { FieldArray, useFormikContext } from "formik";
import DeleteIcon from "../../../../../atoms/icons/DeleteIcon";
import BaseInputRepeater from "../../../../../atoms/formik/BaseInputRepeater";

import TableDynamic from "../../../../../molecules/table/TableDynamic";
import { FormValues, Header, ContactsTableProps } from "../Types&Validation";

export default function BankAccountsTable({ moduleName }: ContactsTableProps) {
  const { setFieldValue, values } = useFormikContext<FormValues>();

  const headers: Header[] = [
    {
      name: "bankName",
      label: "اسم البنك",
      component: BaseInputRepeater,
      type: "text",
    },
    {
      name: "accountNumber",
      label: "رقم الحساب",
      component: BaseInputRepeater,
      type: "text",
    },
    
    {
      name: "note",
      label: "الملاحظات",
      component: BaseInputRepeater,
      type: "text",
    },
    
  ];

  const handleTabPress = (e: React.KeyboardEvent, index: number, push: Function) => {
    if (e.key === "Tab") {
      const lastIndex = values[moduleName]?.length - 1;
      const currentRow = values[moduleName]?.[index];

      if (index === lastIndex && currentRow?.note !== undefined) {
        push({
          bankName: "",
          accountNumber: "",
          partnerId: 0,
          note: "",
          isDeleted: false,
          id: 0,
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
                    bankName: "",
                    accountNumber: "",
                    partnerId: 0,
                    note: "",
                    isDeleted: false,
                    id: 0,
                  })
                }
                className="px-4 py-2 mt-4 mb-2 text-white bg-blue-500 rounded"
              >
                أضافة سطر جديد
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
                        setFieldValue(`${moduleName}[${index}].isDeleted`, true);
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
