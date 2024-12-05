import { useFormikContext } from "formik";
import React from "react";
import { useFetch } from "../../../hooks";
import SelectComp from "../../atoms/formik/SelectComp";

type SelectAttributionToProps = {
  name: string;
};

interface Option {
  value: number;
  label: string;
}

interface FormikValues {
  [key: string]: any;
}

const SelectAttributionTo: React.FC<SelectAttributionToProps> = ({ name }) => {
  const { setFieldValue } = useFormikContext<FormikValues>();

  const handleChange = (event: { value: string }) => {
    setFieldValue(name, event.value);
  };

  const endpoint = "api/PurchasActivites/GetAllTypes";
  const { data } = useFetch<any>({
    queryKey: [endpoint],
    endpoint: endpoint,
    Module: "PURCHASE",
  });

  const options: Option[] =
    data?.data?.map((item: { id: number; name: string }) => ({
      value: item.id,
      label: item.name,
    })) || [];

  return (
    <SelectComp
      name={name}
      label="موضوع النشاط"
      placeholder=" موضوع النشاط"
      options={options}
      // value={values[name] || ''}
      onChange={handleChange}
    />
  );
};

export default SelectAttributionTo;
