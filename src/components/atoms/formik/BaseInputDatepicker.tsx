import { TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import React, { useState, useEffect } from "react";

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
  const { setFieldValue, values } = useFormikContext();
  console.log("🚀 ~ values:", values);

  // Initialize selectedDate from Formik's values
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(
    values[name] ? dayjs(values[name]) : null
  );

  // When Formik values change, update selectedDate accordingly
  useEffect(() => {
    if (values[name] && !selectedDate) {
      setSelectedDate(dayjs(values[name])); // Ensure selectedDate is a dayjs object
    }
  }, [values[name], selectedDate]);

  // Handle date change and update Formik field value
  const handleDateChange = (newDate: dayjs.Dayjs | null) => {
    setSelectedDate(newDate);
    const formattedDate = newDate ? newDate.format("YYYY-MM-DD") : ""; // Store in ISO format
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
            inputFormat="DD/MM/YYYY" // Display date in the desired format
            // renderInput={(params) => <TextField {...params} placeholder={placeholder} />}
          />
        </LocalizationProvider>
      </div>
    </>
  );
};

export default BaseInputDatepicker;
