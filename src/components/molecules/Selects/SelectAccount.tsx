import React from "react"
import { SelectChangeEvent } from "@mui/material"
import { useFormikContext } from "formik"
import Select from "../../atoms/formik/SelectComp"
import { useFetch } from "../../../hooks"

interface Option {
  value: string | number
  label: string
}

interface SelectAccountProps {
  name: string
  onChange?: (event: SelectChangeEvent<string | number>) => void
  value?: string | number
  labelName: string
  disabled?: boolean
}

interface AccountLookupResponse {
  id: string
  lookupName: string
}

interface FormikValues {
  [key: string]: string
}
interface FetchResponse<T> {
  data: T
  error?: string
  isLoading?: boolean
  isSuccess?: boolean
}

const SelectAccount: React.FC<SelectAccountProps> = ({
  name,
  disabled,
  onChange,
  value,
  labelName,
}) => {
  const { setFieldValue, values } = useFormikContext<FormikValues>()

  const handleChange = (event: SelectChangeEvent<string | number>) => {
    setFieldValue(name, event.target.value)
    console.log(event.target.value) // For debugging purposes
  }

  const endpoint = "Account/Lookup"

  const { data } = useFetch<FetchResponse<AccountLookupResponse[]>>({
    queryKey: [endpoint],
    endpoint: endpoint,
  })

  const options: Option[] =
    data.data?.map((item: AccountLookupResponse) => ({
      value: item.id,
      label: item.lookupName,
    })) || []

  return (
    <Select
      name={name}
      label={labelName}
      placeholder={labelName}
      options={options}
      value={value || values[name] || ""}
      onChange={onChange || handleChange}
      disabled={disabled}
    />
  )
}

export default SelectAccount
