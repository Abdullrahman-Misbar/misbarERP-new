import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { useFormikContext } from "formik";
import React from "react";
import { Label } from "./Label";
import { FormikError } from "./FormikError";

interface BaseInputDatepickerProps {
  name: string;
  placeholder?: string;
  label?: string;
  value?: string;
  disabled?: boolean;
}

const BaseInputDatepicker: React.FC<BaseInputDatepickerProps> = ({
  name,
  label,
  value,
  disabled,
}) => {
  const { setFieldValue, values, errors, touched } = useFormikContext<any>();
  const currentValue = values[name] ? dayjs(value || values[name]) : null;
  const handleDateChange = (newDate: dayjs.Dayjs | null) => {
    const formattedDate = newDate ? newDate.format("YYYY-MM-DD") : "";
    setFieldValue(name, formattedDate);
  };

  // تحديد إذا كان هناك خطأ
  const hasError = touched[name] && Boolean(errors[name]);

  return (
    <>
      {label && (
        <Label htmlFor={name} className="mb-1">
          {label}
        </Label>
      )}
      <div className="rtl:text-right relative mt-1 w-full" dir="rtl">
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en">
          <DatePicker
            className={`w-full ${hasError ? "border-red-500" : "border-gray-300"} rounded`}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: hasError ? "red" : "rgba(0, 0, 0, 0.23)",
                },
                "&:hover fieldset": {
                  borderColor: hasError ? "darkred" : "black",
                },
                "&.Mui-focused fieldset": {
                  borderColor: hasError ? "darkred" : "#1976d2",
                },
              },
            }}
            value={currentValue}
            onChange={handleDateChange}
            name={name}
            disabled={disabled}
          />
        </LocalizationProvider>
        <FormikError name={name} />
      </div>
    </>
  );
};

export default BaseInputDatepicker;
