/* eslint-disable import/named */
import React, { useState } from 'react'
import Select from '../formik/Select'
import { SelectChangeEvent } from '@mui/material'
import { useFormikContext } from 'formik'
import useFetch from '@/hooks/useFetch'

type SelectPurchasePaymentTemplate_TP = {
  name: string
}
type Formik_Values = {
  name: string
}
const SelectPurchasePaymentTemplate = ({ name }: SelectPurchasePaymentTemplate_TP) => {
  const { setFieldValue, values } = useFormikContext<Formik_Values>()

  const handleChange = (event: SelectChangeEvent<string | number>) => {
    setFieldValue(name, event.target.value)
  }

  const endpoint = 'PurchasePaymentTemplate/Lookup'
  const { data, isLoading, isSuccess, refetch } = useFetch<any>({
    queryKey: [endpoint],
    endpoint: endpoint
  })
  const options = data?.data?.map((item: any) => ({
    value: item?.id,
    label: item?.lookupName
  }))

  return (
    <Select
      name={name}
      label='قالب شروط السداد'
      placeholder='قالب شروط السداد'
      options={options}
      value={values[name as keyof Formik_Values]}
      onChange={handleChange}
    />
  )
}

export default SelectPurchasePaymentTemplate
