
import { useFormikContext } from "formik";
import SelectComp from "../../atoms/formik/SelectComp";

type SelectImpactCost_TP = {
  name: string;
  label:string
};
type Formik_Values = {
  name: string;
};
const SelectImpactCost = ({ name  , label }: SelectImpactCost_TP) => {
  const { setFieldValue } = useFormikContext<Formik_Values>();

  const handleChange = (event: {value:string}) => {
    setFieldValue(name, event.value);
  };

  const options = [
    { label: "التوزيع نسبة وتناسب حسب القيمة", value: 1 },
    { label: "التوزيع نبة وتناسب حسب الكمية", value: 2 },
    { label: "التوزيع يدويا", value: 3 },
    { label: "لايؤثر على التكلفة", value: 4 },


  ];

  return (
    <SelectComp
      name={name}
      label={label}
      placeholder="التأثير على التكلفة"
      options={options}
      // value={values[name as keyof Formik_Values] || ""}
      onChange={handleChange}
    />
  );
};

export default SelectImpactCost;
