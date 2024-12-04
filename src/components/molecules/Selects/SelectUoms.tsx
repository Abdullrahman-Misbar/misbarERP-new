import { useFormikContext } from "formik";
import SelectComp from "../../atoms/formik/SelectComp";

type SelectUoms_TP = {
  name: string;
  disabled?: boolean;
};
type Formik_Values = {
  name: string;
  uoms: [];
};
const SelectUoms = ({ name, disabled }: SelectUoms_TP) => {
  const { setFieldValue, values } = useFormikContext<Formik_Values>();

  const handleChange = (event: { value: string }) => {
    setFieldValue(name, event.value);
  };

  const options =
    values?.uoms?.map(
      (item: { id: number; companyCode: string; uom: string[] }) => ({
        value: item.id,
        label: item.uom?.uomName,
      })
    ) || [];

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
