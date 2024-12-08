import { Helmet } from "react-helmet-async";
import Main from "../../../components/templates/PURCHASE/PurchasQutations/Main";

type PurchasQutations_TP = {
  title: string;
};
export default function PurchasQutations({ title }: PurchasQutations_TP) {
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
