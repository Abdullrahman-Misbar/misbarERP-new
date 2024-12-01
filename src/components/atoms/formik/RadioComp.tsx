import Radio from "@mui/material/Radio";
import { useFormikContext } from "formik";
import { Label } from "./Label";

type RadioButtons_TP = {
  name: string;
  label: string;
  onChange: () => void;
  checked?: boolean;
};
type values_TP = {
  name: string;
};
export default function RadioButtons({
  name,
  label,
  onChange,
  checked,
}: RadioButtons_TP) {
  const { values } = useFormikContext<values_TP>();

  return (
    <div className="flx ">
      <Radio
        checked={checked}
        onChange={onChange}
        value={values[name]}
        name={name}
        inputProps={{ "aria-label": "A" }}
      />
      <Label htmlFor="">{label}</Label>
    </div>
  );
}
