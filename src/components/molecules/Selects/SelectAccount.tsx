import { SelectChangeEvent } from "@mui/material"
import { useFormikContext } from "formik"
import React from "react"
import { useFetch } from "../../../hooks"
import SelectComp from "../../atoms/formik/SelectComp"

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
    setFieldValue(name, event.value)
    console.log(event.target.value) 
  }

  const endpoint = "api/Account/Lookup"

  const { data } = useFetch<FetchResponse<AccountLookupResponse[]>>({
    queryKey: [endpoint],
    endpoint: endpoint,
    Module: "PURCHASE",
  })

  const options: Option[] =
    data.data?.map((item: AccountLookupResponse) => ({
      value: item.id,
      label: item.lookupName,
    })) || []

  return (
    <SelectComp
      name={name}
      label={labelName}
      placeholder={labelName}
      options={options}

      onChange={onChange || handleChange}
      disabled={disabled}
    />
  )
}

export default SelectAccount
