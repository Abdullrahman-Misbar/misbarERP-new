
import { useFormikContext } from "formik";
import SelectComp from "../../atoms/formik/SelectComp";

type SelectAccreditationStatus_TP = {
  name: string;
};
type Formik_Values = {
  name: string;
};
const SelectAccreditationStatus = ({ name }: SelectAccreditationStatus_TP) => {
  const { setFieldValue } = useFormikContext<Formik_Values>();

  const handleChange = (event: {value:string}) => {
    setFieldValue(name, event.value);
  };

  const options = [
    { label: "قيد المعالجة", value: 1 },
    { label: "تم المعالحه", value: 0 },
  ];

  return (
    <SelectComp
      name={name}
      label="حالة الاعتماد"
      placeholder=" اختر حاله الاعتماد"
      options={options}
      // value={values[name as keyof Formik_Values] || ""}
      onChange={handleChange}
    />
  );
};

export default SelectAccreditationStatus;
