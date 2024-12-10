import { Helmet } from "react-helmet-async";
import Main from "../../../components/templates/SETTING/LogisticSetting/Main";

type LogisticSetting_TP = {
  title: string;
};

function LogisticSetting({ title }: LogisticSetting_TP) {
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

export default LogisticSetting;
