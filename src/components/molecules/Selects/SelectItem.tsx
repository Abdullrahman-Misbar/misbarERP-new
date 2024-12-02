import React, { useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import { useFormikContext } from "formik";
import SelectComp from "../../atoms/formik/SelectComp";
import { useFetch } from "../../../hooks";

type SelectItemProps = {
  name: string;
  label: string;
  onChange:()=>void
};

interface Option {
  value: number;
  label: string;
}

interface FormikValues {
  [key: string]: any;
}

const SelectItem: React.FC<SelectItemProps> = ({ name, label, onChange }) => {
  const { setFieldValue, values } = useFormikContext<FormikValues>();
  console.log("🚀 ~ values:", values);

  const handleChange = (event: SelectChangeEvent<string | number>) => {
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
    data?.data?.data?.map((item: { id: number; lookupName: string  , uoms:string[] }) => ({
      value: item.id,
      label: item.lookupName,
      uoms: item?.uoms,
    })) || [];

  return (
    <SelectComp
      name={name}
      setSearchTerm={setSearchTerm}
      label={label}
      placeholder="اختر الصنف"
      isLoading={isLoading}
      options={options}
      // value={values[name]}
      onChange={onChange || handleChange}
    />
  );
};

export default SelectItem;
