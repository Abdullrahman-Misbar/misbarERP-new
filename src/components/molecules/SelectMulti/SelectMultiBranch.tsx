/* eslint-disable import/named */
import { useFormikContext } from 'formik'
import React from 'react'
import { useFetch } from '../../../hooks'
 import SelectMultiComp from '../../atoms/formik/SelectMultiComp'

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

const SelectMultiBranch: React.FC<SelectBranchProps> = ({ name }) => {
  const { setFieldValue } = useFormikContext<FormikValues>()

  const handleChange = (event:any) => {
    console.log( event)
     setFieldValue(name, event?.map((option:any )=> option.value))
    // setFieldValue(name, event.value)
   
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
     
  return (
    <SelectMultiComp
      name={name}
      label='الفرع'
      placeholder='اختر الفرع'
      options={options}
      
       
      isLoading={isLoading}

      onChange={handleChange}
    />
  )
}

export default SelectMultiBranch
