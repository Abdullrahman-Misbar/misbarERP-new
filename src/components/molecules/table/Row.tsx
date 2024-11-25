// @ts-nocheck
import { useContext, useState } from "react"
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai"
import { Checkbox, Radio, Tooltip } from ".."
import Cell from "./Cell"
import TableContext from "./context"
import { Column, RowProps } from "./types"
const Row = <
  T extends {
    [key: string]: any
  }
>({
  rowIndex,
  selection,
  selected,
  setSelected,
  actions
}: RowProps<T>) => {
  const [expanded, setExpanded] = useState(false)
  const {
    classNames,
    columns,
    rows,
    PKey: key = "id",
    expandable,
    getExpandedData,
    collapseLabel,
    expandLabel
  } = useContext(TableContext)
  const row = (rows as [])[rowIndex]
  if (selection === "multiple" && !Array.isArray(selected)) {
    setSelected && setSelected([])
  }
  const checked =
    selection === "multiple"
      ? !!(
        selected as unknown as {
          [key: string]: any
        }[]
      )?.find((i: { [key: string]: any }) => i[key] === row[key])
      : ((selected as unknown as {
        [key: string]: any
      }) || {})[key] === row[key]
  return (
    <tr key={rowIndex} className={classNames.row}>
      {selection === "multiple" && (
        <td className={classNames.cell}>
          <Checkbox
            checked={checked}
            onChange={() => {
              if (checked) {
                setSelected &&
                  setSelected(
                    selected?.filter(
                      (i: { [key: string]: any }) => i[key] !== row[key]
                    )
                  )
              } else {
                setSelected &&
                  // @ts-ignore
                  setSelected([...((selected as T[]) || []), row] as T[])
              }
            }}
          />
        </td>
      )}
      {selection === "single" && (
        <td className={classNames.cell}>
          <Radio
            checked={checked}
            onChange={() => {
              setSelected && setSelected(row as T)
            }}
          />
        </td>
      )}
      {columns
        .filter((column: Column) => column.name !== "actions")
        .map((column: Column) => {
          return (
            <Cell
              key={column.name}
              rowIndex={rowIndex}
              columnName={column.name}
            />
          )
        })}

      {
        (actions || expandable) && (
          <td className={
            actions ? classNames.cell : classNames.cell + ""
          } >
            {
              <div className="flex items-center justify-center flex-wrap">
                {/* 
                  Expand action
                */}


                {actions && actions.actions.map((action, index) => {

                  return (
                    <div className="grow">
                      <Tooltip
                        key={index}
                        position="left"
                        content={
                          <span className="text-sm bg-slate-200 p-2 rounded-md border-2 border-gray-400">
                            {action.label}
                          </span>
                        }
                      >
                        <span className="bg-gray-200 rounded-full p-2 cursor-pointer">
                          {action.icon}
                        </span>
                      </Tooltip>
                    </div>
                  )
                })}

                {
                  expandable && (

                    <Tooltip
                      key={`expand-${rowIndex}`}
                      position="left"
                      content={
                        <span className="text-sm bg-slate-200 p-2 rounded-md border-2 border-gray-400 ">
                          {expanded ? collapseLabel : expandLabel}
                        </span>
                      }
                    >
                      <span className="cursor-pointer rounded-md p-2 bg-gray-200"
                        onClick={() => setExpanded(!expanded)}
                      >
                        {
                          expanded ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />
                        }
                      </span>
                    </Tooltip>
                  )
                }
              </div>
            }
          </td>
        )
      }
    </tr>
  )
}

export default Row
