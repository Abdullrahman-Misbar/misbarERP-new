import React, { useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import { useFormikContext } from "formik";
import SelectComp from "../../atoms/formik/SelectComp";
import { useFetch } from "../../../hooks";

type SelectItemProps = {
  name: string;
  label: string;
};

interface Option {
  value: number;
  label: string;
}

interface FormikValues {
  [key: string]: any;
}

const SelectItem: React.FC<SelectItemProps> = ({ name, label }) => {
  const { setFieldValue, values } = useFormikContext<FormikValues>();
  const [searchTerm, setSearchTerm] = useState("ص");

  const handleChange = (event: SelectChangeEvent<string | number>) => {
    setFieldValue(name, event.value);
  };

  const endpoint = `api/Item/lookupAutoComplete?searchValue=${searchTerm}`;
  const { data, isLoading } = useFetch({
    queryKey: [endpoint],
    endpoint: endpoint,
    Module: "PURCHASE",
  });
  console.log("🚀 ~ data:", data);

  const options: Option[] =
    data?.data?.data?.map((item: { id: number; lookupName: string }) => ({
      value: item.id,
      label: item.lookupName,
      Module: "PURCHASE"
    })) || [];

  return (
    <SelectComp
      name={name}
      setSearchTerm={setSearchTerm}
      label={label || "الصنف"}
      placeholder="اختر الصنف"
      isLoading={isLoading}
      options={options}
      // value={values[name]}
      onChange={handleChange}
    />
  );
};

export default SelectItem;
