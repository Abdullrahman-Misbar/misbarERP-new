import { useFormikContext } from "formik";
import { useFetch } from "../../../hooks";
import SelectComp from "../../atoms/formik/SelectComp";

type SelectPurchasePaymentTerm_TP = {
  name: string;
  moduleName: string;
  index: number;
  label:string
};
type Formik_Values = {
  name: string;
  moduleName: string;
  index: number;
};
const SelectPurchasePaymentTerm = ({
  name,
  moduleName,
  index,
  label
}: SelectPurchasePaymentTerm_TP) => {
  const { setFieldValue, values } = useFormikContext<Formik_Values>();

  const handleChange = (event: { value: string }) => {
    setFieldValue(name, event.value);
  };

  const endpoint = `api/PurchasePaymentTemplate/${values[moduleName][index]?.invoiceType}`;
  const { data, isLoading } = useFetch<any>({
    queryKey: [endpoint],
    endpoint: endpoint,
    Module: "PURCHASE",
    enabled:!!values[moduleName][index]?.invoiceType
  });
  //@ts-ignore
  const options = data?.data?.paymentTermses?.map((item: any) => ({
    value: item?.paymentTemplateId,
    label: item?.paymentTermName,
  }));

  return (
    <SelectComp
      name={name}
      label={label}
      placeholder="شرط السداد"
      options={options}
      onChange={handleChange}
      isLoading={isLoading}
    />
  );
};

export default SelectPurchasePaymentTerm;
