/* eslint-disable import/named */
import { useFormikContext } from "formik";
import React from "react";
import { useFetch } from "../../../hooks";
import SelectComp from "../../atoms/formik/SelectComp";

type SelectLetterOfCreditCardProps = {
  name: string;
  value?:string
};

interface Option {
  value: string | number;
  label: string;
}

interface FormikValues {
  [key: string]: any;
}

const SelectLetterOfCreditCard: React.FC<SelectLetterOfCreditCardProps> = ({
  name,
  value
}) => {
  const { setFieldValue , values } = useFormikContext<FormikValues>();

  const handleChange = (event: {value:string}) => {
    setFieldValue(name, event.value);
  };

  const endpoint = "api/LetterOfCredit/GetALLLettersOfCreditCard";
  const { data, isLoading } = useFetch<any>({
    queryKey: [endpoint],
    endpoint: endpoint,
    Module: "PURCHASE",
  });

  const options: Option[] =
  //@ts-ignore
    data?.data?.map((item: { id: string; letterOfCreditName: string }) => ({
      value: item.id,
      label: item.cardName,
    })) || [];
    const selectedValue = options?.find((item) => item?.value == (value || values[name]));

  return (
    <SelectComp
      name={name}
      label=" بطاقة الاعتماد"
      placeholder="بطاقة الاعتماد"
      options={options}
      isLoading={isLoading}
      value={selectedValue}
      onChange={handleChange}
    />
  );
};

export default SelectLetterOfCreditCard;
