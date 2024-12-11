/* eslint-disable import/named */
import React from "react";
import { SelectChangeEvent } from "@mui/material";
import { useFormikContext } from "formik";
import { useFetch } from "../../../hooks";
import SelectComp from "../../atoms/formik/SelectComp";

type SelectCurrencyProps = {
  name: string;
};

interface Option {
  value: string | number;
  label: string;
}

interface FormikValues {
  [key: string]: any;
}

const SelectPartnerGroup: React.FC<SelectCurrencyProps> = ({ name }) => {
  const { setFieldValue } = useFormikContext<FormikValues>();

  const handleChange = (selectedOption: Option | null) => {
    if (selectedOption) {
      setFieldValue(name, selectedOption.value);
    } else {
      setFieldValue(name, null); 
    }
  };
  

  const endpoint = "api/PartnerGroups/Lookup";
  const { data: fetchedData, isLoading } = useFetch<any>({
    queryKey: [endpoint],
    endpoint: endpoint,
    Module: "PURCHASE",
  });

  console.log("Raw fetched data:", fetchedData);

  
  const options: Option[] =
    Array.isArray(fetchedData?.data) 
      ? fetchedData.data.map((item: { id: string | number; lookupName: string }) => ({
          value: item.id,
          label: item.lookupName,
        }))
      : []; 

  console.log("Options for SelectComp:", options);

  return (
    <SelectComp
      name={name}
      label="مجموعة المورد"
      placeholder={isLoading ? "جاري التحميل..." : "اختر مجموعة المورد"}
      options={options}
      isLoading={isLoading}
      onChange={handleChange}
    />
  );
};

export default SelectPartnerGroup;
