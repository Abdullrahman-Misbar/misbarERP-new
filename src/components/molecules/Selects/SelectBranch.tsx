/* eslint-disable import/named */
import { useFormikContext } from 'formik'
import React from 'react'
import { useFetch } from '../../../hooks'
import SelectComp from '../../atoms/formik/SelectComp'

type SelectBranchProps = {
  name: string
  value?:string
}

interface Option {
  value: string | number
  label: string
}

interface FormikValues {
  [key: string]: any
}

const SelectBranch: React.FC<SelectBranchProps> = ({ name , value }) => {
  const { setFieldValue , values } = useFormikContext<FormikValues>()

  const handleChange = (event: {value:string}) => {
    setFieldValue(name, event.value)
  }

  const endpoint = 'api/Branch/Lookup'
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
    const selectedValue = options?.find((item) => item?.value == (value || values[name]));

  return (
    <SelectComp
      name={name}
      label='الفرع'
      placeholder='اختر الفرع'
      options={options}
      value={selectedValue}
      isLoading={isLoading}

      onChange={handleChange}
    />
  )
}

export default SelectBranch
