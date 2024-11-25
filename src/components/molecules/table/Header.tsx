import { useContext } from "react"
import TableContext from "./context"
import { Column } from "./types"
const TableHeader: React.FC = () => {
  const {
    columns,
    selection,
    selected,
    setSelected,
    rows: data,
    classNames,
    expandable
  } = useContext(TableContext)
  return (
    <thead className={classNames.header}>
      <tr className="[&>tr:first:!rounded-tr-lg last:!rounded-tl-lg]">
        {selection && selection !== "none" && selection !== "multiple" && (
          <th key={crypto.randomUUID()} className="p-3"></th>
        )}
        {selection !== "none" && selection === "multiple" && (
          <th key={crypto.randomUUID()} className="p-3">
            {/* <Checkbox
              checked={selected?.length === data.length && data.length > 0}
              onChange={() => {
                if (selected?.length === data.length) {
                  setSelected && setSelected([])
                } else {
                  setSelected && setSelected(data)
                }
              }}
            /> */}
          </th>
        )}
        {columns
          .filter((col: Column) => col.name !== "actions")
          .map((col: Column, index: number) => (
            <th key={index} className="p-3">
              {col.label}
            </th>
          ))}
        {columns.find((col: Column) => col.name === "actions") && (
          <th key={crypto.randomUUID()} className="p-3">
            <p>{columns.find((col: Column) => col.name === "actions")?.label}</p>
          </th>
        )}
        {
          expandable && !columns.find((col: Column) => col.name === "actions") && (
            <th
              key={crypto.randomUUID()} className="p-3 w-[2rem]"></th>
          )
        }
      </tr>
    </thead>
  )
}

export default TableHeader