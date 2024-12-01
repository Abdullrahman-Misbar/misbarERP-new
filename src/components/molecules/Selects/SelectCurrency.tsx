/* eslint-disable import/named */
import React from 'react'
import Select from '../formik/Select'
import { SelectChangeEvent } from '@mui/material'
import { useFormikContext } from 'formik'
import useFetch from '@/hooks/useFetch'

type SelectCurrencyProps = {
  name: string
  labelName?: string
  disabled?: boolean
}

interface Option {
  value: string | number
  label: string
}

interface FormikValues {
  [key: string]: any
}

const SelectCurrency: React.FC<SelectCurrencyProps> = ({ name, labelName, disabled }) => {
  const { setFieldValue, values } = useFormikContext<FormikValues>()

  const handleChange = (event: SelectChangeEvent<string | number>) => {
    setFieldValue(name, event.target.value)
  }

  const endpoint = 'Currency'
  const { data, isLoading, isSuccess, refetch } = useFetch<any>({
    queryKey: [endpoint],
    endpoint: endpoint
  })

  const options: Option[] =
    data?.data?.map((item: { id: string; currencyName: string }) => ({
      value: item.id,
      label: item.currencyName
    })) || []

  return (
    <Select
      name={name}
      label={labelName ? labelName : 'العمله'}
      placeholder='اختر العملة'
      options={options}
      value={values[name] || ''}
      onChange={handleChange}
      disabled={disabled}
    />
  )
}

export default SelectCurrency
