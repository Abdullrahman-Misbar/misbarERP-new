import React from "react";
import { useFormikContext } from "formik";
import { useFetch } from "../../../hooks";
import SelectComp from "../../atoms/formik/SelectComp";
import SelectMultiComp from "../../atoms/formik/SelectMultiComp";

type SelectVendorProps = {
  name: string;
  label?: string;
  disabled?: boolean;
};

interface Option {
  value: number;
  label: string;
}

interface FormikValues {
  [key: string]: any;
}

const SelectMultiPartnerGroup: React.FC<SelectVendorProps> = ({
  name,
  label,
  disabled,
}) => {
  const { setFieldValue, values } = useFormikContext<FormikValues>();

  const handleChange = (event:any) => {
    console.log( event)
     setFieldValue(name, event?.map((option:any )=> option.value))
    // setFieldValue(name, event.value)
   
  }
   const endpoint = "api/PartnerGroups/Lookup";

   const { data, isLoading } = useFetch<any>({
    queryKey: [endpoint],
    endpoint: endpoint,
    Module: "PURCHASE",
  });

  const options: Option[] =
  //@ts-ignore
    data?.map((vendor: { id: number; lookupName: string }) => ({
      value: vendor.id,
      label: vendor.lookupName,
    })) || [];

  const selectedValue = options?.find((item) => item?.value == values[name]);

  return (
    <SelectMultiComp
      name={name}
      label={label ? label : "مجموعة الموردين"}
      placeholder="اختر  مجموعة "
      options={options}
      value={selectedValue}
      isLoading={isLoading}
      onChange={handleChange}
      disabled={disabled}
    />
  );
};

export default SelectMultiPartnerGroup;
