import { TextField } from "@mui/material";
import { FastField, useFormikContext } from "formik";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FormikError } from "./FormikError";
import { Label } from "./Label";

interface BaseInputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id?: string;
  required?: boolean;
  style?: React.CSSProperties;
  sx?: object;
  name: string;
  type: "text" | "password" | "email" | "number" | "date" | "textarea";
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
}

const BaseInputField: React.FC<BaseInputFieldProps> = ({
  label,
  id,
  required = false,
  style = {},
  sx = {},
  name,
  placeholder = "",
  type = "text",
  disabled,
  color = "primary", // Default color value
  ...props
}) => {
  const { setFieldValue, setFieldTouched, errors, touched, values } =
    useFormikContext<{ [key: string]: any }>();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const handleBlur = () => setFieldTouched(name, true);

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (type === "date") event.target.showPicker();
  };

  return (
    <FastField name={name}>
      {({ field, meta }: any) => (
        <div>
          {label && (
            <Label htmlFor={`${id}`} className="mb-1">
              {label}
            </Label>
          )}
          <div className={`rtl:text-right ${style} relative mt-1`} dir="rtl">
            <TextField
              {...field}
              type={type === "password" && !showPassword ? "password" : type}
              id={id}
              required={required}
              variant="outlined"
              placeholder={placeholder}
              disabled={disabled}
              fullWidth
              error={meta.touched && !!meta.error}
              sx={{
                "& .MuiInputLabel-root": {
                  fontFamily: "Somar-Bold, sans-serif",
                  fontWeight: "bold",
                },
                "& input[type='date']::-webkit-calendar-picker-indicator": {
                  display: "none",
                },
                "& input[type='date']": {
                  "-webkit-appearance": "textfield",
                },
                ...(disabled && {
                  backgroundColor: "#00000011",
                  borderColor: "rgba(0, 0, 0, 0.2)",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#00000011",
                  },
                  "& input": {
                    color: "rgba(0, 0, 0, 0.5)",
                  },
                }),
                ...sx,
              }}
              {...props}
            />
            {type === "password" && (
              <div className="absolute inset-y-0 rtl:left-[10px] ltr:right-[0] top-[-0px] pr-3 flex items-center text-xl text-green leading-5">
                <button onClick={togglePasswordVisibility} type="button">
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            )}
            <FormikError name={name} />
          </div>
        </div>
      )}
    </FastField>
  );
};

export default BaseInputField;
