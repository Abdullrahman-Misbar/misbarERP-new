/* eslint-disable import/named */
import { useFormikContext } from "formik";
import SelectComp from "../../atoms/formik/SelectComp";

type DistributionMethod_TP = {
  name: string;
};
type Formik_Values = {
  name: string;
};
const DistributionMethod = ({ name }: DistributionMethod_TP) => {
  const { setFieldValue } = useFormikContext<Formik_Values>();

  const handleChange = (event: { value: string }) => {
    setFieldValue(name, event.value);
  };

  const options = [
    { label: "توزيع أ", value: 1 },
    { label: "توزيع ب", value: 0 },
  ];

  return (
    <SelectComp
      name={name}
      label="طريقه التوزيع"
      placeholder="اختر طريقه التوزيع"
      options={options}
      // value={values[name as keyof Formik_Values] || ''}
      // isLoading={isLoading}
      onChange={handleChange}
    />
  );
};

export default DistributionMethod;
