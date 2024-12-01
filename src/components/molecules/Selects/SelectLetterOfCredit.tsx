/* eslint-disable import/named */
import React from 'react'
import Select from '../formik/Select'
import { SelectChangeEvent } from '@mui/material'
import { useFormikContext } from 'formik'
import useFetch from '@/hooks/useFetch'

type SelectLetterOfCreditProps = {
  name: string
}

interface Option {
  value: string | number
  label: string
}

interface FormikValues {
  [key: string]: any
}

const SelectLetterOfCredit: React.FC<SelectLetterOfCreditProps> = ({ name }) => {
  const { setFieldValue, values } = useFormikContext<FormikValues>()

  const handleChange = (event: SelectChangeEvent<string | number>) => {
    setFieldValue(name, event.target.value)
  }

  const endpoint = 'LetterOfCredit/GetALLLettersOfCreditCard'
  const { data, isLoading, isSuccess, refetch } = useFetch<any>({
    queryKey: [endpoint],
    endpoint: endpoint
  })

  const options: Option[] =
    data?.data?.map((item: { id: string; lookupName: string }) => ({
      value: item.id,
      label: item.lookupName
    })) || []

  return (
    <Select
      name={name}
      label='الاعتماد المستندي'
      placeholder='الاعتماد المستندي'
      options={options}
      value={values[name] || ''}
      onChange={handleChange}
    />
  )
}

export default SelectLetterOfCredit
