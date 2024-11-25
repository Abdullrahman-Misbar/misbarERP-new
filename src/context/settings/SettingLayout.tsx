import { useOutlet } from "react-router-dom";
import { SettingProvider } from "./SettingProvider";

export const AuthLayout = () => {
  const outlet = useOutlet();

  return <SettingProvider>{outlet}</SettingProvider>;
};
