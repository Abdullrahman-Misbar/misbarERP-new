import { Helmet } from "react-helmet-async";
import Main from "../../../../components/templates/PURCHASE/PurchaseRequest/AutoComparison/Main";

type AddPurchaseRequest_TP = {
  title: string;
};
export default function AddPurchaseRequest({ title }: AddPurchaseRequest_TP) {
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