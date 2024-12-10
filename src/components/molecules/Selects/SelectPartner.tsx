/* eslint-disable import/named */
import React from "react";
import { SelectChangeEvent } from "@mui/material";
import { useFormikContext } from "formik";
import { useFetch } from "../../../hooks";
import SelectComp from "../../atoms/formik/SelectComp";

type SelectCurrencyProps = {
  name: string;
};

interface Option {
  value: string | number;
  label: string;
}

interface FormikValues {
  [key: string]: any;
}

const SelectPartner: React.FC<SelectCurrencyProps> = ({ name }) => {
  const { setFieldValue } = useFormikContext<FormikValues>();

  const handleChange = (event: SelectChangeEvent<string | number>) => {
    setFieldValue(name, event.target.value);
  };

  const endpoint = "api/Partner/GetAllPartnersList";
  const { data, isLoading } = useFetch<any>({
    queryKey: [endpoint],
    endpoint: endpoint,
    Module: "PURCHASE",
  });
  console.log(data);

  const options: Option[] =
    //@ts-ignore
    data?.map((item: { id: string; partnerName: string }) => ({
      value: item.id,
      label: item.partnerName,
    })) || [];

  return (
    <SelectComp
      name={name}
      label=" الشريك"
      placeholder=" اختر شريك"
      options={options}
      isLoading={isLoading}
      onChange={handleChange}
    />
  );
};

export default SelectPartner;
