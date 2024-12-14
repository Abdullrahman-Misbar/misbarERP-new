
import { useFormikContext } from "formik";
import SelectComp from "../../atoms/formik/SelectComp";

type SelectImpactPortion_TP = {
  name: string;
  label:string
};
type Formik_Values = {
  name: string;
};
const SelectImpactPortion = ({ name  , label }: SelectImpactPortion_TP) => {
  const { setFieldValue } = useFormikContext<Formik_Values>();

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

  return (
    <SelectComp
      name={name}
      label={label}
      placeholder="تاريخ الاستحقاق يعتمد على"
      options={options}
      // value={values[name as keyof Formik_Values] || ""}
      onChange={handleChange}
    />
  );
};

export default SelectImpactPortion;
