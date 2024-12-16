import { useFormikContext } from "formik";
import { useFetch } from "../../hooks";
import BaseInputField from "../atoms/formik/BaseInputField";

type InputGetCode_TP = {
  name: string;
  placeholder:string
  label:string
};

function InputGetCode({ name , placeholder , label }: InputGetCode_TP) {
  const { values, setFieldValue } = useFormikContext<any>();
  const { data } = useFetch({
    endpoint: `${values?.newCodeEndpoint}`,
    queryKey: [`${values?.newCodeEndpoint}`],
    onSuccess: (data) => {
      setFieldValue(name, data?.data);
    },
    Module: "PURCHASE",
  });
  return (
    <div>
      <BaseInputField
        name={name}
        placeholder={placeholder}
        type="text"
        disabled
        label={label}
      />
    </div>
  );
}

export default InputGetCode;
