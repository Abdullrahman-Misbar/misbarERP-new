import { TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import React, { useState } from "react";

import { Label } from "./Label";
import { useFormikContext } from "formik";

interface BaseInputDatepickerProps {
  name: string;
  placeholder: string;
  label: string;
}

const BaseInputDatepicker: React.FC<BaseInputDatepickerProps> = ({
  name,
  placeholder,
  label,
}) => {

    const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(null);
    const { setFieldValue, values } = useFormikContext();
  console.log("🚀 ~ values:", values);
  const handleDateChange = (newDate: dayjs.Dayjs | null) => {
    setSelectedDate(newDate);
    const formattedDate = newDate ? newDate.format("DD/MM/YY") : "";
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
            value={selectedDate}
            onChange={handleDateChange}
            name={name}
          />
        </LocalizationProvider>
      </div>
    </>
  );
};

export default BaseInputDatepicker;
