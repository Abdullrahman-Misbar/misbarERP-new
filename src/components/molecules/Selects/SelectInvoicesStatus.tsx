/* eslint-disable import/named */
import React, { useState } from 'react'
import Select from '../formik/Select'
import { SelectChangeEvent } from '@mui/material'
import { useFormikContext } from 'formik'
import useFetch from '@/hooks/useFetch'

type SelectInvoicesStatus_TP = {
  name: string
}
type Formik_Values = {
  name: string
}
const SelectInvoicesStatus = ({ name }: SelectInvoicesStatus_TP) => {
  const { setFieldValue, values } = useFormikContext<Formik_Values>()

  const handleChange = (event: SelectChangeEvent<string | number>) => {
    setFieldValue(name, event.target.value)
  }

  const options = [
    { label: 'مسودة', value: 0 },
    { label: 'معتمدة', value: 1 }
  ]

  return (
    <Select
      name={name}
      label='حالة الفاتورة'
      placeholder='حالة الفاتورة'
      options={options}
      value={values[name  as keyof Formik_Values ]}
      onChange={handleChange}
    />
  )
}

export default SelectInvoicesStatus