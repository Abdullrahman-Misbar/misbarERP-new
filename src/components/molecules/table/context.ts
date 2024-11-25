import { createContext } from "react"
import { TableContextType } from "./types"

const TableContext = createContext<
  TableContextType<{
    [key: string]: any
  }>
>({
  columns: [],
  rows: [],
  getCellValue: () => null,
  handleCellChange: () => {},
  handleCellBlur: () => {},
  editingCell: null,
  handleCellClick: () => {},
  selected: undefined,
  setSelected: () => {},
  selection: "none",
  classNames: {},
  addRow: () => {},
  PKey: "id",
})

export default TableContext
