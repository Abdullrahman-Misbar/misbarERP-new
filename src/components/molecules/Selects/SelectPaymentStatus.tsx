import { SelectChangeEvent } from '@mui/material'
import { useFormikContext } from 'formik'
import SelectComp from '../../atoms/formik/SelectComp'

type SelectPaymentStatus_TP = {
  name: string
}
type Formik_Values = {
  name: string
}
const SelectPaymentStatus = ({ name }: SelectPaymentStatus_TP) => {
  const { setFieldValue, values } = useFormikContext<Formik_Values>()

  const handleChange = (event: SelectChangeEvent<string | number>) => {
    setFieldValue(name, event.value)
  }

  const options = [
    { label: 'مدفوع بالكامل', value: 0 },
    { label: 'مدفوع جزئي', value: 1 },
    { label: 'غير مدفوعة', value: 2 }
  ]

  return (
    <SelectComp
      name={name}
      label='حالة الدفع'
      placeholder='حالة الدفع'
      options={options}
      onChange={handleChange}

    />
  )
}

export default SelectPaymentStatus
