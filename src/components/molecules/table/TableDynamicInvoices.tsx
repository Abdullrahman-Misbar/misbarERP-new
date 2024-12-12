import { useFormikContext } from "formik";
import React, { useEffect } from "react";

export interface HeaderType {
  name: string;
  label: string;
  type?: "text" | "number";
  component: React.ComponentType<any>;
  size?: number;
  placeholder?: string;
  onChange?: (
    e: React.ChangeEvent<any>,
    setFieldValue: Function,
    values: any,
    moduleName: string,
    index: number
  ) => void;
  value?: any; // Default value if necessary
  width?: string;
}

interface TableDynamicInvoicesProps {
  headers: HeaderType[];
  actions?: (originalIndex: number, remove: () => void) => React.ReactNode;
  moduleName: string;
  remove: () => void;
  handleTabPress: (
    e: React.KeyboardEvent,
    index: number,
    push: Function
  ) => void;
  push: () => void;
  children: any;
}

const TableDynamicInvoices: React.FC<TableDynamicInvoicesProps> = ({
  headers,
  moduleName,

  children,
}) => {
  const { values, setFieldValue } = useFormikContext<any>();
  useEffect(() => {
    const updatedValues = values[moduleName]?.filter(
      (item: any) => !(item?.isDeleted && item.id === 0)
    );

    if (updatedValues?.length !== values[moduleName]?.length) {
      setFieldValue(moduleName, updatedValues);
    }
  }, [values[moduleName], setFieldValue, moduleName]);

  const filteredItems = values[moduleName]?.reduce(
    (acc: any[], item: any, index: number) => {
      if (item?.isDeleted && item.id === 0) {
        return acc;
      }

      if (item?.isDeleted && item.id !== 0) {
        return acc;
      }

      acc.push({
        ...item,
        originalIndex: index,
        tempKey: item?.id === 0 ? `temp-${index}` : item?.id,
      });
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
                key={header?.name}
                className={`p-3 border-b-2 border-gray-300 text-center text-[16px]`}
                style={{
                  width: header?.width,
                }}
              >
                {header?.label}
              </th>
            ))}
            <th className="p-3 border-b-2 border-gray-300 text-center text-[16px]">
              العمليات
            </th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default TableDynamicInvoices;
