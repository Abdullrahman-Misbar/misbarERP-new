import React, { forwardRef } from "react";
import { TextField } from "@mui/material";
import { useFormikContext } from "formik";

type BaseInputRepeater_TP = {
  name: string;
  type: "text" | "number";
  id?: string;
  placeholder: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string | string[];
};

const BaseInputRepeater = forwardRef<HTMLInputElement, BaseInputRepeater_TP>(
  (
    {
      name,
      type,
      id,
      placeholder,
      label,
      required,
      disabled,
      error,
      ...props
    }: BaseInputRepeater_TP,
    ref
  ) => {
    const { setFieldValue, setFieldTouched, values } = useFormikContext<{
      [key: string]: any;
    }>();

    return (
      <div className="col-span-1 mt-[2px]">
        <TextField
          type={type}
          id={id}
          label={label}
          variant="outlined"
          fullWidth
          value={values[name]}
          placeholder={placeholder}
          inputRef={ref} 
          ref={ref}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const newValue = e.target.value;
            setFieldValue(name, newValue);
          }}
          onBlur={() => setFieldTouched(name, true)}
          disabled={disabled}
          error={!!error}
          helperText={error || ""}
          style={{
            borderColor: "#0000003B",
            borderWidth: "1px",
            borderStyle: "solid",
            borderRadius: "4px",
          }}
          {...props}
        />
      </div>
    );
  }
);

export default React.memo(BaseInputRepeater);
