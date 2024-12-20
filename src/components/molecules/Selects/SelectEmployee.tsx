/* eslint-disable import/named */
import { useFormikContext } from "formik";
import React from "react";
import { useFetch } from "../../../hooks";
import SelectComp from "../../atoms/formik/SelectComp";

type SelectEmployeeProps = {
  name: string;
};

interface Option {
  value: string | number;
  label: string;
}

interface FormikValues {
  [key: string]: any;
}

const SelectEmployee: React.FC<SelectEmployeeProps> = ({
  name,
  value
}) => {
  const { setFieldValue , values } = useFormikContext<FormikValues>();

  const handleChange = (event: {value:string}) => {
    setFieldValue(name, event.value);
  };

  const endpoint = "api/Hr/GetAllLookupEmployee";
  const { data, isLoading } = useFetch<any>({
    queryKey: [endpoint],
    endpoint: endpoint,
    Module: "PURCHASE",
  });

  const options: Option[] =
  //@ts-ignore
    data?.map((item: { id: string; name: string }) => ({
      value: item.id,
      label: item.name,
    })) || [];
    const selectedValue = options?.find((item) => item?.value == (value || values[name]));

  return (
    <SelectComp
      name={name}
      label=" مندوب المشتريات"
      placeholder=" مندوب المشتريات"
      options={options}
      isLoading={isLoading}
      value={selectedValue}

      onChange={handleChange}
    />
  );
};

export default SelectEmployee;
