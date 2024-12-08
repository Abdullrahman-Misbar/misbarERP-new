import { Helmet } from "react-helmet-async";
import Main from "../../../../components/templates/PURCHASE/PurchasQutations/Add/Main";

type AddPurchasQutations_TP = {
  title: string;
};
export default function AddPurchasQutations({ title }: AddPurchasQutations_TP) {
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
