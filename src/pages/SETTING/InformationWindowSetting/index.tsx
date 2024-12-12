import { Helmet } from "react-helmet-async";
import Main from "../../../components/templates/SETTING/InformationWindow/Main";

type InformationWindowSetting_TP = {
  title: string;
};

function InformationWindowSetting({ title }: InformationWindowSetting_TP) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div>
        <Main />
      </div>
    </>
  );
}

export default InformationWindowSetting;
