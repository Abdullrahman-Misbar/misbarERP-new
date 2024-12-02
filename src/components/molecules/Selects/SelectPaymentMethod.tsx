import { SelectChangeEvent } from "@mui/material";
import { useFormikContext } from "formik";
import SelectComp from "../../atoms/formik/SelectComp";

type SelectPaymentMethod_TP = {
  name: string;
};
type Formik_Values = {
  name: string;
};
const SelectPaymentMethod = ({ name }: SelectPaymentMethod_TP) => {
  const { setFieldValue } = useFormikContext<Formik_Values>();

  const handleChange = (event: SelectChangeEvent<string | number>) => {
    setFieldValue(name, event.value);
  };

  const options = [
    { label: "نقدي", value: 0 },
    { label: "شيك", value: 1 },
    { label: "اجل", value: 2 },
  ];

  return (
    <SelectComp
      name={name}
      label="طريقة الدفع"
      placeholder="طريقة الدفع"
      options={options}
      onChange={handleChange}
    />
  );
};

export default SelectPaymentMethod;
