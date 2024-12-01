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
}

const TableDynamic: React.FC<TableDynamicProps> = ({ headers, items, actions }) => {
  return (
    <div className="overflow-x-scroll">
      <table className="w-full text-right border-collapse">
        <thead>
          <tr className="bg-gray-100">
            {headers.map((header) => (
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
          {items.map((item, index) => (
            <tr key={index}>
              {headers.map((header) => (
                <td
                  key={header.name}
                  className="p-3 border-b border-gray-200 min-w-[200px]"
                >
                  {/* <header.component
                  name={`items[${index}][${header.name}]`}
                  label={header?.label}
                  type={header.type || "text"}
                  className="w-full"
                /> */}
                  {header.component}
                </td>
              ))}
              <td className="p-3 text-center border-b border-gray-200">
                {actions && actions(index)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableDynamic
