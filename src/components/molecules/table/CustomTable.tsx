import React from "react";

type CustomTable_TP = {
  isLoading: boolean;
  isSuccess: boolean;
  columns: {
    accessorKey: string;
    header: string;
    cell: (info: { row: { original: any } }) => React.ReactNode;
  }[];
  data: any[];
};

function CustomTable({ isLoading, isSuccess, columns, data }: CustomTable_TP) {
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isSuccess && (
        <div className="relative w-full overflow-auto max-h-[420px]">
          <table className="w-full">
            <thead className="bg-[#f7f7f7] p-2 font-[600] h-[35px] sticky top-0 z-[99]">
              <tr>
                {columns.map((column) => (
                  <th key={column.accessorKey}>{column.header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data?.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="text-center h-[20px] hover:bg-[#ebf4fd] table_custom rounded-md cursor-pointer"
                >
                  {columns.map((column) => (
                    <td key={column.accessorKey} className="p-1 px-2">
                      {column.cell({ row: { original: row } })}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {!isLoading && !isSuccess && <p>No data available.</p>}
    </div>
  );
}

export default CustomTable;
