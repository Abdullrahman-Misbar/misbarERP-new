import React from "react";
import { SelectChangeEvent } from "@mui/material";
import { useFormikContext } from "formik";
import SelectComp from "../../atoms/formik/SelectComp";
import { useFetch } from "../../../hooks";

type SelectDepartmentManagerProps = {
  name: string;
  label?: string;
};

interface Option {
  value: number;
  label: string;
}

interface FormikValues {
  [key: string]: any;
}

const SelectDepartmentManager: React.FC<SelectDepartmentManagerProps> = ({
  name,
  label,
}) => {
  const { setFieldValue, values } = useFormikContext<FormikValues>();

  const handleChange = (event: SelectChangeEvent<string | number>) => {
    setFieldValue(name, event.value);
  };

  const endpoint = "managerId";
  const { data, isLoading, isSuccess } = useFetch<any>({
    queryKey: [endpoint],
    Module: "PURCHASE",
    endpoint: endpoint,
  });

  const options: Option[] =
    data?.map((item: { id: number; partnerName: string }) => ({
      value: item.id,
      label: item.name,
    })) || [];

  return (
    <SelectComp
      name={name}
      label={label ? label : "المورد"}
      placeholder="اختر المورد"
      options={options}
      // value={values[name] || ''}
      onChange={handleChange}
      isLoading={isLoading}
    />
  );
};

export default SelectDepartmentManager;
