import { TextField } from "@mui/material"
import { useFormikContext } from "formik"
import React, { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { FormikError } from "./FormikError"
import { Label } from "./Label"

interface BaseInputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  id?: string
  required?: boolean
  style?: React.CSSProperties
  sx?: object
  name: string
  type: "text" | "password" | "email" | "number" | "date" | "textarea"
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning"
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
    useFormikContext<{ [key: string]: any }>()
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev)

  const handleBlur = () => setFieldTouched(name, true)

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (type === "date") event.target.showPicker()
  }

  return (
    <div>
      <Label htmlFor={`${id}`} className="mb-1">{label}</Label>
      <div className={`rtl:text-right ${style} relative mt-1`} dir="rtl">
        <TextField
          // label={label}

          type={type == "password" && !showPassword ? "password" : "text"}
          id={id}
          required={required}
          variant="outlined"
          placeholder={placeholder}
          disabled={disabled}
          name={name}
          value={values[name]}
          onBlur={handleBlur}
          fullWidth
          error={touched[name] && !!errors[name]}
          onChange={(e) => setFieldValue(name, e.target.value)}
          sx={{
            "& .MuiInputLabel-root": {
              fontFamily: "Somar-Bold, sans-serif", // Apply somarBold font to the label
              fontWeight: "bold",
            },
            "& input[type='date']::-webkit-calendar-picker-indicator": {
              display: "none",
            },
            "& input[type='date']": {
              "-webkit-appearance": "textfield",
            },
            ...sx,
          }}
          onFocus={handleFocus}
          color={color}
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
  )
}

export default BaseInputField
