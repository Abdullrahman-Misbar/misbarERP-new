import { useFormikContext } from "formik";
import React from "react";

export interface HeaderType {
  name: string;
  label: string;
  type?: "text" | "number";
  component: React.ComponentType<any>;
  size?: number;
  placeholder?: string;
  onChange?: () => void;
  value: number;
}

interface TableDynamicProps {
  headers: HeaderType[];
  actions?: (originalIndex: number, remove: () => void) => React.ReactNode;
  moduleName: string;
  remove: () => void;
  handleTabPress:()=>void
  push:()=>void
}

const TableDynamic: React.FC<TableDynamicProps> = ({
  headers,
  actions,
  moduleName,
  remove,
  handleTabPress, 
  push
}) => {
  const { values, setFieldValue } = useFormikContext<any>();

  const filteredItems = values[moduleName]?.reduce(
    (acc: any[], item: any, index: number) => {
      if (!item.isDeleted) acc.push({ ...item, originalIndex: index }); 
      return acc;
    },
    []
  );
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
          {filteredItems?.map((item: any, index: number) => (
            <tr key={index}>
              {headers.map((header) => (
                <td
                  key={header.name}
                  className="p-3 border-b border-gray-200 min-w-[200px]"
                >
                  <header.component
                    name={`${moduleName}[${item.originalIndex}].${header.name}`}
                    value={
                      values[moduleName][item.originalIndex][header.name] ||
                      header?.value
                    }
                    type={header?.type}
                    index={item.originalIndex}
                    placeholder={header?.placeholder}
                    moduleName={moduleName}
                    //@ts-ignore
                    index={item.originalIndex} 
                    onChange={header?.onChange ? header?.onChange : (e: { target: { value: any } }) => setFieldValue(
                      `${moduleName}[${item.originalIndex}].${header.name}`,
                      e.target.value
                    )}
                    // onKeyDown={(e: React.KeyboardEvent) => {
                    //   handleTabPress(e, item.originalIndex, push);
                    // }}
                  />
                </td>
              ))}
              <td className="p-3 text-center">
              {actions && actions(item.originalIndex, remove)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default TableDynamic;
