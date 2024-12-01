/* eslint-disable import/named */
import React, { useState } from 'react'
import Select from '../formik/Select'
import { SelectChangeEvent } from '@mui/material'
import { useFormikContext } from 'formik'

type DistributionMethod_TP = {
  name: string
}
type Formik_Values = {
  name: string
}
const DistributionMethod = ({ name }: DistributionMethod_TP) => {
  const { setFieldValue, values } = useFormikContext<Formik_Values>()

  const handleChange = (event: SelectChangeEvent<string | number>) => {
    setFieldValue(name, event.target.value)
  }

  const options = [
    { label: 'توزيع أ', value: 1 },
    { label: 'توزيع ب', value: 0 }
  ]

  return (
    <Select
      name={name}
      label='طريقه التوزيع'
      placeholder='اختر طريقه التوزيع'
      options={options}
      value={values[name as keyof Formik_Values] || ''}
      onChange={handleChange}
    />
  )
}

export default DistributionMethod
