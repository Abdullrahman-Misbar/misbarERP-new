import { useFormikContext } from "formik";
import React, { useState } from "react";
import { useFetch } from "../../../hooks";
import SelectComp from "../../atoms/formik/SelectComp";
import SelectMultiComp from "../../atoms/formik/SelectMultiComp";

type SelectItemProps = {
  name: string;
  label: string;
  onChange:()=>void
  value?:string
};

interface Option {
  value: number;
  label: string;
}

interface FormikValues {
  [key: string]: any;
}

const SelectMultiItem: React.FC<SelectItemProps> = ({ name, label, onChange , value }) => {
  const { setFieldValue, values } = useFormikContext<FormikValues>();

  const handleChange = (event:any) => {
    console.log( event)
     setFieldValue(name, event?.map((option:any )=> option.value))
    // setFieldValue(name, event.value)
   
  }
  const [searchTerm, setSearchTerm] = useState("ص" || values[name]);

  const endpoint = `api/Item/lookupAutoComplete?searchValue=${searchTerm}`;
  const { data, isLoading } = useFetch({
    queryKey: [endpoint],
    endpoint: endpoint,
    Module: "PURCHASE",
    enabled: !!searchTerm?.length,
  });

  const options: Option[] =
  //@ts-ignore
    data?.data?.data?.map((item: { id: number; lookupName: string  , uoms:string[] }) => ({
      value: item.id,
      label: item.lookupName,
      uoms: item?.uoms,
    })) || [];
    const selectedValue = options?.find((item) => item?.value == (value || values[name]));

  return (
    <SelectMultiComp
      name={name}
      setSearchTerm={setSearchTerm}
      label={label}
      placeholder="اختر الصنف"
      isLoading={isLoading}
      options={options}
      value={selectedValue}
      onChange={onChange || handleChange}
    />
  );
};

export default SelectMultiItem;
