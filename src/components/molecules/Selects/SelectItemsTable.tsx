/* eslint-disable import/named */
import React, { useState } from 'react'
import Select from '../formik/Select'
import { SelectChangeEvent } from '@mui/material'
import { useFormikContext } from 'formik'

type SelectItemsTable_TP = {
  name: string
}
type Formik_Values = {
  name: string
}
const SelectItemsTable = ({ name }: SelectItemsTable_TP) => {
  const { setFieldValue, values } = useFormikContext<Formik_Values>()

  const handleChange = (event: SelectChangeEvent<string | number>) => {
    setFieldValue(name, event.target.value)
  }

  const options = [
    { label: 'طلب شراء', value: 'purchase_order' },
    { label: 'امر شراء', value: 'purchase_request' },
    { label: 'عرض سعر', value: 'purchase_quotes' },
    { label: 'امر استلام', value: 'delivery_orders' }
  ]

  return (
    <Select
      name={name}
      label='انزل من'
      placeholder=' انزل من '
      options={options}
      value={values[name as keyof Formik_Values] || ''}
      onChange={handleChange}
    />
  )
}

export default SelectItemsTable
