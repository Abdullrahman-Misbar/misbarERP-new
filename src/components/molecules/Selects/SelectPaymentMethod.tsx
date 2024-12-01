/* eslint-disable import/named */
import React, { useState } from 'react'
import Select from '../formik/Select'
import { SelectChangeEvent } from '@mui/material'
import { useFormikContext } from 'formik'
import useFetch from '@/hooks/useFetch'

type SelectPaymentMethod_TP = {
  name: string
}
type Formik_Values = {
  name: string
}
const SelectPaymentMethod = ({ name }: SelectPaymentMethod_TP) => {
  const { setFieldValue, values } = useFormikContext<Formik_Values>()

  const handleChange = (event: SelectChangeEvent<string | number>) => {
    setFieldValue(name, event.target.value)
  }

  const options = [
    { label: 'نقدي', value: 0 },
    { label: 'شيك', value: 1 },
    { label: 'اجل', value: 2 }
  ]

  return (
    <Select
      name={name}
      label='طريقة الدفع'
      placeholder='طريقة الدفع'
      options={options}
      value={values[name as keyof Formik_Values]}
      onChange={handleChange}
    />
  )
}

export default SelectPaymentMethod
