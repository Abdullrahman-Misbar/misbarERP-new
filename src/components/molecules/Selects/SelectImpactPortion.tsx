
import { useFormikContext } from "formik";
import SelectComp from "../../atoms/formik/SelectComp";

type SelectImpactPortion_TP = {
  name: string;
  label:string
  value?:string
};
type Formik_Values = {
  name: string;
};
const SelectImpactPortion = ({ name  , label  , value   }: SelectImpactPortion_TP) => {
  const { setFieldValue , values } = useFormikContext<Formik_Values>();

  const handleChange = (event: {value:string}) => {
    setFieldValue(name, event.value);
  };

  const options = [
    { label: 'الدفع نقداً', value: 0 },
    { label: 'الاستحقاق في تاريخ محدد', value: 1 },
    { label: 'الاستحقاق خلال عدد الايام', value: 2 },
    { label: 'الاستحقاق عند خلال الشهر الحالي', value: 3 },
    { label: 'الاستحقاق عند نهاية الشهر الحالي', value: 4 },


  ];
  const selectedValue = options?.find((item) => item?.value == (value || values[name]));

  return (
    <SelectComp
      name={name}
      label={label}
      placeholder="تاريخ الاستحقاق يعتمد على"
      options={options}
      value={selectedValue}
      onChange={handleChange}
    />
  );
};

export default SelectImpactPortion;
