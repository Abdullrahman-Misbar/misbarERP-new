import React from "react";
import { useFormikContext } from "formik";
import { useFetch } from "../../../hooks";
import SelectComp from "../../atoms/formik/SelectComp";

type SelectPartnerGroupProps = {
  name: string;
  disabled?: boolean;
  label?: string;
  value?:string
  placeholder?: string
  onPartnerGroupChange?: (selectedGroup: Option) => void; 
};

interface Option {
  value: number;
  label: string;
}

interface FormikValues {
  [key: string]: any;
}

const SelectPartnerGroup: React.FC<SelectPartnerGroupProps> = ({
  name,
  disabled,
  label,
  value,
  placeholder,
  onPartnerGroupChange
}) => {
  const { setFieldValue, values } = useFormikContext<FormikValues>();

  const handleChange = (selectedOption: Option) => {
    setFieldValue(name, selectedOption.value); 
    if (onPartnerGroupChange) {
      onPartnerGroupChange(selectedOption); 
    }
  };

  const endpoint = "api/PartnerGroups/Lookup";
  const { data, isLoading } = useFetch<any>({
    queryKey: [endpoint],
    endpoint: endpoint,
    Module: "PURCHASE",
  });

  const options: Option[] =
    //@ts-ignore
    data?.data?.map((partnerGroup: { id: number; lookupName: string }) => ({
      value: partnerGroup.id,
      label: partnerGroup.lookupName,
    })) || [];
  const selectedValue = options?.find((item) => item?.value == (value || values[name]));

  return (
    <SelectComp
      name={name}
      label={label}
      placeholder={placeholder}
      options={options}
      value={selectedValue}
      isLoading={isLoading}
      onChange={handleChange}
      disabled={disabled}
    />
  );
};

export default SelectPartnerGroup;
