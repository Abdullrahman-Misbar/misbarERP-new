import React from "react";

import { useFormikContext } from "formik";
import SelectComp from "../../atoms/formik/SelectComp";
import { useFetch } from "../../../hooks";

type SelectActivityTypeProps = {
  name: string;
};

interface Option {
  value: number;
  label: string;
}

interface FormikValues {
  [key: string]: any;
}

const SelectActivityType: React.FC<SelectActivityTypeProps> = ({ name }) => {
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
    data?.map((item: { id: number; name: string }) => ({
      value: item.id,
      label: item.name,
    })) || [];

  return (
    <SelectComp
      name={name}
      label="نوع النشاط"
      placeholder=" نوع النشاط"
      options={options}
      // value={values[name] || ''}
      onChange={handleChange}
    />
  );
};

export default SelectActivityType;
