/* eslint-disable import/named */
import React from "react";
import { SelectChangeEvent } from "@mui/material";
import { useFormikContext } from "formik";
import { useFetch } from "../../../hooks";
import SelectComp from "../../atoms/formik/SelectComp";

type SelectCurrencyProps = {
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

const SelectCurrency: React.FC<SelectCurrencyProps> = ({
  name,
  labelName,
  disabled,
}) => {
  const { setFieldValue, values } = useFormikContext<FormikValues>();

  const handleChange = (event: SelectChangeEvent<string | number>) => {
    setFieldValue(name, event.value);
  };

  const endpoint = "api/Currency";
  const { data, isLoading, isSuccess, refetch } = useFetch<any>({
    queryKey: [endpoint],
    endpoint: endpoint,
    Module: "PURCHASE",
  });

  const options: Option[] =
    data?.data?.map((item: { id: string; currencyName: string }) => ({
      value: item.id,
      label: item.currencyName,
    })) || [];

  return (
    <SelectComp
      name={name}
      label={labelName ? labelName : "العمله"}
      placeholder="اختر العملة"
      options={options}
      // value={values[name] || ''}
      onChange={handleChange}
      isLoading={isLoading}
      disabled={disabled}
    />
  );
};

export default SelectCurrency;
