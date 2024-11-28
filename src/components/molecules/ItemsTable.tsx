import React, { useState } from "react"
import TableDynamic from "./table/TabelDynamic"
import BaseInputField from "../atoms/formik/BaseInputField"
import { FieldArray, useFormikContext } from "formik"

export default function ItemsTable() {
  const headers = [
    {
      name: "serial",
      label: "Serial",
      component: BaseInputField,
      type: "text",
    },
    {
      name: "debit",
      label: "Debit",
      component: BaseInputField,
      type: "number",
    },
    {
      name: "credit",
      label: "Credit",
      component: BaseInputField,
      type: "number",
    },
  ]

  const { values } = useFormikContext()
  return (
    <div>
      <FieldArray name="items">
        {({ push, remove }) => (
          <div>
            {/* عرض الحقول في جدول Formik */}
            <TableDynamic
              headers={headers}
              items={values?.items} 
            />

            <button
              type="button"
              onClick={() => push({ serial: "", debit: "", credit: "" })}
              className="px-4 py-2 mt-4 text-white bg-blue-500 rounded"
            >
              إضافة صف جديد
            </button>

            <div>
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
        )}
      </FieldArray>

      <button
        type="submit"
        className="px-4 py-2 mt-4 text-white bg-green-500 rounded"
      >
        حفظ التغييرات
      </button>
    </div>
  )
}
