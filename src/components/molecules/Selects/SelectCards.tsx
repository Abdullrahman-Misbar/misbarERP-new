import React from "react";
import { useFormikContext } from "formik";
import { useFetch } from "../../../hooks";
import SelectComp from "../../atoms/formik/SelectComp";

type SelectCardsProps = {
  name: string;
  label?: string;
  disabled?: boolean;
};

interface Option {
  value: number;
  label: string;
}

interface FormikValues {
  [key: string]: any;
}

const SelectCards: React.FC<SelectCardsProps> = ({ name, label, disabled }) => {
  const { setFieldValue, values } = useFormikContext<FormikValues>();

  const handleChange = (event: { value: string }) => {
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
    data?.data?.map((item: { id: number; cardName: string }) => ({
      value: item.id,
      label: item.cardName,
    })) || [];

  const selectedValue = options?.find((item) => item?.value == values[name]);

  return (
    <SelectComp
      name={name}
      label={label ? label : "البطاقة الرئيسية"}
      placeholder="البطاقة الرئيسية"
      options={options}
      value={selectedValue}
      isLoading={isLoading}
      onChange={handleChange}
      disabled={disabled}
    />
  );
};

export default SelectCards;
