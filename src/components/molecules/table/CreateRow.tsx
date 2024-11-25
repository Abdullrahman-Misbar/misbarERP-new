import { useContext, useEffect, useState } from "react"
import * as yup from "yup"
import { BaseInput, Button } from "../../atoms"
import TableContext from "./context"
import { Column } from "./types"
import { t } from "i18next"

const CreateRow: React.FC = () => {
  const { columns, handleCellBlur, addRow, onAddRow } = useContext(TableContext)
  const [row, setRow] = useState<{
    [key: string]: any
  }>({})
  const [errors, setErrors] = useState<any>([])
  const schema = yup.object().shape(
    columns.reduce(
      (
        acc: {
          [key: string]: yup.Schema<any>
        },
        col: Column
      ) => {
        if (col.validate) {
          acc[col.name] = col.validate
        }
        return acc
      },
      {}
    )
  )
  useEffect(() => {
    if (Object.keys(row).length === 0) {
      return
    }
    schema
      .validate(row, { abortEarly: false })
      .then(() => {
        setErrors([])
      })
      .catch((err) => {
        setErrors(
          err.inner.map((e: yup.ValidationError) => {
            return {
              [e.path as string]: e.message,
            }
          })
        )
      })
  }, [row])

  return (
    <tr>
      {columns.map((col: Column, index: number) => {
        if (col.name === "actions") return <td key={crypto.randomUUID()}></td>
        if (col.name === "id") return <td key={crypto.randomUUID()}></td>
        if (col.compute) return <td key={crypto.randomUUID()}></td>
        
        // if(col.type === 'select') return <td>{col.editComponent}</td> 
        return (
          <td key={index}>
            <BaseInput
              autoFocus
              placeholder={col.label}
              value={row[col.name] || row[col.name] === 0 ? row[col.name] : ""}
              onChange={(e) => {
                setRow((row) => ({ ...row, [col.name]: e.target.value }))
              }}
              onBlur={handleCellBlur}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleCellBlur()
                }
                if (e.key === "Escape") {
                  handleCellBlur()
                }
              }}
            />
            {errors.map((e: any) => {
              if (e[col.name]) {
                return (
                  <div
                    className="text-red-500 text-xs"
                    key={crypto.randomUUID()}
                  >
                    {e[col.name]}
                  </div>
                )
              }
            })}
          </td>
        )
      })}
      <td key={crypto.randomUUID()}>
        <div className="flex justify-center gap-2">
          <Button
            action={() => {
              schema
                .validate(row, { abortEarly: false })

                .then((_) => {
                  onAddRow && onAddRow(_)
                  addRow(_)
                  setRow({})
                  handleCellBlur()
                })
                .catch((err) => {
                  setErrors(
                    err.inner.map((e: yup.ValidationError) => {
                      return {
                        [e.path as string]: e.message,
                      }
                    })
                  )
                })
            }}
          >
            Save
          </Button>
          <Button
            action={() => {
              handleCellBlur()
              setRow({})
              setErrors([])
            }}
            variant="danger"
          >
            {t("Cancel")}
          </Button>
        </div>
      </td>
    </tr>
  )
}

export default CreateRow
