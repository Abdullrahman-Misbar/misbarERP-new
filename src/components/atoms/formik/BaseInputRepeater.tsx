import React from "react";
import { TextField } from "@mui/material";
import { useFormikContext, FastField } from "formik";

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

const BaseInputRepeater = React.memo(
  ({
    name,
    type,
    id,
    placeholder,
    label,
    required,
    disabled,
    error,
    ...props
  }: BaseInputRepeater_TP) => {
    const { setFieldValue, setFieldTouched, values } = useFormikContext<{
      [key: string]: any;
    }>();

    return (
      // <FastField name={name}>
      //   {({ field }: any) => (
          <div className="col-span-1 mt-[2px]">
            <TextField
              type={type}
              id={id}
              label={label}
              variant="outlined"
              fullWidth
              // value={field.value || values[name]} // التأكد من استخدام القيمة الصحيحة
              placeholder={placeholder}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const newValue = e.target.value;
                setFieldValue(name, newValue); // تحديث القيمة باستخدام Formik
              }}
              onBlur={() => setFieldTouched(name, true)} // تعيين الحقل كـ "تم لمسه"
              disabled={disabled}
              error={!!error} // عرض الخطأ إذا وجد
              helperText={error || ""} // عرض رسالة الخطأ إذا وجدت
              style={{
                borderColor: "#0000003B",
                borderWidth: "1px",
                borderStyle: "solid",
                borderRadius: "4px",
              }}
              {...props}
          
            />
          </div>
      //   )}
      // </FastField>
    );
  }
);

export default BaseInputRepeater;
