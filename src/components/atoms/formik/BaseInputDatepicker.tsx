import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { useFormikContext } from "formik";
import React from "react";
import { Label } from "./Label";

interface BaseInputDatepickerProps {
  name: string;
  placeholder: string;
  label: string;
}

const BaseInputDatepicker: React.FC<BaseInputDatepickerProps> = ({
  name,
  label,
}) => {
  const { setFieldValue, values } = useFormikContext<any>();
  const currentValue = values[name] ? dayjs(values[name]) : null;
  const handleDateChange = (newDate: dayjs.Dayjs | null) => {
    const formattedDate = newDate ? newDate.format("YYYY-MM-DD") : "";
    setFieldValue(name, formattedDate);
  };

  return (
    <>
      <Label htmlFor={name} className="mb-1">
        {label}
      </Label>
      <div className="rtl:text-right relative mt-1 w-full" dir="rtl">
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en">
          <DatePicker
            className="w-full"
            value={currentValue}
            onChange={handleDateChange}
            name={name}
          />
        </LocalizationProvider>
      </div>
    </>
  );
};

export default BaseInputDatepicker;
