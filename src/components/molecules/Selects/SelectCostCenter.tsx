/* eslint-disable import/named */
import { SelectChangeEvent } from "@mui/material";
import { useFormikContext } from "formik";
import React from "react";
import SelectComp from "../../atoms/formik/SelectComp";
import { useFetch } from "../../../hooks";

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
  const { setFieldValue, values } = useFormikContext<FormikValues>();

  const handleChange = (event: SelectChangeEvent<string | number>) => {
    setFieldValue(name, event.value);
  };

  const endpoint = "Branch/CostCenter/Lookup";
  const { data, isLoading, isSuccess, refetch } = useFetch<any>({
    queryKey: [endpoint],
    endpoint: endpoint,
  });

  const options: Option[] =
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
