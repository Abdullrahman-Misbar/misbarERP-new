/* eslint-disable import/named */
import React from 'react'
import Select from '../formik/Select'
import { SelectChangeEvent } from '@mui/material'
import { useFormikContext } from 'formik'
import useFetch from '@/hooks/useFetch'

type SelectCurrencyProps = {
  name: string
}

interface Option {
  value: string | number
  label: string
}

interface FormikValues {
  [key: string]: any
}

const SelectPartner: React.FC<SelectCurrencyProps> = ({ name }) => {
  const { setFieldValue, values } = useFormikContext<FormikValues>()

  const handleChange = (event: SelectChangeEvent<string | number>) => {
    setFieldValue(name, event.target.value)
  }

  const endpoint = 'Partner/GetAllPartnersList'
  const { data, isLoading, isSuccess, refetch } = useFetch<any>({
    queryKey: [endpoint],
    endpoint: endpoint
  })
  console.log(data)

  const options: Option[] =
    data?.map((item: { id: string; partnerName: string }) => ({
      value: item.id,
      label: item.partnerName
    })) || []

  return (
    <Select
      name={name}
      label=' الشريك'
      placeholder=' اختر شريك'
      options={options}
      value={values[name] || ''}
      onChange={handleChange}
    />
  )
}

export default SelectPartner
