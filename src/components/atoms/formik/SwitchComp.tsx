import { Switch } from "@mui/material";

type EditProps_TP = {
    disabled?:boolean
    defaultChecked?:boolean
    name:string
};
export const SwitchComp = ({ disabled , defaultChecked , name }: EditProps_TP) => {
  return (
    <div className="flex items-center  gap-2">
      <Switch disabled={disabled} defaultChecked={defaultChecked} name={name} />
    </div>
  );
};
