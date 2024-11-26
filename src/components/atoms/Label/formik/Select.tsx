import React from 'react'
import {
  Grid,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  SelectChangeEvent,
  FormControl,
  FormHelperText
} from '@mui/material'
import { useFormikContext } from 'formik'

interface Option {
  label: string
  value: string | number
}

interface DynamicSelectProps {
  name: string
  label: string
  placeholder?: string
  options: Option[]
  value: string | number
  onChange: (event: SelectChangeEvent<string | number>) => void
  disabled?: boolean
}

const Select: React.FC<DynamicSelectProps> = ({
  name,
  label,
  placeholder = 'Select an option',
  options,
  value,
  onChange,
  disabled
}) => {
  const { errors, touched } = useFormikContext<{ [key: string]: any }>()
  const hasError = touched[name] && Boolean(errors[name])

  return (
    <Grid item xs={12} sm={12}>
      <FormControl fullWidth error={hasError}>
        <InputLabel>{label}</InputLabel>
        <MuiSelect
          disabled={disabled}
          name={name}
          value={value}
          onChange={onChange}
          label={label}
          fullWidth
          renderValue={selected => {
            if (!selected) {
              return placeholder
            }
            const selectedOption = options.find(option => option.value == selected)
            return selectedOption ? selectedOption.label : placeholder
          }}
        >
          {options?.length === 0 ? (
            <MenuItem disabled>لا يوجد بيانات</MenuItem>
          ) : (
            options?.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))
          )}
        </MuiSelect>
        {hasError && <FormHelperText>{''}</FormHelperText>}
      </FormControl>
    </Grid>
  )
}

export default Select
