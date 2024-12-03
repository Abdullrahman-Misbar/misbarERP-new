/* eslint-disable import/named */
import { SelectChangeEvent } from '@mui/material'
import { useFormikContext } from 'formik'
import SelectComp from '../../atoms/formik/SelectComp'

type SelectInvoicesStatus_TP = {
  name: string
}
type Formik_Values = {
  name: string
}
const SelectInvoicesStatus = ({ name }: SelectInvoicesStatus_TP) => {
  const { setFieldValue } = useFormikContext<Formik_Values>()

  const handleChange = (event: SelectChangeEvent<string | number>) => {
    setFieldValue(name, event.target.value)
  }

  const options = [
    { label: 'مسودة', value: 0 },
    { label: 'معتمدة', value: 1 }
  ]

  return (
    <SelectComp
      name={name}
      label='حالة الفاتورة'
      placeholder='حالة الفاتورة'
      options={options}
      // value={values[name  as keyof Formik_Values ]}
      onChange={handleChange}
    />
  )
}

export default SelectInvoicesStatus
