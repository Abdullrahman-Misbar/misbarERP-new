import { FieldArray, useFormikContext } from "formik";
import DeleteIcon from "../../../../../atoms/icons/DeleteIcon";
import BaseInputRepeater from "../../../../../atoms/formik/BaseInputRepeater";

import TableDynamic from "../../../../../molecules/table/TableDynamic";
import { FormValues, Header, ContactsTableProps } from "../Types&Validation";

 function PartnerAddress({ moduleName }: ContactsTableProps) {
  const { setFieldValue, values } = useFormikContext<FormValues>();

  const headers: Header[] = [
    {
      name: "contactName",
      label: "اسم جهة الاتصال",
      component: BaseInputRepeater,
      type: "text",
    },
    {
      name: "addressType",
      label: "نوع العنوان",
      component: BaseInputRepeater,
      type: "text",
    },
    {
      name: "country",
      label: "الدولة",
      component: BaseInputRepeater,
      type: "text",
    },
    {
      name: "city",
      label: "المدينة",
      component: BaseInputRepeater,
      type: "text",
    },
    {
      name: "area",
      label: "المنطقة",
      component: BaseInputRepeater,
      type: "text",
    },
    {
      name: "street",
      label: "الشارع",
      component: BaseInputRepeater,
      type: "text",
    },
    {
      name: "postCode",
      label: "الرمز البريدي",
      component: BaseInputRepeater,
      type: "text",
    },
    {
      name: "email",
      label: "البريد الإلكتروني",
      component: BaseInputRepeater,
      type: "email",
    },
    {
      name: "phone",
      label: "الهاتف",
      component: BaseInputRepeater,
      type: "tel",
    },
    {
      name: "mobile",
      label: "الجوال",
      component: BaseInputRepeater,
      type: "tel",
    },
   
    {
      name: "note",
      label: "الملاحظات",
      component: BaseInputRepeater,
      type: "text",
    },
    // {
    //   name: "isDeleted",
    //   label: "تم الحذف",
    //   component: BaseInputRepeater,
    //   type: "checkbox",
    //   onChange: (e) => {
    //     const rowIndex = values[moduleName]?.length - 1;
    //     const isDeleted = e.target.checked;
    //     setFieldValue(`${moduleName}[${rowIndex}].isDeleted`, isDeleted);
    //   },
    // },
  ];

  const handleTabPress = (e: React.KeyboardEvent, index: number, push: Function) => {
    if (e.key === "Tab") {
      const lastIndex = values[moduleName]?.length - 1;
      const currentRow = values[moduleName]?.[index];

      if (index === lastIndex && currentRow?.note !== undefined) {
        push({
          contactName: "",
          addressType: "",
          country: "",
          city: "",
          area: "",
          street: "",
          postCode: "",
          email: "",
          phone: "",
          mobile: "",
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
                    contactName: "",
                    addressType: "",
                    country: "",
                    city: "",
                    area: "",
                    street: "",
                    postCode: "",
                    email: "",
                    phone: "",
                    mobile: "",
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
export default PartnerAddress