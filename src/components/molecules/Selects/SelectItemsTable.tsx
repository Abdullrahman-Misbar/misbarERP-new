/* eslint-disable import/named */
import { useFormikContext } from "formik";
import SelectComp from "../../atoms/formik/SelectComp";

type SelectItemsTable_TP = {
  name: string;
};
type Formik_Values = {
  name: string;
};
const SelectItemsTable = ({ name }: SelectItemsTable_TP) => {
  const { setFieldValue } = useFormikContext<Formik_Values>();

  const handleChange = (event: {value:string}) => {
    setFieldValue(name, event.value);
  };

  const options = [
    { label: "طلب شراء", value: "purchase_order" },
    { label: "امر شراء", value: "purchase_request" },
    { label: "عرض سعر", value: "purchase_quotes" },
    { label: "امر استلام", value: "delivery_orders" },
  ];

  return (
    <SelectComp
      name={name}
      label="انزل من"
      placeholder=" انزل من "
      options={options}
      // value={values[name as keyof Formik_Values] || ''}

      onChange={handleChange}
    />
  );
};

export default SelectItemsTable;
