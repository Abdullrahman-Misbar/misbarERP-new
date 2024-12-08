import { Helmet } from "react-helmet-async";
import Main from "../../../../components/templates/PURCHASE/PurchasReceipt/Add/Main";

type AddPurchasReceipt_TP = {
  title: string;
};
export default function AddPurchasReceipt({ title }: AddPurchasReceipt_TP) {
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
