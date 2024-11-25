import React from "react"
// import yup
import * as yup from "yup"

type RowsTP<T> = Array<T & { [key: string]: any }>

type SelectionTP = "single" | "multiple" | "none"

interface TableContextType<T> {
  columns: Column[]
  rows: RowsTP<T> | T | T[]
  getCellValue: (rowIndex: number, columnName: string) => any
  handleCellChange: (rowIndex: number, columnName: string, value: any) => void
  handleCellBlur: () => void
  editingCell: { rowIndex: number; columnName: string } | null
  handleCellClick: (rowIndex: number, columnName: string) => void
  selected: T | undefined
  setSelected: React.Dispatch<React.SetStateAction<T | undefined>> | undefined
  selection: SelectionTP
  classNames: {
    table?: string
    header?: string
    body?: string
    row?: string
    cell?: string
  }
  addRow: (row: T) => void
  onAddRow?: (row: T) => void
  PKey?: string
  expandable?: boolean
  getExpandedData?: (row: any) => any
  collapseLabel?: string
  expandLabel?: string
}

interface Column {
  name: string
  label: string
  compute?: {
    formula: (values: Record<string, any>) => any
    dependencies: string[]
  }
  editComponent?: React.ComponentType<{
    value?: any
    onChange: (value: any) => void
    onBlur: () => void
    autoFocus?: boolean
    onKeyPress?: (event: React.KeyboardEvent) => void
  }>
  Cell?: React.ComponentType<{
    value: any
    rowIndex: number
    columnName: string
  }>
  validate?: yup.Schema<any>
  type?: string
}

interface ComputedColumn extends Column {
  formula: (values: Record<string, any>) => any
  dependencies: string[]
}

type ColumnTP = Column | ComputedColumn

interface ComputedValues {
  [rowIndex: number]: Record<string, any>
}

interface TableProps<T> {
  columns: Column[]
  data: T[]
  setData?: React.Dispatch<React.SetStateAction<T[] | undefined>>
  selection?: SelectionTP
  selected?: T | T[] | undefined
  setSelected?: React.Dispatch<React.SetStateAction<T | T[] | undefined>> | undefined
  classNames?: {
    table?: string
    header?: string
    body?: string
    row?: string
    cell?: string
  }
  creatable?: boolean
  onAddRow?: (row: T) => void
  PKey?: string
  expandable?: boolean
  getExpandedData?: (row: any) => any
  collapseLabel?: string
  expandLabel?: string
}

interface CellProps {
  rowIndex: number
  columnName: string
}

interface RowProps<T> {
  rowIndex: number
  selection?: SelectionTP
  selected?: T | undefined
  setSelected: React.Dispatch<React.SetStateAction<T | undefined>> | undefined
  actions: ColumnTP
}

export type {
  CellProps,
  Column,
  ColumnTP,
  ComputedColumn,
  ComputedValues,
  RowProps,
  RowsTP,
  // SelectedTP,
  SelectionTP,
  TableContextType,
  TableProps,
}

