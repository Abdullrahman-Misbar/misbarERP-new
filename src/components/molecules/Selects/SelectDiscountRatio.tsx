
import { useFormikContext } from "formik";
import SelectComp from "../../atoms/formik/SelectComp";

type SelectDiscountRatio_TP = {
  name: string;
  label:string
  value?:string
};
type Formik_Values = {
  name: string;
};
const SelectDiscountRatio = ({ name  , label , value }: SelectDiscountRatio_TP) => {
  const { setFieldValue , values } = useFormikContext<Formik_Values>();
  const handleChange = (event: {value:string}) => {
    setFieldValue(name, event.value);
  };

  const options = [
    { label: 'قيمة', value: 0 },
    { label: 'نسبة', value: 1 },


  ];
  const selectedValue = options?.find((item) => item?.value == (value || values[name] || 0));

  return (
    <SelectComp
      name={name}
      label={label}
      placeholder="نوع الخصم"
      options={options}
      value={selectedValue}
      onChange={handleChange}
    />
  );
};

export default SelectDiscountRatio;
