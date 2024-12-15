import { Helmet } from "react-helmet-async";
import Main from "../../../../components/templates/PURCHASE/PurchaseAgreement/Add/Main";

type AddPurchaseAgreement_TP = {
  title: string;
};
export default function AddPurchaseAgreement({ title }: AddPurchaseAgreement_TP) {
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
