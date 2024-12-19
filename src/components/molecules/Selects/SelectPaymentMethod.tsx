import { useFormikContext } from "formik";
import SelectComp from "../../atoms/formik/SelectComp";

type SelectPaymentMethod_TP = {
  name: string;
  value?:string
};
type Formik_Values = {
  name: string;
};
const SelectPaymentMethod = ({ name , value }: SelectPaymentMethod_TP) => {
  const { setFieldValue , values } = useFormikContext<Formik_Values>();

  const handleChange = (event: {value:string}) => {
    setFieldValue(name, event.value);
  };

  const options = [
    { label: "نقدي", value: 1 },
    { label: "شيك", value: 2 },
    { label: "اجل", value: 3 },
  ];
  const selectedValue = options?.find((item) => item?.value == (value || values[name]));

  return (
    <SelectComp
      name={name}
      label="طريقة الدفع"
      placeholder="طريقة الدفع"
      options={options}
      onChange={handleChange}
      value={selectedValue}
    />
  );
};

export default SelectPaymentMethod;
