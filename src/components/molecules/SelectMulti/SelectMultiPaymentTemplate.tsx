/* eslint-disable import/named */
import React from "react";
import { SelectChangeEvent } from "@mui/material";
import { useFormikContext } from "formik";
import { useFetch } from "../../../hooks";
import SelectComp from "../../atoms/formik/SelectComp";
import SelectMultiComp from "../../atoms/formik/SelectMultiComp";

type CostCenterProps = {
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

const SelectMultiPaymentTemplate: React.FC<CostCenterProps> = ({
  name,
  labelName,
  disabled,
}) => {
  const { setFieldValue, values } = useFormikContext<FormikValues>();
  const handleChange = (event:any) => {
    console.log( event)
     setFieldValue(name, event?.map((option:any )=> option.value))
    // setFieldValue(name, event.value)
   
  }

  const endpoint = "api/PurchasePaymentTemplate/Lookup";
  const { data, isLoading} = useFetch<any>({
    queryKey: [endpoint],
    endpoint: endpoint,
    Module:"PURCHASE"
  });

  const options: Option[] =
    //@ts-ignore
    data?.data?.map((item: { id: string; lookupName: string }) => ({
      value: item?.id,
      label: item?.lookupName,
    })) || [];
  const selectedValue = options?.find((item) => item?.value == values[name]);

  return (
    <SelectMultiComp
      name={name}
      label={labelName ? labelName : ""}
      placeholder=""
      options={options}
      value={selectedValue}
      onChange={handleChange}
      isLoading={isLoading}
      disabled={disabled}
    />
  );
};

export default SelectMultiPaymentTemplate;
