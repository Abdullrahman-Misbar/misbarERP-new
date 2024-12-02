import React from "react";
import { useFormikContext } from "formik";
import { useFetch } from "../../../hooks";
import SelectComp from "../../atoms/formik/SelectComp";

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

const SelectVendor: React.FC<SelectVendorProps> = ({
  name,
  label,
  disabled,
}) => {
  const { setFieldValue, values } = useFormikContext<FormikValues>();

  const handleChange = (event: { value: string }) => {
    setFieldValue(name, event.value);
  };

  const endpoint = "api/Partner/GetAllPartnersList";
  const { data, isLoading } = useFetch<any>({
    queryKey: [endpoint],
    endpoint: endpoint,
    Module: "PURCHASE",
  });

  const options: Option[] =
  //@ts-ignore
    data?.map((vendor: { id: number; partnerName: string }) => ({
      value: vendor.id,
      label: vendor.partnerName,
    })) || [];

  const selectedValue = options?.find((item) => item?.value == values[name]);

  return (
    <SelectComp
      name={name}
      label={label ? label : "المورد"}
      placeholder="اختر المورد"
      options={options}
      value={selectedValue}
      isLoading={isLoading}
      onChange={handleChange}
      disabled={disabled}
    />
  );
};

export default SelectVendor;
