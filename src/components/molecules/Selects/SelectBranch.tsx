/* eslint-disable import/named */
import { useFormikContext } from 'formik'
import React from 'react'
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
  const { setFieldValue } = useFormikContext<FormikValues>()

  const handleChange = (event: {value:string}) => {
    setFieldValue(name, event.value)
  }

  const endpoint = 'Branch/Lookup'
  const { data, isLoading} = useFetch<any>({
    queryKey: [endpoint],
    endpoint: endpoint,
    Module: "PURCHASE",
    
  })

  const options: Option[] =
  //@ts-ignore
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
