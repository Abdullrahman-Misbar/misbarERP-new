/* eslint-disable import/named */
import React, { useState } from 'react'
import Select from '../formik/Select'
import { SelectChangeEvent } from '@mui/material'
import { useFormikContext } from 'formik'
import useFetch from '@/hooks/useFetch'

type SelectPurchaseAgreement_TP = {
  name: string
}
type Formik_Values = {
  name: string
}
const SelectPurchaseAgreement = ({ name }: SelectPurchaseAgreement_TP) => {
  const { setFieldValue, values } = useFormikContext<Formik_Values>()

  const handleChange = (event: SelectChangeEvent<string | number>) => {
    setFieldValue(name, event.target.value)
  }

  const endpoint = 'PurchasAgreement?kit=10'
  const { data, isLoading, isSuccess, refetch } = useFetch<any>({
    queryKey: [endpoint],
    endpoint: endpoint
  })
  const options = data?.data?.data?.map((item:any) => ({
    value: '',
    label: ''
  }))

  return (
    <Select
      name={name}
      label='اتفاقية الشراء'
      placeholder='اختر اتفاقية الشراء'
      options={options}
      value={values[name as keyof Formik_Values]}
      onChange={handleChange}
    />
  )
}

export default SelectPurchaseAgreement
