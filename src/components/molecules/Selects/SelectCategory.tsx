/* eslint-disable import/named */
import React from "react";
import { SelectChangeEvent } from "@mui/material";
import { useFormikContext } from "formik";
import { useFetch } from "../../../hooks";
import SelectComp from "../../atoms/formik/SelectComp";

type CostCenterProps = {
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

const SelectCategory: React.FC<CostCenterProps> = ({
  name,
  labelName,
  disabled,
}) => {
  const { setFieldValue, values } = useFormikContext<FormikValues>();
  const handleChange = (event: { value: string }) => {
    setFieldValue(name, event.value);
  };

  const endpoint = "api/Category/Lookup";
  const { data, isLoading } = useFetch<any>({
    queryKey: [endpoint],
    endpoint: endpoint,
    Module: "PURCHASE",
  });

  const options: Option[] =
    //@ts-ignore
    data?.data?.map((item: { id: string; lookupName: string }) => ({
      value: item?.id,
      label: item?.lookupName,
    })) || [];
  const selectedValue = options?.find((item) => item?.value == values[name]);

  return (
    <SelectComp
      name={name}
      label={labelName ? labelName : ""}
      placeholder=" المجموعة  "
      options={options}
      value={selectedValue}
      onChange={handleChange}
      isLoading={isLoading}
      disabled={disabled}
    />
  );
};

export default SelectCategory;
