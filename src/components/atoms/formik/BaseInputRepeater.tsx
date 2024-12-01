import { useFormikContext } from "formik";
import { Label } from "./Label";
import { BaseInput } from "./Base";
import { TextField } from "@mui/material";

type BaseInputRepeater_TP = {
  name: string;
  type: "text" | "number";
  id: string;
  placeholder: string;
  label: string;
  value: string;
  required?: boolean;
  disabled?: boolean;
  error?: string | string[];
  onChange: (e: { target: { value: string } }) => void;
};
function BaseInputRepeater({
  name,
  type,
  id,
  placeholder,
  label,
  required,
  value,
  disabled,
  onChange,
  error,
  ...props
}: BaseInputRepeater_TP) {
  const { setFieldValue, setFieldTouched, errors, touched, values } =
    useFormikContext<{
      [key: string]: any;
    }>();

  return (
    <div className="col-span-1 mt-[2px]">
      {/* <Label htmlFor={id} required={required} className={`mb-3 text-sm flex justify-start`}>
        {label}
      </Label> */}
      <div className="">
        <TextField
          type={type}
          id={id}
          label={label}
          variant="outlined"
          fullWidth
          value={value || values[name]}
          style={{
            borderColor: "#0000003B",
            borderWidth: "1px",
            borderStyle: "solid",
            borderRadius: "4px",
          }}
          // error={!!errors[name] && touched[name]}
          // helperText={touched[name] && errors[name] ? errors[name] : ''}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={() => setFieldTouched(name, true)}
          disabled={disabled}
          {...props}
        />
      </div>
    </div>
  );
}

export default BaseInputRepeater;
