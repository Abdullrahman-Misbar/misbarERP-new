import { Helmet } from "react-helmet-async";
import Main from "../../../components/templates/PURCHASE/PurchasReceipt/Main";

type PurchasReceipt_TP = {
  title: string;
};
export default function PurchasReceipt({ title }: PurchasReceipt_TP) {
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
