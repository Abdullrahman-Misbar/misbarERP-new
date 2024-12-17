import { Helmet } from "react-helmet-async";
import Main from "../../../../components/templates/PURCHASE/PurchaseAgreementsType/Add/Main";
type AddPurchaseAgreementsType_TP = {
  title: string;
};
export default function AddPurchaseAgreementsType({ title }: AddPurchaseAgreementsType_TP) {
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
