import React from 'react'
import Select from '../formik/Select'
/* eslint-disable import/named */
import { SelectChangeEvent } from '@mui/material'
import { useFormikContext } from 'formik'
import useFetch from '@/hooks/useFetch'

type SelectCreditCardProps = {
  name: string
  label?: string
}

interface Option {
  value: number
  label: string
}

interface FormikValues {
  [key: string]: any
}

const SelectCreditCard: React.FC<SelectCreditCardProps> = ({ name, label }) => {
  const { setFieldValue, values } = useFormikContext<FormikValues>()

  const handleChange = (event: SelectChangeEvent<string | number>) => {
    setFieldValue(name, event.target.value)
  }

  const endpoint = ''
  const { data, isLoading, isSuccess } = useFetch<any>({
    queryKey: [endpoint],
    endpoint: endpoint
  })

  const options: Option[] =
    data?.map((vendor: { id: number; partnerName: string }) => ({
      value: vendor.id,
      label: vendor.partnerName
    })) || []

  return (
    <Select
      name={name}
      label={label ? label : 'بطاقه الاعتماد'}
      placeholder='اختر بطاقه الاعتماد'
      options={options}
      value={values[name as keyof FormikValues] || ''}
      onChange={handleChange}
    />
  )
}

export default SelectCreditCard
