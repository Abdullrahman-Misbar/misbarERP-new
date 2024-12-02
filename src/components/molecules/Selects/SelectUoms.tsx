import { SelectChangeEvent } from "@mui/material";
import { useFormikContext } from "formik";
import SelectComp from "../../atoms/formik/SelectComp";

type SelectUoms_TP = {
  name: string;
  disabled?: boolean;
};
type Formik_Values = {
  name: string;
};
const SelectUoms = ({ name, disabled }: SelectUoms_TP) => {
  const { setFieldValue, values } = useFormikContext<Formik_Values>();

  const handleChange = (event: SelectChangeEvent<string | number>) => {
    setFieldValue(name, event.value);
  };

  const options =
  values?.uoms?.map((item: { id: number; lookupName: string  , uoms:string[] }) => ({
    value: item.id,
    label: item.companyCode,
   
  })) || [];


  return (
    <SelectComp
      name={name}
      label=""
      placeholder="اختر وحدة القياس"
      options={options}
      onChange={handleChange}
      disabled={disabled}
    />
  );
};

export default SelectUoms;
