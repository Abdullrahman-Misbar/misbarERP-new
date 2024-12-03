import { useFormikContext } from "formik";
import React from "react";
import { useFetch } from "../../../hooks";
import SelectComp from "../../atoms/formik/SelectComp";

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
  const { setFieldValue } = useFormikContext<FormikValues>();

  const handleChange = (event: { value: string }) => {
    setFieldValue(name, event.value);
  };

  const endpoint = "managerId";
  const { data, isLoading } = useFetch<any>({
    queryKey: [endpoint],
    Module: "PURCHASE",
    endpoint: endpoint,
  });

  const options: Option[] =
  //@ts-ignore
    data?.map((item: { id: number; name: string }) => ({
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
