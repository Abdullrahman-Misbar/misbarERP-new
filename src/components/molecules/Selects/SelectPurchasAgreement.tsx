/* eslint-disable import/named */
import { SelectChangeEvent } from "@mui/material";
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

  const handleChange = (event: SelectChangeEvent<string | number>) => {
    setFieldValue(name, event.value);
  };

  const endpoint = "api/PurchasAgreement/Lookup";
  const { data, isLoading, isSuccess, refetch } = useFetch<any>({
    queryKey: [endpoint],
    endpoint: endpoint,
    Module: "PURCHASE",
  });
  const options = data?.data?.map((item: any) => ({
    value: item?.id,
    label: item?.lookupName,
  }));

  return (
    <SelectComp
      name={name}
      label="اتفاقية الشراء"
      placeholder="اختر اتفاقية الشراء"
      options={options}
      isLoading={isLoading}
      // value={values[name as keyof Formik_Values]}
      onChange={handleChange}
    />
  );
};

export default SelectPurchaseAgreement;
