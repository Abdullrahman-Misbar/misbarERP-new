/* eslint-disable import/named */
import { useFormikContext } from "formik";
import React from "react";
import { useFetch } from "../../../hooks";
import SelectComp from "../../atoms/formik/SelectComp";

type SelectLetterOfCreditProps = {
  name: string;
};

interface Option {
  value: string | number;
  label: string;
}

interface FormikValues {
  [key: string]: any;
}

const SelectLetterOfCredit: React.FC<SelectLetterOfCreditProps> = ({
  name,
}) => {
  const { setFieldValue } = useFormikContext<FormikValues>();

  const handleChange = (event: {value:string}) => {
    setFieldValue(name, event.value);
  };

  const endpoint = "LetterOfCredit/GetALLLettersOfCreditCard";
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

  return (
    <SelectComp
      name={name}
      label="الاعتماد المستندي"
      placeholder="الاعتماد المستندي"
      options={options}
      isLoading={isLoading}
      onChange={handleChange}
    />
  );
};

export default SelectLetterOfCredit;
