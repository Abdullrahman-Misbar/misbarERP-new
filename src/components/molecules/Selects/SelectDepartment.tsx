import React from "react";
import { SelectChangeEvent } from "@mui/material";
import { useFormikContext } from "formik";
import SelectComp from "../../atoms/formik/SelectComp";
import { useFetch } from "../../../hooks";

type SelectDepartmentProps = {
  name: string;
};

interface Option {
  value: number;
  label: string;
}

interface FormikValues {
  [key: string]: any;
}

const SelectDepartment: React.FC<SelectDepartmentProps> = ({ name }) => {
  const { setFieldValue } = useFormikContext<FormikValues>();

  const handleChange = (event: { value: string }) => {
    setFieldValue(name, event.value);
  };

  const endpoint = "api/Hr/GetDeptLookUp";
  const { data } = useFetch<any>({
    queryKey: [endpoint],
    endpoint: endpoint,
    Module: "PURCHASE",
  });

  const options: Option[] =
  //@ts-ignore
    data?.data?.map((item: { id: number; name: string }) => ({
      value: item.id,
      label: item.name,
    })) || [];

  return (
    <SelectComp
      name={name}
      label="القسم"
      placeholder="اختر القسم"
      options={options}
      // value={values[name] || ''}
      onChange={handleChange}
    />
  );
};

export default SelectDepartment;
