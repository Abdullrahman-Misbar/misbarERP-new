/* eslint-disable import/named */
import React, { useState } from 'react'
import Select from '../formik/Select'
import { SelectChangeEvent } from '@mui/material'
import { useFormikContext } from 'formik'

type SelectAccreditationStatus_TP = {
  name: string
}
type Formik_Values = {
  name: string
}
const SelectAccreditationStatus = ({ name }: SelectAccreditationStatus_TP) => {
  const { setFieldValue, values } = useFormikContext<Formik_Values>()

  const handleChange = (event: SelectChangeEvent<string | number>) => {
    setFieldValue(name, event.target.value)
  }

  const options = [
    { label: 'قيد المعالجة', value: 1 },
    { label: 'تم المعالحه', value: 0 }
  ]

  return (
    <Select
      name={name}
      label='حالة الاعتماد'
      placeholder=' اختر حاله الاعتماد'
      options={options}
      value={values[name as keyof Formik_Values] || ''}
      onChange={handleChange}
    />
  )
}

export default SelectAccreditationStatus
