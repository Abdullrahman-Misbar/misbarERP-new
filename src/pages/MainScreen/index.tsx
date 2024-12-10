import { Helmet } from "react-helmet-async";
import Main from "../../components/templates/MianScreen/Main";

type MainScreen_TP = {
  title: string;
};
export default function MainScreen({ title }: MainScreen_TP) {
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
