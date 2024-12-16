import { styled, Switch } from "@mui/material";
import { useFormikContext } from "formik";

type EditProps_TP = {
  disabled?: boolean;
  defaultChecked?: boolean;
  name: string;
  onChange?: () => void;
};

const CustomSwitch = styled(Switch)(({ theme }) => ({
  margin: "0",
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#3F51B5",
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#3F51B5",
  },
}));

export const SwitchComp = ({
  disabled,
  defaultChecked,
  name,
  onChange,
}: EditProps_TP) => {
  const { setFieldValue } = useFormikContext();
  return (
    <div className="flex items-center !m-0">
      <CustomSwitch
        color="primary"
        disabled={disabled}
        defaultChecked={defaultChecked}
        name={name}
        onChange={
          onChange ? onChange : (e) => setFieldValue(name, e.target.checked)
        }
      />
    </div>
  );
};
