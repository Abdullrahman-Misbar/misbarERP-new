import React from "react";
/* eslint-disable import/named */
import { useFormikContext } from "formik";
import { useFetch } from "../../../hooks";
import SelectComp from "../../atoms/formik/SelectComp";

type SelectCreditCardProps = {
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

const SelectCreditCard: React.FC<SelectCreditCardProps> = ({ name, label }) => {
  const { setFieldValue } = useFormikContext<FormikValues>();

  const handleChange = (event: { value: string }) => {
    setFieldValue(name, event.value);
  };

  const endpoint = "";
  const { data, isLoading } = useFetch<any>({
    queryKey: [endpoint],
    endpoint: endpoint,
    Module: "PURCHASE",
  });

  const options: Option[] =
  //@ts-ignore
    data?.map((vendor: { id: number; partnerName: string }) => ({
      value: vendor.id,
      label: vendor.partnerName,
    })) || [];

  return (
    <SelectComp
      name={name}
      label={label ? label : "بطاقه الاعتماد"}
      placeholder="اختر بطاقه الاعتماد"
      options={options}
      isLoading={isLoading}
      // value={values[name as keyof FormikValues] || ''}
      onChange={handleChange}
    />
  );
};

export default SelectCreditCard;
