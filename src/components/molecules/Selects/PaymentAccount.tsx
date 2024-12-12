import { useFormikContext } from "formik";
import SelectComp from "../../atoms/formik/SelectComp";

type PaymentAccount_TP = {
  name: string;
};
type Formik_Values = {
  name: string;
};
const PaymentAccount = ({ name }: PaymentAccount_TP) => {
  const { setFieldValue } = useFormikContext<Formik_Values>();

  const handleChange = (event: { value: string }) => {
    setFieldValue(name, event.value);
  };

  const options = [
    { label: " حاله1", value: 0 },
    { label: " حاله2", value: 1 },
    { label: " حاله 3", value: 2 },
  ];

  return (
    <SelectComp
      name={name}
      label=" حساب الدفع"
      placeholder="حساب الدفع "
      options={options}
      onChange={handleChange}
    />
  );
};

export default PaymentAccount;
