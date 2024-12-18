import React, { useEffect, useRef, useState } from "react";
import { useFormikContext } from "formik";

const TableDynamic: React.FC<any> = ({
  headers,
  actions,
  moduleName,
  remove,
}) => {
  const { values, setFieldValue } = useFormikContext<any>();
  const [activeRow, setActiveRow] = useState<number>(0);
  const [activeColumn, setActiveColumn] = useState<number>(0);
  const tableRefs = useRef<Array<Array<HTMLInputElement | null>>>([]);

  const filteredItems =
    values[moduleName]?.map((item: any, index: number) => ({
      ...item,
      originalIndex: index,
    })) || [];

  useEffect(() => {
    tableRefs.current = filteredItems.map(() =>
      new Array(headers.length).fill(null)
    );
  }, [filteredItems, headers.length]);

  const focusCell = (rowIndex: number, colIndex: number) => {
    setTimeout(() => {
      const cell = tableRefs.current[rowIndex]?.[colIndex];
      if (cell) {
        cell.focus();    // تركيز الإدخال
        if (cell.select) cell.select(); // تحديد النص داخل الإدخال (اختياري)
      }
    }, 0);
  };
  

  const handleKeyDown = (e: React.KeyboardEvent) => {
    let nextRow = activeRow;
    let nextColumn = activeColumn;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      nextRow = Math.min(activeRow + 1, filteredItems.length - 1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      nextRow = Math.max(activeRow - 1, 0);
    } else if (e.key === "ArrowRight" || e.key === "Tab") {
      e.preventDefault();
      nextColumn = (activeColumn + 1) % headers.length;
      if (nextColumn === 0) {
        nextRow = Math.min(activeRow + 1, filteredItems.length - 1);
      }
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      nextColumn = (activeColumn - 1 + headers.length) % headers.length;
    } else if (e.key === " ") {
      // عند الضغط على مسطرة
      e.preventDefault();
      focusCell(activeRow, activeColumn);
    }

    setActiveRow(nextRow);
    setActiveColumn(nextColumn);
    focusCell(nextRow, nextColumn);
  };

  const handleCellClick = (rowIndex: number, colIndex: number) => {
    setActiveRow(rowIndex);
    setActiveColumn(colIndex);
    focusCell(rowIndex, colIndex);
  };

  return (
    <div className="overflow-x-scroll">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {headers.map((header: any) => (
              <th key={header.name} className="p-2 border">
                {header.label}
              </th>
            ))}
            <th className="p-2 border">العمليات</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems?.map((item: any, rowIndex: number) => (
            <tr key={rowIndex}>
              {headers.map((header: any, colIndex: number) => (
                <td
                  key={colIndex}
                  className={`p-2 border min-w-[200px] ${
                    activeRow === rowIndex && activeColumn === colIndex
                      ? "bg-blue-100"
                      : ""
                  }`}
                  onClick={() => handleCellClick(rowIndex, colIndex)}
                  tabIndex={0}
                  onKeyDown={handleKeyDown}
                >
                  <header.component
                    ref={(el: HTMLInputElement | null) => {
                      if (!tableRefs.current[rowIndex]) {
                        tableRefs.current[rowIndex] = [];
                      }
                      tableRefs.current[rowIndex][colIndex] = el;
                    }}
                    name={`${moduleName}[${item.originalIndex}].${header.name}`}
                    value={
                      values[moduleName]?.[item.originalIndex]?.[header.name] ||
                      header?.value
                    }
                    placeholder={header?.placeholder}
                    type={header?.type}
                    autoFocus={activeRow == rowIndex && activeColumn == colIndex}
                    moduleName={moduleName}
                    index={rowIndex}
                    disabled={header?.disabled}
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
                          }
                    }
                  />
                </td>
              ))}
              <td className="p-2 border text-center">
                {actions && actions(rowIndex, remove)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableDynamic;
