/* eslint-disable import/named */
import React from "react";
import { SelectChangeEvent } from "@mui/material";
import { useFormikContext } from "formik";
import { useFetch } from "../../../hooks";
import SelectComp from "../../atoms/formik/SelectComp";

type SelectCurrencyProps = {
  name: string;
  labelName: string;
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
  onChange,
  value
}) => {
  const { setFieldValue, values } = useFormikContext<FormikValues>();

  const handleChange = (event: { value: string }) => {
    setFieldValue(name, event.value);
  };

  const endpoint = "api/Currency";
  const { data, isLoading } = useFetch<any>({
    queryKey: [endpoint],
    endpoint: endpoint,
    Module: "PURCHASE",
  });

  const options: Option[] =
    //@ts-ignore
    data?.data?.map((item: { id: string; currencyName: string , convertionFactor:number }) => ({
      value: item.id,
      label: item.currencyName,
      convertionFactor: item.convertionFactor,

    })) || [];
  const selectedValue = options?.find((item) => item?.value == (value || values[name]));

  return (
    <SelectComp
      name={name}
      label={labelName}
      placeholder="اختر العملة"
      options={options}
      value={selectedValue}
      onChange={onChange || handleChange}
      isLoading={isLoading}
      disabled={disabled}
    />
  );
};

export default SelectCurrency;
