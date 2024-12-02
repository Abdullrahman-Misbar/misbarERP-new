import React from 'react'
/* eslint-disable import/named */
import { SelectChangeEvent } from '@mui/material'
import { useFormikContext } from 'formik'
import { useFetch } from '../../../hooks'
import SelectComp from '../../atoms/formik/SelectComp'

type SelectWarehouseProps = {
  name: string
  disabled?: boolean
}

interface Option {
  value: number
  label: string
}

interface FormikValues {
  [key: string]: any
}

const SelectWarehouse: React.FC<SelectWarehouseProps> = ({ name, disabled }) => {
  const { setFieldValue, values } = useFormikContext<FormikValues>()

  const handleChange = (event: SelectChangeEvent<string | number>) => {
    setFieldValue(name, event.value)
  }

  const endpoint = 'api/Warehouse/Lookup'
  const { data, isLoading } = useFetch<any>({
    queryKey: [endpoint],
    endpoint: endpoint,
    Module:"PURCHASE"
  })

  const options: Option[] =
    data?.data?.map((warehouse: { id: number; lookupName: string }) => ({
      value: warehouse.id,
      label: warehouse.lookupName
    })) || []
    const selectedValue = options?.find((item)=>item?.value == values[name])

  return (
    <SelectComp
      name={name}
      label='المستودع'
      placeholder='اختر المستودع'
      options={options}
      value={selectedValue}
      isLoading={isLoading}
      onChange={handleChange}
      disabled={disabled}
    />
  )
}

export default SelectWarehouse
