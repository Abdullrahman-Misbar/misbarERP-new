//@ts-nocheck
/////////// IMPORTS
import { useMemo } from "react"
import Select from "react-select"
import { SelectOption_TPs } from "../types"
//import classes from './Search.module.css'
///
/////////// Types
///
type ColProps_TP = {
  column: {
    filterValue: string
    setFilter: (e: any) => any
  }
}
/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const TableFilter = ({ column }: ColProps_TP) => {
  const { filterValue, setFilter, preFilteredRows, id } = column

  const options: SelectOption_TPs = useMemo(() => {
    const options = new Set()
    preFilteredRows.forEach((row) => {
      options.add(row.values[id])
    })
    const optionsArr = [...options.values()].map((option) => ({
      value: option,
      label: option,
    }))
    optionsArr.unshift({ value: "", label: "الكل" })
    return optionsArr
  }, [id, preFilteredRows])
  /////////// CUSTOM HOOKS
  ///

  ///
  /////////// STATES
  ///

  ///
  /////////// SIDE EFFECTS
  ///

  ///
  /////////// IF CASES
  ///

  ///
  /////////// FUNCTIONS & EVENTS
  ///

  ///
  return (
    <div className="flex items-center gap-3 ">
      <div>
        <Select
          options={options}
          placeholder="إختر..."
          defaultValue={{ value: "", label: "الكل" }}
          onChange={(option) => {
            setFilter(option?.value || undefined)
          }}
        />
        
      </div>
    </div>
  )
}
Footer
