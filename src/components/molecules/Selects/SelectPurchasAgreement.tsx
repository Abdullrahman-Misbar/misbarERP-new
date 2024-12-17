/* eslint-disable import/named */
import { useFormikContext } from "formik";
import { useFetch } from "../../../hooks";
import SelectComp from "../../atoms/formik/SelectComp";

type SelectPurchaseAgreement_TP = {
  name: string;
};
type Formik_Values = {
  name: string;
};
const SelectPurchaseAgreement = ({ name }: SelectPurchaseAgreement_TP) => {
  const { setFieldValue, values } = useFormikContext<Formik_Values>();

  const handleChange = (event: { value: string }) => {
    setFieldValue(name, event.value);
  };

  const endpoint = "api/PurchaseAgreement/GetAll";
  const { data, isLoading } = useFetch<any>({
    queryKey: [endpoint],
    endpoint: endpoint,
    Module: "PURCHASE",
  });

  //@ts-ignore
  const options = data?.data.data?.map((item: any) => ({
    value: item?.id,
    label: item?.typeName,
  }));
  const selectedValue = options?.find((item) => item?.value == values[name]);

  return (
    <SelectComp
      name={name}
      label="اتفاقية الشراء"
      placeholder="اختر اتفاقية الشراء"
      options={options}
      isLoading={isLoading}
      value={selectedValue}
      // value={values[name as keyof Formik_Values]}
      onChange={handleChange}
    />
  );
};

export default SelectPurchaseAgreement;
