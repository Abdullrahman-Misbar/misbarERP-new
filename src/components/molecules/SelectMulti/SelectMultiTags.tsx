/* eslint-disable import/named */
import React from "react";
import { useFormikContext } from "formik";
import { useFetch } from "../../../hooks";
import SelectMultiComp from "../../atoms/formik/SelectMultiComp";

type TagsProps = {
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

const SelectMultiTags: React.FC<TagsProps> = ({
  name,
  labelName,
  disabled,
}) => {
  const { setFieldValue, values } = useFormikContext<FormikValues>();
  console.log("🚀 ~ values:", values)
  const handleChange = (event:any) => {
    console.log( event)
     setFieldValue(name, event?.map((option:any )=> option.value))
    // setFieldValue(name, event.value)
   
  }

  const endpoint = "api/Tag";
  const { data, isLoading} = useFetch<any>({
    queryKey: [endpoint],
    endpoint: endpoint,
    Module:"PURCHASE"
  });

  const options: Option[] =
    //@ts-ignore
    data?.data?.map((item: { id: string; tagName: string }) => ({
      value: item?.id,
      label: item?.tagName,
    })) || [];
    const selectedValues =
    values[name]?.map((id: string | number) =>
      options.find((option) => option.value === id)
    ) || [];

  return (
    <SelectMultiComp
      name={name}
      label={labelName ? labelName : "الوسوم"}
      placeholder="الوسوم"
      options={options}
      value={selectedValues}
      onChange={handleChange}
      isLoading={isLoading}
      disabled={disabled}
    />
  );
};

export default SelectMultiTags;
