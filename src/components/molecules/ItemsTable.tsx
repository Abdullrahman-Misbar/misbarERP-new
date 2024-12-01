import React, { useState } from "react"
import TableDynamic from "./table/TabelDynamic"
import BaseInputField from "../atoms/formik/BaseInputField"
import { FieldArray, useFormikContext } from "formik"
import AddIcon from "../../assets/icon/AddIcon"
import SelectItem from "./Selects/SelectItem"

export default function ItemsTable() {
  const headers = [
    {
      name: "serial",
      label: "رمز الصنف",
      component: (
        <div>
          <BaseInputField name="codeItem" type="text" label="رمز الصنف" />
        </div>
      ),
      type: "text",
    },
    {
      name: "serial",
      label: "اسم الصنف",
      component: (
        <div>
          <SelectItem name="itemName" label="الصنف" />
        </div>
      ),
      type: "text",
    },
    {
      name: "serial",
      label: "وحدة القياس",
      component: (
        <div>
          <BaseInputField name="" type="text" label="وحدة القياس" />
        </div>
      ),
      type: "text",
    },
    {
      name: "serial",
      label: "المخزن",
      component: (
        <div>
          <BaseInputField name="" type="text" label="المخزن" />
        </div>
      ),
      type: "text",
    },
    {
      name: "serial",
      label: "الكمية",
      component: (
        <div>
          <BaseInputField name="" type="text" label="الكمية" />
        </div>
      ),
      type: "text",
    },
    {
      name: "serial",
      label: "التكلفة",
      component: (
        <div>
          <BaseInputField name="" type="text" label="التكلفة" />
        </div>
      ),
      type: "text",
    },
    {
      name: "debit",
      label: "تاريخ الصلاحية",
      component: (
        <div>
          <BaseInputField name="" type="text" label="تاريخ الصلاحية" />
        </div>
      ),
      type: "number",
    },
    {
      name: "credit",
      label: "المجموع",
      component: (
        <div>
          <BaseInputField name="" type="text" label="المجموع" />
        </div>
      ),
      type: "number",
    },
  ]

  const { values } = useFormikContext()
  return (
    <div>
      <FieldArray name="items">
        {({ push, remove }) => (
          <div className="relative">
            {/* عرض الحقول في جدول Formik */}
            <div>
              <button
                type="button"
                onClick={() => push({ serial: "", debit: "", credit: "" })}
                className="px-4 py-2 mt-4 mb-2 text-white bg-blue-500 rounded"
              >
                إضافة سطر جديد
              </button>
            </div>
            <div className="relative">
              <TableDynamic headers={headers} items={values?.items} />

              <div className="">
                {values?.items?.map((item, index) => (
                  <div key={index} className="flex gap-2 mt-4">
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className="px-4 py-2 text-white bg-red-500 rounded"
                    >
                      حذف
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </FieldArray>

      {/* <button
        type="submit"
        className="px-4 py-2 mt-4 text-white bg-green-500 rounded"
      >
        حفظ التغييرات
      </button> */}
    </div>
  )
}
