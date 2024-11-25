/////////// IMPORTS
///
//import classes from './TableHeader.module.css'
///
/////////// Types
///

import { BiSearch } from "react-icons/bi"

/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const TableHeader = ({
  title='hhh',
  showSearch=true,
  globalFilter,
  setGlobalFilter,
  showFilter=true,
  pageSize,
  setPageSize,
}) => {
  /////////// VARIABLES
  ///

  ///
  /////////// CUSTOM HOOKS
  ///

  ///
  /////////// STATES
  ///

  ///
  /////////// SIDE EFFECTS
  ///

  /////////// FUNCTIONS | EVENTS | IF CASES
  ///

  ///
  return (
    <div>
      {title && <h2 className=" text-2xl font-bold ">{title}</h2>}
      <div className=" relative mt-6 rounded-lg bg-white p-2">
        <div className="flex w-full items-center justify-between p-2">
          {showSearch && (
            <div className=" flex w-1/4 items-center gap-2 rounded-md border border-zinc-400  p-2">
              <BiSearch />
              <input
                className=" bg-transparent"
                value={globalFilter}
                onChange={(e) => setGlobalFilter(e.target.value)}
                type="text"
                placeholder="بحث"
              />
            </div>
          )}

          <div className="flex gap-3">
            {showFilter && (
              <div className="flex items-center gap-3">
                <select
                  title="rows count"
                  className="w-full rounded-md border border-zinc-400 bg-transparent p-1 outline-none"
                  value={pageSize}
                  onChange={(e) => {
                    setPageSize(Number(e.target.value))
                  }}
                >
                  {[10, 20, 30, 40, 50].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                      اظهار عدد {pageSize}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {/* {actionBtn && actionBtn} */}
          </div>
        </div>
      </div>
    </div>
  )
}
