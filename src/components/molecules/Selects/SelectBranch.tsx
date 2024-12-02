/* eslint-disable import/named */
import React from 'react'
import { SelectChangeEvent } from '@mui/material'
import { useFormikContext } from 'formik'
import { useFetch } from '../../../hooks'
import SelectComp from '../../atoms/formik/SelectComp'

type SelectBranchProps = {
  name: string
}

interface Option {
  value: string | number
  label: string
}

interface FormikValues {
  [key: string]: any
}

const SelectBranch: React.FC<SelectBranchProps> = ({ name }) => {
  const { setFieldValue, values } = useFormikContext<FormikValues>()

  const handleChange = (event: SelectChangeEvent<string | number>) => {
    setFieldValue(name, event.value)
  }

  const endpoint = 'Branch/Lookup'
  const { data, isLoading, isSuccess, refetch } = useFetch<any>({
    queryKey: [endpoint],
    endpoint: endpoint,
    Module: "PURCHASE",
    
  })

  const options: Option[] =
    data?.data?.map((item: { id: string; lookupForignName: string }) => ({
      value: item.id,
      label: item.lookupForignName
    })) || []

  return (
    <SelectComp
      name={name}
      label='الفرع'
      placeholder='اختر الفرع'
      options={options}
      // value={values[name] || ''}
      isLoading={isLoading}

      onChange={handleChange}
    />
  )
}

export default SelectBranch
