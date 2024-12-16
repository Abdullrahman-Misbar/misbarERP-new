import { rankItem } from "@tanstack/match-sorter-utils";
import type { ColumnFiltersState } from "@tanstack/react-table";
import {
  FilterFn,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useEffect, useState } from "react";
import DataNotFoundDrawer from "../DataNotFoundDrawer";
import TableSkeleton from "../Skeleton/TableSkeleton";
import MenuShowItems from "./MenuShowItems";
import { ReactTableProps } from "./tableTypes";

export const Table = <T extends object>({
  data,
  columns,
  isSuccess,
  isLoading,

  isFetching,

  setSortingData,

  footerData,
}: ReactTableProps<T>) => {
  const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
    const itemRank = rankItem(row.getValue(columnId), value);
    addMeta({
      itemRank,
    });
    return itemRank.passed;
  };

  const [globalFilter, setGlobalFilter] = useState("");
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [currentPageData, setCurrentPageData] = useState<T[]>([]);
  const [sorting, setSorting] = React.useState<SortingState[]>([]);
  const [sortingState, setSortingState] = useState<Record<string, string>>({});
  const [columnVisibility, setColumnVisibility] = useState({});
  const [columnSizing, setColumnSizing] = useState({});

  const table = useReactTable(
    {
      data,
      columns,
      filterFns: {
        fuzzy: fuzzyFilter,
      },
      state: {
        columnVisibility,

        globalFilter,
        sorting,
        columnSizing,
      },
      initialState: {
        pagination: {
          pageSize: 100,
        },
      },
      onColumnSizingChange: setColumnSizing,
      columnResizeMode: "onChange",
      onSortingChange: setSorting,
      onColumnFiltersChange: setColumnFilters,
      onGlobalFilterChange: setGlobalFilter,
      onColumnVisibilityChange: setColumnVisibility,

      globalFilterFn: fuzzyFilter,
      getCoreRowModel: getCoreRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
    },
    // @ts-ignore
    (hooks: { onPageChange: (({ rows }: { rows: any }) => void)[] }) => {
      hooks.onPageChange.push(({ rows }) => {
        setCurrentPageData(rows.map((row: { original: any }) => row.original));
      });
    }
  );

  useEffect(() => {
    setCurrentPageData(table.getRowModel().rows.map((row) => row.original));
  }, [table.getRowModel().rows]);

  useEffect(() => {}, [currentPageData]);

  const handleSorting = (header: any) => {
    if (header.column?.columnDef?.filterKey) {
      header.column.toggleSorting();
      const newSortingState = header.column.getIsSorted() as string;
      setSortingState((prevState) => ({
        ...prevState,
        [header.id]: newSortingState || "none",
      }));
      setSortingData({
        state: newSortingState || "",
        name: header.column?.columnDef?.filterKey || "",
      });
    }
  };
  const generateFooters = (footerData: any[]) => {
    return footerData?.map((footerRow: { value: any[] }, rowIndex: any) => (
      <tr key={`footer-row-${rowIndex}`} className="border-t-4 border-white ">
        {columns.map((column: any, colIndex: any) => {
          const footerValue =
            footerRow.value.find(
              (cell: { index: any }) => cell.index === colIndex
            )?.value || null;
          return (
            <td
              key={`footer-cell-${rowIndex}-${colIndex}`}
              className="px-6 py-4  !mt-10 text-sm font-light text-gray-300 !bg-gray-100 "
            >
              {footerValue}
            </td>
          );
        })}
      </tr>
    ));
  };

  return (
    <>
      <div className="flex flex-col w-full gap-4 overflow-x-scroll GlobalTable ">
        {isLoading ? (
          <div className="flex items-center justify-center h-[78vh]">
            <TableSkeleton />
          </div>
        ) : (
          <div className="column-visibility-controls">
            <table id="print-table" className="min-w-full text-center">
              <thead className="border-b  relative">
                {table?.getHeaderGroups()?.map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) =>
                      header.column.columnDef.isGroup ? (
                        <th
                          key={header.id}
                          className="text-center bg-[#f5f5f5] rounded-none"
                          colSpan={header.column.columnDef.colSpan || 1}
                          style={{
                            width: header.getSize(),
                            textAlign: "center",
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </th>
                      ) : (
                        <th
                          key={header.id}
                          style={{
                            ...(header.column.columnDef.headerStyle || {}),
                            textAlign: "center",
                          }}
                          className="!p-4 text-sm  text-white dark:!bg-dark-tertiary capitalize "
                        >
                          {header.isPlaceholder ? null : (
                            <div
                              {...{
                                className: header.column.getCanSort()
                                  ? "cursor-pointer select-none font-bold !text-[14px] text-[#000000de]"
                                  : "",
                                onClick: () => handleSorting(header),
                              }}
                            >
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                              {header.column?.columnDef?.filterKey && (
                                <span className="table-sort-arrow">
                                  {{
                                    asc: " 🔼",
                                    desc: " 🔽",
                                  }[sortingState[header.id]] ?? null}
                                </span>
                              )}
                            </div>
                          )}
                        </th>
                      )
                    )}

                    <div className="absolute top-[5px] left-[-10px]">
                      <MenuShowItems
                        table={table}
                        setColumnVisibility={setColumnVisibility}
                      />
                    </div>
                  </tr>
                ))}
              </thead>

              {isSuccess && !!data.length && (
                <tbody className="">
                  {table?.getRowModel()?.rows?.map((row) => (
                    <tr key={row.id} className="border-b ">
                      {row?.getVisibleCells()?.map((cell) => (
                        <td
                          className="!p-4 text-sm  text-[#000000de]whitespace-nowrap  td-col-dark !text-[14px] font-normal  first:text-black !bg-white "
                          key={cell.id}
                          style={{
                            background: row.original.is_free_session
                              ? "#F4FFFA"
                              : "",
                          }}
                        >
                          {flexRender(
                            cell?.column?.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              )}
              <tfoot>{generateFooters(footerData)}</tfoot>
            </table>
          </div>
        )}
        {isSuccess &&
          !data?.length &&
          !footerData?.length &&
          !isLoading &&
          !isFetching && (
            <div className="pr-5 mb-5 flex justify-center">
              {/* <Header
                header={t("nothing")}
                className="text-2xl font-bold text-center dark:text-white"
              /> */}
              <DataNotFoundDrawer text="لايوجد بيانات" />
            </div>
          )}
      </div>
    </>
  );
};
