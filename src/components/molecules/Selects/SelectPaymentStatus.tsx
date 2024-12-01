/* eslint-disable import/named */
import React, { useState } from 'react'
import Select from '../formik/Select'
import { SelectChangeEvent } from '@mui/material'
import { useFormikContext } from 'formik'
import useFetch from '@/hooks/useFetch'

type SelectPaymentStatus_TP = {
  name: string
}
type Formik_Values = {
  name: string
}
const SelectPaymentStatus = ({ name }: SelectPaymentStatus_TP) => {
  const { setFieldValue, values } = useFormikContext<Formik_Values>()

  const handleChange = (event: SelectChangeEvent<string | number>) => {
    setFieldValue(name, event.target.value)
  }

  const options = [
    { label: 'مدفوع بالكامل', value: 0 },
    { label: 'مدفوع جزئي', value: 1 },
    { label: 'غير مدفوعة', value: 2 }
  ]

  return (
    <Select
      name={name}
      label='حالة الدفع'
      placeholder='حالة الدفع'
      options={options}
      value={values[name as keyof Formik_Values]}
      onChange={handleChange}
    />
  )
}

export default SelectPaymentStatus
