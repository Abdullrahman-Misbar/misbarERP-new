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
}

export type ItemType = {
  [key: string]: any;
};

interface TableDynamicProps {
  headers: HeaderType[];
  items: ItemType[];
  actions?: (index: number) => React.ReactNode;
  moduleName: string;
  remove: () => void;
}

const   TableDynamic: React.FC<TableDynamicProps> = ({
  headers,
  actions,
  moduleName,
  remove,
}) => {
  const { values, setFieldValue } = useFormikContext<any>();

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
                    type={header?.type}
                    placeholder={header?.placeholder}
                    onChange={
                      header?.onChange
                        ? header?.onChange
                        : (e: { target: { value: any } }) =>
                            setFieldValue(
                              `${moduleName}[${index}].${header.name}`,
                              e?.value
                            )
                    }
                  />
                </td>
              ))}
              <td className="p-3 text-center border-b border-gray-200">
                {actions && actions(index, remove)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableDynamic;
