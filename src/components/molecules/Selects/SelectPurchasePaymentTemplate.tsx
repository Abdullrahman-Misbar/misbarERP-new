import { useFormikContext } from "formik";
import { useFetch } from "../../../hooks";
import SelectComp from "../../atoms/formik/SelectComp";

type SelectPurchasePaymentTemplate_TP = {
  name: string;
  onChange?:()=>void
};
type Formik_Values = {
  name: string;
};
const SelectPurchasePaymentTemplate = ({
  name,
  onChange
}: SelectPurchasePaymentTemplate_TP) => {
  const { setFieldValue } = useFormikContext<Formik_Values>();

  const handleChange = (event: {value:string}) => {
    setFieldValue(name, event.value);
  };

  const endpoint = "api/PurchasePaymentTemplate/Lookup";
  const { data, isLoading } = useFetch<any>({
    queryKey: [endpoint],
    endpoint: endpoint,
    Module: "PURCHASE",
  });
  //@ts-ignore
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
      onChange={onChange || handleChange}
      isLoading={isLoading}
    />
  );
};

export default SelectPurchasePaymentTemplate;
