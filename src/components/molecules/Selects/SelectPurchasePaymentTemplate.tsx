import { SelectChangeEvent } from "@mui/material";
import { useFormikContext } from "formik";
import SelectComp from "../../atoms/formik/SelectComp";
import { useFetch } from "../../../hooks";

type SelectPurchasePaymentTemplate_TP = {
  name: string;
};
type Formik_Values = {
  name: string;
};
const SelectPurchasePaymentTemplate = ({
  name,
}: SelectPurchasePaymentTemplate_TP) => {
  const { setFieldValue } = useFormikContext<Formik_Values>();

  const handleChange = (event: SelectChangeEvent<string | number>) => {
    setFieldValue(name, event.value);
  };

  const endpoint = "PurchasePaymentTemplate/Lookup";
  const { data, isLoading } = useFetch<any>({
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
      label="قالب شروط السداد"
      placeholder="قالب شروط السداد"
      options={options}
      onChange={handleChange}
      isLoading={isLoading}
    />
  );
};

export default SelectPurchasePaymentTemplate;
