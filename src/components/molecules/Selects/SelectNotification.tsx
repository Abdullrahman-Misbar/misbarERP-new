/* eslint-disable import/named */
import React, { useState } from 'react'
import Select from '../formik/Select'
import { SelectChangeEvent } from '@mui/material'
import { useFormikContext } from 'formik'

type SelectNotification_TP = {
  name: string
}
type Formik_Values = {
  name: string
}

const SelectNotification = ({ name }: SelectNotification_TP) => {
  const { setFieldValue, values } = useFormikContext<Formik_Values>()

  const handleChange = (event: SelectChangeEvent<string | number>) => {
    setFieldValue(name, event.target.value)
  }

  const options = [
    { label: 'اشعارات الدائنة', value: 1 },
    { label: 'اشعارات المدينة', value: 0 }
  ]

  return (
    <Select
      name={name}
      label='سبب الاشعار'
      placeholder='اختر اشعار'
      options={options}
      value={values[name as keyof Formik_Values] || ''}
      onChange={handleChange}
    />
  )
}

export default SelectNotification
