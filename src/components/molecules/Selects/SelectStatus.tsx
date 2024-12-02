
import { SelectChangeEvent } from '@mui/material'
import { useFormikContext } from 'formik'
import SelectComp from '../../atoms/formik/SelectComp'

type SelectStatus_TP = {
  name: string
  disabled?: boolean
}
type Formik_Values = {
  name: string
}
const SelectStatus = ({ name, disabled }: SelectStatus_TP) => {
  const { setFieldValue, values } = useFormikContext<Formik_Values>()

  const handleChange = (event: SelectChangeEvent<string | number>) => {
    setFieldValue(name, event.value)
  }

  const options = [
    { label: 'مفتوح', value: 1 },
    { label: 'مغلق', value: 0 }
  ]

  return (
    <SelectComp
      name={name}
      label='الحالة'
      placeholder='اختر حالة'
      options={options}
      onChange={handleChange}
      disabled={disabled}
    />
  )
}

export default SelectStatus
