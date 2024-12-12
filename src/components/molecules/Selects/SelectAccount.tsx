/* eslint-disable import/named */
import { useFormikContext } from "formik";
import React from "react";
import { useFetch } from "../../../hooks";
import SelectComp from "../../atoms/formik/SelectComp";

type SelectAccountProps = {
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

const SelectAccount: React.FC<SelectAccountProps> = ({
  name,
  labelName,
  disabled,
  value
}) => {
  const { setFieldValue, values } = useFormikContext<FormikValues>();

  const handleChange = (event: { value: string }) => {
    setFieldValue(name, event.value);
  };

  const endpoint = "api/Account/Lookup";
  const { data, isLoading } = useFetch<any>({
    queryKey: [endpoint],
    endpoint: endpoint,
    Module: "PURCHASE",
  });

  const options: Option[] =
    //@ts-ignore
    data?.data?.map((item: { id: string; lookupName: string }) => ({
      value: item.id,
      label: item.lookupName,
    })) || [];
  const selectedValue = options?.find((item) => item?.value == (value || values[name]));

  return (
    <SelectComp
      name={name}
      label={labelName }
      placeholder="اختر الحساب"
      options={options}
      value={selectedValue}
      onChange={handleChange}
      isLoading={isLoading}
      disabled={disabled}
    />
  );
};

export default SelectAccount;
