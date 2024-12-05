import { useFormikContext } from "formik";
import SelectComp from "../../atoms/formik/SelectComp";

type SelectUoms_TP = {
  name: string;
  disabled?: boolean;
  value?: string;
  moduleName?: string;
  index: String;
};
type Formik_Values = {
  name: string;
  uoms: [];
};
const SelectUoms = ({
  name,
  disabled,
  value,
  moduleName,
  index,
}: SelectUoms_TP) => {
  const { setFieldValue, values } = useFormikContext<Formik_Values>();

  const handleChange = (event: { value: string }) => {
    setFieldValue(name, event.value);
  };

  const options =
    values[moduleName][index]?.uoms?.map(
      (item: { id: number; companyCode: string; uomName: string }) => ({
        value:item?.uom?.uomName ? item?.uom?.id :  item?.id,
        label: item?.uomName || item?.uom?.uomName,
      })
    ) || [];
  const selectedValue = options?.find(
    (item) => item?.value == (value || values[name])
  );

  return (
    <SelectComp
      name={name}
      label=""
      placeholder="اختر وحدة القياس"
      options={options}
      //@ts-ignore
      value={selectedValue}
      onChange={handleChange}
      disabled={disabled}
    />
  );
};

export default SelectUoms;
