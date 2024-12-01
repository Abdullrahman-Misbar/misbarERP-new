import React from 'react'
/* eslint-disable import/named */
import { SelectChangeEvent } from '@mui/material'
import { useFormikContext } from 'formik'
import SelectComp from '../../atoms/formik/SelectComp'
import { useFetch } from '../../../hooks'

type SelectVendorProps = {
  name: string
  label?: string
  disabled?: boolean
}

interface Option {
  value: number
  label: string

}

interface FormikValues {
  [key: string]: any
}

const SelectVendor: React.FC<SelectVendorProps> = ({ name, label, disabled }) => {
  const { setFieldValue, values } = useFormikContext<FormikValues>()

  const handleChange = (event: SelectChangeEvent<string | number>) => {
    setFieldValue(name, event.value)
  }

  const endpoint = 'api/Partner/GetAllPartnersList'
  const { data, isLoading, isSuccess } = useFetch<any>({
    queryKey: [endpoint],
    endpoint: endpoint,
      Module:"PURCHASE"
  })

  const options: Option[] =
    data?.map((vendor: { id: number; partnerName: string }) => ({
      value: vendor.id,
      label: vendor.partnerName
    })) || []

  return (
    <SelectComp 
      name={name}
      label={label ? label : 'المورد'}
      placeholder='اختر المورد'
      options={options}
      // value={values[name as keyof FormikValues] || ''}
      isLoading={isLoading}
      onChange={handleChange}
      disabled={disabled}
    />
  )
}

export default SelectVendor
