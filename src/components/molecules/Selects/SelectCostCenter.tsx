/* eslint-disable import/named */
import { useFormikContext } from "formik";
import React from "react";
import { useFetch } from "../../../hooks";
import SelectComp from "../../atoms/formik/SelectComp";

type SelectCostCenterProps = {
  name: string;
  labelName?: string;
  disabled?: boolean;
};

interface Option {
  value: string | number;
  label: string;
}

interface FormikValues {
  [key: string]: any;
}

const SelectCostCenter: React.FC<SelectCostCenterProps> = ({
  disabled,
  labelName,
  name,
}) => {
  const { setFieldValue } = useFormikContext<FormikValues>();

  const handleChange = (event: { value: string }) => {
    setFieldValue(name, event.value);
  };

  const endpoint = "Branch/CostCenter/Lookup";
  const { data, isLoading} = useFetch<any>({
    queryKey: [endpoint],
    endpoint: endpoint,
  });

  const options: Option[] =
  //@ts-ignore
    data?.data?.map((item: { id: string; lookupName: string }) => ({
      value: item.id,
      label: item.lookupName,
    })) || [];

  return (
    <SelectComp
      name={name}
      label={labelName ? labelName : "مركز التكلفه"}
      placeholder="مركز التكلفة"
      options={options}
      isLoading={isLoading}
      onChange={handleChange}
      disabled={disabled}
    />
  );
};

export default SelectCostCenter;
