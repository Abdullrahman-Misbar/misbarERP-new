import { useFormikContext } from 'formik'
import React from 'react'

export interface HeaderType {
  name: string
  label: string
  type?: 'text' | 'number'
  component: React.ComponentType<any>
  size?: number
}

export type ItemType = {
  [key: string]: any
}

interface TableDynamicProps {
  headers: HeaderType[]
  items: ItemType[]
  actions?: (index: number) => React.ReactNode
  moduleName: string
  remove: () => void
}

const TableDynamic: React.FC<TableDynamicProps> = ({ headers, actions, moduleName, remove }) => {
  const { values, setFieldValue } = useFormikContext<any>()


  return (
    <div className="overflow-x-scroll">
      <table className="w-full text-right border-collapse">
        <thead>
          <tr className="bg-gray-100">
            {headers?.map((header) => (
              <th
                key={header.name}
                className="p-3 border-b-2 border-gray-300 text-center text-[16px]"
              >
                {header.label}
              </th>
            ))}
            <th className="p-3 border-b-2 border-gray-300 text-center text-[16px]">
              العمليات
            </th>
          </tr>
        </thead>
        <tbody>
          {values[moduleName]?.map((_: any, index: number) => (
            <tr key={index}>
              {headers.map((header) => (
                <td
                  key={header.name}
                  className="p-3 border-b border-gray-200 min-w-[200px]"
                >

                  {/* {header.component} */}
                  <header.component
                    name={`${moduleName}[${index}].${header.name}`}
                    value={values[moduleName][header.name]}
                    onChange={(e: { target: { value: any } }) => setFieldValue(`${moduleName}[${index}].${header.name}`, e?.target?.value)}

                  />
                </td>
              ))}
             <td className="p-3 text-center border-b border-gray-200">
                {actions && actions(index, remove)}
              </td>
              
            </tr>

          ))}
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
        </tbody>
      </table>
    </div>
  )
}

export default TableDynamic
