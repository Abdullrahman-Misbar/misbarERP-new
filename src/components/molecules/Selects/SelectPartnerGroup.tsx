/* eslint-disable import/named */
import React from "react";
import { SelectChangeEvent } from "@mui/material";
import { useFormikContext } from "formik";
import { useFetch } from "../../../hooks";
import SelectComp from "../../atoms/formik/SelectComp";

type SelectCurrencyProps = {
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

const SelectPartnerGroup: React.FC<SelectCurrencyProps> = ({
   name,
  labelName,
  disabled,
 }) => {
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


  const options: Option[] = Array.isArray(fetchedData?.data)
    ? fetchedData.data.map(
        (item: { id: string | number; lookupName: string }) => ({
          value: item.id,
          label: item.lookupName,
        })
      )
    : [];

  return (
    <SelectComp
      name={name}
      label={labelName ? labelName : "مجموعة المورد"}
      placeholder={isLoading ? "جاري التحميل..." : "اختر مجموعة المورد"}
      options={options}
      isLoading={isLoading}
      onChange={handleChange}
    />
  );
};

export default SelectPartnerGroup;
