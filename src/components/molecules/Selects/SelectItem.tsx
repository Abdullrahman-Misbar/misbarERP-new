import { useFormikContext } from "formik";
import React, { useState } from "react";
import { useFetch } from "../../../hooks";
import SelectComp from "../../atoms/formik/SelectComp";

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

const SelectItem: React.FC<SelectItemProps> = ({ name, label, onChange , value }) => {
  const { setFieldValue, values } = useFormikContext<FormikValues>();

  const handleChange = (event:{values:string}) => {
    setFieldValue(name, event.value);
  };
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
    <SelectComp
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

export default SelectItem;
