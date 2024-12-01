import { Switch } from "@mui/material";

type EditProps_TP = {
    disabled?:boolean
    defaultChecked?:boolean
};
export const SwitchComp = ({ disabled , defaultChecked }: EditProps_TP) => {
  return (
    <div className="flex items-center  gap-2">
      <Switch disabled={disabled} defaultChecked={defaultChecked} />
    </div>
  );
};
