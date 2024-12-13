
import { useFormikContext } from "formik";
import SelectComp from "../../atoms/formik/SelectComp";

type SelectDiscountRatio_TP = {
  name: string;
  label:string
};
type Formik_Values = {
  name: string;
};
const SelectDiscountRatio = ({ name  , label }: SelectDiscountRatio_TP) => {
  const { setFieldValue } = useFormikContext<Formik_Values>();

  const handleChange = (event: {value:string}) => {
    setFieldValue(name, event.value);
  };

  const options = [
    { label: 'قيمة', value: 0 },
    { label: 'نسبة', value: 1 },


  ];

  return (
    <SelectComp
      name={name}
      label={label}
      placeholder="نوع الخصم"
      options={options}
      // value={values[name as keyof Formik_Values] || ""}
      onChange={handleChange}
    />
  );
};

export default SelectDiscountRatio;
