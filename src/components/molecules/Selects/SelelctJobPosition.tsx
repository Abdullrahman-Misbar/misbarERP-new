import React from 'react'
import Select from '../formik/Select'
import { SelectChangeEvent } from '@mui/material'
import { useFormikContext } from 'formik'
import useFetch from '@/hooks/useFetch'

type SelelctJobPositionProps = {
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

const SelelctJobPosition: React.FC<SelelctJobPositionProps> = ({ name, label }) => {
  const { setFieldValue, values } = useFormikContext<FormikValues>()

  const handleChange = (event: SelectChangeEvent<string | number>) => {
    setFieldValue(name, event.target.value)
  }

  const endpoint = 'Hr/GetPositionLookup'
  const { data, isLoading, isSuccess } = useFetch<any>({
    queryKey: [endpoint],
    endpoint: endpoint
  })

  const options: Option[] =
    data?.map((item: { id: number; partnerName: string }) => ({
      value: item.id,
      label: item.name
    })) || []

  return (
    <Select
      name={name}
      label={label ? label : 'المنصب الوظيفي'}
      placeholder='اختر المنصب'
      options={options}
      value={values[name] || ''}
      onChange={handleChange}
    />
  )
}

export default SelelctJobPosition
