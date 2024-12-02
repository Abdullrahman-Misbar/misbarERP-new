import React from "react";
import { SelectChangeEvent } from "@mui/material";
import { useFormikContext } from "formik";
import SelectComp from "../../atoms/formik/SelectComp";
import { useFetch } from "../../../hooks";

type SelelctJobPositionProps = {
  name: string;
  label?: string;
};

interface Option {
  value: number;
  label: string;
}

interface FormikValues {
  [key: string]: any;
}

const SelelctJobPosition: React.FC<SelelctJobPositionProps> = ({
  name,
  label,
}) => {
  const { setFieldValue } = useFormikContext<FormikValues>();

  const handleChange = (event: SelectChangeEvent<string | number>) => {
    setFieldValue(name, event.target.value);
  };

  const endpoint = "Hr/GetPositionLookup";
  const { data, isLoading } = useFetch<any>({
    queryKey: [endpoint],
    endpoint: endpoint,
    Module: "PURCHASE",
  });

  const options: Option[] =
    //@ts-ignore

    data?.map((item: { id: number; name: string }) => ({
      value: item.id,
      label: item.name,
    })) || [];

  return (
    <SelectComp
      name={name}
      label={label ? label : "المنصب الوظيفي"}
      placeholder="اختر المنصب"
      options={options}
      isLoading={isLoading}
      onChange={handleChange}
    />
  );
};

export default SelelctJobPosition;
