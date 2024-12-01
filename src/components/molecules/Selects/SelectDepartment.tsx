import React from 'react'
import Select from '../formik/Select'
import { SelectChangeEvent } from '@mui/material'
import { useFormikContext } from 'formik'
import useFetch from '@/hooks/useFetch'

type SelectDepartmentProps = {
  name: string
}

interface Option {
  value: number
  label: string
}

interface FormikValues {
  [key: string]: any
}

const SelectDepartment: React.FC<SelectDepartmentProps> = ({ name }) => {
  const { setFieldValue, values } = useFormikContext<FormikValues>()

  const handleChange = (event: SelectChangeEvent<string | number>) => {
    setFieldValue(name, event.target.value)
  }

  const endpoint = 'Hr/GetDeptLookUp'
  const { data, isLoading, isSuccess } = useFetch<any>({
    queryKey: [endpoint],
    endpoint: endpoint
  })

  const options: Option[] =
    data?.data?.map((item: { id: number; name: string }) => ({
      value: item.id,
      label: item.name
    })) || []

  return (
    <Select
      name={name}
      label='القسم'
      placeholder='اختر القسم'
      options={options}
      value={values[name] || ''}
      onChange={handleChange}
    />
  )
}

export default SelectDepartment
