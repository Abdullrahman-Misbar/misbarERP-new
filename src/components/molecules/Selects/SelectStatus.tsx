/* eslint-disable import/named */
import React, { useState } from 'react'
import Select from '../formik/Select'
import { SelectChangeEvent } from '@mui/material'
import { useFormikContext } from 'formik'

type SelectStatus_TP = {
  name: string
  disabled?: boolean
}
type Formik_Values = {
  name: string
}
const SelectStatus = ({ name, disabled }: SelectStatus_TP) => {
  const { setFieldValue, values } = useFormikContext<Formik_Values>()

  const handleChange = (event: SelectChangeEvent<string | number>) => {
    setFieldValue(name, event.target.value)
  }

  const options = [
    { label: 'مفتوح', value: 1 },
    { label: 'مغلق', value: 0 }
  ]

  return (
    <Select
      name={name}
      label='الحالة'
      placeholder='اختر حالة'
      options={options}
      value={values[name as keyof Formik_Values] || ''}
      onChange={handleChange}
      disabled={disabled}
    />
  )
}

export default SelectStatus
