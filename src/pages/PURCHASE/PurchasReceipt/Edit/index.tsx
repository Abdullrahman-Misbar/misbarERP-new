import { Helmet } from "react-helmet-async";
import Main from "../../../../components/templates/PURCHASE/PurchasReceipt/Add/Main";

type EditPurchasReceipt_TP = {
  title: string;
};
export default function EditPurchasReceipt({ title }: EditPurchasReceipt_TP) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div>
        <Main editable={true} />
      </div>
    </>
  );
}
