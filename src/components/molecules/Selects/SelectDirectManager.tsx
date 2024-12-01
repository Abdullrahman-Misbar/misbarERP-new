import React from 'react'
import Select from '../formik/Select'
import { SelectChangeEvent } from '@mui/material'
import { useFormikContext } from 'formik'
import useFetch from '@/hooks/useFetch'

type SelectDirectManagerProps = {
  name: string
}

interface Option {
  value: number
  label: string
}

interface FormikValues {
  [key: string]: any
}

const SelectDirectManager: React.FC<SelectDirectManagerProps> = ({ name }) => {
  const { setFieldValue, values } = useFormikContext<FormikValues>()

  const handleChange = (event: SelectChangeEvent<string | number>) => {
    setFieldValue(name, event.target.value)
  }

  const endpoint = 'Hr/GetAllLookupEmployee'
  const { data, isLoading, isSuccess } = useFetch<any>({
    queryKey: [endpoint],
    endpoint: endpoint
  })

  const options: Option[] =
    data?.data?.map((item: { id: number; lookupName: string }) => ({
      value: item.id,
      label: item.name
    })) || []

  return (
    <Select
      name={name}
      label='المدير المباشر'
      placeholder='اختر المدير المباشر'
      options={options}
      value={values[name] || ''}
      onChange={handleChange}
    />
  )
}

export default SelectDirectManager
