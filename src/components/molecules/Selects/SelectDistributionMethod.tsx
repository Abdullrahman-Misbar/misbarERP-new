/* eslint-disable import/named */
import { useFormikContext } from "formik";
import SelectComp from "../../atoms/formik/SelectComp";

type SelectDistributionMethod_TP = {
  name: string;
};
type Formik_Values = {
  name: string;
};
const SelectDistributionMethod = ({ name , value }: SelectDistributionMethod_TP) => {
  const { setFieldValue , values } = useFormikContext<Formik_Values>();

  const handleChange = (event: { value: string }) => {
    setFieldValue(name, event.value);
  };

  const options = [
    { label: "توزيع أ", value: 0 },
    { label: "توزيع ب", value: 1 },
    { label: "توزيع ج", value: 2 },
  ];
  const selectedValue = options?.find((item) => item?.value == (value || values[name]));

  return (
    <SelectComp
      name={name}
      label="طريقه التوزيع"
      placeholder="اختر طريقه التوزيع"
      options={options}
      value={selectedValue}
      // isLoading={isLoading}
      onChange={handleChange}
    />
  );
};

export default SelectDistributionMethod;
