import { FormHelperText, Grid } from "@mui/material";
import { useFormikContext } from "formik";
import React from "react";
import Select from "react-select";
import { Label } from "./Label";
interface Option {
  label: string;
  value: string | number;
}

interface DynamicSelectProps {
  name: string;
  label: string;
  placeholder?: string;
  options: Option[];
  // value: string | number
  onChange: (event: any) => void;
  disabled?: boolean;
  id?: string;
  setSearchTerm?: React.Dispatch<React.SetStateAction<string>>;
  isLoading?: boolean;
}

const SelectComp: React.FC<DynamicSelectProps> = ({
  name,
  label,
  placeholder = "Select an option",
  options,
  // value,
  onChange,
  disabled,
  id,
  setSearchTerm,
  isLoading,
  ...props
}) => {
  const { errors, touched } = useFormikContext<{ [key: string]: string }>();
  const hasError = touched[name] && Boolean(errors[name]);
  const handleSearchChange = (newValue: string) => {
    if (setSearchTerm) setSearchTerm(newValue);
  };
  return (
    <Grid item xs={12} sm={12}>
      <Label htmlFor={`${id}`} className="m-1">{label}</Label>
      <Select
        name={name}
        options={options}
        // value={value}
        onInputChange={handleSearchChange}
        onChange={onChange}
        placeholder={placeholder || "اختر..."}
        isDisabled={disabled}
        isLoading={isLoading}
        menuPlacement="bottom"
        menuPosition="absolute"
        menuPortalTarget={document.body}
        styles={{
          menuPortal: (base) => ({
            ...base,
            zIndex: 9999,
          }),
          control: (baseStyles, state) => ({
            ...baseStyles,
            height:"40px"
          }),

        }}
        {...props}
      />
      {hasError && <FormHelperText>{""}</FormHelperText>}
    </Grid>
  );
};

export default SelectComp;
