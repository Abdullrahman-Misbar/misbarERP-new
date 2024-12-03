import { useFormikContext } from 'formik'
import React from 'react'
import { useFetch } from '../../../hooks'
import SelectComp from '../../atoms/formik/SelectComp'

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
  const { setFieldValue } = useFormikContext<FormikValues>()

  const handleChange = (event:{value:string}) => {
    setFieldValue(name, event.value)
  }

  const endpoint = 'Hr/GetAllLookupEmployee'
  const { data, isLoading } = useFetch<any>({
    queryKey: [endpoint],
    endpoint: endpoint,
    Module: "PURCHASE"
  })

  const options: Option[] =
  //@ts-ignore
    data?.data?.map((item: { id: number; name: string }) => ({
      value: item.id,
      label: item.name
    })) || []

  return (
    <SelectComp
      name={name}
      label='المدير المباشر'
      placeholder='اختر المدير المباشر'
      options={options}
      // value={values[name] || ''}
      isLoading={isLoading}
      onChange={handleChange}
    />
  )
}

export default SelectDirectManager
