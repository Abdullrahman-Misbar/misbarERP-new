import { useContext, useState } from "react"
import TableContext from "./context"
import { CellProps, Column } from "./types"

const Cell: React.FC<CellProps> = ({ rowIndex, columnName }) => {
  const [editValue, setEditValue] = useState("")
  const [error, setError] = useState("")
  const {
    columns,
    getCellValue,
    handleCellBlur,
    handleCellChange,
    editingCell,
    handleCellClick,
    classNames,
  } = useContext(TableContext)

  const isEditing =
    editingCell?.rowIndex === rowIndex && editingCell?.columnName === columnName
  const value = getCellValue(rowIndex, columnName)

  const handleClick = () => {
    handleCellClick(rowIndex, columnName)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // validate
    if (columns.find((col: Column) => col.name === columnName)?.validate) {
      columns
        .find((col: Column) => col.name === columnName)
        ?.validate?.validate(e.target.value)
        .then((res: any) => {
          if (res) {
            setError("")
            setEditValue(e.target.value)
          }
        })
        .catch((err: any) => {
          setError(err.message)
          setEditValue(value)
        })
    } else {
      setEditValue(e.target.value)
    }
  }

  const handleBlur = () => {
    handleCellBlur()
  }

  const col = columns.find((col: Column) => col.name === columnName)

  const CellComponent = col?.Cell || (() => <span>{value}</span>)
  const EditComponent = col?.editComponent

  return (
    <td onClick={handleClick} className={classNames.cell}>
      {isEditing && EditComponent ? (
        <>
          <EditComponent
            onChange={handleChange}
            onBlur={handleBlur}
            autoFocus
            // on enter press
            onKeyPress={(e: React.KeyboardEvent) => {
              if (e.key === "Enter") {
                handleCellChange(rowIndex, columnName, editValue)
                handleCellBlur()
              }
              if (e.key === "Escape") {
                handleCellBlur()
              }
            }}
          />
          {error && <div className="text-red-500 text-xs">{error}</div>}
        </>
      ) : (
        <CellComponent
          value={value}
          rowIndex={rowIndex}
          columnName={columnName}
        />
      )}
    </td>
  )
}

export default Cell
