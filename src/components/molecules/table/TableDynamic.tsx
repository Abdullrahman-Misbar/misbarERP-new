import { useFormikContext } from "formik";
import React, { useEffect } from "react";
import NotFound from "../../../pages/404";
import DataNotFoundDrawer from "../DataNotFoundDrawer";

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

interface TableDynamicProps {
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
}

const TableDynamic: React.FC<TableDynamicProps> = ({
  headers,
  actions,
  moduleName,
  remove,
  handleTabPress,
  push,
}) => {
  const { values, setFieldValue } = useFormikContext<any>();
  useEffect(() => {
    const updatedValues = values[moduleName]?.filter(
      (item: any) => !(item.isDeleted && item.id === 0)
    );

    if (updatedValues?.length !== values[moduleName]?.length) {
      setFieldValue(moduleName, updatedValues);
    }
  }, [values[moduleName], setFieldValue, moduleName]);

  const filteredItems = values[moduleName]?.reduce(
    (acc: any[], item: any, index: number) => {
      if (item.isDeleted && item.id === 0) {
        return acc;
      }

      if (item.isDeleted && item.id !== 0) {
        return acc;
      }

      acc.push({
        ...item,
        originalIndex: index,
        tempKey: item.id === 0 ? `temp-${index}` : item.id,
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
                key={header.name}
                className={`p-3 border-b-2 border-gray-300 text-center text-[16px]`}
                style={{
                  width: header?.width,
                }}
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
          {filteredItems?.length ? (
            filteredItems?.map((item: any) => (
              <tr key={item.tempKey}>
                {headers.map((header) => (
                  <td
                    key={header.name}
                    className="p-3 border-b border-gray-200 min-w-[200px]"
                  >
                    <header.component
                      name={`${moduleName}[${item.originalIndex}].${header.name}`}
                      value={
                        values[moduleName]?.[item.originalIndex]?.[
                          header.name
                        ] || header?.value
                      }
                      type={header?.type}
                      placeholder={header?.placeholder}
                      moduleName={moduleName}
                      index={item.originalIndex}
                      onChange={
                        header?.onChange
                          ? (e: React.ChangeEvent<any>) =>
                              header.onChange(
                                e,
                                setFieldValue,
                                values,
                                moduleName,
                                item.originalIndex
                              )
                          : (e: { target: { value: any } }) => {
                              setFieldValue(
                                `${moduleName}[${item.originalIndex}].${header.name}`,
                                e.target.value
                              );

                              console.log(
                                "a7aaaaaaaaaaaaaa",
                                `${moduleName}[${item.originalIndex}].${header.name}`,
                                e.target.value
                              );
                            }
                      }
                    />
                  </td>
                ))}
                <td className="p-3 text-center">
                  {actions && actions(item.originalIndex, remove)}{" "}
                  {/* استخدم originalIndex */}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={headers?.length}>
                <div className="flex justify-center mt-10 h-[250px] overflow-hidden ">
                  <DataNotFoundDrawer text="لايوجد عناصر" />
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableDynamic;
