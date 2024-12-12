import React from "react";
import { useFormikContext } from "formik";
import { useFetch } from "../../../hooks";
import SelectComp from "../../atoms/formik/SelectComp";
import SelectMultiComp from "../../atoms/formik/SelectMultiComp";

type SelectWarehouseProps = {
  name: string;
  disabled?: boolean;
  label?: string;
  value?:string
};

interface Option {
  value: number;
  label: string;
}

interface FormikValues {
  [key: string]: any;
}

const SelectMultiWarehouse: React.FC<SelectWarehouseProps> = ({
  name,
  disabled,
  label,
  value
}) => {
  const { setFieldValue, values } = useFormikContext<FormikValues>();

  const handleChange = (event:any) => {
    console.log( event)
     setFieldValue(name, event?.map((option:any )=> option.value))
    // setFieldValue(name, event.value)
   
  }

  const endpoint = "api/Warehouse/Lookup";
  const { data, isLoading } = useFetch<any>({
    queryKey: [endpoint],
    endpoint: endpoint,
    Module: "PURCHASE",
  });

  const options: Option[] =
    //@ts-ignore
    data?.data?.map((warehouse: { id: number; lookupName: string }) => ({
      value: warehouse.id,
      label: warehouse.lookupName,
    })) || [];
  const selectedValue = options?.find((item) => item?.value == (value || values[name]));

  return (
    <SelectMultiComp
      name={name}
      label={'اختر المستودع'}
      placeholder="اختر المستودع"
      options={options}
      value={selectedValue}
      isLoading={isLoading}
      onChange={handleChange}
      disabled={disabled}
    />
  );
};

export default SelectMultiWarehouse;
