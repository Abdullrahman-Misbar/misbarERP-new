import { SelectChangeEvent } from "@mui/material";
import { useFormikContext } from "formik";
import SelectComp from "../../atoms/formik/SelectComp";

type SelectNotification_TP = {
  name: string;
};
type Formik_Values = {
  name: string;
};

const SelectNotification = ({ name }: SelectNotification_TP) => {
  const { setFieldValue } = useFormikContext<Formik_Values>();

  const handleChange = (event: SelectChangeEvent<string | number>) => {
    setFieldValue(name, event.value);
  };

  const options = [
    { label: "اشعارات الدائنة", value: 1 },
    { label: "اشعارات المدينة", value: 0 },
  ];

  return (
    <SelectComp
      name={name}
      label="سبب الاشعار"
      placeholder="اختر اشعار"
      options={options}
      onChange={handleChange}
    />
  );
};

export default SelectNotification;
