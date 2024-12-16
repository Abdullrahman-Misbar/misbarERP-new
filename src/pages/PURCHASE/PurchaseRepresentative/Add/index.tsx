import { Helmet } from "react-helmet-async";
import Main from "../../../../components/templates/PURCHASE/PurchaseRepresentative/Add/Main";

type AddPurchaseRepresentative_TP = {
  title: string;
};
export default function AddPurchaseRepresentative({ title }: AddPurchaseRepresentative_TP) {
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
