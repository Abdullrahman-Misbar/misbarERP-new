import { useFormikContext } from 'formik'
import SelectComp from '../../atoms/formik/SelectComp'

type SelectPaymentStatus_TP = {
  name: string
  value?:string
}
type Formik_Values = {
  name: string
}
const SelectPaymentStatus = ({ name , value }: SelectPaymentStatus_TP) => {
  const { setFieldValue , values } = useFormikContext<Formik_Values>()

  const handleChange = (event: {value:string}) => {
    setFieldValue(name, event.value)
  }

  const options = [
    { label: 'مدفوع بالكامل', value: 0 },
    { label: 'مدفوع جزئي', value: 1 },
    { label: 'غير مدفوعة', value: 2 }
  ]
  const selectedValue = options?.find((item) => item?.value == (value || values[name]));

  return (
    <SelectComp
      name={name}
      label='حالة الدفع'
      placeholder='حالة الدفع'
      options={options}
      onChange={handleChange}
      value={selectedValue}

    />
  )
}

export default SelectPaymentStatus
