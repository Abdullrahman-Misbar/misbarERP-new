import { Switch } from "@mui/material";
import { useFormikContext } from "formik";

type EditProps_TP = {
  disabled?: boolean;
  defaultChecked?: boolean;
  name: string;
};
export const SwitchComp = ({
  disabled,
  defaultChecked,
  name,
}: EditProps_TP) => {
  const { setFieldValue } = useFormikContext();
  return (
    <div className="flex items-center  gap-2">
      <Switch
        disabled={disabled}
        defaultChecked={defaultChecked}
        name={name}
        onChange={(e) => setFieldValue(name, e.target.checked)}
      />
    </div>
  );
};
